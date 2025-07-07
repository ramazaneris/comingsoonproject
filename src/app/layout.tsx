import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export async function generateMetadata() {
    const domain =
        typeof window !== "undefined"
            ? window.location.hostname
            : "example.com";
    return {
        title: `${domain} - Ramazan Eriş'in Projesi`,
        description: "Ramazan Eriş tarafından geliştirilen bir projedir.",
        icons: {
            icon: "/1685460.png",
            shortcut: "/public/1685460.png",
            apple: "/public/1685460.png",
        },
        openGraph: {
            title: `${domain} - Ramazan Eriş'in Projesi`,
        },
    };
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
