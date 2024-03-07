import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./reduxProvider";
import {Providers} from "./providers";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "GGO",
  description: "Gardener Go",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
      <Providers>
        <ReduxProvider>
          {children}
        </ReduxProvider>
        </Providers>
      </body>
    </html>
  );
}
