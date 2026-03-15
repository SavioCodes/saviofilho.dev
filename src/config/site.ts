import type { Locale } from "@/config/i18n";

export const contactLinks = [
  { href: "mailto:codessavio@gmail.com", label: "Email" },
  { href: "https://github.com/SavioCodes", label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/savio-filho-7a0212309/",
    label: "LinkedIn",
  },
] as const;

type SiteLocaleCopy = {
  utilityLine: string;
  utilityStatus: string;
  roleLabel: string;
  navigation: Array<{ href: "/" | "/work" | "/writing" | "/resume"; label: string }>;
  footer: { eyebrow: string; copy: string };
  home: {
    eyebrow: string;
    kicker: string;
    title: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    currentFocusTitle: string;
    currentFocus: string[];
    insideTitle: string;
    factLabels: {
      publicSurface: string;
      privateSurface: string;
      writing: string;
    };
    proofMarks: string[];
    whyExistsLabel: string;
    whyExistsTitle: string;
    whyExistsBody: string;
    principlesLabel: string;
    selectedWorkLabel: string;
    selectedWorkTitle: string;
    selectedWorkCta: string;
    privateWorkLabel: string;
    privateWorkTitle: string;
    privateWorkBody: string;
    writingLabel: string;
    writingTitle: string;
    systemsLabel: string;
    systemsTitle: string;
    systemsMap: Array<{ title: string; summary: string }>;
  };
  work: {
    eyebrow: string;
    title: string;
    lead: string;
    statsLabel: string;
    stats: { publicRepos: string; privateSystems: string; rule: string };
    repoLabel: string;
    privateLabel: string;
    readCase: string;
    openRepo: string;
    repoPrivate: string;
  };
  writing: {
    eyebrow: string;
    title: string;
    lead: string;
    ruleLabel: string;
    ruleBody: string;
    readNote: string;
    minutes: string;
  };
  resume: {
    eyebrow: string;
    title: string;
    lead: string;
    availabilityLabel: string;
    sectionLabels: { focus: string; capabilities: string; stack: string };
    availability: string;
    focus: string[];
    capabilities: string[];
    stack: string[];
  };
  detail: {
    publicRepo: string;
    privateCase: string;
    role: string;
    year: string;
    status: string;
    readingTime: string;
    openRepository: string;
    repoPrivate: string;
    nextCase: string;
    continueReading: string;
    writingEyebrow: string;
    minutes: string;
  };
  metadata: {
    title: string;
    description: string;
    ogDescription: string;
  };
};

export const siteCopy: Record<Locale, SiteLocaleCopy> = {
  en: {
    utilityLine: "Brazil / backend product systems / PT-BR native / English-first portfolio",
    utilityStatus: "Open to software engineering roles",
    roleLabel: "Backend product engineer",
    navigation: [
      { href: "/", label: "Home" },
      { href: "/work", label: "Work" },
      { href: "/writing", label: "Writing" },
      { href: "/resume", label: "Resume" },
    ],
    footer: {
      eyebrow: "Colophon",
      copy:
        "Built as a bilingual editorial index of case studies, notes, and systems work. Clear boundaries first, gloss second.",
    },
    home: {
      eyebrow: "Savio Filho / Portfolio / 2026",
      kicker: "Backend product engineer from Brazil",
      title:
        "I build product systems with approval paths, boring operations, and proof you can inspect.",
      lead:
        "The work here is centered on trust layers, tenant boundaries, webhook lifecycles, upload pipelines, billing states, AI cost controls, and the docs that keep those systems understandable after launch.",
      primaryCta: "Browse case studies",
      secondaryCta: "View resume",
      currentFocusTitle: "Current focus",
      currentFocus: [
        "Approval and execution flows that make AI actions safer to ship.",
        "Billing, auth, and queue-backed systems that still behave after day one.",
        "Portfolio writing that shows constraints, failure modes, and operator-facing detail.",
      ],
      insideTitle: "What is inside this portfolio",
      factLabels: {
        publicSurface: "Public engineering surface",
        privateSurface: "Private systems still documented",
        writing: "Writing rhythm",
      },
      proofMarks: [
        "Runbooks, QA lists, and architecture notes stay visible.",
        "Public repos ship with tests, build steps, and explicit trade-offs.",
        "Private systems still show workflow design, constraints, and audit trails.",
      ],
      whyExistsLabel: "Why this site exists",
      whyExistsTitle: "This is a field dossier, not a gallery wall.",
      whyExistsBody:
        "GitHub is where I keep the code. This site is where I explain what the system does, where it can break, and why the decisions matter once another engineer or operator has to touch it.",
      principlesLabel: "Operating principles",
      selectedWorkLabel: "Selected work",
      selectedWorkTitle: "Flagship systems with clear technical boundaries",
      selectedWorkCta: "See all case studies",
      privateWorkLabel: "Private work, still legible",
      privateWorkTitle: "Code can stay private. System thinking should not.",
      privateWorkBody:
        "The private projects here are documented with the same standard as the public ones: workflow boundaries, operational constraints, and the trade-offs that shaped the build.",
      writingLabel: "Writing",
      writingTitle: "Short notes written like engineering field reports.",
      systemsLabel: "Operating map",
      systemsTitle: "The public stack I want recruiters to understand first",
      systemsMap: [
        {
          title: "Trust + approval systems",
          summary:
            "VOWGRID-API focuses on simulation, policy evaluation, approvals, execution receipts, and rollback visibility.",
        },
        {
          title: "SaaS workflow operations",
          summary:
            "OnboardPulse shows tenant isolation, billing, follow-up jobs, upload flows, and AI budget edges.",
        },
        {
          title: "Lean product APIs",
          summary:
            "MailSieve and the supporting notes show how narrow products still need contracts, verification, and ops discipline.",
        },
      ],
    },
    work: {
      eyebrow: "Work",
      title: "Six systems that hold up under technical scrutiny.",
      lead:
        "Four are public repositories with runnable engineering proof. Two stay private, but the cases still show architecture, constraints, operating flows, and why the system was shaped the way it was.",
      statsLabel: "Index notes",
      stats: {
        publicRepos: "Public repos",
        privateSystems: "Private systems",
        rule: "Selection rule",
      },
      repoLabel: "Public repository",
      privateLabel: "Private case study",
      readCase: "Read case study",
      openRepo: "Repository",
      repoPrivate: "Repo stays private",
    },
    writing: {
      eyebrow: "Writing",
      title: "Notes about systems, cost, and product reality.",
      lead:
        "I keep these short on purpose. The goal is to make my thinking legible, not to publish broad thought leadership.",
      ruleLabel: "Writing rule",
      ruleBody:
        "Every note should clarify a decision or constraint I actually care about in products: money, operations, interfaces, and where AI helps without taking over the product.",
      readNote: "Read note",
      minutes: "min read",
    },
    resume: {
      eyebrow: "Resume",
      title: "Savio Filho",
      lead:
        "Software engineer focused on backend products, SaaS systems, and applied AI with a strong bias toward documentation and operational clarity.",
      availabilityLabel: "Availability",
      sectionLabels: {
        focus: "Focus",
        capabilities: "Capabilities",
        stack: "Stack",
      },
      availability:
        "Open to Software Engineer roles with a strong backend or product systems component, remote or hybrid.",
      focus: [
        "Backend product engineering for SaaS, internal tooling, and automation-heavy workflows.",
        "TypeScript and Node.js for APIs and service layers; Python for evaluation pipelines and systems scripts.",
        "Applied AI with cost, auditability, and deterministic fallbacks in mind.",
      ],
      capabilities: [
        "API design, auth flows, billing integrations, background jobs, and operational runbooks.",
        "Multi-tenant products with data isolation, quota controls, and developer-focused repository standards.",
        "Docs-first communication: architecture notes, launch checklists, deployment guides, and case studies.",
      ],
      stack: [
        "TypeScript, Node.js, Next.js, Express, Fastify, React Native, Python",
        "PostgreSQL, Prisma, Drizzle ORM, Supabase, object storage, Redis, BullMQ",
        "GitHub Actions, Vitest, Jest, pytest, OpenAPI, Docker Compose",
      ],
    },
    detail: {
      publicRepo: "Public repo",
      privateCase: "Private case study",
      role: "Role",
      year: "Year",
      status: "Status",
      readingTime: "Reading time",
      openRepository: "Open repository",
      repoPrivate: "Repository intentionally private",
      nextCase: "Next case study",
      continueReading: "Continue reading",
      writingEyebrow: "Writing",
      minutes: "min read",
    },
    metadata: {
      title: "Savio Filho | Backend Product Engineer",
      description:
        "Bilingual portfolio and case studies for Savio Filho, focused on backend products, SaaS systems, and applied AI.",
      ogDescription:
        "Case studies, technical writing, and product systems work across trust layers, SaaS operations, automation, and applied AI.",
    },
  },
  "pt-br": {
    utilityLine: "Brasil / sistemas de produto backend / nativo em PT-BR / portfolio bilingue",
    utilityStatus: "Aberto a vagas de engenharia de software",
    roleLabel: "Engenheiro de produto backend",
    navigation: [
      { href: "/", label: "Inicio" },
      { href: "/work", label: "Projetos" },
      { href: "/writing", label: "Textos" },
      { href: "/resume", label: "Resumo" },
    ],
    footer: {
      eyebrow: "Colofao",
      copy:
        "Construido como um indice editorial bilingue de estudos de caso, notas e sistemas. Limites claros primeiro, brilho depois.",
    },
    home: {
      eyebrow: "Savio Filho / Portfolio / 2026",
      kicker: "Engenheiro de produto backend no Brasil",
      title:
        "Eu construo sistemas de produto com caminhos de aprovacao, operacao previsivel e prova tecnica visivel.",
      lead:
        "O trabalho aqui gira em torno de camadas de confianca, isolamento entre tenants, ciclos de webhook, pipelines de upload, estados de cobranca, limites de custo para IA e documentacao que mantem esses sistemas compreensiveis depois do lancamento.",
      primaryCta: "Ver estudos de caso",
      secondaryCta: "Abrir resumo",
      currentFocusTitle: "Foco atual",
      currentFocus: [
        "Fluxos de aprovacao e execucao que tornam acoes com IA mais seguras.",
        "Sistemas com billing, auth e filas que continuam saudaveis depois do dia um.",
        "Escrita de portfolio que mostra restricoes, falhas provaveis e detalhes para operadores.",
      ],
      insideTitle: "O que existe neste portfolio",
      factLabels: {
        publicSurface: "Superficie publica de engenharia",
        privateSurface: "Sistemas privados ainda documentados",
        writing: "Ritmo de escrita",
      },
      proofMarks: [
        "Runbooks, checklists de QA e notas de arquitetura ficam visiveis.",
        "Repositorios publicos vem com testes, build e trade-offs explicitos.",
        "Sistemas privados ainda mostram fluxo, restricoes e trilha de decisao.",
      ],
      whyExistsLabel: "Por que este site existe",
      whyExistsTitle: "Isto e um dossier de campo, nao uma parede de screenshots.",
      whyExistsBody:
        "O GitHub e onde eu guardo o codigo. Este site e onde eu explico o que o sistema faz, onde ele pode quebrar e por que as decisoes importam quando outra pessoa precisa manter ou operar o projeto.",
      principlesLabel: "Principios de operacao",
      selectedWorkLabel: "Projetos selecionados",
      selectedWorkTitle: "Sistemas principais com limites tecnicos claros",
      selectedWorkCta: "Ver todos os casos",
      privateWorkLabel: "Projetos privados, ainda legiveis",
      privateWorkTitle: "O codigo pode ser privado. O raciocinio do sistema nao.",
      privateWorkBody:
        "Os projetos privados aqui sao documentados com o mesmo padrao dos publicos: limites de fluxo, restricoes operacionais e trade-offs que moldaram a implementacao.",
      writingLabel: "Textos",
      writingTitle: "Notas curtas escritas como relatorios de engenharia.",
      systemsLabel: "Mapa operacional",
      systemsTitle: "A pilha publica que eu quero que um recrutador entenda primeiro",
      systemsMap: [
        {
          title: "Sistemas de confianca e aprovacao",
          summary:
            "VOWGRID-API foca em simulacao, avaliacao de politica, aprovacoes, comprovantes de execucao e visibilidade de rollback.",
        },
        {
          title: "Operacao de SaaS workflow",
          summary:
            "OnboardPulse mostra isolamento entre tenants, cobranca, jobs de follow-up, uploads e limites de custo para IA.",
        },
        {
          title: "APIs de produto enxutas",
          summary:
            "MailSieve e os textos de apoio mostram como produtos pequenos ainda precisam de contrato, verificacao e disciplina operacional.",
        },
      ],
    },
    work: {
      eyebrow: "Projetos",
      title: "Seis sistemas que se sustentam em avaliacao tecnica.",
      lead:
        "Quatro sao repositorios publicos com prova de engenharia reproduzivel. Dois continuam privados, mas os casos ainda mostram arquitetura, restricoes, fluxos operacionais e o motivo de cada decisao.",
      statsLabel: "Notas do indice",
      stats: {
        publicRepos: "Repos publicos",
        privateSystems: "Sistemas privados",
        rule: "Regra de selecao",
      },
      repoLabel: "Repositorio publico",
      privateLabel: "Estudo de caso privado",
      readCase: "Ler estudo de caso",
      openRepo: "Repositorio",
      repoPrivate: "Repo continua privado",
    },
    writing: {
      eyebrow: "Textos",
      title: "Notas sobre sistemas, custo e realidade de produto.",
      lead:
        "Eu mantenho esses textos curtos de proposito. A meta e deixar meu raciocinio visivel, nao publicar pensamento generico.",
      ruleLabel: "Regra dos textos",
      ruleBody:
        "Cada nota precisa esclarecer uma decisao ou restricao que eu realmente considero importante em produtos: dinheiro, operacao, interfaces e onde IA ajuda sem dominar o produto.",
      readNote: "Ler nota",
      minutes: "min de leitura",
    },
    resume: {
      eyebrow: "Resumo",
      title: "Savio Filho",
      lead:
        "Engenheiro de software focado em produtos backend, sistemas SaaS e IA aplicada, com forte vies para documentacao e clareza operacional.",
      availabilityLabel: "Disponibilidade",
      sectionLabels: {
        focus: "Foco",
        capabilities: "Capacidades",
        stack: "Stack",
      },
      availability:
        "Aberto a vagas de Software Engineer com componente forte de backend ou sistemas de produto, remoto ou hibrido.",
      focus: [
        "Engenharia de produto backend para SaaS, ferramentas internas e workflows com muita automacao.",
        "TypeScript e Node.js para APIs e camadas de servico; Python para pipelines de avaliacao e scripts de sistema.",
        "IA aplicada com custo, auditabilidade e fallback deterministico em mente.",
      ],
      capabilities: [
        "Design de API, autenticacao, integracoes de billing, jobs em background e runbooks operacionais.",
        "Produtos multi-tenant com isolamento de dados, controle de cotas e padroes de repositorio voltados para DX.",
        "Comunicacao docs-first: notas de arquitetura, checklists de lancamento, guias de deploy e estudos de caso.",
      ],
      stack: [
        "TypeScript, Node.js, Next.js, Express, Fastify, React Native, Python",
        "PostgreSQL, Prisma, Drizzle ORM, Supabase, object storage, Redis, BullMQ",
        "GitHub Actions, Vitest, Jest, pytest, OpenAPI, Docker Compose",
      ],
    },
    detail: {
      publicRepo: "Repo publico",
      privateCase: "Estudo de caso privado",
      role: "Papel",
      year: "Ano",
      status: "Status",
      readingTime: "Tempo de leitura",
      openRepository: "Abrir repositorio",
      repoPrivate: "Repositorio mantido como privado",
      nextCase: "Proximo estudo de caso",
      continueReading: "Continuar leitura",
      writingEyebrow: "Textos",
      minutes: "min de leitura",
    },
    metadata: {
      title: "Savio Filho | Engenheiro de Produto Backend",
      description:
        "Portfolio bilingue e estudos de caso de Savio Filho, com foco em produtos backend, sistemas SaaS e IA aplicada.",
      ogDescription:
        "Estudos de caso, escrita tecnica e sistemas de produto em camadas de confianca, operacao SaaS, automacao e IA aplicada.",
    },
  },
};

export function getSiteCopy(locale: Locale) {
  return siteCopy[locale];
}
