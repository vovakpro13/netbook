import "../styles/globals.css";
import Head from "next/head";
import React from "react";

interface IProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <body className="p-0 m-0 w-[100%]">{children}</body>
    </html>
  );
}
