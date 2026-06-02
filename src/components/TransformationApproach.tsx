const pillars = [
  {
    title: "Étape par étape",
    text: "Pas de big bang. Nous démarrons par un cas d'usage à fort ROI, prouvons la valeur, puis étendons. Vous voyez les résultats avant chaque nouvel investissement.",
  },
  {
    title: "Vous gardez le contrôle",
    text: "Toute décision critique est validée par vos équipes. L'IA prépare, l'humain décide. Pas d'automatisation aveugle, pas de boîte noire.",
  },
  {
    title: "Sans dépendance technique",
    text: "Documentation complète, formation pratique de vos équipes. À la fin de l'intervention, vous êtes autonomes. Nous ne cultivons pas la rente.",
  },
  {
    title: "Transparence totale",
    text: "Tarifs clairs, livrables documentés, audit trail. Aucune zone d'ombre. Vous comprenez ce qui se passe et vous décidez de ce qui s'en va.",
  },
];

export default function TransformationApproach() {
  return (
    <section className="my-12 sm:my-16 mx-4">
      <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-accent-light/40 via-background to-surface border border-border/50 p-6 sm:p-10 lg:p-14">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-12 items-center">
          {/* Abstract illustration: progressive transformation journey */}
          <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden order-2 lg:order-1 bg-gradient-to-br from-accent-light/30 via-background/50 to-surface border border-border/40">
            <svg
              viewBox="0 0 400 500"
              className="absolute inset-0 w-full h-full text-foreground"
              preserveAspectRatio="xMidYMid meet"
              role="img"
              aria-label="Illustration : transformation progressive en quatre étapes"
            >
              {/* Soft background orb */}
              <circle cx="280" cy="120" r="170" fill="currentColor" opacity="0.04" />
              <circle cx="120" cy="380" r="130" fill="currentColor" opacity="0.03" />

              {/* Subtle grid */}
              <defs>
                <pattern id="ta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.06" />
                </pattern>
              </defs>
              <rect width="400" height="500" fill="url(#ta-grid)" />

              {/* Ascending journey path (dashed) */}
              <path
                d="M 50 430 C 100 400 140 380 180 320 C 220 260 250 220 290 160 C 320 120 340 90 360 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                opacity="0.25"
                strokeDasharray="3,5"
                strokeLinecap="round"
              />

              {/* 4 milestones — grow as journey progresses */}
              <g className="text-accent">
                {/* Step 1 — Immersion */}
                <circle cx="50" cy="430" r="7" fill="currentColor" />
                <circle cx="50" cy="430" r="14" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />

                {/* Step 2 — Diagnostic */}
                <circle cx="180" cy="320" r="9" fill="currentColor" />
                <circle cx="180" cy="320" r="18" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />

                {/* Step 3 — Déploiement */}
                <circle cx="290" cy="160" r="11" fill="currentColor" />
                <circle cx="290" cy="160" r="22" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />

                {/* Step 4 — Transmission (with pulse rings) */}
                <circle cx="360" cy="60" r="14" fill="currentColor" />
                <circle cx="360" cy="60" r="26" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
                <circle cx="360" cy="60" r="40" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
              </g>

              {/* Tiny labels */}
              <g className="fill-foreground/40" fontSize="9" fontFamily="ui-sans-serif, system-ui" letterSpacing="0.1em">
                <text x="50" y="460" textAnchor="middle">01</text>
                <text x="180" y="355" textAnchor="middle">02</text>
                <text x="290" y="195" textAnchor="middle">03</text>
                <text x="360" y="95" textAnchor="middle">04</text>
              </g>
            </svg>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">
              Une approche rassurante
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold tracking-tight mt-3 mb-4 leading-tight">
              Une transformation à votre rythme. Sans bouleversement.
            </h2>
            <p className="text-foreground/60 text-[14px] sm:text-[15px] leading-relaxed mb-8 max-w-xl">
              Intégrer l&apos;IA dans une entreprise n&apos;a rien d&apos;abstrait ni d&apos;effrayant — à condition d&apos;avoir un partenaire qui respecte vos contraintes, vos équipes et votre tempo. Voici les quatre garanties que nous portons sur chaque mission.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {pillars.map((p) => (
                <div key={p.title} className="p-5 rounded-2xl bg-background/80 backdrop-blur-sm border border-border/60">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <h3 className="text-[14px] font-semibold">{p.title}</h3>
                  </div>
                  <p className="text-foreground/55 text-[12.5px] leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
