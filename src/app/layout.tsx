import "./globals.css";
import { Bricolage_Grotesque } from "next/font/google";
import Header from "@/components/layout/Header";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-bricolage",
});

export const metadata = {
  title: "Siru Living | Interior Design Studio",
  description:
    "Siru Living is an interior design studio creating meaningful spaces rooted in people, place, and purpose.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={bricolage.variable}>
      <body className="font-sans antialiased">
        <Header />
        <div className="pt-[120px]">
          {children}
        </div>
      </body>
    </html>
  );
}
