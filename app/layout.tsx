import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://summithomeremodeling.com"),
  title: {
    default: "Summit Home Remodeling | Rogers, AR Contractor",
    template: "%s | Summit Home Remodeling",
  },
  description:
    "Summit Home Remodeling transforms homes in Rogers, AR and Northwest Arkansas. Expert kitchen, bathroom, addition & basement remodeling. Licensed, insured, 5-year warranty. Call (479) 319-4200.",
  keywords: [
    "home remodeling Rogers AR",
    "kitchen remodeling Northwest Arkansas",
    "bathroom remodel Rogers Arkansas",
    "home addition contractor Rogers AR",
    "basement finishing Bentonville AR",
    "remodeling contractor Rogers Arkansas",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://summithomeremodeling.com",
    siteName: "Summit Home Remodeling",
    title: "Summit Home Remodeling | Rogers, AR",
    description:
      "Northwest Arkansas' premier home remodeling contractor. Kitchens, bathrooms, additions & basement finishes. 15+ years, 430+ projects.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Summit Home Remodeling — Rogers, AR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Summit Home Remodeling | Rogers, AR",
    description: "Northwest Arkansas' premier home remodeling contractor.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://summithomeremodeling.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='h-full antialiased'>
      <body className='min-h-full flex flex-col bg-background text-foreground'>
        <Navigation />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
