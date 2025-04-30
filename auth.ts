import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_ID as string,
      clientSecret: process.env.AUTH_GITHUB_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user: { name, email, image }, profile }) {
      const githubId = profile?.id?.toString();

      const existingUser = await prisma.user.findUnique({
        where: { githubId },
      });

      if (!existingUser) {
        await prisma.user.create({
          data: {
            githubId,
            name: name || "",
            username: profile.login || "",
            email: email || "",
            image: image || "",
            bio: profile.bio || "",
          },
        });
      }

      return true;
    },

    async jwt({ token, account, profile }) {
      if (account && profile) {
        const githubId = profile.id.toString();

        const user = await prisma.user.findUnique({
          where: { githubId },
        });

        if (user) {
          token.id = user.id;
        }
      }

      return token;
    },

    async session({ session, token }) {
      if (token?.id) {
        session.id = token.id;
      }
      return session;
    },
  },
});
