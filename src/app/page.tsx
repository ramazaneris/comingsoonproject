import ComingSoonPage from "./ComingSoonPage";
import { headers } from "next/headers";
export async function generateMetadata() {
    const headersList = headers();
    const host = (await headersList).get("host") || "example.com";

    return {
        title: `${host} - Yapım Aşamasında`,
        description: `${host} üzerinde yeni bir deneyim için çalışıyoruz.`,
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
