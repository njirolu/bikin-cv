import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "bikin cv - Interactive CV Building Platform & Online Tools",
  icons: "/favicon.ico",
  description:
    "At bikin cv, we are dedicated to helping you craft the perfect CV that showcases your unique talents and experiences. Our user-friendly CV builder web app is designed to empower you in your job search journey.",
  keywords: "cv builder, builder, resume builder, resume",
  openGraph: {
    description:
      "At bikin cv, we are dedicated to helping you craft the perfect CV that showcases your unique talents and experiences. Our user-friendly CV builder web app is designed to empower you in your job search journey.",
  },
  twitter: {
    description:
      "At bikin cv, we are dedicated to helping you craft the perfect CV that showcases your unique talents and experiences. Our user-friendly CV builder web app is designed to empower you in your job search journey.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
