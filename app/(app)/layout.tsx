import type { Metadata } from "next";
import { Geist, Geist_Mono,Josefin_Sans } from "next/font/google";
import { Sidebar } from "react-pro-sidebar";
import { Toaster } from "react-hot-toast";
import { SIdebar } from "../_components/Sidebar";
import { redirect } from "next/navigation";
export default function Applayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main>
       <SIdebar/>
        {children}
        {/* </CheckAuth> */}
      </main>
  );
}
