// app/ClientLayout.jsx (Client Component)
"use client";

import { usePathname } from "next/navigation";
import Header from "./compunents/layout/header/Header.jsx";
import Footer from "./compunents/layout/footer/Footer.jsx";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const noLayoutRoutes = ["/signUp", "/postpage"];
  const hideLayout = noLayoutRoutes.includes(pathname);

  return (
    <>
      {!hideLayout && <Header />}
      <main>{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
}
