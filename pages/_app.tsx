import React from "react";
import DefaultLoading from "../components/DefaultLoading/DeafultLoading";

import "antd/dist/antd.css";
import "./index.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultLoading />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
