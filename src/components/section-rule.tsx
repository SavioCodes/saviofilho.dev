type SectionRuleProps = {
  label: string;
};

export function SectionRule({ label }: SectionRuleProps) {
  return (
    <div className="section-rule" aria-hidden="true">
      <span className="section-rule__label">{label}</span>
    </div>
  );
}
