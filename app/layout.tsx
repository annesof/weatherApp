import { fontSans } from "@/styles/fonts";
import "@/styles/globals.css";
import { Link } from "@nextui-org/react";
import clsx from "clsx";
import { Github01Icon, Linkedin02Icon } from "hugeicons-react";
import { Metadata, Viewport } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    default: "Meteo",
    template: `%s - `,
  },
  description: "",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <div className="w-full flex justify-end pr-5 pt-2 gap-2">
              <Link isExternal href="https://github.com/annesof/weatherApp">
                <Github01Icon fill="white" />
              </Link>
              <Link
                isExternal
                href="https://www.linkedin.com/in/anne-sophie-evenot-deguelle-2298b5a2/"
              >
                <Linkedin02Icon fill="white" />
              </Link>
            </div>
            <main className="container mx-auto px-2 md:px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3"></footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
