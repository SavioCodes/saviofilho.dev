const workSocialPreviewPaths: Record<string, string> = {
  onboardpulse: "/og/work/onboardpulse.svg",
  mailsieve: "/og/work/mailsieve.svg",
  "rede-neural-do-zero": "/og/work/rede-neural-do-zero.svg",
  vowgrid: "/og/work/vowgrid.svg",
};

export function getWorkSocialPreviewPath(slug: string) {
  return workSocialPreviewPaths[slug] ?? "/og/site-card.svg";
}
