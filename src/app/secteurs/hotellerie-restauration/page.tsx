import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import FAQ from "@/components/FAQ";
import FaqSchema from "@/components/FaqSchema";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IA pour hôtellerie et restauration à Monaco",
  description:
    "Yield management, analyse des avis clients, contenus multilingues et facturation automatisée pour les hôtels et restaurants de Monaco grâce à l'IA.",
  alternates: { canonical: "https://quantamonaco.com/secteurs/hotellerie-restauration" },
  openGraph: {
    title: "IA pour hôtellerie et restauration à Monaco",
    description:
      "Yield management, analyse des avis clients, contenus multilingues et facturation automatisée pour les hôtels et restaurants de Monaco grâce à l'IA.",
    url: "https://quantamonaco.com/secteurs/hotellerie-restauration",
    siteName: "Quanta",
    locale: "fr_FR",
    type: "website",
  },
};

const faqItems = [
  {
    q: "L'IA peut-elle vraiment gérer le yield management pendant le Grand Prix de F1 ?",
    a: "Oui, et c'est précisément pendant les périodes de pic que l'agent est le plus utile. Il intègre les données historiques du Grand Prix (taux d'occupation, tarifs pratiqués les années précédentes, délai de réservation moyen), les croise avec les réservations en cours et la demande en temps réel pour recommander des ajustements tarifaires toutes les heures. Le directeur conserve le contrôle final sur chaque modification de prix.",
  },
  {
    q: "Comment l'agent gère-t-il les spécificités linguistiques de la clientèle monégasque ?",
    a: "L'agent est entraîné sur cinq langues principales (français, anglais, italien, russe, arabe) avec des adaptations culturelles pour chaque marché. Un menu traduit en arabe pour une clientèle du Golfe ne sera pas formulé de la même manière qu'une traduction destinée au marché libanais. Le ton, les formules de politesse et les références culturelles sont ajustés.",
  },
  {
    q: "L'IA s'intègre-t-elle avec notre PMS et notre channel manager ?",
    a: "Nos agents sont compatibles avec les principaux PMS du marché (Opera, Mews, Protel) et les channel managers les plus utilisés (SiteMinder, D-EDGE, Cubilis). L'intégration se fait par API ou par connecteur, sans modification de vos processus existants. Le déploiement prend généralement entre 2 et 4 semaines.",
  },
  {
    q: "Quel est le coût d'un agent IA pour un hôtel à Monaco ?",
    a: "Le tarif dépend du périmètre d'automatisation et du nombre de chambres ou de couverts. Nous proposons un audit initial gratuit pour identifier les processus les plus rentables à automatiser. Le retour sur investissement est généralement atteint en moins de 3 mois grâce aux gains de productivité et à l'augmentation du RevPAR.",
  },
  {
    q: "Les données de mes clients sont-elles protégées ?",
    a: "Toutes les données sont hébergées dans un environnement sécurisé conforme aux réglementations applicables en Principauté de Monaco. Aucune donnée client n'est partagée avec des tiers. Les agents IA fonctionnent dans un périmètre cloisonné et les accès sont tracés. Nous signons un accord de confidentialité avant toute intervention.",
  },
];

export default function HotellerieRestaurationPage() {
  return (
    <PageLayout>
      <FaqSchema items={faqItems} />

      {/* Hero */}
      <div className="pt-32 pb-10 sm:pt-36 sm:pb-16 section-surface">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_380px] gap-10 items-center">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted font-semibold">Secteur</span>
              <h1 className="text-[2rem] sm:text-[2.5rem] font-bold mt-3 mb-5 tracking-tight leading-tight">
                Intelligence artificielle pour l&apos;hôtellerie et la restauration à Monaco
              </h1>
              <p className="text-foreground/60 text-[15px] leading-relaxed max-w-xl">
                Optimisez vos revenus, automatisez vos contenus multilingues et transformez les retours clients en leviers d&apos;amélioration grâce à des agents IA conçus pour l&apos;excellence hospitality monégasque.
              </p>
            </div>

            {/* Illustration card */}
            <div className="hidden lg:block">
              <div className="animate-float">
                <div className="rounded-2xl bg-dark p-6 shadow-xl border border-white/[0.06]">
                  <div className="text-[9px] text-white/30 uppercase tracking-wider font-semibold mb-4">Tableau de bord hôtel</div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-white/50">RevPAR optimisé</span>
                      <span className="text-[13px] text-accent font-bold">+12 %</span>
                    </div>
                    <div className="h-px bg-white/[0.06]" />
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-white/50">Réponse aux avis</span>
                      <span className="text-[13px] text-accent font-bold">&lt; 4 h</span>
                    </div>
                    <div className="h-px bg-white/[0.06]" />
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-white/50">Langues actives</span>
                      <span className="text-[13px] text-accent font-bold">5</span>
                    </div>
                    <div className="h-px bg-white/[0.06]" />
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-white/50">Temps admin libéré</span>
                      <span className="text-[13px] text-accent font-bold">15 h/sem</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <section className="py-10 section-surface">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { v: 12, s: " %", p: "+", l: "RevPAR moyen" },
                { v: 4, s: " h", p: "", l: "réponse aux avis" },
                { v: 5, s: "", p: "", l: "langues automatisées" },
                { v: 15, s: " h/sem", p: "", l: "temps admin libéré" },
              ].map((m) => (
                <div key={m.l} className="p-5 rounded-2xl bg-surface border border-border text-center">
                  <div className="text-2xl font-bold"><AnimatedCounter value={m.v} suffix={m.s} prefix={m.p} /></div>
                  <p className="text-muted text-[11px] mt-1">{m.l}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Short intro */}
      <section className="section-padding section-light">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <div className="grid lg:grid-cols-2 gap-12">
              <p className="text-foreground/60 text-[14px] leading-relaxed">
                Monaco concentre une densité exceptionnelle d&apos;établissements hôteliers de prestige et de restaurants étoilés sur un territoire de 2 km². L&apos;Hôtel de Paris, l&apos;Hermitage, le Monte-Carlo Bay, le Fairmont, le Louis XV d&apos;Alain Ducasse, le Blue Bay de Marcel Ravin : chaque adresse doit maintenir un niveau de service irréprochable face à une clientèle ultra-exigeante et internationale. Le secteur fait face à des contraintes spécifiques : rotation élevée du personnel saisonnier, clientèle multilingue, pression sur les marges et obligation de maintenir des standards conformes à la réputation de la Principauté.
              </p>
              <p className="text-foreground/60 text-[14px] leading-relaxed">
                L&apos;intelligence artificielle permet de résoudre cette équation impossible : offrir un service encore plus personnalisé tout en réduisant la charge opérationnelle. Le yield management intelligent ajuste vos tarifs en temps réel, l&apos;analyse sémantique des avis clients identifie les améliorations prioritaires, et la production automatisée de contenus multilingues libère vos équipes pour ce qui compte : l&apos;accueil et l&apos;expérience sur place.
              </p>
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
                <h3 className="text-[14px] font-semibold mb-2">Yield management intelligent</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Analyse en continu du taux d&apos;occupation, des réservations, du calendrier événementiel (F1, Jumping, Fête nationale) et des tarifs concurrents. Ajustements tarifaires quotidiens pour maximiser le RevPAR, recalculés toutes les heures pendant les pics.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Analyse des avis clients</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Collecte et analyse sémantique sur TripAdvisor, Google, Booking.com et guides spécialisés. Score de sentiment par catégorie, tableau de bord mensuel avec recommandations priorisées et alertes temps réel sur les avis négatifs.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Contenus multilingues</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Menus, newsletters, programmes d&apos;événements traduits en anglais, italien, russe et arabe avec adaptations culturelles. Ton ajusté à l&apos;identité de votre maison, prêt à publier en quelques minutes sur tous vos canaux.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Facturation opérationnelle</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Extraction OCR des bons de livraison, rapprochement avec les bons de commande, détection des écarts de prix et pré-validation des factures. Rapprochement bancaire quotidien automatisé.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Réponses aux avis en ligne</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Réponses personnalisées dans la langue du client et le ton de l&apos;établissement, soumises au directeur avant publication. Temps de réponse moyen de 48 h à moins de 4 h.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Prévision de fréquentation</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Prédiction à 7 et 14 jours en croisant historique, réservations, météo et calendrier monégasque. Ajustement des commandes fournisseurs et plannings d&apos;équipe pour réduire le gaspillage.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Comparison */}
      <section className="section-padding section-surface">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-xl font-bold mb-6">Gestion traditionnelle vs intelligence artificielle</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="p-7 rounded-2xl bg-surface border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-foreground/20" />
                  <span className="text-[11px] uppercase tracking-wider text-muted font-semibold">Sans IA</span>
                </div>
                <ul className="space-y-2">
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    Tarifs ajustés manuellement, souvent en retard sur la demande
                  </li>
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    Avis clients traités avec 48 h de délai moyen
                  </li>
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    Traductions externalisées, coûteuses et lentes
                  </li>
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    Facturation fournisseurs saisie à la main
                  </li>
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    Prévisions de fréquentation approximatives
                  </li>
                </ul>
              </div>
              <div className="p-7 rounded-2xl bg-dark text-white border border-white/[0.06]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-[11px] uppercase tracking-wider text-white/40 font-semibold">Avec Quanta</span>
                </div>
                <ul className="space-y-2">
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Yield management recalculé en temps réel, toutes les heures en pic
                  </li>
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Réponses aux avis en moins de 4 h, dans la langue du client
                  </li>
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Contenus en 5 langues générés en quelques minutes
                  </li>
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Facturation OCR avec détection automatique des écarts
                  </li>
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Prévisions à 14 jours basées sur données croisées
                  </li>
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
            <div className="flex flex-wrap gap-3 mt-10">
              <Link href="/expertise/automatisation-processus" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Automatisation</Link>
              <Link href="/expertise/developpement-ia-sur-mesure" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">IA sur mesure</Link>
              <Link href="/expertise/marketing-acquisition" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Marketing</Link>
              <Link href="/secteurs/commerce-luxe" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Commerce de luxe</Link>
              <Link href="/secteurs/immobilier-luxe" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Immobilier de luxe</Link>
              <Link href="/resultats" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Résultats</Link>
              <Link href="/methode" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Méthode</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-background via-accent-light/30 to-accent/20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">
              Offrez une expérience exceptionnelle, sans surcharger vos équipes
            </h2>
            <p className="text-foreground/60 text-[14px] mb-8">
              Échangeons sur les processus qui consomment le plus de temps dans votre établissement. Nous identifierons ensemble les gains rapides accessibles grâce à l&apos;IA en moins de 30 minutes.
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
