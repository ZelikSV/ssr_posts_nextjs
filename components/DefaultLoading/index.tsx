import React from 'react';
import NextNprogress from 'nextjs-progressbar';

const DefaultLoading = () => (
  <div>
    <NextNprogress
      color="#00c1ff"
      height={10}
      nonce="my-nonce"
      showOnShallow
      startPosition={0}
      stopDelayMs={300}
      options={{ easing: 'ease', speed: 500 }}
    />
  </div>
);

export default DefaultLoading;
