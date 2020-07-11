import React from "react";
import NextNprogress from "nextjs-progressbar";

const DefaultLoading = () => {
  return (
    <NextNprogress
      color="#29D"
      startPosition={100}
      stopDelayMs={300}
      height="900px"
    />
  );
};

export default DefaultLoading;
