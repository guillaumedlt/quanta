import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import FAQ from "@/components/FAQ";
import FaqSchema from "@/components/FaqSchema";
import RevealOnScroll from "@/components/RevealOnScroll";
import AnimatedCounter from "@/components/AnimatedCounter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IA pour cliniques et bien-être à Monaco",
  description:
    "Comptes rendus médicaux, dossiers patients, accréditations et communication multilingue automatisés pour cliniques et centres de bien-être à Monaco.",
  alternates: { canonical: "https://quantamonaco.com/secteurs/sante-cliniques" },
  openGraph: {
    title: "IA pour cliniques et bien-être à Monaco",
    description:
      "Comptes rendus médicaux, dossiers patients, accréditations et communication multilingue automatisés pour cliniques et centres de bien-être à Monaco.",
    url: "https://quantamonaco.com/secteurs/sante-cliniques",
    siteName: "Quanta",
    locale: "fr_FR",
    type: "website",
  },
};

const faqItems = [
  {
    q: "Les données de santé sont-elles protégées conformément à la réglementation monégasque ?",
    a: "Oui. Toutes les données sont hébergées dans un environnement sécurisé conforme aux exigences de la Commission de Contrôle des Informations Nominatives (CCIN) de Monaco. Aucune donnée de santé n'est partagée avec des tiers ou utilisée pour entraîner des modèles externes. Les accès sont contrôlés par rôles, chaque action est tracée et nous signons un accord de confidentialité renforcé avant toute intervention.",
  },
  {
    q: "L'agent de dictée médicale comprend-il le vocabulaire spécialisé ?",
    a: "L'agent est entraîné sur du vocabulaire médical spécialisé et s'adapte au domaine de chaque praticien (dermatologie, cardiologie, chirurgie esthétique, ophtalmologie). Les termes techniques, les noms de médicaments et les nomenclatures sont reconnus avec un taux de précision supérieur à 97 %. L'agent s'améliore au fil des utilisations en apprenant les habitudes de dictée du praticien.",
  },
  {
    q: "Comment l'IA s'intègre-t-elle avec notre logiciel de gestion médicale ?",
    a: "Nos agents s'intègrent avec les principaux logiciels de gestion de cabinet et de clinique utilisés à Monaco (Doctolib Pro, Cegedim, AxiSanté, logiciels spécifiques). L'intégration se fait par API ou par connecteur sécurisé. Le déploiement prend entre 2 et 4 semaines, incluant la phase de tests et la formation des équipes.",
  },
  {
    q: "L'IA gère-t-elle les spécificités de la CCSS monégasque ?",
    a: "L'agent connaît les formulaires et les procédures de la Caisse de Compensation des Services Sociaux de Monaco. Il peut pré-remplir les documents de prise en charge, vérifier la conformité des codes actes et alerter le secrétariat médical sur les pièces manquantes avant l'envoi du dossier à la CCSS, évitant les rejets et les retards de remboursement.",
  },
  {
    q: "Peut-on commencer par un seul cas d'usage avant de généraliser ?",
    a: "Absolument. Nous recommandons de commencer par le cas d'usage le plus impactant pour votre structure (généralement les comptes rendus automatisés ou la communication patient multilingue), de mesurer les résultats sur 4 à 6 semaines, puis d'étendre progressivement à d'autres processus. Cette approche limite les risques et permet de valider le retour sur investissement avant de généraliser.",
  },
];

export default function SanteCliniquesPage() {
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
                Intelligence artificielle pour les cliniques et le bien-être à Monaco
              </h1>
              <p className="text-foreground/60 text-[15px] leading-relaxed max-w-xl">
                Simplifiez la gestion des dossiers patients, automatisez vos comptes rendus et renforcez la communication avec vos patients grâce à des agents IA conformes aux exigences de confidentialité médicale de la Principauté.
              </p>
            </div>

            {/* Illustration card */}
            <div className="hidden lg:block">
              <div className="animate-float">
                <div className="rounded-2xl bg-dark p-6 shadow-xl border border-white/[0.06]">
                  <div className="text-[9px] text-white/30 uppercase tracking-wider font-semibold mb-4">Tableau de bord clinique</div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-white/50">Temps de dictée</span>
                      <span className="text-[13px] text-accent font-bold">-87 %</span>
                    </div>
                    <div className="h-px bg-white/[0.06]" />
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-white/50">Langues patients</span>
                      <span className="text-[13px] text-accent font-bold">5</span>
                    </div>
                    <div className="h-px bg-white/[0.06]" />
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-white/50">Précision OCR</span>
                      <span className="text-[13px] text-accent font-bold">97 %</span>
                    </div>
                    <div className="h-px bg-white/[0.06]" />
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-white/50">Temps admin libéré</span>
                      <span className="text-[13px] text-accent font-bold">10 h/sem</span>
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
                { v: 87, s: " %", p: "-", l: "temps de rédaction" },
                { v: 5, s: "", p: "", l: "langues automatisées" },
                { v: 97, s: " %", p: "", l: "précision dictée" },
                { v: 10, s: " h/sem", p: "", l: "temps libéré par praticien" },
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
                La Principauté abrite le Centre Hospitalier Princesse Grace, des cliniques privées spécialisées en chirurgie esthétique, cardiologie et ophtalmologie, des cabinets de médecine esthétique parmi les plus réputés d&apos;Europe, ainsi que des centres de bien-être haut de gamme comme les Thermes Marins de Monte-Carlo. Les professionnels de santé font face à des contraintes spécifiques : respect de la CCIN, affiliation à la CCSS, exigences d&apos;accréditation et communications multilingues pour une patientèle internationale.
              </p>
              <p className="text-foreground/60 text-[14px] leading-relaxed">
                L&apos;intelligence artificielle permet de restituer aux praticiens le temps que l&apos;administratif leur prend. La rédaction automatique des comptes rendus réduit le temps de documentation de 15 minutes à moins de 2 minutes par consultation. L&apos;indexation intelligente des dossiers, la préparation des accréditations et la communication patient multilingue constituent des gains de productivité immédiats, sans compromettre la sécurité des données de santé.
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
                <h3 className="text-[14px] font-semibold mb-2">Comptes rendus médicaux automatisés</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Le praticien dicte ses observations. L&apos;agent transcrit, structure le compte rendu selon le format de la clinique, code selon la nomenclature et soumet pour validation. De 15 minutes à moins de 2 minutes par consultation.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Gestion intelligente des dossiers</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Indexation de l&apos;ensemble des documents du dossier patient avec recherche en langage naturel. Le praticien peut demander &quot;dernière HbA1c&quot; ou &quot;historique des interventions&quot; et obtenir la réponse instantanément.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Préparation des accréditations</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Collecte des indicateurs qualité, compilation des protocoles, identification des écarts et génération d&apos;un pré-rapport structuré. De plusieurs semaines à quelques jours de préparation.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Communication patient multilingue</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Rappels de rendez-vous, consignes pré-opératoires, protocoles post-intervention générés dans la langue du patient (français, anglais, italien, russe, arabe). Contenu médicalement précis et compréhensible.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Suivi post-consultation</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Questionnaires de suivi personnalisés envoyés automatiquement selon le protocole. Analyse des réponses et remontée immédiate des signaux d&apos;alerte au médecin avec niveau d&apos;urgence.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <h3 className="text-[14px] font-semibold mb-2">Consentements éclairés</h3>
                <p className="text-white/45 text-[13px] leading-relaxed">
                  Formulaires de consentement personnalisés pour chaque intervention, dans la langue du patient, avec risques spécifiques et alternatives thérapeutiques. Envoyés en amont pour une lecture sereine.
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
            <h2 className="text-xl font-bold mb-6">Gestion administrative classique vs IA médicale</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="p-7 rounded-2xl bg-surface border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-foreground/20" />
                  <span className="text-[11px] uppercase tracking-wider text-muted font-semibold">Sans IA</span>
                </div>
                <ul className="space-y-2">
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    15 minutes de rédaction par compte rendu de consultation
                  </li>
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    Recherche manuelle dans des dizaines de pages de dossier
                  </li>
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    Communications patient uniquement en français
                  </li>
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    Accréditations préparées sur plusieurs semaines
                  </li>
                  <li className="text-[13px] text-foreground/40 flex items-start gap-2">
                    <span className="text-foreground/20 mt-0.5">&times;</span>
                    Suivi post-opératoire par appels téléphoniques manuels
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
                    Comptes rendus structurés en moins de 2 minutes par dictée
                  </li>
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Recherche en langage naturel dans tout le dossier patient
                  </li>
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Communications automatiques en 5 langues
                  </li>
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Pré-rapports d&apos;accréditation générés en quelques jours
                  </li>
                  <li className="text-[13px] text-white/60 flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#10003;</span>
                    Suivi automatisé avec alertes sur signaux critiques
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
              <Link href="/expertise/formation-ia" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Formation IA</Link>
              <Link href="/secteurs/services-professionnels" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Services professionnels</Link>
              <Link href="/secteurs/hotellerie-restauration" className="text-[12px] text-muted bg-surface-dark px-3 py-1.5 rounded-lg hover:text-foreground transition-colors">Hôtellerie-restauration</Link>
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
              Plus de temps pour vos patients, moins de temps sur l&apos;administratif
            </h2>
            <p className="text-foreground/60 text-[14px] mb-8">
              Échangeons sur les processus administratifs qui alourdissent votre quotidien. Nous vous montrerons comment l&apos;IA peut les simplifier sans compromettre la qualité des soins ni la confidentialité des données.
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
