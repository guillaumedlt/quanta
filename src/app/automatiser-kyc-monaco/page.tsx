import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import FAQ from "@/components/FAQ";
import FaqSchema from "@/components/FaqSchema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Automatiser le KYC à Monaco : agents IA banques privées",
  description:
    "Automatisez KYC, KYB et due diligence pour banques privées à Monaco. OCR, screening sanctions, scoring risques, reporting SICCFIN. -70 % de temps par dossier.",
  alternates: { canonical: "https://quantamonaco.com/automatiser-kyc-monaco" },
  openGraph: {
    title: "Automatiser le KYC à Monaco : agents IA banques privées",
    description:
      "Automatisez KYC, KYB et due diligence pour banques privées à Monaco. OCR, screening sanctions, scoring risques, reporting SICCFIN. -70 % de temps par dossier.",
    url: "https://quantamonaco.com/automatiser-kyc-monaco",
    siteName: "Quanta",
    locale: "fr_FR",
    type: "website",
  },
};

const faqItems = [
  {
    q: "Comment l'IA automatise-t-elle le KYC dans une banque privée à Monaco ?",
    a: "Un agent IA orchestre l'ensemble du processus : collecte des pièces justificatives par email ou portail sécurisé, extraction OCR des documents d'identité et statuts juridiques, reconstitution de l'organigramme de bénéficiaires effectifs, screening contre les listes sanctions (ONU, UE, OFAC) et PPE, scoring de risque selon les critères du GAFI et de la SICCFIN. Le dossier arrive pré-rempli sur le bureau du compliance officer qui valide en quelques clics. Le temps de traitement passe de 6 heures à moins de 2 heures par dossier.",
  },
  {
    q: "L'IA peut-elle traiter les structures de détention complexes (trusts, fondations, SAM, SCI) ?",
    a: "Oui. Les agents que nous déployons à Monaco sont entraînés à reconnaître les structures spécifiques au droit monégasque (SAM, SCS, SCI, fondations) et aux principales juridictions offshore (BVI, Jersey, Guernesey, Liechtenstein, Bahamas). L'agent reconstruit la chaîne de détention jusqu'aux bénéficiaires effectifs ultimes, identifie les seuils de contrôle (25 % UBO) et signale les structures à plusieurs niveaux pour revue manuelle.",
  },
  {
    q: "Quelles sont les obligations KYC d'une banque privée à Monaco ?",
    a: "La loi n° 1.362 du 3 août 2009 et son ordonnance d'application imposent l'identification du client et du bénéficiaire effectif, la connaissance de la source des fonds, le screening contre les listes sanctions et de personnes politiquement exposées, une vigilance renforcée sur les opérations atypiques et un reporting périodique au SICCFIN. La CCAF complète ce dispositif avec ses contrôles de conformité financière. Notre agent IA produit automatiquement tous les artefacts requis avec horodatage et audit trail complet.",
  },
  {
    q: "Combien coûte l'automatisation du KYC dans une banque privée monégasque ?",
    a: "Un déploiement complet (collecte, OCR, screening, scoring, reporting) coûte entre 25 000 et 60 000 € en fonction du volume de dossiers, du nombre de canaux de collecte et de l'intégration au core banking. L'audit stratégique préalable est facturé 5 000 € et inclut une cartographie des processus, une estimation du gain attendu et un cadrage détaillé. Le ROI est généralement atteint en moins de 9 mois pour une banque qui traite plus de 100 onboardings annuels.",
  },
  {
    q: "Comment l'agent IA s'intègre-t-il avec le core banking existant ?",
    a: "Nous nous connectons aux principaux core banking utilisés à Monaco (Avaloq, Olympic, Temenos, Finnova) via API REST, SOAP ou export de fichiers selon l'architecture en place. L'agent peut fonctionner en mode autonome (il génère le dossier KYC complet et le pousse dans votre core banking) ou en mode assistant (le compliance officer travaille dans son outil habituel et l'agent l'enrichit en arrière-plan). Le choix dépend de votre maturité IT et de vos politiques de sécurité.",
  },
];

export default function AutomatiserKycMonacoPage() {
  return (
    <PageLayout>
      <FaqSchema items={faqItems} />

      {/* Hero */}
      <section className="section-padding pt-32 sm:pt-40 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Automatisation KYC Monaco</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4 mb-6">
              Automatiser le KYC pour les banques privées à Monaco
            </h1>
            <p className="text-foreground/60 text-[15px] leading-relaxed max-w-3xl mx-auto mb-8">
              Quanta déploie des agents IA qui prennent en charge la collecte, l&apos;extraction, le screening et le scoring des dossiers KYC pour les banques privées et sociétés de gestion monégasques. Conforme à la loi n° 1.362, aux exigences SICCFIN et aux critères GAFI. Le compliance officer garde la main, l&apos;IA fait le travail.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/33645636107"
                className="group bg-accent text-dark font-semibold px-6 py-3 rounded-xl text-[13px] hover:bg-accent-dark transition-all inline-flex items-center gap-2 shadow-lg shadow-accent/20"
              >
                Discuter de votre processus KYC
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <Link href="/contact" className="bg-surface text-foreground font-medium px-6 py-3 rounded-xl text-[13px] border border-border hover:border-foreground/20 transition-all">
                Demander un audit KYC
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
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter prefix="-" value={70} suffix="%" /></div>
                <p className="text-foreground/40 text-[12px]">temps par dossier KYC</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={48} suffix="h" /></div>
                <p className="text-foreground/40 text-[12px]">délai réponse SICCFIN</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={0} /></div>
                <p className="text-foreground/40 text-[12px]">anomalie ratée en contrôle</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={200} suffix="+" /></div>
                <p className="text-foreground/40 text-[12px]">relations onboardées par an</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Le constat */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Le constat</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Pourquoi le KYC coûte si cher dans une banque privée monégasque</h2>
            <div className="space-y-4 text-foreground/60 text-[14px] leading-relaxed">
              <p>
                Une banque privée à Monaco consacre en moyenne <strong className="text-foreground">6 heures par dossier d&apos;onboarding KYC</strong>. Sur un volume annuel de 150 à 300 nouvelles relations, c&apos;est l&apos;équivalent d&apos;un à deux ETP full-time mobilisés sur du travail répétitif à faible valeur ajoutée. Les analystes conformité passent leur temps à demander des pièces, relancer, vérifier des structures, croiser des listes sanctions, mettre à jour des tableaux.
              </p>
              <p>
                À cette charge s&apos;ajoutent les inspections périodiques du <Link href="/ia-siccffin-monaco" className="text-accent hover:underline">SICCFIN</Link> et de la CCAF, qui exigent des audit trails complets, des dossiers parfaitement tracés et une capacité à répondre sous 48 heures. Une seule anomalie ratée peut déclencher une mise en demeure, une sanction administrative ou pénale, et un impact réputationnel durable.
              </p>
              <p>
                Le problème n&apos;est pas le compliance officer (il fait son travail), c&apos;est le format manuel du processus. L&apos;IA permet de faire 80 % du travail de collecte, d&apos;extraction et de pré-validation en quelques minutes, et de réserver l&apos;intelligence humaine aux décisions qui en exigent vraiment.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Ce que l'agent fait - dark bubble */}
      <section className="bg-dark text-white rounded-[2rem] mx-4 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Ce que fait l&apos;agent IA</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-4">Les six tâches automatisées de bout en bout</h2>
            <p className="text-white/50 text-[14px] leading-relaxed max-w-3xl mb-10">
              Un dossier KYC contient une vingtaine de sous-tâches. Voici les six que notre agent prend en charge sans intervention humaine, en respectant scrupuleusement les exigences SICCFIN et GAFI.
            </p>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <RevealOnScroll>
              <div className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2 text-white/80">Collecte multi-canal</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">Portail sécurisé, email chiffré, intégration core banking. L&apos;agent relance automatiquement les pièces manquantes selon vos règles métier.</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll>
              <div className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2 text-white/80">Extraction OCR intelligente</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">Passeports, justificatifs de domicile, statuts juridiques, KBis équivalents internationaux. Données structurées, contrôles de cohérence automatiques.</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll>
              <div className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2 text-white/80">Reconstitution UBO</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">Organigramme complet de détention, identification des bénéficiaires effectifs ultimes au seuil 25 %, gestion des trusts, fondations et chaînes offshore.</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll>
              <div className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2 text-white/80">Screening sanctions et PPE</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">Croisement continu avec les listes ONU, UE, OFAC, HMT, listes monégasques et bases PPE Dow Jones / World-Check. Alertes contextualisées.</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll>
              <div className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2 text-white/80">Scoring de risque</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">Score argumenté selon les critères GAFI, SICCFIN et vos politiques internes. Recommandation de niveau de vigilance (simplifiée, standard, renforcée).</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll>
              <div className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2 text-white/80">Reporting SICCFIN automatisé</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">Génération automatique des déclarations, statistiques périodiques et réponses aux demandes d&apos;information. Audit trail horodaté de A à Z.</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Conformité réglementaire */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Conformité</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Conforme à la loi n° 1.362 et aux exigences SICCFIN</h2>
            <div className="space-y-4 text-foreground/60 text-[14px] leading-relaxed">
              <p>
                L&apos;automatisation du KYC à Monaco doit respecter un cadre juridique précis : la <Link href="/ia-conformite-loi-1362-monaco" className="text-accent hover:underline">loi n° 1.362 du 3 août 2009</Link> relative à la lutte contre le blanchiment de capitaux et le financement du terrorisme, ses ordonnances d&apos;application, les critères du GAFI et les exigences sectorielles posées par le SICCFIN et la CCAF.
              </p>
              <p>
                Tous nos agents sont conçus pour produire un audit trail complet, horodaté et exportable au format requis par les autorités. Aucune décision automatique sur les cas à risque moyen ou élevé : l&apos;agent prépare le dossier, propose une analyse, mais c&apos;est toujours le compliance officer qui valide et engage la responsabilité de l&apos;établissement.
              </p>
              <p>
                Les données sont hébergées sur cloud privé européen ou on-premise selon vos politiques de souveraineté. Aucune donnée client n&apos;est partagée avec des modèles tiers. Le chiffrement est appliqué au repos et en transit. Notre approche respecte intégralement la loi n° 1.565 sur la protection des données personnelles.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Méthodo - section surface */}
      <section className="section-padding section-surface">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Méthode</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-8">Quatre phases pour déployer en 8 à 12 semaines</h2>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <RevealOnScroll>
              <div className="p-5 rounded-2xl border border-border bg-surface">
                <div className="text-[10px] uppercase tracking-[0.15em] text-muted font-semibold mb-2">Phase 1 — Immersion</div>
                <h3 className="text-[14px] font-semibold mb-2">1-2 semaines</h3>
                <p className="text-foreground/50 text-[13px] leading-relaxed">Cartographie complète de votre processus KYC actuel, identification des goulots et des cas à risque.</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll>
              <div className="p-5 rounded-2xl border border-border bg-surface">
                <div className="text-[10px] uppercase tracking-[0.15em] text-muted font-semibold mb-2">Phase 2 — Prototype</div>
                <h3 className="text-[14px] font-semibold mb-2">2-3 semaines</h3>
                <p className="text-foreground/50 text-[13px] leading-relaxed">Prototype fonctionnel sur un périmètre restreint (un segment de clientèle, un type de structure).</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll>
              <div className="p-5 rounded-2xl border border-border bg-surface">
                <div className="text-[10px] uppercase tracking-[0.15em] text-muted font-semibold mb-2">Phase 3 — Déploiement</div>
                <h3 className="text-[14px] font-semibold mb-2">3-5 semaines</h3>
                <p className="text-foreground/50 text-[13px] leading-relaxed">Intégration au core banking, validation conformité, déploiement progressif en production avec doublure manuelle.</p>
              </div>
            </RevealOnScroll>
            <RevealOnScroll>
              <div className="p-5 rounded-2xl border border-border bg-surface">
                <div className="text-[10px] uppercase tracking-[0.15em] text-muted font-semibold mb-2">Phase 4 — Transmission</div>
                <h3 className="text-[14px] font-semibold mb-2">2 semaines</h3>
                <p className="text-foreground/50 text-[13px] leading-relaxed">Formation des équipes, documentation complète, transfert de compétences. Vous êtes autonomes.</p>
              </div>
            </RevealOnScroll>
          </div>
          <RevealOnScroll>
            <p className="text-foreground/50 text-[13px] mt-8 text-center">
              Découvrez <Link href="/methode" className="text-accent hover:underline">notre méthode complète</Link> et nos <Link href="/resultats/gestion-documentaire-bancaire" className="text-accent hover:underline">cas clients documentés en banque privée</Link>.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Pour aller plus loin */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Pour aller plus loin</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Ressources sur l&apos;IA et la conformité bancaire à Monaco</h2>
            <div className="flex flex-wrap gap-3">
              <Link href="/secteurs/banque-privee" className="text-[13px] bg-surface px-4 py-2 rounded-lg border border-border hover:border-accent/30 transition-all">IA pour la banque privée</Link>
              <Link href="/ia-conformite-loi-1362-monaco" className="text-[13px] bg-surface px-4 py-2 rounded-lg border border-border hover:border-accent/30 transition-all">IA et loi n° 1.362</Link>
              <Link href="/ia-siccffin-monaco" className="text-[13px] bg-surface px-4 py-2 rounded-lg border border-border hover:border-accent/30 transition-all">IA et reporting SICCFIN</Link>
              <Link href="/blog/automatiser-conformite-lcb-ft-monaco" className="text-[13px] bg-surface px-4 py-2 rounded-lg border border-border hover:border-accent/30 transition-all">Automatiser la conformité LCB-FT</Link>
              <Link href="/blog/kyc-augmente-ia-banque-privee" className="text-[13px] bg-surface px-4 py-2 rounded-lg border border-border hover:border-accent/30 transition-all">KYC augmenté par IA</Link>
              <Link href="/resultats/gestion-documentaire-bancaire" className="text-[13px] bg-surface px-4 py-2 rounded-lg border border-border hover:border-accent/30 transition-all">Cas : gestion documentaire bancaire</Link>
              <Link href="/resultats/controle-lcb-ft" className="text-[13px] bg-surface px-4 py-2 rounded-lg border border-border hover:border-accent/30 transition-all">Cas : contrôle LCB-FT</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding section-surface">
        <div className="max-w-3xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Questions fréquentes</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-8">Questions sur l&apos;automatisation du KYC à Monaco</h2>
          </RevealOnScroll>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-background via-accent-light/30 to-accent/20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">Auditons votre processus KYC ensemble</h2>
            <p className="text-foreground/60 text-[14px] mb-8">
              Premier entretien de 30 minutes offert. Nous évaluons votre volume, vos goulots et le ROI atteignable, et vous remettons un cadrage chiffré sous 48 heures.
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
