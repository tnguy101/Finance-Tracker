import { Geist, Geist_Mono, Inter} from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({subsets: ["latin"]})

export const metadata = {
  title: "Finance Tracker",
  description: "One stop finance project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header></Header>
        <main className="min-h-screen">
        {children}
        </main>
        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>Made by tnguy</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
