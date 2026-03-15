import { buildMetadata, HomePage } from "@/features/site/pages";

export const metadata = buildMetadata("pt-br", "/");

export default async function PortugueseHomePage() {
  return <HomePage locale="pt-br" />;
}
