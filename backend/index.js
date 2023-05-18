const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51MwW2YKqLFfv80mnKqfe0Wb52NPtxT6tjyQKpL0PGC4ubBEpj2gjTsTptbPozhA7TDKbpACQhlxa1c62TYl4kQt800y5j81RXA'); // Replace with your Stripe secret key

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Endpoint to process payments
app.post('/api/payment', async (req, res) => {
  const { amount, token } = req.body;
  stripe.paymentMethods.create(
    {
      type: 'card',
      card: {
        token: token.card.token,
      },
    },
    async function(err, paymentMethod) {
      if (err) {
        console.log(err);
        // Handle error
      } else {
        console.log(paymentMethod);

        try {
          const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
            payment_method_types: ['card'],
            payment_method: paymentMethod.id,
            confirm: true
          });
          res.status(200).json({ paymentIntent });
        } catch (error) {
          console.log(error);
          res.status(500).json({ error: 'Error creating payment intent' });
        }

        // PaymentMethod created successfully
      }
    }
  );
 
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
