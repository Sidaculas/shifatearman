import type { Metadata } from "next";
import { Noto_Serif } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Shifat E. Arman | Assistant Professor & AI Researcher",
  description:
    "Shifat E. Arman is an Assistant Professor at the University of Dhaka, specializing in AI for healthcare, agriculture, and robotics. 13+ publications, 280+ citations, and founding director of Redmond AI Research Group.",
  keywords: [
    "Shifat E. Arman",
    "AI Researcher",
    "Assistant Professor",
    "University of Dhaka",
    "Robotics",
    "Mechatronics",
    "Machine Learning",
    "Deep Learning",
    "Healthcare AI",
    "Agricultural AI",
  ],
  authors: [{ name: "Shifat E. Arman" }],
  creator: "Shifat E. Arman",
  openGraph: {
    type: "website",
    title: "Shifat E. Arman | Assistant Professor & AI Researcher",
    description:
      "Assistant Professor at University of Dhaka. Specializing in AI for healthcare, agriculture, and robotics. 13+ publications, 280+ citations.",
    url: "https://shifatearman.vercel.app",
    siteName: "Shifat E. Arman",
    images: [
      {
        url: "/shifatearman.jpg",
        width: 1200,
        height: 630,
        alt: "Shifat E. Arman - AI Researcher",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shifat E. Arman | Assistant Professor & AI Researcher",
    description:
      "Assistant Professor at University of Dhaka. AI for healthcare, agriculture, and robotics. 13+ publications, 280+ citations.",
    images: ["/shifatearman.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
