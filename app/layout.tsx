import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Beera Bhavani Sankar | AI/ML Engineer & Full Stack Developer",
  description:
    "Portfolio of Beera Bhavani Sankar — AI/ML Engineer, Full Stack Developer, and published researcher. Building intelligent systems with Python, React, FastAPI, and deep learning.",
  keywords: [
    "Beera Bhavani Sankar", "AI Engineer", "ML Engineer", "Full Stack Developer",
    "Python", "React", "FastAPI", "Django", "Deep Learning", "LLM", "OpenAI",
    "GMR Institute of Technology", "Portfolio",
  ],
  authors: [{ name: "Beera Bhavani Sankar" }],
  openGraph: {
    title: "Beera Bhavani Sankar | AI/ML Engineer & Full Stack Developer",
    description: "Building intelligent systems at the intersection of deep learning, LLMs, and production-grade web applications.",
    type: "website",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
