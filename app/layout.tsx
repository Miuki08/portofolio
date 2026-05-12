import './globals.css';
import { Inter } from 'next/font/google';
import Header from './component/Header';
import Footer from './component/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Alfiansyah Bima - Junior Developer',
  description: 'Video Editor | Software Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}