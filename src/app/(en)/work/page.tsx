import { buildMetadata, WorkPage } from "@/features/site/pages";

export const metadata = buildMetadata("en", "/work", "Work");

export default async function EnglishWorkPage() {
  return <WorkPage locale="en" />;
}
