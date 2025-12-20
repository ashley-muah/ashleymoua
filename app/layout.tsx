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
  title: "Kevin Xiao - Software Engineer & Computer Science Student",
  description:
    "Personal portfolio of Kevin Xiao, Computer Science & Mathematics student at the University of Washington. Software Development Engineer with experience at AWS, passionate about AI, full-stack development, and building impactful solutions.",
  keywords: [
    "Kevin Xiao",
    "Software Engineer",
    "Computer Science",
    "University of Washington",
    "AWS",
    "Full Stack Developer",
    "AI",
    "Machine Learning",
  ],
  authors: [{ name: "Kevin Xiao" }],
  openGraph: {
    title: "Kevin Xiao - Software Engineer",
    description:
      "Computer Science & Mathematics student at UW. SDE Intern at AWS. Building innovative software solutions.",
    type: "website",
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
      </body>
    </html>
  );
}
