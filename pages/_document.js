import { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document() {
  render() {
    render(
      <Html lang="en">
        <Head />
        <body>
          <div id="overlays" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
