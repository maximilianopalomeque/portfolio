import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "react-photo-view/dist/react-photo-view.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maximiliano Palomeque",
  description: "Maximiliano Palomeque portfolio.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={montserrat.className}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <Toaster position="bottom-center" />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
