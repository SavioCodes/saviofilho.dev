import { buildMetadata, WorkPage } from "@/features/site/pages";

export const metadata = buildMetadata("pt-br", "/work", "Projetos");

export default async function PortugueseWorkPage() {
  return <WorkPage locale="pt-br" />;
}
