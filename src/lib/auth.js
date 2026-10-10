
import { betterAuth } from "better-auth";
import { jwt } from "better-auth/plugins";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("Amar-Farme");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    },
  },

  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "buyer",
      },

      plan: {
        type: "string",
        defaultValue: "free",
      },
    },
  },

  session: {
    expiresIn: 7 * 24 * 60 * 60,

    updateAge: 24 * 60 * 60,

    cookieCache: {
      enabled: true,
      strategy: "jwt",

      // Cache অনেকক্ষণ পুরোনো না রাখার জন্য
      maxAge: 5 * 60,
    },
  },

  plugins: [
    jwt({
      sessionCookieCache: true,
    }),
  ],
});
