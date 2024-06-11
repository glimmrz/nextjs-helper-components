import "./globals.css";
import { Roboto_Mono } from "next/font/google";

const inter = Roboto_Mono({ subsets: ["latin"], weight: ["400", "600"] });

export const metadata = {
  title: "Next js helper components",
  description: "Build next app easily with helper components",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
