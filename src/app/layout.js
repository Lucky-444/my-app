import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  height: "1.5",
  display: "swap",
});
export const metadata = {
  title: "Travel App",
  description: "Best travel app in the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} w-screen h-screen bg-black text-2xl text-white`}
      >
        {children}
      </body>
    </html>
  );
}
