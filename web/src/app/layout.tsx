import type { Metadata } from "next";

import AppContext from "@/context/AppContext";
import Header from "@/components/Header";
import Help from "@/components/Help";

import "./globals.css";

export const metadata: Metadata = {
  title: "Shopping lists",
  description: "Personal shopping lists with React Context and reducers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppContext>
          <Header />
          <main>{children}</main>
          <Help />
        </AppContext>
      </body>
    </html>
  );
}
