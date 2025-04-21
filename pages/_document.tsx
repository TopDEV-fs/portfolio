import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import * as React from 'react';
import { ServerStyleSheet } from 'styled-components';
import { FULL_NAME, JOB_TITLE } from '../config/config';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700;900&display=swap"
            rel="stylesheet"
          />

          <link rel="icon" href="/logo.png" />
          <link rel="apple-touch-icon" href="/logo.png" />
          <link rel="manifest" href="/app.webmanifest" />

          <meta property="og:title" content={FULL_NAME} />
          <meta name="author" content={FULL_NAME} />
          <meta property="og:locale" content="en_US" />
          <meta
            name="description"
            content={`${FULL_NAME} | ${JOB_TITLE} | Portfolio`}
          />
          <meta
            property="og:description"
            content={`${FULL_NAME} | ${JOB_TITLE} | Portfolio`}
          />

          <meta property="og:url" content="https://www.vovacodes.ca/" />
          <meta property="og:site_name" content="vovacodes" />
          <script src="/init-sw.js" defer></script>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
