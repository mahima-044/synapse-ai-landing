import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata = {
  title: "Synapse AI | Technical Workflow Automation Platform",
  description: "Automate every technical workflow before your coffee gets cold. Streamline AI tasks, API connections, and software deployments with our high-performance modular platform.",
  keywords: ["AI Automation", "Workflow Platform", "DevOps", "Bento Grid", "Next.js", "Vanilla CSS", "SaaS Automation"],
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
