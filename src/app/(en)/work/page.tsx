import { buildMetadata, WorkPage } from "@/features/site/pages";

export const metadata = buildMetadata("en", "/work", "Work | Savio Filho");

export default async function EnglishWorkPage() {
  return <WorkPage locale="en" />;
}
