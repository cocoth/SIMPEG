import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/css/globals.css";
import { fajllaOne, lobster, poppins, ubuntu } from "@/lib/fonts";
import SideBar from "@/components/navbar/SideBar";
import Navbar from "@/components/navbar/Navbar";
import { checkLogin } from "@/utils/checkLogin";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const login = checkLogin()
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${ubuntu.variable} ${lobster.variable} ${fajllaOne.variable}`}>
        <section className="flex h-screen ">
          <SideBar />
          <div className="flex flex-col w-full h-screen ">
            <Navbar />
            <div className="overflow-y-scroll">{children}</div>
          </div>
        </section>
      </body>
    </html>
  );
}
