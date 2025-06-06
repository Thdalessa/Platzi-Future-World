import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "@/components/shared/Header/Header";
import Footer from "@/components/shared/Footer/Footer";
import "@/sass/globals.scss";

const roboto = Roboto({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Future world",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
