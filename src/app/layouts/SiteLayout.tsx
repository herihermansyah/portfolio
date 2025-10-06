// components/layouts/SiteLayout.tsx
"use client";

import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import MenuList from "@/components/navigation/MenuList";
import {menuData} from "@/data/menu";
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

export default function SiteLayout({
  children,
}: Readonly<{children: React.ReactNode}>) {
  const {theme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="sticky top-0 z-50 bg-headerLight" />;
  }

  return (
    <>
      <div
        className={`sticky top-0 z-50 ${
          theme === "dark" ? "bg-headerDark" : "bg-headerLight"
        }`}
      >
        <Header />
      </div>

      <main className="flex-grow">
        {children}
        <div
          className={`${theme === "dark" ? "bg-footerDark" : "bg-footerLight"}`}
        >
          <Footer />
        </div>
      </main>

      <div
        className={`sticky bottom-0 z-50 ${
          theme === "dark" ? "bg-footerDark" : "bg-footerLight"
        }`}
      >
        <MenuList
          data={menuData}
          title={(item) => item.title}
          icon={(item) => <item.icon />}
          path={(item) => item.path}
          ulClass="grid grid-cols-5 py-3 capitalize text-white md:hidden"
          aClass="flex flex-col gap-1 items-center"
          iconClass="text-2xl"
        />
      </div>
    </>
  );
}
