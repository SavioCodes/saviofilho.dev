type SignalItem = {
  label: string;
  value: string;
};

type SignalGridProps = {
  children: React.ReactNode;
};

type SignalCardProps = SignalItem;

type FlowGridProps = {
  children: React.ReactNode;
};

type FlowStepProps = {
  step: string;
  title: string;
  detail: string;
};

type TerminalFrameProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export function SignalGrid({ children }: SignalGridProps) {
  return <div className="signal-grid">{children}</div>;
}

export function SignalCard({ label, value }: SignalCardProps) {
  return (
    <div className="signal-card">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

export function FlowGrid({ children }: FlowGridProps) {
  return <div className="flow-grid">{children}</div>;
}

export function FlowStep({ step, title, detail }: FlowStepProps) {
  return (
    <div className="flow-step">
      <span className="flow-step__index">{step}</span>
      <strong>{title}</strong>
      <p>{detail}</p>
    </div>
  );
}

export function TerminalFrame({
  title,
  subtitle,
  children,
}: TerminalFrameProps) {
  return (
    <figure className="terminal-frame">
      <div className="terminal-frame__topbar">
        <div className="terminal-frame__lights" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="terminal-frame__meta">
          <strong>{title}</strong>
          {subtitle ? <span>{subtitle}</span> : null}
        </div>
      </div>
      <div className="terminal-frame__body">
        <pre>{children}</pre>
      </div>
    </figure>
  );
}
