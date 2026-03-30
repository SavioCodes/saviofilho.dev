import type { Locale } from "@/config/i18n";
import type { WritingTheme } from "@/types/content";

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
  headerLabel: string;
  headerNote: string;
  navigation: Array<{
    href: "/" | "/work" | "/writing" | "/resume";
    label: string;
    blurb: string;
  }>;
  footer: {
    eyebrow: string;
    stamp: string;
    copy: string;
    surfaceLabel: string;
    surfaceValue: string;
    contactLabel: string;
    contactValue: string;
    connectTitle: string;
    localeTitle: string;
    localeBody: string;
    openLabel: string;
  };
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
    dispatchLabel: string;
    dispatchTitle: string;
    dispatchBody: string;
    dispatchRoutes: Array<{
      href: "/" | "/work" | "/writing" | "/resume";
      title: string;
      body: string;
      cta: string;
    }>;
    readingRulesLabel: string;
    readingRulesTitle: string;
    readingRules: string[];
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
    surfaceLabel: string;
    surfaceTitle: string;
    surfaceBody: string;
    writingLabel: string;
    writingTitle: string;
    writingBody: string;
    writingCta: string;
    systemsLabel: string;
    systemsTitle: string;
    systemsMap: Array<{
      tag: string;
      title: string;
      summary: string;
      href: string;
      cta: string;
      diagram: Array<{ step: string; label: string }>;
    }>;
  };
  work: {
    eyebrow: string;
    title: string;
    lead: string;
    statsLabel: string;
    stats: { publicRepos: string; privateSystems: string; rule: string };
    repoLabel: string;
    privateLabel: string;
    publicTitle: string;
    publicBody: string;
    privateTitle: string;
    privateBody: string;
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
    featuredLabel: string;
    featuredTitle: string;
    themeLabel: string;
    themes: Record<WritingTheme, { title: string; description: string }>;
    ledgerLabel: string;
    ledgerTitle: string;
    readNote: string;
    minutes: string;
  };
  resume: {
    eyebrow: string;
    title: string;
    headline: string;
    lead: string;
    summary: string;
    primaryCta: string;
    secondaryCta: string;
    availabilityLabel: string;
    availability: string;
    availabilityNote: string;
    quickFactsLabel: string;
    quickFacts: Array<{ label: string; value: string }>;
    specialtiesLabel: string;
    specialtiesTitle: string;
    specialtiesBody: string;
    specialties: Array<{ title: string; body: string }>;
    capabilitiesLabel: string;
    capabilitiesTitle: string;
    capabilitiesBody: string;
    capabilities: Array<{ title: string; body: string }>;
    stackLabel: string;
    stackTitle: string;
    stackBody: string;
    stackGroups: Array<{ title: string; items: string[] }>;
    readFirstLabel: string;
    readFirstTitle: string;
    readFirstBody: string;
    closingLabel: string;
    closingTitle: string;
    closingBody: string;
    closingChecklist: string[];
    contactTitle: string;
    contactBody: string;
  };
  detail: {
    publicRepo: string;
    privateCase: string;
    role: string;
    year: string;
    status: string;
    readingTime: string;
    highlight: string;
    inspectFirst: string;
    inspectPublic: string;
    inspectPrivate: string;
    openRepository: string;
    repoPrivate: string;
    nextCase: string;
    continueReading: string;
    writingEyebrow: string;
    theme: string;
    relatedNotes: string;
    relatedNotesBody: string;
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
    headerLabel: "Section map",
    headerNote:
      "Case studies, systems notes, and role fit organized as one editorial surface.",
    navigation: [
      { href: "/", label: "Home", blurb: "Cover" },
      { href: "/work", label: "Work", blurb: "Systems" },
      { href: "/writing", label: "Writing", blurb: "Notes" },
      { href: "/resume", label: "Resume", blurb: "Role fit" },
    ],
    footer: {
      eyebrow: "Colophon",
      stamp: "Portfolio surface",
      copy:
        "Built as a bilingual editorial index of case studies, notes, and systems work. Clear boundaries first, gloss second.",
      surfaceLabel: "What this footer does",
      surfaceValue: "It keeps the portfolio, GitHub, and bilingual reading surface tied together.",
      contactLabel: "Direct path",
      contactValue: "Email, GitHub, and LinkedIn stay one click away.",
      connectTitle: "Connect",
      localeTitle: "Reading mode",
      localeBody: "Switch the same dossier between English and PT-BR without changing the structure.",
      openLabel: "Open",
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
      dispatchLabel: "Start here",
      dispatchTitle: "Read this portfolio like an operating dossier.",
      dispatchBody:
        "The quickest path is not chronological. Start with the systems, then inspect the notes behind the decisions, then finish with stack and availability.",
      dispatchRoutes: [
        {
          href: "/work",
          title: "Inspect the systems",
          body: "Start with public repos, then compare them with the private case studies that explain deeper workflow boundaries.",
          cta: "Open work index",
        },
        {
          href: "/writing",
          title: "Read the operating notes",
          body: "Move into short notes about billing, queue visibility, API contracts, and AI guardrails once the cases make sense.",
          cta: "Browse writing",
        },
        {
          href: "/resume",
          title: "Close on the role fit",
          body: "Finish with focus areas, stack, availability, and the contact surface that ties the portfolio back to GitHub.",
          cta: "View resume",
        },
      ],
      readingRulesLabel: "Reading logic",
      readingRulesTitle: "How the surface is curated",
      readingRules: [
        "Public repos stay visible only when README, setup path, and technical evidence hold up under inspection.",
        "Private case studies still need enough workflow explanation to teach another engineer how the system behaves.",
        "Notes stay short and concrete so the site reads like field documentation, not generic thought leadership.",
      ],
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
        "The private projects here still show workflow boundaries, operational constraints, and the trade-offs that shaped the build. VOWGRID, AcessoQR, and ORCEI stay useful even when the code stays closed.",
      surfaceLabel: "Public GitHub surface",
      surfaceTitle:
        "The public repos carry the first proof. The private cases carry the deeper system story.",
      surfaceBody:
        "I keep the public side narrow on purpose. Each repo needs runnable proof, clean docs, and a believable product or engineering signal before it stays visible.",
      writingLabel: "Writing",
      writingTitle: "Short notes written like engineering field reports.",
      writingBody:
        "The writing index is organized by the system edges I care about most: AI guardrails, SaaS operations, backend contracts, and a small builder-notes track.",
      writingCta: "Browse all notes",
      systemsLabel: "Operating map",
      systemsTitle: "The systems I want recruiters to understand first",
      systemsMap: [
        {
          tag: "Private flagship",
          title: "VOWGRID",
          summary:
            "VOWGRID is now documented as a private case study focused on simulation, policy evaluation, approvals, execution receipts, and rollback visibility.",
          href: "/work/vowgrid",
          cta: "Open VOWGRID case",
          diagram: [
            { step: "01", label: "Propose" },
            { step: "02", label: "Simulate" },
            { step: "03", label: "Approve / execute" },
          ],
        },
        {
          tag: "Public repo",
          title: "OnboardPulse",
          summary:
            "OnboardPulse shows tenant isolation, billing, follow-up jobs, upload flows, and AI budget edges.",
          href: "/work/onboardpulse",
          cta: "Open OnboardPulse",
          diagram: [
            { step: "01", label: "Tenant scope" },
            { step: "02", label: "Billing state" },
            { step: "03", label: "Follow-up jobs" },
          ],
        },
        {
          tag: "Public repo",
          title: "MailSieve",
          summary:
            "MailSieve and the supporting notes show how narrow products still need contracts, verification, and ops discipline.",
          href: "/work/mailsieve",
          cta: "Open MailSieve",
          diagram: [
            { step: "01", label: "OpenAPI" },
            { step: "02", label: "Auth / limits" },
            { step: "03", label: "Verify deploy" },
          ],
        },
        {
          tag: "Public repo",
          title: "Neural Network From Scratch",
          summary:
            "The neural-network repo stays visible because it shows deterministic evaluation, logs, tests, and a rerunnable study pipeline.",
          href: "/work/rede-neural-do-zero",
          cta: "Open NN case",
          diagram: [
            { step: "01", label: "Normalize" },
            { step: "02", label: "Train" },
            { step: "03", label: "Evaluate / log" },
          ],
        },
      ],
    },
    work: {
      eyebrow: "Work",
      title: "Six systems that hold up under technical scrutiny.",
      lead:
        "Three are public repositories with runnable engineering proof. Three stay private, but the cases still show architecture, constraints, operating flows, and why the system was shaped the way it was.",
      statsLabel: "Index notes",
      stats: {
        publicRepos: "Public repos",
        privateSystems: "Private systems",
        rule: "Selection rule",
      },
      repoLabel: "Public repository",
      privateLabel: "Private case study",
      publicTitle: "Public repositories with runnable proof",
      publicBody:
        "These are the repos I am comfortable putting in front of a recruiter or another engineer first: each one has a clean scope, technical evidence, and a repo surface worth inspecting.",
      privateTitle: "Private case studies with enough public explanation",
      privateBody:
        "These systems stay closed for now, but the cases still document the important parts: workflow shape, trust boundaries, operator concerns, and the trade-offs behind the product.",
      readCase: "Read case study",
      openRepo: "Repository",
      repoPrivate: "Repo stays private",
    },
    writing: {
      eyebrow: "Writing",
      title: "Notes organized by the system edges that matter in real products.",
      lead:
        "This is not a generic article feed. It is a structured note index about backend contracts, SaaS operations, AI guardrails, and the builder decisions behind the portfolio.",
      ruleLabel: "Writing rule",
      ruleBody:
        "Every note should clarify a decision or constraint I actually care about in products: money, operations, interfaces, and where AI helps without taking over the product.",
      featuredLabel: "Featured notes",
      featuredTitle: "Three notes I want read first",
      themeLabel: "Theme",
      themes: {
        "ai-guardrails": {
          title: "AI Guardrails",
          description:
            "Budget limits, approval paths, simulation, and the product boundaries that make AI features safer to ship.",
        },
        "saas-ops": {
          title: "SaaS Operations",
          description:
            "Billing, tenant separation, replay discipline, and the boring details that keep smaller SaaS products credible.",
        },
        "backend-systems": {
          title: "Backend Systems",
          description:
            "Contracts, queues, response shape, and the habits that keep APIs legible after the first release.",
        },
        "builder-notes": {
          title: "Builder Notes",
          description:
            "Short notes about portfolio positioning, case-study writing, and how I present technical work without hiding the trade-offs.",
        },
      },
      ledgerLabel: "Archive",
      ledgerTitle: "All notes in chronological order",
      readNote: "Read note",
      minutes: "min read",
    },
    resume: {
      eyebrow: "Resume",
      title: "Savio Filho",
      headline: "Software engineer for backend product systems, SaaS operations, and applied AI.",
      lead:
        "My best fit is in products that need clear backend structure, predictable operations, reliable contracts, and documentation that stays useful after the first release.",
      summary:
        "I am most useful in systems that do not live only on the happy path: billing, auth, queues, uploads, tenant boundaries, approval trails, and AI features that need cost limits and human-readable guardrails. I care about the repository surface, handoff quality, and the boring details that let another engineer or operator understand the product quickly.",
      primaryCta: "Browse case studies",
      secondaryCta: "Open GitHub",
      availabilityLabel: "Availability",
      availability:
        "Open to Software Engineer roles with a strong backend or product systems component, remote or hybrid.",
      availabilityNote:
        "I tend to add the most value in teams that care about system clarity, written communication, and ownership beyond the launch path.",
      quickFactsLabel: "Role fit",
      quickFacts: [
        { label: "Base", value: "Brazil / remote or hybrid" },
        { label: "Language", value: "PT-BR native / technical communication in English" },
        {
          label: "Best use",
          value: "Backend product systems, SaaS operations, and AI-backed workflows",
        },
      ],
      specialtiesLabel: "Best fit",
      specialtiesTitle: "Where I tend to create the most leverage",
      specialtiesBody:
        "The kinds of products and teams where my profile usually compounds well.",
      specialties: [
        {
          title: "Backend product systems",
          body:
            "APIs, service layers, approval flows, and repository surfaces that still make sense after the initial push.",
        },
        {
          title: "Real SaaS operations",
          body:
            "Billing, auth, queue-backed jobs, tenant isolation, and the operational detail that keeps a smaller product credible.",
        },
        {
          title: "Applied AI with boundaries",
          body:
            "AI features with cost limits, predictable fallbacks, auditable steps, and decisions that do not take the product away from operators.",
        },
      ],
      capabilitiesLabel: "Capabilities",
      capabilitiesTitle: "What I can usually take ownership of",
      capabilitiesBody:
        "The scope that tends to make sense when a team needs execution with system thinking attached.",
      capabilities: [
        {
          title: "Contracts, APIs, and integrations",
          body:
            "API design, authentication flows, webhooks, billing integrations, and service-to-service boundaries with clear failure modes.",
        },
        {
          title: "Jobs, pipelines, and operational behavior",
          body:
            "Queues, background tasks, upload pipelines, release checklists, runbooks, and the inspection points that keep systems predictable.",
        },
        {
          title: "Docs and technical handoff",
          body:
            "Architecture notes, READMEs, deployment guides, case studies, and repository organization that helps another engineer get to useful context faster.",
        },
      ],
      stackLabel: "Stack",
      stackTitle: "Tools and layers I work with most comfortably",
      stackBody:
        "The emphasis here is not tool volume. It is familiarity with what tends to show up in product systems that need to survive real usage.",
      stackGroups: [
        {
          title: "Languages and runtimes",
          items: [
            "TypeScript",
            "Node.js",
            "Next.js",
            "Express and Fastify",
            "Python",
            "React Native",
          ],
        },
        {
          title: "Data and infrastructure",
          items: [
            "PostgreSQL",
            "Prisma and Drizzle ORM",
            "Supabase",
            "Redis and BullMQ",
            "Object storage",
            "Docker Compose",
          ],
        },
        {
          title: "Quality and delivery",
          items: [
            "GitHub Actions",
            "Vitest and Jest",
            "pytest",
            "OpenAPI",
            "Technical documentation",
            "Repository standards",
          ],
        },
      ],
      readFirstLabel: "Start with these cases",
      readFirstTitle: "Three reads that explain my work better than a bullet list",
      readFirstBody:
        "If I were introducing my work to a serious founder, recruiter, or tech lead, I would start with these paths first.",
      closingLabel: "Direct close",
      closingTitle:
        "If the role needs backend product work with operational clarity, this is probably worth a conversation.",
      closingBody:
        "The clearest picture of my work lives in the combination of GitHub, case studies, and technical writing. The resume helps, but the proof gets stronger when those three surfaces are read together.",
      closingChecklist: [
        "Products with billing, auth, queues, uploads, or automation that need to stay legible after launch.",
        "Teams that value documentation, explicit trade-offs, and ownership beyond the happy path.",
        "Remote or hybrid environments where written clarity and technical handoff matter.",
      ],
      contactTitle: "Direct paths",
      contactBody:
        "Email, GitHub, and LinkedIn stay as the fastest way to reach me and inspect more context.",
    },
    detail: {
      publicRepo: "Public repo",
      privateCase: "Private case study",
      role: "Role",
      year: "Year",
      status: "Status",
      readingTime: "Reading time",
      highlight: "Why this case matters",
      inspectFirst: "Inspect first",
      inspectPublic:
        "Start with the repository surface: README, setup path, CI, docs, and the evidence blocks that show the system survives outside the happy path.",
      inspectPrivate:
        "Start with the architecture, constraints, and evidence blocks. The code stays private on purpose, so the value here is in the system explanation and operational trade-offs.",
      openRepository: "Open repository",
      repoPrivate: "Repository intentionally private",
      nextCase: "Next case study",
      continueReading: "Continue reading",
      writingEyebrow: "Writing",
      theme: "Theme",
      relatedNotes: "Related notes",
      relatedNotesBody:
        "A few more notes from the same track, so the writing surface feels organized instead of flat.",
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
    headerLabel: "Mapa do site",
    headerNote:
      "Estudos de caso, notas de sistema e encaixe de vaga organizados na mesma superficie editorial.",
    navigation: [
      { href: "/", label: "Inicio", blurb: "Capa" },
      { href: "/work", label: "Projetos", blurb: "Sistemas" },
      { href: "/writing", label: "Textos", blurb: "Notas" },
      { href: "/resume", label: "Resumo", blurb: "Vaga" },
    ],
    footer: {
      eyebrow: "Colofao",
      stamp: "Superficie do portfolio",
      copy:
        "Construido como um indice editorial bilingue de estudos de caso, notas e sistemas. Limites claros primeiro, brilho depois.",
      surfaceLabel: "O que este rodape faz",
      surfaceValue: "Ele mantem portfolio, GitHub e leitura bilingue alinhados na mesma superficie.",
      contactLabel: "Caminho direto",
      contactValue: "Email, GitHub e LinkedIn continuam a um clique.",
      connectTitle: "Contato",
      localeTitle: "Modo de leitura",
      localeBody: "Troque o mesmo dossier entre English e PT-BR sem mudar a estrutura.",
      openLabel: "Abrir",
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
      dispatchLabel: "Comece por aqui",
      dispatchTitle: "Leia este portfolio como um dossier operacional.",
      dispatchBody:
        "O caminho mais rapido nao e cronologico. Comece pelos sistemas, depois olhe as notas por tras das decisoes e termine no resumo tecnico e de disponibilidade.",
      dispatchRoutes: [
        {
          href: "/work",
          title: "Inspecione os sistemas",
          body: "Comece pelos repos publicos e depois compare com os casos privados que explicam fluxos e fronteiras mais profundas.",
          cta: "Abrir projetos",
        },
        {
          href: "/writing",
          title: "Leia as notas operacionais",
          body: "Depois entre nas notas curtas sobre billing, visibilidade de filas, contratos de API e guardrails de IA.",
          cta: "Ver textos",
        },
        {
          href: "/resume",
          title: "Feche no encaixe da vaga",
          body: "Termine com foco, stack, disponibilidade e a camada de contato que conecta o site de volta ao GitHub.",
          cta: "Abrir resumo",
        },
      ],
      readingRulesLabel: "Logica de leitura",
      readingRulesTitle: "Como esta superficie e curada",
      readingRules: [
        "Repos publicos so continuam visiveis quando README, setup e evidencia tecnica se sustentam em inspecao real.",
        "Estudos de caso privados ainda precisam explicar fluxo, limites do sistema e impacto operacional de forma util.",
        "Os textos continuam curtos e concretos para o site parecer documentacao de campo, nao conteudo generico.",
      ],
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
        "Os projetos privados aqui continuam mostrando limites de fluxo, restricoes operacionais e trade-offs reais. VOWGRID, AcessoQR e ORCEI ainda ajudam a explicar como eu penso mesmo com o codigo fechado.",
      surfaceLabel: "Superficie publica no GitHub",
      surfaceTitle:
        "Os repositorios publicos carregam a primeira prova. Os casos privados carregam a historia mais profunda do sistema.",
      surfaceBody:
        "Eu mantenho o lado publico enxuto de proposito. Cada repo precisa ter prova executavel, docs limpas e um sinal tecnico ou de produto crivel antes de continuar visivel.",
      writingLabel: "Textos",
      writingTitle: "Notas curtas escritas como relatorios de engenharia.",
      writingBody:
        "A area de escrita agora fica organizada pelos limites de sistema que mais importam para mim: guardrails de IA, operacao SaaS, contratos de backend e notas de construcao.",
      writingCta: "Ver todos os textos",
      systemsLabel: "Mapa operacional",
      systemsTitle: "Os sistemas que eu quero que um recrutador entenda primeiro",
      systemsMap: [
        {
          tag: "Flagship privado",
          title: "VOWGRID",
          summary:
            "VOWGRID agora aparece como estudo de caso privado com foco em simulacao, avaliacao de politica, aprovacoes, comprovantes de execucao e visibilidade de rollback.",
          href: "/work/vowgrid",
          cta: "Abrir caso do VOWGRID",
          diagram: [
            { step: "01", label: "Propor" },
            { step: "02", label: "Simular" },
            { step: "03", label: "Aprovar / executar" },
          ],
        },
        {
          tag: "Repo publico",
          title: "OnboardPulse",
          summary:
            "OnboardPulse mostra isolamento entre tenants, cobranca, jobs de follow-up, uploads e limites de custo para IA.",
          href: "/work/onboardpulse",
          cta: "Abrir OnboardPulse",
          diagram: [
            { step: "01", label: "Tenant" },
            { step: "02", label: "Cobranca" },
            { step: "03", label: "Follow-up" },
          ],
        },
        {
          tag: "Repo publico",
          title: "MailSieve",
          summary:
            "MailSieve e os textos de apoio mostram como produtos pequenos ainda precisam de contrato, verificacao e disciplina operacional.",
          href: "/work/mailsieve",
          cta: "Abrir MailSieve",
          diagram: [
            { step: "01", label: "OpenAPI" },
            { step: "02", label: "Auth / limite" },
            { step: "03", label: "Validar deploy" },
          ],
        },
        {
          tag: "Repo publico",
          title: "Neural Network From Scratch",
          summary:
            "O repositorio de rede neural continua visivel porque mostra avaliacao deterministica, logs, testes e um pipeline de estudo reproduzivel.",
          href: "/work/rede-neural-do-zero",
          cta: "Abrir caso da rede",
          diagram: [
            { step: "01", label: "Normalizar" },
            { step: "02", label: "Treinar" },
            { step: "03", label: "Avaliar / logar" },
          ],
        },
      ],
    },
    work: {
      eyebrow: "Projetos",
      title: "Seis sistemas que se sustentam em avaliacao tecnica.",
      lead:
        "Tres sao repositorios publicos com prova de engenharia reproduzivel. Tres continuam privados, mas os casos ainda mostram arquitetura, restricoes, fluxos operacionais e o motivo de cada decisao.",
      statsLabel: "Notas do indice",
      stats: {
        publicRepos: "Repos publicos",
        privateSystems: "Sistemas privados",
        rule: "Regra de selecao",
      },
      repoLabel: "Repositorio publico",
      privateLabel: "Estudo de caso privado",
      publicTitle: "Repositorios publicos com prova reproduzivel",
      publicBody:
        "Estes sao os repos que eu posso colocar primeiro na frente de um recrutador ou de outro engenheiro: cada um tem escopo claro, evidencia tecnica e uma superficie de repo que vale a inspecao.",
      privateTitle: "Estudos de caso privados com explicacao publica suficiente",
      privateBody:
        "Estes sistemas continuam fechados por enquanto, mas os casos ainda documentam o essencial: formato do fluxo, fronteiras de confianca, preocupacoes operacionais e os trade-offs que moldaram o produto.",
      readCase: "Ler estudo de caso",
      openRepo: "Repositorio",
      repoPrivate: "Repo continua privado",
    },
    writing: {
      eyebrow: "Textos",
      title: "Notas organizadas pelos limites de sistema que importam em produto real.",
      lead:
        "Isto nao e um feed generico de artigos. E um indice editorial sobre contratos de backend, operacao SaaS, guardrails de IA e decisoes de construcao por tras do portfolio.",
      ruleLabel: "Regra dos textos",
      ruleBody:
        "Cada nota precisa esclarecer uma decisao ou restricao que eu realmente considero importante em produtos: dinheiro, operacao, interfaces e onde IA ajuda sem dominar o produto.",
      featuredLabel: "Textos em destaque",
      featuredTitle: "Tres notas para ler primeiro",
      themeLabel: "Tema",
      themes: {
        "ai-guardrails": {
          title: "Guardrails de IA",
          description:
            "Limites de custo, caminhos de aprovacao, simulacao e as fronteiras de produto que tornam IA mais segura de colocar no ar.",
        },
        "saas-ops": {
          title: "Operacao SaaS",
          description:
            "Billing, separacao entre tenants, disciplina de replay e os detalhes operacionais que fazem SaaS pequeno parecer serio.",
        },
        "backend-systems": {
          title: "Sistemas de Backend",
          description:
            "Contratos, filas, formato de resposta e os habitos que mantem APIs legiveis depois da primeira release.",
        },
        "builder-notes": {
          title: "Notas de Construcao",
          description:
            "Notas curtas sobre posicionamento de portfolio, estudos de caso e como apresentar trabalho tecnico sem esconder trade-offs.",
        },
      },
      ledgerLabel: "Arquivo",
      ledgerTitle: "Todos os textos em ordem cronologica",
      readNote: "Ler nota",
      minutes: "min de leitura",
    },
    resume: {
      eyebrow: "Resumo",
      title: "Savio Filho",
      headline: "Engenheiro de software para sistemas de produto backend, SaaS e IA aplicada.",
      lead:
        "Meu melhor encaixe esta em produtos que precisam de backend claro, operacao previsivel, contratos confiaveis e documentacao que continue util depois da primeira release.",
      summary:
        "Eu sou mais util em sistemas que nao vivem so do caminho feliz: billing, auth, filas, uploads, isolamento entre tenants, trilhas de aprovacao e features com IA que precisam de limite de custo e guardrails legiveis. Tambem me importo com a superficie do repositorio, com a qualidade do handoff e com a parte chata que ajuda outro engenheiro ou operador a entender o produto rapido.",
      primaryCta: "Ver estudos de caso",
      secondaryCta: "Abrir GitHub",
      availabilityLabel: "Disponibilidade",
      availability:
        "Aberto a vagas de Software Engineer com componente forte de backend ou sistemas de produto, remoto ou hibrido.",
      availabilityNote:
        "Eu costumo render mais em times que valorizam clareza de sistema, comunicacao escrita e ownership alem da entrega inicial.",
      quickFactsLabel: "Encaixe",
      quickFacts: [
        { label: "Base", value: "Brasil / remoto ou hibrido" },
        { label: "Idioma", value: "PT-BR nativo / comunicacao tecnica em English" },
        {
          label: "Melhor uso",
          value: "Sistemas de produto backend, operacao SaaS e fluxos com IA",
        },
      ],
      specialtiesLabel: "Melhor encaixe",
      specialtiesTitle: "Onde eu costumo gerar mais alavancagem",
      specialtiesBody:
        "Os tipos de produto e de time em que meu perfil tende a render melhor desde cedo.",
      specialties: [
        {
          title: "Sistemas de produto backend",
          body:
            "APIs, camadas de servico, fluxos de aprovacao e superficies de repositorio que continuam fazendo sentido depois da entrega inicial.",
        },
        {
          title: "Operacao SaaS de verdade",
          body:
            "Billing, auth, jobs em fila, isolamento entre tenants e o detalhe operacional que faz um produto pequeno parecer serio.",
        },
        {
          title: "IA aplicada com limite",
          body:
            "Features com IA usando teto de custo, fallback previsivel, passos auditaveis e decisoes que nao tiram o produto do controle de quem opera.",
        },
      ],
      capabilitiesLabel: "Capacidades",
      capabilitiesTitle: "O que eu costumo conseguir assumir bem",
      capabilitiesBody:
        "O tipo de escopo que costuma fazer sentido me entregar quando o problema pede execucao com pensamento de sistema.",
      capabilities: [
        {
          title: "Contratos, APIs e integracoes",
          body:
            "Design de API, autenticacao, webhooks, integracoes de billing e fronteiras entre servicos com falhas mais legiveis.",
        },
        {
          title: "Jobs, pipelines e comportamento operacional",
          body:
            "Filas, tarefas assincronas, pipelines de upload, checklists de release, runbooks e pontos de inspecao para manter o sistema previsivel.",
        },
        {
          title: "Documentacao e handoff tecnico",
          body:
            "Notas de arquitetura, READMEs, guias de deploy, estudos de caso e organizacao de repositorio que ajudam outra pessoa a entrar em contexto mais rapido.",
        },
      ],
      stackLabel: "Stack",
      stackTitle: "Ferramentas e camadas em que trabalho com mais conforto",
      stackBody:
        "O foco aqui nao e volume de ferramenta. E familiaridade real com o que costuma aparecer em sistemas de produto que precisam sobreviver ao uso.",
      stackGroups: [
        {
          title: "Linguagens e runtimes",
          items: [
            "TypeScript",
            "Node.js",
            "Next.js",
            "Express e Fastify",
            "Python",
            "React Native",
          ],
        },
        {
          title: "Dados e infraestrutura",
          items: [
            "PostgreSQL",
            "Prisma e Drizzle ORM",
            "Supabase",
            "Redis e BullMQ",
            "Object storage",
            "Docker Compose",
          ],
        },
        {
          title: "Qualidade e entrega",
          items: [
            "GitHub Actions",
            "Vitest e Jest",
            "pytest",
            "OpenAPI",
            "Documentacao tecnica",
            "Padroes de repositorio",
          ],
        },
      ],
      readFirstLabel: "Comece por estes casos",
      readFirstTitle: "Tres leituras que explicam melhor meu trabalho do que uma lista",
      readFirstBody:
        "Se eu estivesse me apresentando para um founder, recrutador ou tech lead serio, eu comecaria por estes caminhos.",
      closingLabel: "Fechamento direto",
      closingTitle:
        "Se a vaga pede backend de produto com clareza operacional, provavelmente faz sentido conversar.",
      closingBody:
        "O retrato mais fiel do meu trabalho esta na combinacao entre GitHub, estudos de caso e escrita tecnica. O resumo ajuda, mas a prova fica mais forte quando essas tres camadas sao lidas juntas.",
      closingChecklist: [
        "Produtos com billing, auth, filas, uploads ou automacao que precisam continuar legiveis depois do lancamento.",
        "Times que valorizam documentacao, trade-offs explicitos e ownership alem do caminho feliz.",
        "Ambientes remotos ou hibridos em que clareza escrita e handoff tecnico realmente contam.",
      ],
      contactTitle: "Caminhos diretos",
      contactBody:
        "Email, GitHub e LinkedIn continuam sendo as formas mais rapidas de chegar em contato e abrir mais contexto.",
    },
    detail: {
      publicRepo: "Repo publico",
      privateCase: "Estudo de caso privado",
      role: "Papel",
      year: "Ano",
      status: "Status",
      readingTime: "Tempo de leitura",
      highlight: "Por que este caso importa",
      inspectFirst: "O que inspecionar primeiro",
      inspectPublic:
        "Comece pela superficie do repositorio: README, caminho de setup, CI, docs e os blocos de evidencia que mostram que o sistema sobrevive fora do caminho feliz.",
      inspectPrivate:
        "Comece pela arquitetura, pelas restricoes e pelos blocos de evidencia. O codigo fica privado de proposito, entao o valor aqui esta na explicacao do sistema e nos trade-offs operacionais.",
      openRepository: "Abrir repositorio",
      repoPrivate: "Repositorio mantido como privado",
      nextCase: "Proximo estudo de caso",
      continueReading: "Continuar leitura",
      writingEyebrow: "Textos",
      theme: "Tema",
      relatedNotes: "Notas relacionadas",
      relatedNotesBody:
        "Mais algumas notas do mesmo trilho editorial, para a area de escrita ficar organizada e coerente.",
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
