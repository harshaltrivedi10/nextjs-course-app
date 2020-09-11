import React from "react";
import Link from "next/link";
import styles from "../styles.module.css";

const Page = () => (
  <div>
    <h1>Index Page</h1>
    <a className={styles.link}>
      <Link href="/notes">Notes</Link>
    </a>
  </div>
);

export default Page;
