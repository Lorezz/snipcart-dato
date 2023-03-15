import "./globals.css";
import "./snipcart.css";
import Script from "next/script";
import NavBar from "../components/navBar";
import Footer from "../components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.4.1/default/snipcart.css"
        />
      </head>
      <body>
        <header>
          <NavBar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
        <div
          hidden
          id="snipcart"
          data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY}
          data-config-modal-style="side"
        />
      </body>
      <Script
        id="snipcart-script"
        src="https://cdn.snipcart.com/themes/v3.4.1/default/snipcart.js"
      />
      <Script
        id="snipcart-config"
        dangerouslySetInnerHTML={{
          __html: `window.SnipcartSettings = {
          publicApiKey: "${process.env.NEXT_PUBLIC_SNIPCART_API_KEY}",
          loadStrategy: "on-user-interaction",
        };`,
        }}
      />
    </html>
  );
}
