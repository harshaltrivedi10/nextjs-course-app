import React from "react";
import Link from "next/link";
const Page = () => (
  <div>
    <h1>Notes Index Page</h1>
    <a>
      <Link href="/notes/[id]" as={`/notes/1`}>
        For Note 1
      </Link>
    </a>
  </div>
);

export default Page;
