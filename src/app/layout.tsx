import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body-family",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display-family",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Rosario Mensi | Digital Solutions Engineer",
  description:
    "A minimalist editorial portfolio showcasing UX case studies, process, and thoughtful digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfairDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
