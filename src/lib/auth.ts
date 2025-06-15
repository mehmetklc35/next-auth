import NextAuth, { type NextAuthOptions } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";
import { getServerSession } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: process.env.AUTH0_ISSUER,
    }),
  ],
  callbacks: {
    async jwt({ token, profile }) {
      const namespace = "https://yourapp.com";

      const rawRoles = (profile as Record<string, unknown>)?.[
        `${namespace}/roles`
      ];

      if (Array.isArray(rawRoles)) {
        const firstRole = rawRoles[0];
        if (typeof firstRole === "string") {
          token.role = firstRole;
        }
      }

      return token;
    },

    async session({ session, token }) {
      if (session.user && typeof token.role === "string") {
        session.user.role = token.role;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const auth = () => getServerSession(authOptions);

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
