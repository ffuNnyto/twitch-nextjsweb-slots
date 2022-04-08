import NextAuth from "next-auth"
import TwitchProvider from "next-auth/providers/twitch"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "./../../../lib/mongodb/mongodb"




export default async function auth(req, res) {
    const options = {
        site: process.env.NEXTAUTH_URL,
        providers: [
            TwitchProvider({
                clientId: process.env.TWITCH_CLIENT,
                clientSecret: process.env.TWITCH_SECRET,
                authorization: { params: { scope: 'openid user:read:email' } }

            })
        ],
        secret: process.env.SECRET,
        jwt: {
            secret: process.env.SECRET
        },
        session: { jwt: true },
        adapter: MongoDBAdapter(clientPromise),
        database: process.env.MONGODB_URI,
        callbacks: {
            async jwt({ token, user, account, profile, isNewUser }) {
                return token;
            },
            async session({ session, token, user }) {
                session.user.points = user.points;
                session.user.mod = user.mod;
                return session;
            },
            async signIn({ user, account, profile, email, credentials }) {
                user.points = 0;
                user.mod = false;
                return true;
            }
        }

    }

    return await NextAuth(req, res, options);

}