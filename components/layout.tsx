import Head from "next/head";
import styles from "../styles/layout.module.css";
import Header from './header';
import Footer from './footer';
import { PropsWithChildren } from 'react';


export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className={styles.gridContainer}>
        <Head>
          <meta name="description" content="Portofolio website by Kei Sugiyama." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className={styles.mainFlexContainer}>{ children }</main>
        <Footer />
    </div>
  )
}