// import { Inter } from 'next/font/google'
import "./globals.css";
import StandardLink from "./standard/StandardLink";

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "My portfolio",
  description: "Get to kno more about me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StandardLink />
        {children}
      </body>
    </html>
  );
}
