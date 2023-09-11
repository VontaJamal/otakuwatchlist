import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NavBar } from './header/navbar/NavBar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Otaku Watchlist',
  description:
    'Are you an avid anime fan or new to the colorful world of Japanese animation? Welcome to the Otaku Watchlist! Your one-stop platform for ALL things anime. With our ever-growing library, personalized recommendations, and a passionate community, we offer a unique space for anime enthusiasts to connect, discover, and share.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <NavBar />

        {children}
      </body>
    </html>
  );
}
