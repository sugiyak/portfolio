import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
          <link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,300&display=swap" rel="stylesheet"/>
      </Head>
      <body className='gloabalBackground'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
