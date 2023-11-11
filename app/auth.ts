import NextAuth, { User } from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials"

export const { handlers: { GET, POST }, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const user = {
          name: "John Doe",
          email: "john@example.com",
          image: "https://via.placeholder.com/150",
        } as User

        return user
      },
    }),
  ],
  pages: {
    signIn: '/sign-in'
  }
});
