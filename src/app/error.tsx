"use client";

import React from "react";
import { Button } from "@heroui/react";
import { Home, Mail, ArrowRight } from "lucide-react";

export default function ComingSoonPage() {
    const domain =
        typeof window !== "undefined"
            ? window.location.hostname
            : "example.com";

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
            <h1 className="text-4xl font-bold mb-4">
                🚧 Site Yapım Aşamasında 🚧
            </h1>

            <p className="text-lg mb-2">
                <span className="font-semibold">{domain}</span> üzerinde yeni
                bir deneyim için çalışıyoruz.
            </p>

            <p className="text-base text-muted mb-6">
                Size daha iyi hizmet sunmak için buradayız. Lütfen biraz daha
                sabırlı olun.
            </p>

            <div className="grid gap-4 md:grid-cols-3 w-full max-w-md">
                <a href="/" className="w-full">
                    <Button
                        variant="bordered"
                        size="lg"
                        className="w-full flex items-center justify-center"
                    >
                        <Home className="w-5 h-5 mr-2 text-current" /> Ana Sayfa
                    </Button>
                </a>

                <a href={`mailto:${domain}@ramco.tr`} className="w-full">
                    <Button
                        variant="bordered"
                        size="lg"
                        className="w-full flex items-center justify-center"
                    >
                        <Mail className="w-5 h-5 mr-2" fill="white" color="white" /> Bize Ulaşın
                    </Button>
                </a>

                <a
                    href="https://ramco.tr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                >
                    <Button
                        size="lg"
                        className="w-full flex items-center justify-center"
                    >
                        <ArrowRight className="w-5 h-5 mr-2" /> ramco.tr
                    </Button>
                </a>
            </div>

            <p className="mt-10 text-sm text-muted">
                © {new Date().getFullYear()} {domain} - Tüm hakları saklıdır.
            </p>

            <p className="mt-2 text-xs text-muted-foreground">
                Developed by{" "}
                <a
                    href="https://ramco.tr"
                    className="underline hover:opacity-80"
                >
                    Ramazan Eriş
                </a>
            </p>
        </div>
    );
}
