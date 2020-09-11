import React from "react";
import { useRouter, withRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  // id is the name of the file
  const { params } = router.query;

  return <h1>Note: {params}</h1>;
};

export default Page;
