import "../styles/globals.css";
import React from "react";

import "swiper/css";

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
