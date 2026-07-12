/* =========================================================
   VCurrículo Premium — script.js
   i18n (PT/EN/ES) · navegação · scrollspy · animações
   ========================================================= */
(function () {
  "use strict";

  /* ----------------------------------------------------
     Dicionário de traduções (chaves = data-i18n)
     ---------------------------------------------------- */
  const I18N = {
    "pt-BR": {
      "a11y.skip": "Pular para o conteúdo",
      "nav.about": "Sobre",
      "nav.experience": "Experiência",
      "nav.projects": "Projetos",
      "nav.skills": "Skills",
      "nav.languages": "Idiomas",
      "nav.certificates": "Certificados",
      "nav.contact": "Contato",
      "nav.download": "Baixar PDF",

      "hero.role": "Desenvolvedor Front-End",
      "hero.tagline":
        "Bacharel em Ciência da Computação. Construo interfaces responsivas e integração com APIs REST usando Angular, React, Next.js e TypeScript.",
      "hero.location": "Poços de Caldas – MG, Brasil",
      "hero.cta.download": "Baixar currículo (PDF)",
      "hero.cta.email": "Enviar e-mail",

      "about.lead":
        "Bacharel em Ciência da Computação (PUC Minas) e Desenvolvedor Front-End/Fullstack, com mais de 1 ano de experiência prática construindo interfaces responsivas e integrações com APIs REST usando Angular, React, Next.js e TypeScript, além de back-end com Node.js e NestJS. Atuei na construção de produtos digitais utilizados por clientes reais, com familiaridade em versionamento Git e metodologias ágeis (Scrum/Kanban). Busco novos desafios em engenharia de software front-end/fullstack, contribuindo tecnicamente com o time e evoluindo em ambientes colaborativos.",
      "about.eduTitle": "PUC Minas – Campus Poços de Caldas",
      "about.eduMeta": "Bacharelado em Ciência da Computação — Concluído em 2026",

      "exp.j1.title": "Desenvolvedor Front-End",
      "exp.j1.date": "Jun 2025 – Atualmente",
      "exp.j1.a":
        "Desenvolvimento de funcionalidades front-end utilizando Next.js, React, TypeScript e Tailwind CSS.",
      "exp.j1.b":
        "Criação de componentes reutilizáveis e interfaces responsivas, aplicando boas práticas de organização de código.",
      "exp.j1.c":
        "Integração com APIs REST (Node.js/NestJS) para consumo e envio de dados entre front-end e serviços de back-end.",
      "exp.j1.d":
        "Colaboração com equipe multidisciplinar utilizando Git e metodologias ágeis (Kanban).",
      "exp.j1.e":
        "Correção de bugs, testes e depuração de funcionalidades, com foco em usabilidade, performance e consistência da interface.",

      "exp.j2.title": "Analista Operacional & Automações",
      "exp.j2.date": "Ago 2024 – Jun 2025",
      "exp.j2.a":
        "Gestão de robôs autônomos (AMRs) e interação com sistemas internos e automações, atuando na interface entre operação e tecnologia.",
      "exp.j2.b":
        "Contato direto com APIs e tecnologias de automação, e produção de relatórios operacionais orientados a dados.",
      "exp.j2.note":
        "Inclui período como Auxiliar Operacional (Abr 2024 – Jul 2024).",
      "exp.j2.t1": "Automação",
      "exp.j2.t2": "Relatórios de dados",

      "exp.j3.title": "Desenvolvedor Front-End Júnior",
      "exp.j3.date": "Abr 2023 – Ago 2023",
      "exp.j3.a":
        "Desenvolvimento de funcionalidades front-end utilizando Angular, TypeScript, HTML5, CSS3 e JavaScript.",
      "exp.j3.b":
        "Criação de componentes reutilizáveis e consumo de APIs REST para integração com o back-end (MySQL).",
      "exp.j3.c":
        "Implementação de testes unitários básicos com Jest para validar componentes e funções críticas.",
      "exp.j3.d":
        "Trabalho em equipe ágil com metodologia Kanban e versionamento de código via Git.",

      "proj.lead": "Projetos pessoais e experiência recente.",
      "proj.p1.title": "VCurrículo",
      "proj.p1.desc":
        "Currículo web pessoal multilíngue (PT/EN/ES), com geração de PDF, desenvolvido do zero em HTML, CSS e JavaScript.",
      "proj.p2.title": "VPortfólio",
      "proj.p2.desc":
        "Portfólio pessoal com tema dark premium, FAB de redes sociais animado e carrossel de projetos interativo com modais.",
      "proj.p3.title": "DocumenTI",
      "proj.p3.desc":
        "Hub de referência que agrega links de documentação oficial de tecnologias fullstack, com foco em performance e usabilidade.",
      "proj.p4.title": "Portfólio Web",
      "proj.p4.desc":
        "Desenvolvimento e manutenção de portfólio ativo com projetos reais em React/Next.js, incluindo testes unitários básicos com Jest, hospedado via GitHub Pages e Vercel.",

      "skills.frontend": "Front-End",
      "skills.database": "Banco de Dados",
      "skills.tools": "Ferramentas",
      "skills.testing": "Testes",
      "skills.methods": "Metodologias",
      "skills.extra": "Complementar",
      "skills.jest": "Jest (nível básico)",
      "skills.meta": "API Oficial da Meta",
      "skills.softTitle": "Soft Skills",

      "soft.s1": "Proatividade e curiosidade técnica",
      "soft.s2": "Comunicação clara e objetiva",
      "soft.s3": "Facilidade com aprendizado autônomo",
      "soft.s4": "Colaboração e trabalho em equipe",
      "soft.s5": "Organização e foco em entrega",

      "lang.l1.name": "Português",
      "lang.l1.level": "Nativo",
      "lang.l2.name": "Inglês",
      "lang.l2.level": "Intermediário (em progresso)",
      "lang.l3.name": "Espanhol",
      "lang.l3.level": "Básico (nível escolar)",

      "cert.c1": "Curso Front-End Completo 2.0",
      "cert.c2": "Curso JavaScript Completo",
      "cert.c3": "NLW Expert – HTML, CSS e JavaScript",
      "cert.c4": "Construção de Páginas Web com HTML, CSS e JS",
      "cert.c5": "Flexbox e CSS Grid",

      "contact.emailLabel": "E-mail",
      "contact.phoneLabel": "Telefone / WhatsApp",
      "contact.portfolioLabel": "Portfólio",
      "contact.locationLabel": "Localização",
      "contact.locationValue": "Poços de Caldas – MG, Brasil",
      "contact.note":
        "Disponibilidade para modelo híbrido em São Paulo, com flexibilidade também para presencial ou remoto. Interesse em atuar com engenharia de software e desenvolvimento front-end.",

      "footer.built": "Desenvolvido em HTML, CSS e JavaScript",
    },

    en: {
      "a11y.skip": "Skip to content",
      "nav.about": "About",
      "nav.experience": "Experience",
      "nav.projects": "Projects",
      "nav.skills": "Skills",
      "nav.languages": "Languages",
      "nav.certificates": "Certificates",
      "nav.contact": "Contact",
      "nav.download": "Download PDF",

      "hero.role": "Front-End Developer",
      "hero.tagline":
        "B.Sc. in Computer Science. I build responsive interfaces and REST API integrations with Angular, React, Next.js and TypeScript.",
      "hero.location": "Poços de Caldas – MG, Brazil",
      "hero.cta.download": "Download resume (PDF)",
      "hero.cta.email": "Send email",

      "about.lead":
        "B.Sc. in Computer Science (PUC Minas) and Front-End/Fullstack Developer with over 1 year of hands-on experience building responsive interfaces and REST API integrations using Angular, React, Next.js and TypeScript, as well as back-end development with Node.js and NestJS. I have built digital products used by real clients, with solid Git version control and agile methodology (Scrum/Kanban) experience. I'm looking for new challenges in front-end/fullstack software engineering, contributing technically to the team and growing in collaborative environments.",
      "about.eduTitle": "PUC Minas – Poços de Caldas Campus",
      "about.eduMeta": "B.Sc. in Computer Science — Completed in 2026",

      "exp.j1.title": "Front-End Developer",
      "exp.j1.date": "Jun 2025 – Present",
      "exp.j1.a":
        "Front-end feature development using Next.js, React, TypeScript and Tailwind CSS.",
      "exp.j1.b":
        "Creation of reusable components and responsive interfaces, applying good code organization practices.",
      "exp.j1.c":
        "REST API integration (Node.js/NestJS) to consume and send data between the front end and back-end services.",
      "exp.j1.d":
        "Collaboration with a multidisciplinary team using Git and agile methodologies (Kanban).",
      "exp.j1.e":
        "Bug fixing, testing and debugging of features, focused on usability, performance and interface consistency.",

      "exp.j2.title": "Operations & Automation Analyst",
      "exp.j2.date": "Aug 2024 – Jun 2025",
      "exp.j2.a":
        "Management of autonomous robots (AMRs) and interaction with internal systems and automations, working at the interface between operations and technology.",
      "exp.j2.b":
        "Direct contact with APIs and automation technologies, and production of data-driven operational reports.",
      "exp.j2.note":
        "Includes a period as Operations Assistant (Apr 2024 – Jul 2024).",
      "exp.j2.t1": "Automation",
      "exp.j2.t2": "Data reports",

      "exp.j3.title": "Junior Front-End Developer",
      "exp.j3.date": "Apr 2023 – Aug 2023",
      "exp.j3.a":
        "Front-end feature development using Angular, TypeScript, HTML5, CSS3 and JavaScript.",
      "exp.j3.b":
        "Creation of reusable components and consumption of REST APIs for back-end integration (MySQL).",
      "exp.j3.c":
        "Implementation of basic unit tests with Jest to validate components and critical functions.",
      "exp.j3.d":
        "Agile teamwork with Kanban methodology and code versioning via Git.",

      "proj.lead": "Personal projects and recent work.",
      "proj.p1.title": "VCurrículo",
      "proj.p1.desc":
        "Personal multilingual (PT/EN/ES) web resume with PDF generation, built from scratch with HTML, CSS and JavaScript.",
      "proj.p2.title": "VPortfólio",
      "proj.p2.desc":
        "Personal portfolio with a premium dark theme, animated floating social FAB, and an interactive project carousel with modals.",
      "proj.p3.title": "DocumenTI",
      "proj.p3.desc":
        "Reference hub aggregating official documentation links for fullstack technologies, focused on performance and usability.",
      "proj.p4.title": "Web Portfolio",
      "proj.p4.desc":
        "Development and maintenance of an active portfolio with real projects in React/Next.js, including basic unit tests with Jest, hosted via GitHub Pages and Vercel.",

      "skills.frontend": "Front-End",
      "skills.database": "Databases",
      "skills.tools": "Tools",
      "skills.testing": "Testing",
      "skills.methods": "Methodologies",
      "skills.extra": "Additional",
      "skills.jest": "Jest (basic)",
      "skills.meta": "Meta Official API",
      "skills.softTitle": "Soft Skills",

      "soft.s1": "Proactivity and technical curiosity",
      "soft.s2": "Clear and objective communication",
      "soft.s3": "Ease with self-directed learning",
      "soft.s4": "Collaboration and teamwork",
      "soft.s5": "Organization and delivery focus",

      "lang.l1.name": "Portuguese",
      "lang.l1.level": "Native",
      "lang.l2.name": "English",
      "lang.l2.level": "Intermediate (in progress)",
      "lang.l3.name": "Spanish",
      "lang.l3.level": "Basic (school level)",

      "cert.c1": "Complete Front-End Course 2.0",
      "cert.c2": "Complete JavaScript Course",
      "cert.c3": "NLW Expert – HTML, CSS & JavaScript",
      "cert.c4": "Building Web Pages with HTML, CSS & JS",
      "cert.c5": "Flexbox and CSS Grid",

      "contact.emailLabel": "Email",
      "contact.phoneLabel": "Phone / WhatsApp",
      "contact.portfolioLabel": "Portfolio",
      "contact.locationLabel": "Location",
      "contact.locationValue": "Poços de Caldas – MG, Brazil",
      "contact.note":
        "Available for a hybrid model in São Paulo, with flexibility for on-site or remote as well. Interested in working with software engineering and front-end development.",

      "footer.built": "Built with HTML, CSS and JavaScript",
    },

    es: {
      "a11y.skip": "Saltar al contenido",
      "nav.about": "Sobre",
      "nav.experience": "Experiencia",
      "nav.projects": "Proyectos",
      "nav.skills": "Skills",
      "nav.languages": "Idiomas",
      "nav.certificates": "Certificados",
      "nav.contact": "Contacto",
      "nav.download": "Descargar PDF",

      "hero.role": "Desarrollador Front-End",
      "hero.tagline":
        "Licenciado en Ciencias de la Computación. Construyo interfaces responsivas e integración con APIs REST usando Angular, React, Next.js y TypeScript.",
      "hero.location": "Poços de Caldas – MG, Brasil",
      "hero.cta.download": "Descargar CV (PDF)",
      "hero.cta.email": "Enviar correo",

      "about.lead":
        "Licenciado en Ciencias de la Computación (PUC Minas) y Desarrollador Front-End/Fullstack, con más de 1 año de experiencia práctica construyendo interfaces responsivas e integraciones con APIs REST usando Angular, React, Next.js y TypeScript, además de back-end con Node.js y NestJS. Participé en la construcción de productos digitales utilizados por clientes reales, con experiencia en control de versiones Git y metodologías ágiles (Scrum/Kanban). Busco nuevos desafíos en ingeniería de software front-end/fullstack, contribuyendo técnicamente con el equipo y evolucionando en entornos colaborativos.",
      "about.eduTitle": "PUC Minas – Campus Poços de Caldas",
      "about.eduMeta":
        "Licenciatura en Ciencias de la Computación — Concluido en 2026",

      "exp.j1.title": "Desarrollador Front-End",
      "exp.j1.date": "Jun 2025 – Actual",
      "exp.j1.a":
        "Desarrollo de funcionalidades front-end utilizando Next.js, React, TypeScript y Tailwind CSS.",
      "exp.j1.b":
        "Creación de componentes reutilizables e interfaces responsivas, aplicando buenas prácticas de organización de código.",
      "exp.j1.c":
        "Integración con APIs REST (Node.js/NestJS) para el consumo y envío de datos entre el front-end y los servicios de back-end.",
      "exp.j1.d":
        "Colaboración con equipo multidisciplinario utilizando Git y metodologías ágiles (Kanban).",
      "exp.j1.e":
        "Corrección de bugs, pruebas y depuración de funcionalidades, con foco en usabilidad, rendimiento y consistencia de la interfaz.",

      "exp.j2.title": "Analista Operativo & Automatizaciones",
      "exp.j2.date": "Ago 2024 – Jun 2025",
      "exp.j2.a":
        "Gestión de robots autónomos (AMRs) e interacción con sistemas internos y automatizaciones, actuando en la interfaz entre operación y tecnología.",
      "exp.j2.b":
        "Contacto directo con APIs y tecnologías de automatización, y producción de informes operativos orientados a datos.",
      "exp.j2.note":
        "Incluye período como Auxiliar Operativo (Abr 2024 – Jul 2024).",
      "exp.j2.t1": "Automatización",
      "exp.j2.t2": "Informes de datos",

      "exp.j3.title": "Desarrollador Front-End Júnior",
      "exp.j3.date": "Abr 2023 – Ago 2023",
      "exp.j3.a":
        "Desarrollo de funcionalidades front-end utilizando Angular, TypeScript, HTML5, CSS3 y JavaScript.",
      "exp.j3.b":
        "Creación de componentes reutilizables y consumo de APIs REST para integración con el back-end (MySQL).",
      "exp.j3.c":
        "Implementación de pruebas unitarias básicas con Jest para validar componentes y funciones críticas.",
      "exp.j3.d":
        "Trabajo en equipo ágil con metodología Kanban y versionado de código vía Git.",

      "proj.lead": "Proyectos personales y experiencia reciente.",
      "proj.p1.title": "VCurrículo",
      "proj.p1.desc":
        "CV web personal multilingüe (PT/EN/ES), con generación de PDF, desarrollado desde cero en HTML, CSS y JavaScript.",
      "proj.p2.title": "VPortfólio",
      "proj.p2.desc":
        "Portafolio personal con tema oscuro premium, FAB animado de redes sociales y carrusel de proyectos interactivo con modales.",
      "proj.p3.title": "DocumenTI",
      "proj.p3.desc":
        "Hub de referencia que reúne enlaces de documentación oficial de tecnologías fullstack, enfocado en rendimiento y usabilidad.",
      "proj.p4.title": "Portafolio Web",
      "proj.p4.desc":
        "Desarrollo y mantenimiento de un portafolio activo con proyectos reales en React/Next.js, incluyendo pruebas unitarias básicas con Jest, alojado en GitHub Pages y Vercel.",

      "skills.frontend": "Front-End",
      "skills.database": "Bases de Datos",
      "skills.tools": "Herramientas",
      "skills.testing": "Pruebas",
      "skills.methods": "Metodologías",
      "skills.extra": "Complementario",
      "skills.jest": "Jest (nivel básico)",
      "skills.meta": "API Oficial de Meta",
      "skills.softTitle": "Soft Skills",

      "soft.s1": "Proactividad y curiosidad técnica",
      "soft.s2": "Comunicación clara y objetiva",
      "soft.s3": "Facilidad con el aprendizaje autónomo",
      "soft.s4": "Colaboración y trabajo en equipo",
      "soft.s5": "Organización y foco en la entrega",

      "lang.l1.name": "Portugués",
      "lang.l1.level": "Nativo",
      "lang.l2.name": "Inglés",
      "lang.l2.level": "Intermedio (en progreso)",
      "lang.l3.name": "Español",
      "lang.l3.level": "Básico (nivel escolar)",

      "cert.c1": "Curso Front-End Completo 2.0",
      "cert.c2": "Curso JavaScript Completo",
      "cert.c3": "NLW Expert – HTML, CSS y JavaScript",
      "cert.c4": "Construcción de Páginas Web con HTML, CSS y JS",
      "cert.c5": "Flexbox y CSS Grid",

      "contact.emailLabel": "Correo",
      "contact.phoneLabel": "Teléfono / WhatsApp",
      "contact.portfolioLabel": "Portafolio",
      "contact.locationLabel": "Ubicación",
      "contact.locationValue": "Poços de Caldas – MG, Brasil",
      "contact.note":
        "Disponibilidad para modelo híbrido en São Paulo, con flexibilidad también para presencial o remoto. Interés en trabajar con ingeniería de software y desarrollo front-end.",

      "footer.built": "Desarrollado en HTML, CSS y JavaScript",
    },
  };

  const SHORT = { "pt-BR": "PT", en: "EN", es: "ES" };
  const HTML_LANG = { "pt-BR": "pt-BR", en: "en", es: "es" };
  const SUPPORTED = ["pt-BR", "en", "es"];
  const NAME = "Vinícius Freitas Viti";

  const $ = (s, ctx) => (ctx || document).querySelector(s);
  const $$ = (s, ctx) => Array.from((ctx || document).querySelectorAll(s));

  /* ----------------------------------------------------
     Aplicar idioma
     ---------------------------------------------------- */
  function applyLang(code) {
    const dict = I18N[code] || I18N["pt-BR"];

    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });

    document.documentElement.setAttribute("lang", HTML_LANG[code] || "pt-BR");
    document.title = NAME + " — " + dict["hero.role"];
    const metaDesc = $('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", dict["about.lead"]);

    const current = $("#langCurrent");
    if (current) current.textContent = SHORT[code] || "PT";

    $$("#langMenu li").forEach((li) => {
      li.setAttribute(
        "aria-selected",
        li.getAttribute("data-lang") === code ? "true" : "false"
      );
    });

    try {
      localStorage.setItem("cv_lang", code);
    } catch (e) {}

    // URL amigável (?lang=en) sem recarregar
    try {
      const url = new URL(window.location.href);
      if (code === "pt-BR") url.searchParams.delete("lang");
      else url.searchParams.set("lang", HTML_LANG[code]);
      history.replaceState(null, "", url);
    } catch (e) {}
  }

  function resolveInitialLang() {
    // Prioridade: ?lang= > localStorage > navegador > pt-BR
    try {
      const q = new URL(window.location.href).searchParams.get("lang");
      if (q) {
        if (q.toLowerCase().startsWith("pt")) return "pt-BR";
        if (q === "en" || q === "es") return q;
      }
    } catch (e) {}
    try {
      const saved = localStorage.getItem("cv_lang");
      if (saved && SUPPORTED.includes(saved)) return saved;
    } catch (e) {}
    const nav = (navigator.language || "pt-BR").toLowerCase();
    if (nav.startsWith("en")) return "en";
    if (nav.startsWith("es")) return "es";
    return "pt-BR";
  }

  /* ----------------------------------------------------
     Dropdown de idioma
     ---------------------------------------------------- */
  function initLangMenu() {
    const box = $("#lang");
    const btn = $("#langBtn");
    const menu = $("#langMenu");
    if (!box || !btn || !menu) return;

    const open = () => {
      box.dataset.open = "true";
      btn.setAttribute("aria-expanded", "true");
    };
    const close = () => {
      box.dataset.open = "false";
      btn.setAttribute("aria-expanded", "false");
    };

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      box.dataset.open === "true" ? close() : open();
    });
    menu.querySelectorAll("li").forEach((li) => {
      li.addEventListener("click", () => {
        applyLang(li.getAttribute("data-lang"));
        close();
      });
    });
    document.addEventListener("click", (e) => {
      if (!box.contains(e.target)) close();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }

  /* ----------------------------------------------------
     Menu mobile (hambúrguer)
     ---------------------------------------------------- */
  function initMobileMenu() {
    const nav = $("#nav");
    const toggle = $("#navToggle");
    const links = $("#navLinks");
    if (!nav || !toggle || !links) return;

    const setOpen = (open) => {
      nav.dataset.menu = open ? "open" : "closed";
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute(
        "aria-label",
        open ? "Fechar menu" : "Abrir menu"
      );
    };

    toggle.addEventListener("click", () =>
      setOpen(nav.dataset.menu !== "open")
    );
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => setOpen(false))
    );
    document.addEventListener("click", (e) => {
      if (
        window.innerWidth <= 768 &&
        nav.dataset.menu === "open" &&
        !links.contains(e.target) &&
        !toggle.contains(e.target)
      )
        setOpen(false);
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) setOpen(false);
    });
  }

  /* ----------------------------------------------------
     Navbar sombreada ao rolar
     ---------------------------------------------------- */
  function initNavShadow() {
    const nav = $("#nav");
    if (!nav) return;
    const onScroll = () =>
      nav.classList.toggle("is-scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ----------------------------------------------------
     Scrollspy — seção ativa no menu
     ---------------------------------------------------- */
  function initScrollSpy() {
    const links = $$("#navLinks a");
    const map = {};
    links.forEach((a) => {
      const id = a.getAttribute("href").slice(1);
      const sec = document.getElementById(id);
      if (sec) map[id] = a;
    });
    const sections = Object.keys(map).map((id) => document.getElementById(id));
    if (!("IntersectionObserver" in window) || !sections.length) return;

    const setActive = (id) => {
      links.forEach((a) => a.classList.remove("is-active"));
      if (map[id]) map[id].classList.add("is-active");
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
  }

  /* ----------------------------------------------------
     Animações de entrada (discretas, com stagger leve)
     ---------------------------------------------------- */
  function initReveal() {
    const items = $$(".reveal");
    const mq =
      typeof window.matchMedia === "function"
        ? window.matchMedia("(prefers-reduced-motion: reduce)")
        : null;
    const reduce = mq ? mq.matches : false;

    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const siblings = Array.from(
            el.parentElement ? el.parentElement.children : [el]
          ).filter((c) => c.classList.contains("reveal"));
          const idx = Math.max(0, siblings.indexOf(el));
          el.style.transitionDelay = Math.min(idx * 60, 240) + "ms";
          el.classList.add("is-visible");
          obs.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    items.forEach((el) => io.observe(el));
  }

  /* ----------------------------------------------------
     Init
     ---------------------------------------------------- */
  function initDownload() {
    const btns = ["navDownload", "heroDownload"]
      .map(function (id) { return document.getElementById(id); })
      .filter(Boolean);
    if (!btns.length) return;
    let busy = false;

    async function run() {
      const main = document.getElementById("conteudo");
      if (!main) return;
      if (!window.html2pdf) { window.print(); return; }
      if (busy) return;
      busy = true;
      btns.forEach(function (b) { b.style.opacity = "0.6"; b.style.pointerEvents = "none"; });

      const opt = {
        margin: [10, 10, 12, 10],
        filename: "Curriculo-Vinicius-Viti.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          backgroundColor: "#ffffff",
          windowWidth: 1024,
          onclone: function (doc) {
            doc.querySelectorAll(".reveal").forEach(function (el) {
              el.style.opacity = "1";
              el.style.transform = "none";
            });
            const cta = doc.querySelector(".hero__cta");
            if (cta) cta.style.display = "none";
            const ATTRS = ["fill", "stroke", "stroke-width", "stroke-linecap", "stroke-linejoin"];
            doc.querySelectorAll("svg.icon use").forEach(function (use) {
              const href = use.getAttribute("href") || use.getAttribute("xlink:href") || "";
              if (href.charAt(0) !== "#") return;
              const sym = doc.getElementById(href.slice(1));
              const svg = use.parentNode;
              if (!sym || !svg) return;
              svg.setAttribute("viewBox", sym.getAttribute("viewBox") || "0 0 24 24");
              ATTRS.forEach(function (a) {
                if (sym.hasAttribute(a)) svg.setAttribute(a, sym.getAttribute(a));
              });
              svg.innerHTML = sym.innerHTML;
            });
          },
        },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        pagebreak: { mode: ["avoid-all", "css", "legacy"] },
      };

      try {
        await window.html2pdf().set(opt).from(main).save();
      } catch (e) {
        console.error(e);
        window.print();
      } finally {
        btns.forEach(function (b) { b.style.opacity = ""; b.style.pointerEvents = ""; });
        busy = false;
      }
    }

    btns.forEach(function (b) { b.addEventListener("click", run); });
  }

  function init() {
    const y = $("#year");
    if (y) y.textContent = new Date().getFullYear();

    applyLang(resolveInitialLang());
    initLangMenu();
    initMobileMenu();
    initNavShadow();
    initScrollSpy();
    initReveal();
    initDownload();
  }

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", init);
  else init();
})();
