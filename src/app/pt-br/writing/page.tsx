import { buildMetadata, WritingPage } from "@/features/site/pages";

export const metadata = buildMetadata("pt-br", "/writing", "Textos | Savio Filho");

export default async function PortugueseWritingPage() {
  return <WritingPage locale="pt-br" />;
}
