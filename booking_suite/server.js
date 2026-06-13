// ═══════════════════════════════════════════════════
// Casa del Bosque Tayrona — Stripe Checkout Backend
// Deploy to Railway.app
// Environment variable required: STRIPE_SECRET_KEY
// ═══════════════════════════════════════════════════

const express = require('express');
const cors    = require('cors');
const stripe  = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ── Health check ─────────────────────────────────
app.get('/', (req, res) => {
  res.json({ status: 'ok', property: 'Casa del Bosque Tayrona' });
});

// ── Create Stripe Checkout Session ───────────────
app.post('/create-checkout-session', async (req, res) => {
  try {
    const {
      roomName,
      checkin,
      checkout,
      guests,
      nights,
      totalCOP,       // total amount in COP (integer)
      successUrl,     // where to redirect after payment
      cancelUrl       // where to redirect if cancelled
    } = req.body;

    // Basic validation
    if (!roomName || !checkin || !checkout || !totalCOP) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'cop',
            unit_amount: Math.round(totalCOP), // COP has no decimals
            product_data: {
              name: `Casa del Bosque Tayrona — ${roomName}`,
              description: `Check-in: ${checkin} · Check-out: ${checkout} · ${nights} night(s) · ${guests} · Breakfast included`,
              images: ['https://casadelbosquetayrona.com/images/hero.webp'],
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        room:     roomName,
        checkin:  checkin,
        checkout: checkout,
        guests:   guests,
        nights:   String(nights),
        discount: '10% direct booking',
      },
      success_url: successUrl || 'https://casadelbosquetayrona.com/booking_suite/booking-system-stripe-test.html?payment=success',
      cancel_url:  cancelUrl  || 'https://casadelbosquetayrona.com/booking_suite/booking-system-stripe-test.html?payment=cancelled',
    });

    res.json({ url: session.url });

  } catch (err) {
    console.error('Stripe error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// ── Stripe Webhook (optional but recommended) ────
app.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
  const sig    = req.headers['stripe-signature'];
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) return res.json({ received: true });

  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, secret);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const m       = session.metadata;
    console.log(`✅ PAID — ${m.room} | ${m.checkin} → ${m.checkout} | ${session.amount_total} COP`);
  }

  res.json({ received: true });
});

app.listen(PORT, () => {
  console.log(`🌿 Casa del Bosque server running on port ${PORT}`);
});
