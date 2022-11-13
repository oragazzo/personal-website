import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="theme-color" content="#050505" />

        <link
          href="https://cdn.oragazzo.com/BL/BLMelody-Bold.otf"
          rel="stylesheet"
        />
        <link
          href="https://cdn.oragazzo.com/BL/BLMelody-Book.otf"
          rel="stylesheet"
        />
        <link
          href="https://cdn.oragazzo.com/BL/BLMelody-ExtraLight.otf"
          rel="stylesheet"
        />
        <link
          href="https://cdn.oragazzo.com/BL/BLMelody-Light.otf"
          rel="stylesheet"
        />
        <link
          href="https://cdn.oragazzo.com/BL/BLMelody-Medium.otf"
          rel="stylesheet"
        />
        <link
          href="https://cdn.oragazzo.com/BL/BLMelody-Regular.otf"
          rel="stylesheet"
        />
        <link
          href="https://cdn.oragazzo.com/BL/BLMelody-SemiBold.otf"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
