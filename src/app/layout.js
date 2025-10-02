import "../style/globals.css";
import {ThemeProvider} from "next-themes";
import SiteLayout from "./layouts/SiteLayout";

export const metadata = {
  title: "HERI HERMANSYAH - PORTFOLIO",
  description: "PORTFOLIO FRONTEND WEB DEVELOPER",
};

export default function RootLayout({children}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen" id="home">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SiteLayout>{children}</SiteLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
