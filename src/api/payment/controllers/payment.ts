export default ({ strapi }) => ({
  async create(ctx) {
    const { amount, currency = "usd" } = ctx.request.body;

    try {
      const paymentIntent = await strapi
        .service("api::payment.stripe")
        .createPaymentIntent(amount, currency);

      return { clientSecret: paymentIntent.client_secret! };
    } catch (err) {
      ctx.throw(500, "Failed to create payment intent");
    }
  },
});
