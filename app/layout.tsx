import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
