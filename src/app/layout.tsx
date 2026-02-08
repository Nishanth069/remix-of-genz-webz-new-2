import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
import { VisualEditsMessenger } from "orchids-visual-edits";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadataBase = new URL("https://zyxen.in");

export const metadata: Metadata = {
  title: "ZYXEN – Digital Solutions & Creative Agency",
  description:
    "ZYXEN builds high-performance digital products, websites, branding, and solutions with modern design and smooth user experience.",
  keywords: [
    "Zyxen",
    "Zyxen Agency",
    "Zyxen Company",
    "Creative Agency",
    "Web Development",
    "Branding",
    "Digital Solutions",
    "ZYXEN",
    "software solutions",
    "AI solutions",
    "website development",
    "custom software development",
    "business automation",
    "AI integration services",
    "digital transformation",
    "web application development",
    "intelligent automation",
    "enterprise software",
    "digital experiences",
    "technology",
    "innovation",
    "performance",
    "brand",
    "engineering",
    "design precision",
    "future-ready",
    "scalable architecture"
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://zyxen.in",
  },
  icons: {
  icon: [
    { url: "/favicon.ico" },
    { url: "/favicon.png", type: "image/png" },
  ],
  shortcut: "/favicon.ico",
  apple: "/favicon.png",
},

    openGraph: {
      title: "ZYXEN – Digital Solutions & Creative Agency",
      description:
        "We build future-ready digital products with premium design and fast performance.",
      url: "https://zyxen.in",
      siteName: "ZYXEN",
        images: [
          {
            url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?mx=1200&my=630&auto=format&fit=crop",
            width: 1200,
            height: 630,
            alt: "ZYXEN Digital Agency",
          },
        ],
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "ZYXEN – Digital Solutions & Creative Agency",
        description:
          "We build future-ready digital products with premium design and fast performance.",
        images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?mx=1200&my=630&auto=format&fit=crop"],
      },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://zyxen.in/#organization",
        name: "ZYXEN",
        url: "https://zyxen.in",
        logo: {
          "@type": "ImageObject",
          url: "https://zyxen.in/previews/logo.png",
        },
        sameAs: [
          "https://www.instagram.com/zyxen.in",
          "https://x.com/zyxen_in",
          "https://www.linkedin.com/company/zyxen/",
          "https://www.facebook.com/share/1BGNGdWE92/",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: "contact@zyxen.in",
          contactType: "customer service",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://zyxen.in/#website",
        url: "https://zyxen.in",
        name: "ZYXEN",
        publisher: { "@id": "https://zyxen.in/#organization" },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://zyxen.in/#localbusiness",
        name: "ZYXEN",
        url: "https://zyxen.in",
        email: "contact@zyxen.in",
        description:
          "ZYXEN is a digital solutions and creative agency building high-performance websites, branding, and software products.",
        priceRange: "$$",
        image: "https://zyxen.in/previews/og-image.png",
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased font-sans`}>
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="ecda7743-7704-4c1e-a332-a58580cac1f5"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
