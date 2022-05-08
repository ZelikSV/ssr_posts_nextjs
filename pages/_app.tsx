import { FC } from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { useStore } from '../store';
import '../styles/globals.css';
import DefaultLoading from '../components/DefaultLoading';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <DefaultLoading />
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
