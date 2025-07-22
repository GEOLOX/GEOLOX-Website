import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/logo.svg" />
        <meta name="theme-color" content="#1e3a8a" />
        <meta name="description" content="Veridian Dynamics: Engineering the Future Since 1984" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Merriweather:wght@700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 