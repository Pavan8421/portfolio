import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import NavigationBar from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import TopLoader from "@/components/top-loader";
import OnekoCat from "@/components/OnekoCat";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTopButton } from "@/components/scroll-to-top";
import WebMcpProvider from "@/components/webmcp-provider";

export const metadata = {
  title: {
    template: "Pavan - %s  ",
    default: "Pavan Kumar Varanasi - AI Engineer",
  },
  description:
    "Hello there I am Pavan, an AI Engineer who builds AI agents, voice AI systems, and LLM-powered products.",
  keywords: [
    "Pavan Kumar Varanasi",
    "AI Engineer",
    "Voice AI",
    "LLM",
    "Python",
    "FastAPI",
    "React",
    "Next.js",
    "JavaScript",
    "Web Development",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Pavan Kumar Varanasi" }],
  creator: "Pavan Kumar Varanasi",
  publisher: "Pavan Kumar Varanasi",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "https://notion-avatar.app/api/svg/eyJmYWNlIjo0LCJub3NlIjozLCJtb3V0aCI6MSwiZXllcyI6MTAsImV5ZWJyb3dzIjoxLCJnbGFzc2VzIjoxMCwiaGFpciI6MzIsImFjY2Vzc29yaWVzIjowLCJkZXRhaWxzIjowLCJiZWFyZCI6MCwiZmxpcCI6MSwiY29sb3IiOiJ0cmFuc3BhcmVudCIsInNoYXBlIjoibm9uZSJ9",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pavankumarvaranasi.com",
    title: "Pavan Kumar Varanasi - AI Engineer",
    description:
      "Hello there I am Pavan, an AI Engineer who builds AI agents, voice AI systems, and LLM-powered products.",
    siteName: "Pavan Kumar Varanasi Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pavan Kumar Varanasi - AI Engineer",
    description:
      "Hello there I am Pavan, an AI Engineer who builds AI agents, voice AI systems, and LLM-powered products.",
  },
  alternates: {
    canonical: "https://pavankumarvaranasi.com",
  },
};

import { GeistPixelSquare } from "geist/font/pixel";
import { Space_Mono, Press_Start_2P } from "next/font/google";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
  display: "swap",
});

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pavan Kumar Varanasi",
    jobTitle: "AI Engineer",
    description:
      "AI Engineer who builds AI agents, voice AI systems, and LLM-powered products",
    url: "https://pavankumarvaranasi.com",
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceMono.variable} ${pressStart.variable}`}
    >
      <head>
        <meta name="theme-color" content="#0B0D0E" />
        <meta name="color-scheme" content="dark light" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TopLoader />
          <SmoothScrollProvider>
            <div className="grid min-h-[100dvh] grid-rows-[1fr_auto] overflow-x-hidden">
              <main
                className={`${GeistPixelSquare.className} max-w-[1800px] px-6 pt-14 md:mx-auto md:px-0 md:pt-24`}
              >
                <OnekoCat />
                {children}
              </main>
              <Footer />
              <NavigationBar />
              <Toaster />
              <ScrollToTopButton />
              <WebMcpProvider />
            </div>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
