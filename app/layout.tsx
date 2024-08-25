import type { Metadata, Viewport } from "next";
import "./globals.css";
import StyleProvider from "@/components/StyleProvider";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Mark's Portfolio",
  description: "Mark Bertoncelj's portfolio website",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StyleProvider>
        <body className="overflow-hidden">
          {children}
          <Analytics />
        </body>
      </StyleProvider>
    </html>
  );
}
