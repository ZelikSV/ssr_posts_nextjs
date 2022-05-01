import React from "react";
import NextNprogress from "nextjs-progressbar";

const DefaultLoading = () => {
  return (
    <NextNprogress
      color="#29D"
      height={900}
      nonce="my-nonce"
      showOnShallow={true}
      startPosition={100}
      stopDelayMs={300}
     options={{ easing: "ease", speed: 500 }}/>
  );
};

export default DefaultLoading;
