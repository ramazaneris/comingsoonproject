import ComingSoonPage from "./ComingSoonPage";

export async function generateMetadata() {
    const domain =
        typeof window !== "undefined"
            ? window.location.hostname
            : "example.com";

    return {
        title: `${domain} - Yapım Aşamasında`,
        description: `${domain} üzerinde yeni bir deneyim için çalışıyoruz.`,
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
