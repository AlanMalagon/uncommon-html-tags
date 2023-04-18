import Link from "next/link";
import "./globals.css";
import Header from "@/components/Header/Header";

export const metadata = {
  title: "Uncommon HTML Tags",
  description:
    "Website to highlight the power of vanilla HTML for modern web development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen bg-gradient-to-r from-slate-950  to-pink-950">
        <Header />
        {children}
      </body>
    </html>
  );
}
