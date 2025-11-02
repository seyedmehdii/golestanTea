import "./globals.css";
import ReduxProvider from "./providers/ReduxProvider";
import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "صفحه اصلی - وب سایت رسمی شرکت گلستان | golestan",
  description: "A modern web app built with Next.js",
  icons: {
    icon: "/Golestan-Logo.png",
    apple: "/Golestan-Logo.png",
  },
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        {/*  لینک مستقیم به manifest داخل public */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Golestan" />
      </head>

      <body className="overflow-x-hidden overflow-y-auto w-full text-white min-h-screen">
        <ReduxProvider>
          <ClientLayout>{children}</ClientLayout>
        </ReduxProvider>
      </body>
    </html>
  );
}
