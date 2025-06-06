import { Geist, Geist_Mono } from "next/font/google";
import { Manrope } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // adjust as needed
  variable: '--font-manrope', // optional if using Tailwind or custom CSS
})

export const metadata = {
  title: "Boldo - Blog",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={manrope.className}
      >
        {children}
      </body>
    </html>
  );
}
