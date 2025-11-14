import ComingSoonPage from "./ComingSoonPage";
import { headers } from "next/headers";
export async function generateMetadata() {
    const headersList = headers();
    const host = (await headersList).get("host") || "example.com";

    return {
        title: `${host} - Yapım Aşamasında`,
        description: `${host} üzerinde yeni bir deneyim için çalışıyoruz.`,
        icons: {
            icon: "/1685460.png",
            shortcut: "/public/1685460.png",
            apple: "/public/1685460.png",
        },
        openGraph: {
            title: `${host} - Ramazan Eriş'in Projesi`,
        },
        keywords: ["ramco.tr", host, "projects"],
    };
}
function page() {
    return (
        <div>
            <ComingSoonPage />
        </div>
    );
}

export default page;
