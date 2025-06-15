import "@/styles/globals.css";
import { Inter } from "next/font/google";
import SessionProviderWrapper from "@/providers/SessionProviderWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextAuth Auth0 App",
  description: "Yetkilendirme sistemi örneği",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProviderWrapper>{children}</SessionProviderWrapper>
      </body>
    </html>
  );
}
