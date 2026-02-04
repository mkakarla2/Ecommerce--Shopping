//[domain]/.netlify/functions/create-payment-intent

require('dotenv').config()

const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY)

exports.handler = async function (event, context) {
  if (!process.env.REACT_APP_STRIPE_SECRET_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        msg: 'Missing REACT_APP_STRIPE_SECRET_KEY in environment. Set it in .env or the shell before running.',
      }),
    }
  }
  // if there's event.body object then it's a POST request, otherwise it's a GET request
  if (event.body) {
    const { cart } = JSON.parse(event.body)

    // take the advice of calculating total amount on server instead of on client
    const calculateTotal = cart => {
      const sum = cart.reduce((total, cartItem) => {
        const { price, amount } = cartItem
        return total + amount * price
      }, 0)
      return sum
    }

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(calculateTotal(cart) * 100),
        currency: 'usd',
        automatic_payment_methods: {
          enabled: true,
        },
      })

      return {
        statusCode: 200,
        body: JSON.stringify({
          clientSecret: paymentIntent.client_secret,
          amount: paymentIntent.amount,
        }),
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ msg: error.message }),
      }
    }
  } else {
    // if there's no event.body, then it's a GET request
    return {
      statusCode: 200,
      body: 'create-payment-intent',
    }
  }
}
