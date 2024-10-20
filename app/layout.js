import { Inter } from 'next/font/google'
import { FaRegCopyright } from "react-icons/fa";
import "./globals.css";
import Header from '@/components/header';
import { ClerkProvider } from '@clerk/nextjs';

export const metadata = {
  title: "AssemblrR",
  description: "Scheduling Web Application",
};

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <main className = "min-h-screen bg-gradient-to-b from-purple-50 to-white">
        {children}
        </main>
        <footer className = "bg-purple-100 py-12">
          <div className = "container mx-auto p-4 text-center text-gray-700">
            <p className="flex items-center justify-center space-x-2 gap-2"><FaRegCopyright/>Copyright 2024 AssemblrR</p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
