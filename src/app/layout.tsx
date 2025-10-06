import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "../style/globals.css";
import SiteLayout from "./layouts/SiteLayout";
import {ThemeProvider} from "next-themes";

const fontPoppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "HERI HERMANSYAH - FRONTEND WEB DEVELOPER",
  description: "FRONTEND WEB DEVELOPER",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        id="home"
        className={`${fontPoppins.className} antialiased flex flex-col min-h-screen`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SiteLayout>{children}</SiteLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
