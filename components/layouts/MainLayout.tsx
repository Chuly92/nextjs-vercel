import Head from 'next/head';
import Link from 'next/link';
import { Navbar } from '../Navbar';
import styles from './MainLayout.module.css';
import {FC, ReactNode} from 'react';

type Props = {
  children: ReactNode;
};

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Chuly</title>
        <meta name="description" content="Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>

        {/* //code */}
        {children}


      </main>
    </div>
  )
}
