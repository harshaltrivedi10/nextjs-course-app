// special page to add global css, css files that aren't modules.absolute
import React from "react";
import "../styles.css";
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
