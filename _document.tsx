// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Main, NextScript } from 'next/document';
import Head from 'next/head';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,400;1,423&display=swap"
            rel="stylesheet"
          />
          <title>Test Next JS</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
