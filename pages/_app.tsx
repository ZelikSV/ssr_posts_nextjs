import { FC } from 'react';
import type { AppProps } from 'next/app';

import '../styles/globals.css';

import DefaultLoading from '../components/DefaultLoading';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultLoading />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
