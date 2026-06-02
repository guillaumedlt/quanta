import Image from "next/image";

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
          {/* Editorial photo */}
          <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden order-2 lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1633114127188-99b4dd741180?w=1600&q=80&auto=format&fit=crop"
              alt="Collaborateurs en discussion autour d'un projet IA — Quanta accompagne dans la durée"
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover grayscale contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/30 via-transparent to-transparent" />
            <p className="absolute bottom-2 right-3 text-[10px] text-white/40">
              Microsoft 365 / Unsplash
            </p>
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
