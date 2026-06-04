import "@/app/styles/app.scss";
import "@/app/styles/site-animations.scss";
import Header from "@/app/components/header";
import Footer from "@/app/components/Footer";
import GlobalFixedbtns from "@/app/components/GlobalFixedbtns";
import SiteAnimations from "@/app/components/SiteAnimations";
import SiteBreadcrumb from "@/app/components/SiteBreadcrumb";
import Script from "next/script";
export const metadata = {
  title: "Royal Sports Fitness",
  description: "Royal Sports n Fitness",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={"anonymous"}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5752JMW5');
          `}
        </Script>
      </head>
      <body className={``}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5752JMW5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <SiteAnimations />
        <Header />
        <SiteBreadcrumb />
        {children}

        <Footer />
        <GlobalFixedbtns />
        <script src="https://elfsightcdn.com/platform.js" async></script>
      </body>
    </html>
  );
}
