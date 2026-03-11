import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShalaConnect — Smart School Management",
  description:
    "Complete school management system with zero monthly fees. Works offline, one-time payment. Manage students, fees, attendance, results, and WhatsApp alerts.",
  keywords: "school management, offline school software, shala management, student management",
  openGraph: {
    title: "ShalaConnect — Smart School Management",
    description: "Complete school management • Zero monthly fees • Works offline • One-time payment only",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
