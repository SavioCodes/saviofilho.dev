import { buildMetadata, HomePage } from "@/features/site/pages";

export const metadata = buildMetadata("en", "/");

export default async function EnglishHomePage() {
  return <HomePage locale="en" />;
}
