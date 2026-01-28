"use client"

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "@/components/Sidebar/Sidebar";
import Navbar from "@/components/Navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function  DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <div
        className="bg-muted"
        style={{ fontFamily: `var(${geistSans.variable}), var(${geistMono.variable})` }}
      >
        <Navbar />
        <div style={{ display: "flex" }}>
          <Sidebar />
          <main style={{ padding: "1.5rem", width: "100%" }}>{children}</main>
        </div>
      </div>
  );
}
