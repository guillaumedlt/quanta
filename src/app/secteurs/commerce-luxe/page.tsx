import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import FAQ from "@/components/FAQ";
import FaqSchema from "@/components/FaqSchema";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IA pour le commerce de luxe à Monaco | Quanta AI",
  description:
    "CRM augmenté, stocks prédictifs, clienteling automatisé et campagnes personnalisées pour les boutiques de luxe du Carré d'Or à Monaco.",
  alternates: { canonical: "https://quantamonaco.com/secteurs/commerce-luxe" },
  openGraph: {
    title: "IA pour le commerce de luxe à Monaco | Quanta AI",
    description:
      "CRM augmenté, stocks prédictifs, clienteling automatisé et campagnes personnalisées pour les boutiques de luxe du Carré d'Or à Monaco.",
    url: "https://quantamonaco.com/secteurs/commerce-luxe",
    siteName: "Quanta",
    locale: "fr_FR",
    type: "website",
  },
};

const faqItems = [
  {
    q: "L'IA remplace-t-elle le vendeur en boutique de luxe ?",
    a: "Absolument pas. L'agent IA est un assistant invisible qui prépare le terrain pour le vendeur : il rassemble les informations client, suggère les produits à présenter et pré-rédige les messages de relance. La relation humaine reste au cœur de l'expérience en boutique. L'IA libère le vendeur des tâches administratives pour qu'il consacre 100 % de son temps au client.",
  },
  {
    q: "Comment l'agent gère-t-il les clients multi-boutiques ?",
    a: "Lorsqu'un client visite plusieurs boutiques du même groupe (par exemple à Monaco et à Cannes), l'agent centralise tout l'historique dans un profil unifié. Le vendeur à Monaco sait ce que le client a acheté à Cannes et vice versa. Les doublons sont détectés et fusionnés automatiquement pour garantir une vue 360 degrés du client.",
  },
  {
    q: "Combien de temps faut-il pour déployer le CRM augmenté ?",
    a: "Le déploiement prend généralement entre 3 et 6 semaines selon la complexité de votre base clients existante et le nombre d'intégrations nécessaires. La première semaine est consacrée à l'import et au nettoyage des données, les deux semaines suivantes à la configuration des automatisations et la dernière à la formation des équipes.",
  },
  {
    q: "Les données clients sont-elles sécurisées ?",
    a: "Toutes les données sont hébergées dans un environnement sécurisé conforme aux réglementations applicables en Principauté. Aucune donnée client n'est partagée avec des tiers ou utilisée pour entraîner des modèles externes. Les accès sont contrôlés par rôles et chaque action est tracée. Nous signons un accord de confidentialité avant toute intervention.",
  },
  {
    q: "L'IA fonctionne-t-elle avec notre logiciel de caisse actuel ?",
    a: "Nos agents s'intègrent avec les principaux logiciels de caisse et ERP du retail luxe (Cegid Retail, Lightspeed, RetailPro). L'intégration se fait par API ou par export automatisé. Si votre logiciel n'est pas dans la liste, nous réalisons un audit technique gratuit pour évaluer la faisabilité de l'intégration.",
  },
];

export default function CommerceLuxePage() {
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
                Intelligence artificielle pour le commerce de luxe à Monaco
              </h1>
              <p className="text-foreground/60 text-[15px] leading-relaxed max-w-xl">
                Personnalisez chaque interaction client, anticipez la demande et maximisez la performance de vos boutiques grâce à des agents IA pensés pour le retail haut de gamme monégasque.
              </p>
            </div>

            {/* Illustration card */}
            <div className="hidden lg:block">
              <div className="animate-float">
                <div className="rounded-2xl bg-dark p-6 shadow-xl border border-white/[0.06]">
                  <div className="text-[9px] text-white/30 uppercase tracking-wider font-semibold mb-4">Performance boutique</div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-white/50">Panier moyen</span>
                      <span className="text-[13px] text-accent font-bold">+18 %</span>
                    </div>
                    <div className="h-px bg-white/[0.06]" />
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-white/50">Ruptures de stock</span>
                      <span className="text-[13px] text-accent font-bold">-35 %</span>
                    </div>
                    <div className="h-px bg-white/[0.06]" />
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-white/50">Taux d&apos;ouverture emails</span>
                      <span className="text-[13px] text-accent font-bold">x3,2</span>
                    </div>
                    <div className="h-px bg-white/[0.06]" />
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-white/50">Conversion relances</span>
                      <span className="text-[13px] text-accent font-bold">25 %</span>
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
                { v: 18, s: " %", p: "+", l: "panier moyen" },
                { v: 35, s: " %", p: "-", l: "ruptures de stock" },
                { v: 3.2, s: "x", p: "", l: "taux d'ouverture emails" },
                { v: 25, s: " %", p: "", l: "conversion relances" },
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
                Le Carré d&apos;Or, le Métropole Shopping Monte-Carlo, le One Monte-Carlo : Monaco concentre sur quelques centaines de mètres les plus grandes maisons de luxe au monde. La clientèle est composée de résidents fortunés, de visiteurs internationaux attirés par les grands événements et de touristes haut de gamme en escale sur la Côte d&apos;Azur. Chaque client s&apos;attend à un service sur mesure, une connaissance fine de ses préférences et une réactivité sans faille.
              </p>
              <p className="text-foreground/60 text-[14px] leading-relaxed">
                L&apos;intelligence artificielle transforme les données clients dispersées en avantage concurrentiel tangible. Un CRM augmenté enrichit automatiquement chaque profil, la gestion prédictive des stocks anticipe la demande selon les événements monégasques, et les campagnes email ultra-personnalisées génèrent des taux d&apos;ouverture 3 à 4 fois supérieurs aux envois génériques.
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
                <h3 className="text-[14px] font-semibold mb-2">CRM augmenté par l&apos;IA</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Enrichissement automatique de chaque profil client à partir des interactions en boutique, achats en ligne et échanges par email ou WhatsApp. Fiche de préparation avant chaque visite VIP avec derniers achats, préférences et suggestions produit.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Stocks prédictifs</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Prévision de la demande par référence en croisant historique de ventes, calendrier événementiel monégasque et tendances de recherche en ligne. Réduction des ruptures et des surstocks.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Campagnes email personnalisées</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Segmentation par habitudes d&apos;achat, budget, affinités produit et langue. Contenu sur mesure par segment : nouveautés, invitations privées, offres exclusives. Rédaction en français, anglais, italien ou russe.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Clienteling automatisé</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Liste quotidienne de clients à contacter avec motif suggéré : anniversaire, nouveau produit, invitation, relance post-essayage. Messages pré-rédigés et personnalisés, prêts à envoyer après validation.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Analyse de performance</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Tableau de bord quotidien : CA par vendeur, panier moyen, taux de conversion, catégories performantes, comparaisons N-1. Alertes sur les écarts significatifs nécessitant une action.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Reporting multi-boutiques</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Consolidation des données pour les enseignes multi-points de vente (Monaco, Cannes, Saint-Tropez, Nice). Comparaison des performances et identification des meilleures pratiques transférables.
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
            <h2 className="text-xl font-bold mb-6">Retail classique vs retail augmenté par l&apos;IA</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="p-7 rounded-2xl bg-surface border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-foreground/20" />
                  <span className="text-[11px] uppercase tracking-wider text-muted font-semibold">Sans IA</span>
                </div>
                <ul className="space-y-2">
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    Fiches clients sur tableurs, données fragmentées
                  </li>
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    Gestion des stocks réactive, ruptures fréquentes
                  </li>
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    Campagnes marketing génériques, faible engagement
                  </li>
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    Relances manuelles, vendeurs surchargés
                  </li>
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    Reporting consolidé manuellement chaque semaine
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
                    CRM 360 enrichi automatiquement à chaque interaction
                  </li>
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Stocks anticipés selon événements et tendances
                  </li>
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Emails personnalisés avec x3 de taux d&apos;ouverture
                  </li>
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Clienteling automatisé avec 25 % de conversion
                  </li>
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Tableaux de bord temps réel multi-boutiques
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
              <Link href="/secteurs/hotellerie-restauration" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Hôtellerie-restauration</Link>
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
              Faites de chaque visite en boutique une expérience mémorable
            </h2>
            <p className="text-foreground/60 text-[14px] mb-8">
              Parlons de votre stratégie de clienteling et de vos enjeux de performance. Un entretien de 30 minutes suffit pour identifier les premiers leviers d&apos;optimisation adaptés à votre boutique.
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
