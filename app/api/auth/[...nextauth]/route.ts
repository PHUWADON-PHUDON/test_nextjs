import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: "331449007070-vmrhj8ne76a6noecum832gmqoqdfqerq.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
