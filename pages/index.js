import Head from 'next/head'
import Image from 'next/image'
import styles from './../styles/Home.module.css'
import { useSession, signIn, signOut } from "next-auth/react"
import TopBar from '../components/topbar';
import Stream from './twitch/embed'
import Followers from './../components/followers';

export default function Home() {

  const { data: session, status } = useSession();

  return (
    <>
      <TopBar session={session} />
      <Followers/>
      <Stream />
    </>
  );
}
