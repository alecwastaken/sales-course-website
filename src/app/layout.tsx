import type { Metadata } from "next";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sales Course Website",
  description: "Phase 1 foundation for the sales course website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="site-shell antialiased">
        <div className="site-frame">
          <Navbar />
          <main className="site-main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
