// const inter = Inter({ subsets: ['latin'] })

import StandardLink from "./StandardLink";

export const metadata = {
  title: "My portfolio footer style",
  description: "Always visible",
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
