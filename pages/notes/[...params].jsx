import React from "react";
import { useRouter, withRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  // params is the array of dynamic route components
  // eg: /notes/1/2/3 => params = [1, 2, 3] see the console log result for vuewing this result.
  const { params } = router.query;
  console.log(params);
  return <h1>Note: {params}</h1>;
};

export default Page;
