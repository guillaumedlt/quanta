import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import FAQ from "@/components/FAQ";
import FaqSchema from "@/components/FaqSchema";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IA pour les cabinets d'avocats à Monaco",
  description:
    "Optimisez rédaction d'actes, recherche juridique et gestion de dossiers grâce à l'IA. Solutions adaptées au droit monégasque, SAM et SASURE.",
  alternates: { canonical: "https://quantamonaco.com/secteurs/cabinets-avocats" },
  openGraph: {
    title: "IA pour les cabinets d'avocats à Monaco",
    description:
      "Optimisez rédaction d'actes, recherche juridique et gestion de dossiers grâce à l'IA. Solutions adaptées au droit monégasque, SAM et SASURE.",
    url: "https://quantamonaco.com/secteurs/cabinets-avocats",
    siteName: "Quanta",
    locale: "fr_FR",
    type: "website",
  },
};

const faqItems = [
  {
    q: "Le secret professionnel est-il garanti ?",
    a: "Oui, intégralement. Les données de votre cabinet sont traitées dans un environnement totalement cloisonné. Aucune information n'est partagée avec des modèles tiers ni utilisée pour entraîner des systèmes externes. Nous proposons un hébergement sur cloud privé européen ou on-premise. Un accord de confidentialité renforcé est signé avant le démarrage de toute mission, en conformité avec les règles déontologiques de l'Ordre des avocats de Monaco.",
  },
  {
    q: "L'IA connaît-elle réellement le droit monégasque ?",
    a: "Nos agents sont spécialement entraînés sur le corpus législatif monégasque : Code civil, Code de procédure civile, Code des obligations, lois spécifiques (loi n° 1.362 LCB-FT, lois sur les SAM, SASURE, SCS), ainsi que la jurisprudence du Tribunal suprême et des juridictions monégasques. Ils sont régulièrement mis à jour lors de la publication de nouveaux textes dans le Journal de Monaco.",
  },
  {
    q: "L'IA peut-elle remplacer un collaborateur juridique ?",
    a: "Non, et ce n'est pas l'objectif. L'agent IA est un outil d'augmentation qui accélère les tâches de recherche, de rédaction et de suivi. L'analyse juridique, le conseil stratégique et la prise de décision restent du ressort de l'avocat. L'IA permet à chaque collaborateur de traiter davantage de dossiers avec la même rigueur, sans augmenter ses horaires.",
  },
  {
    q: "Comment se passe l'intégration avec notre logiciel de gestion de cabinet ?",
    a: "Nous nous intégrons aux principaux logiciels de gestion de cabinet via API ou connecteurs dédiés. Si votre outil ne dispose pas d'API, nous pouvons travailler par extraction de fichiers ou automatisation d'interface. L'intégration est transparente pour les utilisateurs finaux : l'agent apparaît comme un assistant accessible depuis leur interface habituelle.",
  },
  {
    q: "Quel budget prévoir pour un cabinet de 5 à 10 avocats ?",
    a: "Le coût dépend du nombre d'agents déployés et des processus couverts. Nous proposons un modèle de facturation mensuel, sans engagement longue durée, qui inclut la maintenance, les mises à jour des bases juridiques et le support. Un premier entretien gratuit permet d'évaluer vos besoins spécifiques et de fournir une estimation détaillée.",
  },
];

export default function CabinetsAvocatsPage() {
  return (
    <PageLayout>
      <FaqSchema items={faqItems} />

      {/* Hero */}
      <div className="pt-32 pb-10 sm:pt-36 sm:pb-16 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_340px] gap-10 items-center">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted font-semibold">Secteur</span>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mt-3 mb-4">
                Intelligence artificielle pour les cabinets d&apos;avocats à Monaco
              </h1>
              <p className="text-foreground/60 text-[15px] leading-relaxed max-w-xl">
                Accélérez la rédaction d&apos;actes, la recherche en droit monégasque et la gestion de vos dossiers grâce à des agents IA formés aux spécificités juridiques de la Principauté.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="animate-float">
                <div className="bg-dark rounded-2xl p-6 text-white shadow-2xl">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-white/40 mb-4 font-semibold">Assistant juridique IA</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.04]">
                      <span className="text-[12px] text-white/60">Statuts SASURE</span>
                      <span className="text-[13px] font-bold text-emerald-400">15 min</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.04]">
                      <span className="text-[12px] text-white/60">Recherche jurisprudence</span>
                      <span className="text-[13px] font-bold text-emerald-400">12 résultats</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.04]">
                      <span className="text-[12px] text-white/60">Échéances en cours</span>
                      <span className="text-[13px] font-bold text-amber-400">4 cette semaine</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.04]">
                      <span className="text-[12px] text-white/60">Contrats analysés</span>
                      <span className="text-[13px] font-bold text-white/80">38 ce mois</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics dashboard */}
      <section className="section-padding section-surface">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="p-6 rounded-2xl bg-surface border border-border text-center">
                <div className="text-3xl font-bold text-foreground">
                  <AnimatedCounter prefix="-" value={75} suffix="%" />
                </div>
                <p className="text-muted text-[13px] mt-2">temps de recherche juridique</p>
              </div>
              <div className="p-6 rounded-2xl bg-surface border border-border text-center">
                <div className="text-3xl font-bold text-foreground">
                  <AnimatedCounter value={15} suffix=" min" />
                </div>
                <p className="text-muted text-[13px] mt-2">pour un projet de statuts</p>
              </div>
              <div className="p-6 rounded-2xl bg-surface border border-border text-center">
                <div className="text-3xl font-bold text-foreground">
                  <AnimatedCounter value={0} />
                </div>
                <p className="text-muted text-[13px] mt-2">échéance procédurale manquée</p>
              </div>
              <div className="p-6 rounded-2xl bg-surface border border-border text-center">
                <div className="text-3xl font-bold text-foreground">
                  <AnimatedCounter value={4} suffix=" langues" />
                </div>
                <p className="text-muted text-[13px] mt-2">correspondance automatisée</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Intro condensée */}
      <section className="section-padding section-light">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-xl font-bold mb-4">Le constat</h2>
                <p className="text-foreground/60 text-[14px] leading-relaxed">
                  Le système juridique monégasque possède des particularités notables : code civil propre, juridictions spécifiques et formes sociétaires uniques (SAM, SASURE). Les cabinets interviennent dans un contexte multilingue et multijuridictionnel pour une clientèle HNWI. Chaque heure consacrée à des tâches répétitives est soustraite au conseil stratégique.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">L&apos;opportunité IA</h2>
                <p className="text-foreground/60 text-[14px] leading-relaxed">
                  Nos agents sont entraînés sur les textes législatifs monégasques, la jurisprudence du Tribunal suprême et les formulaires du Greffe général. Premiers jets fiables, recherche instantanée, suivi des échéances. La confidentialité est garantie : environnement cloisonné, aucun partage avec des modèles tiers.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Use cases - dark bubble */}
      <section className="bg-dark text-white rounded-[2rem] mx-4 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-6">Ce que nous automatisons</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Rédaction de statuts et d&apos;actes</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Projet de statuts SASURE ou SAM en 15 minutes. Clauses obligatoires, mentions RCI et variantes optionnelles intégrées automatiquement.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Recherche de jurisprudence</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Interrogation en langage naturel de la jurisprudence monégasque. Décisions pertinentes identifiées, passages clés extraits et classés par pertinence.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Transcription d&apos;audiences</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Transcription fidèle avec identification des intervenants. Résumé structuré : arguments de chaque partie, observations du juge, points de suivi.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Analyse de contrats</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Identification des clauses à risque, incohérences avec le Code des obligations, mentions manquantes. Mémo structuré par niveau de risque en quelques minutes.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Gestion des dossiers et échéances</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Calcul automatique des délais de procédure (signification, appel, pourvoi). Alertes aux collaborateurs, surveillance des prescriptions en continu.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Correspondance client multilingue</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Traduction en anglais, italien ou russe avec terminologie juridique appropriée. Précision technique préservée pour la clientèle internationale.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Comparaison Sans IA vs Avec Quanta */}
      <section className="section-padding section-surface">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-8 text-center">Sans IA vs Avec Quanta</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl border border-red-200 bg-red-50/50">
                <p className="text-[12px] uppercase tracking-[0.15em] text-red-400 font-semibold mb-4">Sans IA</p>
                <ul className="space-y-3 text-[13px] text-foreground/60">
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span>3 à 4 heures pour rédiger des statuts de SAM</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span>Recherche jurisprudentielle manuelle, 2h par sujet</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span>Suivi des échéances dans des tableaux dispersés</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span>Traduction externalisée, délais et coûts élevés</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span>Analyse de contrats chronophage et répétitive</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl border border-emerald-200 bg-emerald-50/50">
                <p className="text-[12px] uppercase tracking-[0.15em] text-emerald-500 font-semibold mb-4">Avec Quanta</p>
                <ul className="space-y-3 text-[13px] text-foreground/60">
                  <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>Premier jet de statuts en 15 minutes</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>Recherche instantanée en langage naturel</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>Alertes automatiques, zéro échéance manquée</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>Traduction intégrée en 4 langues, terminologie juridique</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>Mémo d&apos;analyse en minutes avec références légales</li>
                </ul>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding section-tinted">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-6">Questions fréquentes</h2>
            <FAQ items={faqItems} />
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className="flex flex-wrap gap-3 mt-12">
              <Link href="/expertise/audit-strategie-ia" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Audit & stratégie</Link>
              <Link href="/expertise/developpement-ia-sur-mesure" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Développement IA sur mesure</Link>
              <Link href="/secteurs/gestion-patrimoine" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Gestion de patrimoine</Link>
              <Link href="/secteurs/banque-privee" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Banque privée</Link>
              <Link href="/resultats" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Tous les résultats</Link>
              <Link href="/methode" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Notre méthode</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-background via-accent-light/30 to-accent/20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">
              Concentrez-vous sur le conseil, laissez l&apos;IA gérer la charge documentaire
            </h2>
            <p className="text-foreground/60 text-[14px] mb-8">
              Présentons-nous lors d&apos;un entretien de 30 minutes pour explorer comment l&apos;IA peut s&apos;intégrer dans la pratique quotidienne de votre cabinet, en toute confidentialité.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/33645636107"
                className="group bg-accent text-dark font-semibold px-6 py-3 rounded-xl text-[13px] hover:bg-accent-dark transition-all inline-flex items-center gap-2 shadow-lg shadow-accent/20"
              >
                Solliciter un entretien
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <Link
                href="/secteurs"
                className="bg-surface text-foreground font-medium px-6 py-3 rounded-xl text-[13px] border border-border hover:border-foreground/20 transition-all"
              >
                Tous nos secteurs
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </PageLayout>
  );
}
