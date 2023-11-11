import NextAuth from 'next-auth'
import LnurlProvider from 'nextauth-lnurl'

export default NextAuth({
  providers: [
    LnurlProvider({
      clientId: process.env.LNURL_CLIENT_ID,
      clientSecret: process.env.LNURL_CLIENT_SECRET,
      name: 'LNURL',
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken
      return session
    },
  },
})
