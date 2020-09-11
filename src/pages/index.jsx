import React from "react";
import Link from "next/link";

const Page = () => (
  <div>
    <h1>Index Page</h1>
    <a>
      <Link href="/notes">Notes</Link>
    </a>
  </div>
);

export default Page;
