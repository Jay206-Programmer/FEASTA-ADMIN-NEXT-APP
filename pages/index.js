import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>FEASTA</title>
      </Head>
      <div
        className="d-flex justify-content-center"
        style={{ height: "100vh", textAlign: "center" }}
      >
        <div className="spinner-grow text-light" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
}
