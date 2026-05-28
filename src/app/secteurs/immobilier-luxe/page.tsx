import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import FAQ from "@/components/FAQ";
import FaqSchema from "@/components/FaqSchema";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IA pour l'immobilier de luxe à Monaco",
  description:
    "Automatisez brochures de prestige, matching acheteurs, veille urbanistique et gestion documentaire pour l'immobilier de luxe à Monaco.",
  alternates: { canonical: "https://quantamonaco.com/secteurs/immobilier-luxe" },
  openGraph: {
    title: "IA pour l'immobilier de luxe à Monaco",
    description:
      "Automatisez brochures de prestige, matching acheteurs, veille urbanistique et gestion documentaire pour l'immobilier de luxe à Monaco.",
    url: "https://quantamonaco.com/secteurs/immobilier-luxe",
    siteName: "Quanta",
    locale: "fr_FR",
    type: "website",
  },
};

const faqItems = [
  {
    q: "L'IA respecte-t-elle les obligations LCB-FT des professionnels de l'immobilier ?",
    a: "Oui. Les professionnels de l'immobilier à Monaco sont soumis à des obligations de vigilance en vertu de la loi n° 1.362 et sont supervisés par le SICCFIN. Nos agents intègrent les vérifications d'identité, la collecte de justificatifs de source de fonds et le screening des listes de sanctions, conformément aux exigences réglementaires applicables aux intermédiaires immobiliers en Principauté.",
  },
  {
    q: "Pouvez-vous respecter notre charte graphique pour les brochures ?",
    a: "Absolument. Lors de la phase de configuration, nous intégrons votre charte graphique complète : polices, couleurs, logo, mise en page, style photographique. Chaque brochure générée respecte votre identité visuelle. Vous pouvez également définir plusieurs modèles (vente, location, programme neuf) selon vos besoins.",
  },
  {
    q: "Comment fonctionne le matching acheteurs/biens ?",
    a: "L'agent analyse les critères déclarés par chaque acquéreur (budget, surface, localisation, étage, vue, parking, cave) et les croise avec les caractéristiques de votre portefeuille de biens. Un algorithme de pondération attribue un score de pertinence à chaque correspondance. Les suggestions sont envoyées automatiquement aux acquéreurs avec une présentation personnalisée du bien.",
  },
  {
    q: "Quels quartiers et types de biens couvrez-vous ?",
    a: "Nos agents couvrent l'ensemble du marché monégasque : Monte-Carlo, Carré d'Or, Larvotto, Fontvieille, Condamine, Jardin Exotique, Moneghetti, ainsi que les programmes neufs (Anse du Portier, Testimonio II). Ils gèrent aussi bien les appartements, penthouses, villas que les locaux commerciaux et bureaux de prestige.",
  },
  {
    q: "Combien de temps faut-il pour déployer la solution dans notre agence ?",
    a: "Le déploiement initial prend entre 3 et 6 semaines. Nous commençons par un audit de vos processus existants, configurons les agents sur votre portefeuille de biens et votre base acquéreurs, puis formons vos équipes. La prise en main est rapide : la plupart des négociateurs sont autonomes après une session de formation d'une heure.",
  },
];

export default function ImmobilierLuxePage() {
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
                Intelligence artificielle pour l&apos;immobilier de luxe à Monaco
              </h1>
              <p className="text-foreground/60 text-[15px] leading-relaxed max-w-xl">
                Accélérez vos transactions, automatisez la production de brochures et identifiez les meilleures correspondances acheteurs/biens sur le marché le plus exclusif au monde.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="animate-float">
                <div className="bg-dark rounded-2xl p-6 text-white shadow-2xl">
                  <p className="text-[10px] uppercase tracking-[0.15em] text-white/40 mb-4 font-semibold">Activité agence</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.04]">
                      <span className="text-[12px] text-white/60">Brochures générées</span>
                      <span className="text-[13px] font-bold text-emerald-400">24 ce mois</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.04]">
                      <span className="text-[12px] text-white/60">Matchings envoyés</span>
                      <span className="text-[13px] font-bold text-emerald-400">87</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.04]">
                      <span className="text-[12px] text-white/60">Visites planifiées</span>
                      <span className="text-[13px] font-bold text-amber-400">12 cette sem.</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.04]">
                      <span className="text-[12px] text-white/60">Dossiers complets</span>
                      <span className="text-[13px] font-bold text-emerald-400">100 %</span>
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
                  <AnimatedCounter value={10} suffix=" min" />
                </div>
                <p className="text-muted text-[13px] mt-2">brochure trilingue de prestige</p>
              </div>
              <div className="p-6 rounded-2xl bg-surface border border-border text-center">
                <div className="text-3xl font-bold text-foreground">
                  <AnimatedCounter prefix="+" value={35} suffix="%" />
                </div>
                <p className="text-muted text-[13px] mt-2">taux de conversion matching</p>
              </div>
              <div className="p-6 rounded-2xl bg-surface border border-border text-center">
                <div className="text-3xl font-bold text-foreground">
                  <AnimatedCounter value={100} suffix="%" />
                </div>
                <p className="text-muted text-[13px] mt-2">complétude à la signature</p>
              </div>
              <div className="p-6 rounded-2xl bg-surface border border-border text-center">
                <div className="text-3xl font-bold text-foreground">
                  <AnimatedCounter value={3} suffix=" langues" />
                </div>
                <p className="text-muted text-[13px] mt-2">brochures automatiques</p>
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
                  Avec un prix moyen au m² dépassant 50 000 euros sur 2 km², Monaco est un marché à part. Les acquéreurs sont internationaux et exigeants, la concurrence entre agences est féroce. Chaque détail compte : qualité des brochures, rapidité de réponse, pertinence du matching. Les obligations LCB-FT ajoutent une couche de complexité documentaire.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">L&apos;opportunité IA</h2>
                <p className="text-foreground/60 text-[14px] leading-relaxed">
                  Nos agents permettent de se différencier par la vitesse d&apos;exécution et la qualité du service. Génération de brochures trilingues, veille urbanistique, matching intelligent : chaque processus est optimisé sans compromettre l&apos;excellence attendue. L&apos;IA libère vos négociateurs pour la relation humaine et la conclusion des transactions.
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
                <h3 className="text-[14px] font-semibold mb-2">Brochures de biens automatisées</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Photos et caractéristiques importées, brochure PDF de prestige générée en français, anglais et italien. Charte graphique respectée, mentions légales intégrées, prête en 10 minutes.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Matching acheteurs / biens</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Critères acquéreurs croisés avec le portefeuille disponible. Classement par pertinence, suggestions personnalisées envoyées automatiquement aux prospects les plus qualifiés.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Veille urbanistique en Principauté</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Surveillance des permis de construire, projets d&apos;extension (Anse du Portier, Testimonio II) et décisions du Comité consultatif. Résumé hebdomadaire des opportunités.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Gestion documentaire des transactions</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Classement automatique des pièces (compromis, diagnostics, attestations notariales). Vérification de complétude selon les exigences monégasques, alertes si document manquant.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Analyse comparative de marché</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Rapport d&apos;estimation argumenté croisant transactions récentes, caractéristiques du bien et tendances du marché. Document présentable au propriétaire avec graphiques sourcés.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Suivi et relance acquéreurs</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Parcours acquéreur suivi de bout en bout. Relances personnalisées après visite, biens alternatifs proposés, alertes quand un prospect montre des signaux d&apos;intérêt forts.
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
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span>2 à 3 heures par brochure avec graphiste et traducteur</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span>Matching acquéreurs/biens manuel et approximatif</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span>Veille urbanistique chronophage et irrégulière</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span>Documents éparpillés, retards de closing</li>
                  <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">✕</span>Relances acquéreurs oubliées ou génériques</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl border border-emerald-200 bg-emerald-50/50">
                <p className="text-[12px] uppercase tracking-[0.15em] text-emerald-500 font-semibold mb-4">Avec Quanta</p>
                <ul className="space-y-3 text-[13px] text-foreground/60">
                  <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>Brochure trilingue en 10 minutes, charte respectée</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>Matching intelligent, +35 % de conversion</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>Résumé hebdomadaire automatique des opportunités</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>100 % de complétude documentaire à la signature</li>
                  <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>Relances personnalisées et suggestions proactives</li>
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
              <Link href="/expertise/automatisation-workflows" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Automatisation workflows</Link>
              <Link href="/secteurs/gestion-patrimoine" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Gestion de patrimoine</Link>
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
              Démarquez-vous sur le marché immobilier le plus compétitif au monde
            </h2>
            <p className="text-foreground/60 text-[14px] mb-8">
              Découvrons ensemble comment l&apos;IA peut accélérer vos transactions et enrichir l&apos;expérience de vos clients acquéreurs et vendeurs.
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
