import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";
import { Analytics } from "@vercel/analytics/next"


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://balacarter.vercel.app'),
  title: "Bala Carter - React & TypeScript Software Engineer | Portfolio",
  description: "Bala Carter - Software Engineer specializing in React, TypeScript, and accessible web development. Los Angeles-based frontend expert with 3+ years of experience building scalable web applications.",
  keywords: [
    "Software Engineer",
    "React Developer",
    "TypeScript",
    "Frontend Developer",
    "Los Angeles",
    "Web Development",
    "Preact",
    "JavaScript",
    "Accessibility",
    "Full Stack Developer"
  ],
  authors: [{ name: "Bala Carter", url: "https://balacarter.com" }],
  creator: "Bala Carter",
  publisher: "Bala Carter",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://balacarter.com",
    title: "Bala Carter - Software Engineer Portfolio",
    description: "Software Engineer specializing in React, TypeScript, and accessible web development. Building innovative, user-friendly interfaces.",
    siteName: "Bala Carter Portfolio",
    images: [
      {
        url: "/social.png",
        width: 1200,
        height: 630,
        alt: "Bala Carter - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bala Carter - Software Engineer",
    description: "React & TypeScript specialist building accessible, high-performance web experiences",
    images: ["/social.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
