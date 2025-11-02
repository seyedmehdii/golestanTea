"use client";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Head from "next/head";

const ClientLayout = ({ children }) => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      const header = document.querySelector("header");
      if (header) setHeaderHeight(header.offsetHeight);
    };

    updateHeight(); 
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header />
      {/* فاصله از بالا برای جلوگیری از هم‌پوشانی */}
      <main
        className="w-full max-w-[1920px] mx-auto"
        style={{ paddingTop: `${headerHeight}px` }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default ClientLayout;
