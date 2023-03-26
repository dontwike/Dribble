import Head from 'next/head'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { getSession } from "next-auth/react";
import Login from '@/components/Login';
import Feed from '@/components/Feed';
import RightSidebar from '@/components/RightSidebar';
import LoginPage from '@/components/LoginPage';

export default function Home({ session }) {
  if (!session) return <Login />;
  return (
    <>
      <Head>
        <title>Dribble</title>
      </Head>
      <Header />
      <main className="flex bg-grey-100">
        {/* LeftSidebar */}
        <Sidebar/>
        {/* Feed */}
        <Feed/>
        {/* RightSidebar */}
        <RightSidebar />
      </main>
    </>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  }
}