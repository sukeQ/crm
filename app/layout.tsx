import { GeistSans } from "geist/font/sans";
import "./globals.css";
import PrelineScript from "@/components/PrelineScript";
import Header from "@/components/Navi/Header";
import Navi from "@/components/Nvi";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "crm sample",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="jp">
      <body className="bg-background text-foreground">
        <main className="items-center">{children}</main>
        <PrelineScript />
      </body>
    </html>
  );
}
