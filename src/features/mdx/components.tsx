import Link from "next/link";
import type { MDXComponents } from "mdx/types";

import {
  FlowGrid,
  FlowStep,
  SignalCard,
  SignalGrid,
  TerminalFrame,
} from "@/features/mdx/evidence";

export const mdxComponents: MDXComponents = {
  a: ({ href = "", children, ...props }) => {
    const isExternal =
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("mailto:");

    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noreferrer" {...props}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  },
  h2: (props) => <h2 className="mdx-heading" {...props} />,
  h3: (props) => <h3 className="mdx-subheading" {...props} />,
  p: (props) => <p className="mdx-paragraph" {...props} />,
  ul: (props) => <ul className="mdx-list" {...props} />,
  ol: (props) => <ol className="mdx-list mdx-list-ordered" {...props} />,
  li: (props) => <li className="mdx-list-item" {...props} />,
  blockquote: (props) => <blockquote className="mdx-quote" {...props} />,
  pre: (props) => <pre className="mdx-code" {...props} />,
  code: (props) => <code className="mdx-inline-code" {...props} />,
  hr: () => <hr className="mdx-rule" />,
  table: (props) => (
    <div className="mdx-table-wrap">
      <table className="mdx-table" {...props} />
    </div>
  ),
  FlowGrid,
  FlowStep,
  SignalCard,
  SignalGrid,
  TerminalFrame,
};
