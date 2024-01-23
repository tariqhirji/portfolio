import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tariq Hirji - Software Developer",
  description:
    "Tariq Hirji's home on the internet, showcasing his software development and design skills and favourite projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"font-firaSans"}>
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
