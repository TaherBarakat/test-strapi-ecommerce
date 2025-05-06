import Stripe from "stripe";

export default ({ strapi }) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-03-31.basil",
  });

  return {
    async createPaymentIntent(amount: number, currency: string = "usd") {
      try {
        return await stripe.paymentIntents.create({
          amount: Math.round(amount * 100), // Convert to cents
          currency,
        });
      } catch (err) {
        strapi.log.error("Stripe error:", err);
        throw err;
      }
    },
  };
};
