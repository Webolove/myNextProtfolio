import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Mudit Anand',
  description: 'Portfolio',
  icons: {
    icon: '/favicon.ico', // For the standard favicon
    apple: '/apple-touch-icon.png', // For Apple devices
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon-16x16.png',
      },
    ],
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} Container transition duration-200 ease-in font-['poppins'] bg-transparent`}>
        {children}
        <Toaster />
      </body>

    </html>
  );
}
