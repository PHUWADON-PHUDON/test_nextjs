import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID1 || "",
      clientSecret: process.env.GOOGLE_SECRET1 || "",
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
