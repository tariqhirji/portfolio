import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Tariq Hirji - Software Junkie",
  description:
    "Tariqs Hirji's home on the internet, showcasing his skills and favourite projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"font-firaSans"}>
        {/* <Navbar /> */}
        <main>{children}</main>
      </body>
    </html>
  );
}
