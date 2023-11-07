import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Share_Tech_Mono, Fira_Sans_Condensed } from "next/font/google";

// const firaSans = Fira_Sans_Condensed({
//   weight: "400",
//   subsets: ["latin"],
//   display: "swap",
// });

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

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
      <body className={shareTechMono.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
