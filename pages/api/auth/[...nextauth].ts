import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      // @ts-ignore
      async authorize(credentials, req) {
        const user = {
          id: 1,
          name: 'J Smith',
          email: 'jsmith@example.com',
          image: 'https://avatars.githubusercontent.com/u/10551599?v=4'
        };
        return user
      }
    })
  ]
};

export default NextAuth(authOptions);
