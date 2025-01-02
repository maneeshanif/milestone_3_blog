import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const poppins = Poppins({

  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});



export const metadata: Metadata = {
  title: "Gates (blog) -by anees",
  description: "A blog about anime for Sir Hamza.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}  antialiased`}
      >
          <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
