import { buildMetadata, ResumePage } from "@/features/site/pages";

export const metadata = buildMetadata("en", "/resume", "Resume | Savio Filho");

export default function EnglishResumePage() {
  return <ResumePage locale="en" />;
}
