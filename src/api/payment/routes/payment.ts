export default {
  routes: [
    {
      method: "POST",
      path: "/payments/create-intent",
      handler: "payment.create",
      config: {
        auth: false, // Public endpoint
        policies: [],
        middlewares: [],
      },
    },
  ],
};
