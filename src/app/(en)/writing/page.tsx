import { buildMetadata, WritingPage } from "@/features/site/pages";

export const metadata = buildMetadata("en", "/writing", "Writing | Savio Filho");

export default async function EnglishWritingPage() {
  return <WritingPage locale="en" />;
}
