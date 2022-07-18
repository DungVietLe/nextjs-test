import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <h1>HOME PAGE</h1>
      <Link href={"/products"}>
        <a>Go to List Products</a>
      </Link>
    </>
  );
};

export default Home;
