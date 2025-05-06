// import type { Core } from '@strapi/strapi';

// export default {
//   /**
//    * An asynchronous register function that runs before
//    * your application is initialized.
//    *
//    * This gives you an opportunity to extend code.
//    */
//   register(/* { strapi }: { strapi: Core.Strapi } */) {},

//   /**
//    * An asynchronous bootstrap function that runs before
//    * your application gets started.
//    *
//    * This gives you an opportunity to set up your data model,
//    * run jobs, or perform some special logic.
//    */
//   bootstrap(/* { strapi }: { strapi: Core.Strapi } */) {},

// };

export default ({ strapi }) => {
  // Register the service
  strapi.service("api::payment.stripe", () =>
    require("./services/stripe")({ strapi })
  );

  // Register the controller
  strapi.controller("api::payment.payment", () =>
    require("./controllers/payment")({ strapi })
  );

  // Register routes
  strapi.route(require("./routes/payment").default);
};
