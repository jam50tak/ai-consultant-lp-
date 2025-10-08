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
  title: "AIコンサルタント養成講座",
  description: "AIを味方にする次世代コンサルタントへ。AI時代を生き抜く力を身につける実践的な講座です。",
  metadataBase: new URL("https://ai-consultant-lp.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AIコンサルタント養成講座",
    description:
      "AIを味方にする次世代コンサルタントへ。AI時代を生き抜く力を身につける実践的な講座です。",
    url: "/",
    siteName: "AIコンサルタント養成講座",
    images: [
      {
        url: "/hero-image.png",
        width: 1200,
        height: 675,
        alt: "AIコンサルタント養成講座",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIコンサルタント養成講座",
    description:
      "AIを味方にする次世代コンサルタントへ。AI時代を生き抜く力を身につける実践的な講座です。",
    images: ["/hero-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: "#ff3b30",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
