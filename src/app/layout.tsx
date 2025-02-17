import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jakub Wąsik",
  description:
    "Personal page of Jakub Wąsik - Full-Stack Software Engineer | Mentor IT | Public Speaker | Lecturer",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/static/favicon.svg",
        href: "/static/favicon.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/static/favicon.svg",
        href: "/static/favicon.svg",
      },
    ],
    apple: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/static/favicon.svg",
        href: "/static/favicon.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/static/favicon.svg",
        href: "/static/favicon.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
