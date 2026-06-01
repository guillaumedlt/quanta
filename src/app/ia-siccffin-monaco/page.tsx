import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import FAQ from "@/components/FAQ";
import FaqSchema from "@/components/FaqSchema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IA et SICCFIN à Monaco : reporting et déclarations automatisés",
  description:
    "Automatisez vos déclarations et réponses au SICCFIN avec l'IA. Audit trail conforme, réponses sous 48h, dossiers structurés. Pour entités assujetties à Monaco.",
  alternates: { canonical: "https://quantamonaco.com/ia-siccffin-monaco" },
  openGraph: {
    title: "IA et SICCFIN à Monaco : reporting et déclarations automatisés",
    description:
      "Automatisez vos déclarations et réponses au SICCFIN avec l'IA. Audit trail conforme, réponses sous 48h, dossiers structurés. Pour entités assujetties à Monaco.",
    url: "https://quantamonaco.com/ia-siccffin-monaco",
    siteName: "Quanta",
    locale: "fr_FR",
    type: "website",
  },
};

const faqItems = [
  {
    q: "Qu'est-ce que le SICCFIN à Monaco ?",
    a: "Le Service d'Information et de Contrôle sur les Circuits Financiers (SICCFIN) est la cellule de renseignement financier de la Principauté de Monaco, équivalent du TRACFIN français ou de la FINMA suisse. Créé par l'ordonnance souveraine n° 11.246 du 1er avril 1994, il recueille, analyse et transmet aux autorités compétentes toutes les informations relatives au blanchiment de capitaux, au financement du terrorisme et à la corruption. Il est l'interlocuteur unique des entités assujetties à la loi n° 1.362 pour les déclarations de soupçon et les demandes d'information.",
  },
  {
    q: "Quelles déclarations doivent être faites au SICCFIN ?",
    a: "Les entités assujetties doivent transmettre au SICCFIN : les déclarations de soupçon dès qu'une opération paraît liée au blanchiment ou au financement du terrorisme, les déclarations d'opérations en espèces au-delà des seuils réglementaires, les réponses aux demandes d'information adressées par le service, les déclarations relatives au gel des avoirs. Toutes ces transmissions doivent respecter un format précis et inclure un argumentaire factuel documenté. L'IA permet de pré-rédiger ces déclarations au bon format en quelques minutes au lieu de plusieurs heures.",
  },
  {
    q: "Comment l'IA prépare-t-elle une déclaration de soupçon au SICCFIN ?",
    a: "L'agent IA agrège l'ensemble des éléments du dossier (identité du client, structure de détention, source des fonds, historique des opérations, alertes de screening, contexte économique), produit une synthèse argumentée selon le format SICCFIN, rappelle les éléments réglementaires applicables et propose un projet de déclaration. Le compliance officer relit, complète, valide et transmet. Le temps de préparation passe de 4-6 heures à moins de 30 minutes par déclaration, avec une qualité de dossier souvent supérieure.",
  },
  {
    q: "Comment l'IA répond-elle à une demande d'information du SICCFIN ?",
    a: "Lors d'une demande d'information, l'agent IA rassemble automatiquement toutes les pièces du dossier client demandé (KYC, UBO, opérations, échanges, audit trail), produit une synthèse chronologique structurée et un projet de réponse au format attendu. La validation reste humaine et engage le compliance officer. Cette automatisation permet de respecter les délais courts imposés par le SICCFIN (souvent 48 heures) sans mobiliser des journées de travail manuel.",
  },
  {
    q: "L'IA peut-elle aider à préparer une inspection SICCFIN ?",
    a: "Oui. Un agent dédié peut auditer en continu votre stock de dossiers, identifier les anomalies (KYC incomplet, UBO non actualisé, screening daté, déclaration manquante), proposer des actions correctives et produire un tableau de bord conformité prêt à présenter à un inspecteur. En cas d'inspection annoncée, l'agent peut générer en quelques heures un échantillon argumenté de dossiers représentatifs et anticiper les questions probables. C'est de la conformité proactive plutôt que réactive.",
  },
];

export default function IaSiccfinMonacoPage() {
  return (
    <PageLayout>
      <FaqSchema items={faqItems} />

      {/* Hero */}
      <section className="section-padding pt-32 sm:pt-40 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">SICCFIN — Cellule de renseignement financier Monaco</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4 mb-6">
              IA et reporting SICCFIN à Monaco
            </h1>
            <p className="text-foreground/60 text-[15px] leading-relaxed max-w-3xl mx-auto mb-8">
              Le SICCFIN attend des dossiers structurés, argumentés et traçables, sous des délais courts. Quanta déploie des agents IA qui préparent vos déclarations de soupçon, réponses aux demandes d&apos;information et tableaux de bord conformité au format requis, en quelques minutes plutôt qu&apos;en plusieurs heures.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/33645636107"
                className="group bg-accent text-dark font-semibold px-6 py-3 rounded-xl text-[13px] hover:bg-accent-dark transition-all inline-flex items-center gap-2 shadow-lg shadow-accent/20"
              >
                Discuter de votre reporting SICCFIN
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <Link href="/contact" className="bg-surface text-foreground font-medium px-6 py-3 rounded-xl text-[13px] border border-border hover:border-foreground/20 transition-all">
                Demander un audit
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 section-surface">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={30} suffix=" min" /></div>
                <p className="text-foreground/40 text-[12px]">par déclaration de soupçon</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={48} suffix="h" /></div>
                <p className="text-foreground/40 text-[12px]">délai réponse demande SICCFIN</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={100} suffix="%" /></div>
                <p className="text-foreground/40 text-[12px]">audit trail traçable</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={0} /></div>
                <p className="text-foreground/40 text-[12px]">déclaration tardive</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Le contexte */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Contexte</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Pourquoi le reporting SICCFIN est devenu un enjeu critique</h2>
            <div className="space-y-4 text-foreground/60 text-[14px] leading-relaxed">
              <p>
                Les inspections du SICCFIN se sont intensifiées ces dernières années, sous l&apos;impulsion des recommandations du <abbr title="Comité d'experts sur l'évaluation des mesures de lutte contre le blanchiment des capitaux">MONEYVAL</abbr> et du GAFI. Les contrôles sont plus fréquents, plus approfondis et plus rapides. Les délais de réponse aux demandes d&apos;information sont souvent inférieurs à 48 heures, parfois 24 heures pour les cas urgents.
              </p>
              <p>
                Dans le même temps, les volumes de déclarations à produire explosent : déclarations de soupçon, mises à jour KYC périodiques, réponses aux demandes ponctuelles, reporting agrégé. Les compliance officers monégasques ne peuvent plus tout faire à la main sans déborder.
              </p>
              <p>
                L&apos;automatisation par IA n&apos;est plus un luxe : c&apos;est devenu une condition de tenabilité du dispositif. La <Link href="/ia-conformite-loi-1362-monaco" className="text-accent hover:underline">loi n° 1.362</Link> n&apos;impose pas de format de mise en œuvre, mais elle impose un résultat : la qualité, la rigueur et la rapidité du dispositif. Ce résultat passe désormais par l&apos;industrialisation.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Ce que l'agent automatise - dark bubble */}
      <section className="bg-dark text-white rounded-[2rem] mx-4 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Reporting automatisé</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-4">Les quatre formats SICCFIN automatisés</h2>
            <p className="text-white/50 text-[14px] leading-relaxed max-w-3xl mb-10">
              Nos agents respectent les formats attendus par le SICCFIN et produisent des dossiers prêts à transmettre. Le compliance officer relit, ajuste et valide.
            </p>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 gap-4">
            <RevealOnScroll>
              <div className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2 text-white/80">Déclaration de soupçon (DS)</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">Agrégation des éléments du dossier, argumentaire factuel, références réglementaires, projet de déclaration au format SICCFIN. Préparation en moins de 30 minutes.</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll>
              <div className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2 text-white/80">Réponse à demande d&apos;information</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">Rassemblement automatique des pièces, synthèse chronologique structurée, projet de réponse argumentée. Délai de réponse respecté même à 24-48 heures.</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll>
              <div className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2 text-white/80">Reporting périodique agrégé</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">Statistiques de conformité, indicateurs de risque, tableaux de bord trimestriels et annuels au format requis. Données extraites du core banking et consolidées.</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll>
              <div className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2 text-white/80">Préparation d&apos;inspection</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">Audit continu du stock de dossiers, identification des manques, plan de remédiation, échantillon argumenté de dossiers représentatifs.</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Bonnes pratiques */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Bonnes pratiques</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Cinq bonnes pratiques pour un reporting SICCFIN sans faille</h2>
            <div className="space-y-4 text-foreground/60 text-[14px] leading-relaxed">
              <p><strong className="text-foreground">1. Documentez en continu, pas en réaction.</strong> Toute décision conformité doit laisser une trace horodatée avec son justificatif. L&apos;IA y aide en captant automatiquement chaque vérification dans un audit trail unique.</p>
              <p><strong className="text-foreground">2. Argumentez factuellement.</strong> Une déclaration de soupçon ou une réponse SICCFIN doit s&apos;appuyer sur des faits documentés, pas sur des impressions. L&apos;agent IA structure systématiquement l&apos;argumentaire autour de pièces vérifiables.</p>
              <p><strong className="text-foreground">3. Anticipez les inspections.</strong> Un agent dédié à l&apos;audit interne identifie les dossiers à risque avant qu&apos;un inspecteur ne le fasse. La conformité proactive coûte 10 fois moins cher que la conformité réactive.</p>
              <p><strong className="text-foreground">4. Standardisez les formats.</strong> Le SICCFIN attend des formats précis. Un agent IA produit systématiquement au bon format, ce qui élimine les allers-retours et accélère les validations.</p>
              <p><strong className="text-foreground">5. Gardez la décision humaine.</strong> L&apos;IA prépare, l&apos;humain valide. C&apos;est non négociable, tant pour la qualité du jugement que pour la responsabilité juridique de l&apos;établissement.</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Pour aller plus loin */}
      <section className="section-padding section-surface">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Ressources</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Pour aller plus loin sur SICCFIN et la conformité monégasque</h2>
            <div className="flex flex-wrap gap-3">
              <Link href="/ia-conformite-loi-1362-monaco" className="text-[13px] bg-background px-4 py-2 rounded-lg border border-border hover:border-accent/30 transition-all">IA et loi n° 1.362</Link>
              <Link href="/automatiser-kyc-monaco" className="text-[13px] bg-background px-4 py-2 rounded-lg border border-border hover:border-accent/30 transition-all">Automatiser le KYC</Link>
              <Link href="/secteurs/banque-privee" className="text-[13px] bg-background px-4 py-2 rounded-lg border border-border hover:border-accent/30 transition-all">IA pour la banque privée</Link>
              <Link href="/blog/automatiser-conformite-lcb-ft-monaco" className="text-[13px] bg-background px-4 py-2 rounded-lg border border-border hover:border-accent/30 transition-all">Automatiser la conformité LCB-FT</Link>
              <Link href="/blog/ia-audit-interne-controle-monaco" className="text-[13px] bg-background px-4 py-2 rounded-lg border border-border hover:border-accent/30 transition-all">IA pour l&apos;audit interne</Link>
              <Link href="/resultats/controle-lcb-ft" className="text-[13px] bg-background px-4 py-2 rounded-lg border border-border hover:border-accent/30 transition-all">Cas : contrôle LCB-FT</Link>
              <Link href="/resultats/conformite-documentaire" className="text-[13px] bg-background px-4 py-2 rounded-lg border border-border hover:border-accent/30 transition-all">Cas : conformité documentaire</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Questions fréquentes</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-8">Questions sur SICCFIN et l&apos;IA</h2>
          </RevealOnScroll>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-background via-accent-light/30 to-accent/20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">Renforçons votre reporting SICCFIN</h2>
            <p className="text-foreground/60 text-[14px] mb-8">
              Premier entretien de 30 minutes offert. Nous évaluons votre dispositif de reporting actuel, identifions les leviers d&apos;automatisation, et vous remettons un cadrage chiffré sous 48 heures.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="https://wa.me/33645636107" className="group bg-accent text-dark font-semibold px-6 py-3 rounded-xl text-[13px] hover:bg-accent-dark transition-all inline-flex items-center gap-2 shadow-lg shadow-accent/20">
                Solliciter un entretien
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <Link href="/contact" className="bg-surface text-foreground font-medium px-6 py-3 rounded-xl text-[13px] border border-border hover:border-foreground/20 transition-all">
                Formulaire de contact
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </PageLayout>
  );
}
