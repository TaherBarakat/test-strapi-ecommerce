import { Core } from "@strapi/types";

declare module "@strapi/types" {
  export module Core {
    interface Services {
      "api::payment.stripe": {
        createPaymentIntent: (
          amount: number,
          currency?: string
        ) => Promise<{
          client_secret: string;
        }>;
      };
    }
  }
}
