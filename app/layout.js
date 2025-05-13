import { Outfit,Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight:["400","500","600","700"]
});
const ovo = Ovo({
  subsets: ["latin"],
  weight:["400"]
});


export const metadata = {
  title: "Portfolio - Noor Tanvir Hossain",
  description: "Welcome to the portfolio of Noor Tanvir Hossain, a passionate full-stack web developer specializing in MERN stack, TypeScript, Next.js and modern web technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="hydrated scroll-smooth">
      <body
        className={`${outfit.className
        } ${ovo.className} antialiased leading-8 overflow-x-hidden`}
        cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}
