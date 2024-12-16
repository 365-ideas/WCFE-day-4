import localFont from "next/font/local";
import "@/styles/reset.scss";
import { LoaderProvider } from "@/providers/LoaderProvider/LoaderProvider";
import Header from "@/components/Header/Header";

const helvetica = localFont({
  src: [
    {
      path: "./fonts/HelveticaNeueRoman.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNeueMedium.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
});

export const metadata = {
  title: "We're Creating For Emotions",
  description: "We'a Creating For Emotions | Project #",
};

export default function RootLayout({ children }) {
  return (
    <html className="html" lang="en">
      <body className={`body ${helvetica.variable}`}>
        <LoaderProvider>
          <Header />
          {children}
        </LoaderProvider>
      </body>
    </html>
  );
}
