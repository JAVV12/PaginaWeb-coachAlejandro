import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Alejandro Valencia - Coaching Ejecutivo y Liderazgo Adaptativo",
  description: "Coaching ejecutivo, liderazgo adaptativo (Harvard), autoliderazgo. Programas para dueños de empresa, líderes de equipo y directores.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${dmSans.variable} ${playfairDisplay.variable} antialiased`}
      >
        <MantineProvider
          theme={{
            primaryColor: "blue",
            colors: {
              blue: [
                "#0d1f2d",
                "#0f2330",
                "#112733",
                "#132b36",
                "#152f39",
                "#17333c",
                "#19373f",
                "#1b3b42",
                "#1d3f45",
                "#1f4348",
              ],
              gold: [
                "#dcc97f",
                "#c4b06a",
                "#ac9755",
                "#947e40",
                "#7c652b",
                "#644c16",
                "#4c3301",
                "#341a00",
                "#e8d99a",
                "#f4e9b5",
              ],
            },
            fontFamily: "var(--font-dm-sans), sans-serif",
            headings: {
              fontFamily: "var(--font-dm-sans), sans-serif",
            },
          }}
        >
          <Notifications />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
