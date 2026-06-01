import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import FAQ from "@/components/FAQ";
import FaqSchema from "@/components/FaqSchema";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IA et loi n° 1.362 à Monaco : conformité LCB-FT automatisée",
  description:
    "Automatisez votre conformité à la loi n° 1.362 (LCB-FT Monaco) avec l'IA. KYC, UBO, screening, reporting SICCFIN. Pour banques, family offices et cabinets.",
  alternates: { canonical: "https://quantamonaco.com/ia-conformite-loi-1362-monaco" },
  openGraph: {
    title: "IA et loi n° 1.362 à Monaco : conformité LCB-FT automatisée",
    description:
      "Automatisez votre conformité à la loi n° 1.362 (LCB-FT Monaco) avec l'IA. KYC, UBO, screening, reporting SICCFIN. Pour banques, family offices et cabinets.",
    url: "https://quantamonaco.com/ia-conformite-loi-1362-monaco",
    siteName: "Quanta",
    locale: "fr_FR",
    type: "website",
  },
};

const faqItems = [
  {
    q: "Qu'est-ce que la loi n° 1.362 à Monaco ?",
    a: "La loi n° 1.362 du 3 août 2009, modifiée à plusieurs reprises (notamment par les lois n° 1.462 et n° 1.503), constitue le socle de la lutte contre le blanchiment de capitaux, le financement du terrorisme et la corruption en Principauté de Monaco. Elle impose aux établissements financiers, professions juridiques et entités assimilées des obligations de vigilance (identification du client, du bénéficiaire effectif, de la source des fonds), de déclaration au SICCFIN et de conservation des données. Elle est complétée par l'ordonnance souveraine n° 2.318 et par les recommandations sectorielles de la SICCFIN.",
  },
  {
    q: "Quelles entités sont assujetties à la loi n° 1.362 ?",
    a: "Sont assujetties : les banques et établissements de crédit, les sociétés de gestion (SGP), les multi-family offices, les compagnies d'assurance, les notaires, avocats et huissiers de justice intervenant sur des opérations patrimoniales, les agents immobiliers traitant des biens supérieurs à 10 000 €, les négociants en métaux précieux, les comptables et auditeurs, les CSP (corporate service providers), les casinos et certaines professions libérales. La liste exhaustive figure à l'article premier de la loi.",
  },
  {
    q: "Comment l'IA aide-t-elle à respecter les obligations de la loi n° 1.362 ?",
    a: "L'IA automatise l'ensemble des artefacts requis par la loi : collecte et vérification des pièces d'identification, reconstitution des structures de détention et identification UBO, screening continu contre les listes sanctions et PPE, scoring du niveau de risque, génération des déclarations au SICCFIN, suivi des durées de conservation. Elle ne remplace pas le compliance officer : elle l'augmente. L'IA traite 80 % du travail mécanique, et l'humain garde la décision sur les cas à risque.",
  },
  {
    q: "Quelles sanctions sont encourues en cas de manquement à la loi n° 1.362 ?",
    a: "Les sanctions sont graduées : avertissement, blâme, interdiction temporaire d'exercer certaines opérations, sanction pécuniaire pouvant aller jusqu'à 5 millions d'euros ou 10 % du chiffre d'affaires annuel, retrait d'agrément. Les manquements graves peuvent également engager la responsabilité pénale des dirigeants. La SICCFIN publie régulièrement les sanctions prononcées dans son rapport annuel. L'enjeu réputationnel d'une mise en cause est au moins aussi important que la sanction pécuniaire elle-même.",
  },
  {
    q: "Faut-il être agréé pour déployer une solution IA de conformité à Monaco ?",
    a: "Non, l'éditeur d'une solution IA n'a pas besoin d'agrément spécifique. En revanche, la solution doit respecter la loi n° 1.565 sur la protection des données personnelles (hébergement, chiffrement, conservation), le secret bancaire monégasque pour les données traitées, et la traçabilité exigée par le SICCFIN. Quanta opère sur cloud privé européen ou on-premise, signe des accords de confidentialité renforcés avant toute mission et documente intégralement le traitement pour l'inspection.",
  },
];

export default function IaConformiteLoi1362MonacoPage() {
  return (
    <PageLayout>
      <FaqSchema items={faqItems} />

      {/* Hero */}
      <section className="section-padding pt-32 sm:pt-40 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Loi n° 1.362 — LCB-FT Monaco</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4 mb-6">
              IA et conformité à la loi n° 1.362 à Monaco
            </h1>
            <p className="text-foreground/60 text-[15px] leading-relaxed max-w-3xl mx-auto mb-8">
              La loi n° 1.362 impose à toutes les entités assujetties de Monaco un dispositif rigoureux de lutte contre le blanchiment. Quanta déploie des agents IA qui automatisent collecte, vérification, screening et reporting tout en garantissant un audit trail conforme aux exigences SICCFIN.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/33645636107"
                className="group bg-accent text-dark font-semibold px-6 py-3 rounded-xl text-[13px] hover:bg-accent-dark transition-all inline-flex items-center gap-2 shadow-lg shadow-accent/20"
              >
                Échanger sur votre dispositif LCB-FT
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <Link href="/contact" className="bg-surface text-foreground font-medium px-6 py-3 rounded-xl text-[13px] border border-border hover:border-foreground/20 transition-all">
                Demander un audit conformité
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
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter prefix="-" value={80} suffix="%" /></div>
                <p className="text-foreground/40 text-[12px]">temps de vérification documentaire</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={100} suffix="%" /></div>
                <p className="text-foreground/40 text-[12px]">audit trail traçable</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={48} suffix="h" /></div>
                <p className="text-foreground/40 text-[12px]">délai réponse SICCFIN</p>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight mb-1"><AnimatedCounter value={5} suffix=" M€" /></div>
                <p className="text-foreground/40 text-[12px]">sanction max évitée</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Les 5 piliers de la loi */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Les obligations clés</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Les cinq piliers de la conformité loi n° 1.362</h2>
            <div className="space-y-5 text-foreground/60 text-[14px] leading-relaxed">
              <div>
                <h3 className="text-foreground text-[15px] font-semibold mb-2">1. Identification du client et du bénéficiaire effectif</h3>
                <p>Obligation de connaître précisément l&apos;identité du client, sa résidence fiscale, sa situation patrimoniale, et de remonter à tous les bénéficiaires effectifs au seuil de 25 %. Pour les structures complexes (trusts, fondations, chaînes de sociétés offshore), l&apos;identification doit être documentée jusqu&apos;à l&apos;UBO ultime.</p>
              </div>
              <div>
                <h3 className="text-foreground text-[15px] font-semibold mb-2">2. Connaissance de la source des fonds</h3>
                <p>L&apos;origine des fonds versés doit être documentée par des pièces justificatives (cession de société, succession, salaire, revenu locatif, etc.). Les explications doivent être plausibles, cohérentes avec le profil et étayées par des documents officiels.</p>
              </div>
              <div>
                <h3 className="text-foreground text-[15px] font-semibold mb-2">3. Vigilance continue et screening</h3>
                <p>Croisement permanent contre les listes sanctions (ONU, UE, OFAC, HMT) et les bases de personnes politiquement exposées. Toute apparition ou changement de statut doit déclencher une alerte et une réévaluation du dossier dans un délai court.</p>
              </div>
              <div>
                <h3 className="text-foreground text-[15px] font-semibold mb-2">4. Déclaration de soupçon au SICCFIN</h3>
                <p>Toute opération ou tentative d&apos;opération que l&apos;établissement assujetti suspecte d&apos;être liée au blanchiment ou au financement du terrorisme doit faire l&apos;objet d&apos;une déclaration au <Link href="/ia-siccffin-monaco" className="text-accent hover:underline">SICCFIN</Link>. Le silence ou le retard sont sévèrement sanctionnés.</p>
              </div>
              <div>
                <h3 className="text-foreground text-[15px] font-semibold mb-2">5. Conservation et audit trail</h3>
                <p>Conservation des pièces et des données pendant au moins cinq ans après la fin de la relation d&apos;affaires. L&apos;audit trail doit permettre à un inspecteur de reconstituer chaque décision, chaque vérification et chaque mise à jour avec horodatage et identification de l&apos;intervenant.</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Ce que l'IA change - dark bubble */}
      <section className="bg-dark text-white rounded-[2rem] mx-4 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Ce que l&apos;IA change</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-4">Conformité manuelle vs conformité augmentée par IA</h2>
            <p className="text-white/50 text-[14px] leading-relaxed max-w-3xl mb-10">
              La loi n° 1.362 n&apos;impose pas un format de mise en œuvre. Elle exige un résultat : la traçabilité, la pertinence et la rigueur du dispositif. L&apos;IA permet d&apos;atteindre ce résultat plus vite, mieux et à coût maîtrisé.
            </p>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 gap-4">
            <RevealOnScroll>
              <div className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-4 text-white/70">Approche manuelle</h3>
                <ul className="space-y-2 text-white/40 text-[13px]">
                  <li>Collecte par email, relances manuelles</li>
                  <li>Vérification visuelle pièce par pièce</li>
                  <li>Reconstruction UBO à la main, tableurs Excel</li>
                  <li>Screening ponctuel (entrée en relation)</li>
                  <li>Reporting SICCFIN rédigé pièce par pièce</li>
                  <li>Audit trail fragmenté dans plusieurs outils</li>
                </ul>
              </div>
            </RevealOnScroll>
            <RevealOnScroll>
              <div className="p-6 rounded-xl border border-accent/20 bg-accent/5">
                <h3 className="text-[14px] font-semibold mb-4 text-accent">Approche augmentée par IA</h3>
                <ul className="space-y-2 text-white/60 text-[13px]">
                  <li>Collecte multi-canal automatisée et relancée</li>
                  <li>Extraction OCR avec contrôles de cohérence</li>
                  <li>Reconstruction UBO automatique, schémas générés</li>
                  <li>Screening continu, alertes en temps réel</li>
                  <li>Reporting SICCFIN pré-rédigé au bon format</li>
                  <li>Audit trail unique, horodaté, exportable</li>
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Pour qui */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Pour qui</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Quelles entités assujetties accompagnons-nous</h2>
            <p className="text-foreground/60 text-[14px] leading-relaxed mb-6">
              Nous accompagnons toutes les entités assujetties à la loi n° 1.362 qui veulent industrialiser leur dispositif sans déshumaniser la relation client.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/secteurs/banque-privee" className="text-[13px] bg-surface px-4 py-2 rounded-lg border border-border hover:border-accent/30 transition-all">Banques privées</Link>
              <Link href="/secteurs/gestion-patrimoine" className="text-[13px] bg-surface px-4 py-2 rounded-lg border border-border hover:border-accent/30 transition-all">SGP &amp; family offices</Link>
              <Link href="/secteurs/cabinets-avocats" className="text-[13px] bg-surface px-4 py-2 rounded-lg border border-border hover:border-accent/30 transition-all">Cabinets d&apos;avocats</Link>
              <Link href="/secteurs/services-professionnels" className="text-[13px] bg-surface px-4 py-2 rounded-lg border border-border hover:border-accent/30 transition-all">Notaires &amp; CSP</Link>
              <Link href="/secteurs/immobilier-luxe" className="text-[13px] bg-surface px-4 py-2 rounded-lg border border-border hover:border-accent/30 transition-all">Agents immobiliers</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Pour aller plus loin */}
      <section className="section-padding section-surface">
        <div className="max-w-4xl mx-auto px-6">
          <RevealOnScroll>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">Ressources</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-5">Pour aller plus loin sur la conformité LCB-FT</h2>
            <div className="flex flex-wrap gap-3">
              <Link href="/automatiser-kyc-monaco" className="text-[13px] bg-background px-4 py-2 rounded-lg border border-border hover:border-accent/30 transition-all">Automatiser le KYC</Link>
              <Link href="/ia-siccffin-monaco" className="text-[13px] bg-background px-4 py-2 rounded-lg border border-border hover:border-accent/30 transition-all">IA et reporting SICCFIN</Link>
              <Link href="/blog/automatiser-conformite-lcb-ft-monaco" className="text-[13px] bg-background px-4 py-2 rounded-lg border border-border hover:border-accent/30 transition-all">Automatiser la conformité LCB-FT</Link>
              <Link href="/blog/kyc-augmente-ia-banque-privee" className="text-[13px] bg-background px-4 py-2 rounded-lg border border-border hover:border-accent/30 transition-all">KYC augmenté par IA</Link>
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
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-3 mb-8">Questions sur la loi n° 1.362 et l&apos;IA</h2>
          </RevealOnScroll>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-background via-accent-light/30 to-accent/20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-5">Auditons votre conformité LCB-FT</h2>
            <p className="text-foreground/60 text-[14px] mb-8">
              Premier entretien de 30 minutes offert. Nous cartographions votre dispositif actuel, identifions les zones à risque et les leviers d&apos;automatisation, puis remettons un cadrage chiffré.
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
