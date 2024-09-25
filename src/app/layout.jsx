import "./globals.css";
import { Roboto } from "next/font/google";
import Navbar from "./components/shared/navbar";
import Footer from "./components/shared/footer";
import { Providers } from "./providers";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  preload: false,
});

export const metadata = {
  title: "Zhi Cong's Portfolio",
  description: "Discover the creative work of Zhi Cong, an inspiring web developer specializing in frontend. Explore see my projects and learn more about my journey in web development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.className} dark:bg-darkBg dark:text-darkText antialiased`}
      >
        <Providers>
          <Navbar />
          <div className="mt-10 px-6 mx-auto max-w-sm md:max-w-3xl">
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
