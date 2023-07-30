import "./globals.scss";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Euricom Bootcampers 2023",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          data-react-helmet="true"
          rel="icon"
          sizes="16x16"
          href="https://www.datocms-assets.com/5294/1651488130-euricom-beeldmerk-rgb.svg?w=16&amp;h=16"
          type="image/svg"
        ></link>
        <link
          data-react-helmet="true"
          rel="apple-touch-icon"
          sizes="57x57"
          href="https://www.datocms-assets.com/5294/1651488130-euricom-beeldmerk-rgb.svg?w=57&amp;h=57"
        ></link>
      </head>

      <body className={poppins.className}>{children}</body>
    </html>
  );
}
