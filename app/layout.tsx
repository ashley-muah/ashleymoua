import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kevin Xiao",
  description:
    "Personal Website for Kevin Xiao, CS and Math Double Major at University of Washington.",
  keywords: [
    "Kevin Xiao",
    "Software Engineer",
    "Computer Science",
    "University of Washington",
    "Meta",
    "AWS",
    "Full Stack Developer",
    "AI",
    "Machine Learning",
  ],
  authors: [{ name: "Kevin Xiao" }],
  openGraph: {
    title: "Kevin Xiao",
    description:
      "Computer Science & Mathematics student at UW.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
