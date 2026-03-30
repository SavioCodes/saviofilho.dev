import { buildMetadata, ResumePage } from "@/features/site/pages";

export const metadata = buildMetadata("pt-br", "/resume", "Resumo");

export default function PortugueseResumePage() {
  return <ResumePage locale="pt-br" />;
}
