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

type SystemDiagramProps = {
  title: string;
  subtitle?: string;
  footer?: string;
  children: React.ReactNode;
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

export function SystemDiagram({
  title,
  subtitle,
  footer,
  children,
}: SystemDiagramProps) {
  return (
    <figure className="system-diagram">
      <div className="system-diagram__header">
        <strong>{title}</strong>
        {subtitle ? <span>{subtitle}</span> : null}
      </div>
      <div className="system-diagram__track">{children}</div>
      {footer ? <figcaption className="system-diagram__footer">{footer}</figcaption> : null}
    </figure>
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
