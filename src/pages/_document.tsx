import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body id='body'>
      <div id='modal-root' />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}