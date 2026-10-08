// Côte d'Ivoire · Honorary Country 2027 — rebuilt 2026-09-16 from the lost
// version's LAYOUT screenshots (docs/New-Changes-Sept-8-2026/LAYOUT/
// "Layout Côte d_Ivoire", 9 PDFs, 2026-07-25). Section order, copy and
// stat values are transcribed verbatim from the screenshots (OCR-checked);
// venue/branding filler from the template was replaced with A2M's real
// event facts (Centre Mont-Royal, June 7–9, 2027).
import type { ReactNode } from 'react'
import { legacyFrenchOrigin } from '../data/navigation'
import OnThisPageNav from '../components/OnThisPageNav'

// Standalone extract: the four site-internal links (waitlist, prev/next) point
// at the live A2M production site so they keep working outside the app router.
const SITE_ORIGIN = 'https://africa-mining-montreal.netlify.app'

const PROGRAM_PDF = `${legacyFrenchOrigin}/program/a2m-2027-program.pdf`

const heroStats = [
  {
    value: '#1',
    label: <>destination for gold exploration investment<br />in West Africa</>,
  },
  {
    value: '10+',
    label: 'Canadian TSX companies already operating',
  },
  {
    value: '59 t',
    label: 'of gold produced in 2024',
  },
  {
    value: '100 t/yr',
    label: 'production target by 2030',
  },
]

const cards = [
  {
    title: 'A rising gold destination',
    body: 'Africa\u2019s leading destination for gold exploration investment — 59 t produced in 2024, against a 100 t/year target for 2030.',
    image: '/images/home/reasons-cote-divoire.jpg',
    alt: 'Terraced open-pit gold mine at sunset with haul trucks',
  },
  {
    title: 'Abidjan, an economic hub',
    body: 'A modern capital of finance and trade — the gateway to the West African market, already home to 10+ Canadian TSX companies.',
    image: '/images/home/abidjan-economic-hub.jpg',
    alt: 'Abidjan skyline and bridge over the lagoon in golden light',
  },
  {
    title: 'Toward transformation',
    body: 'An agenda of local value addition, downstream development and shared prosperity, presented to Canadian investors.',
    image: '/images/home/abidjan-transformation.jpg',
    alt: 'Mineral processing plant with engineers at sunset',
  },
]

const ascentStats = [
  { value: '6%+', label: 'Consistent GDP growth' },
  { value: '~5%', label: 'Of GDP from mining' },
  { value: '13%', label: 'Of national exports' },
  { value: '19', label: 'Operating mines' },
]

const goldStory = [
  { year: '2012', value: '13.2 t' },
  { year: '2024', value: '59.1 t', highlight: true },
  { year: '2026', value: '62 t' },
  { year: '2027', value: '63 t' },
  { year: '2028', value: '69 t' },
  { year: '2030 target', value: '100 t', target: true },
]

const minerals = [
  'Manganese',
  'Nickel',
  'Bauxite',
  'Lithium',
  'Copper',
  'Cobalt',
  'Chrome',
  'Molybdenum',
  'Iron ore',
]

const visionStats = [
  { value: '7% \u2192 14%', label: 'Mining-energy share of GDP targeted by 2040 (PIRME)' },
  { value: '$198B', label: 'National Development Plan 2026–2030' },
  { value: '2040', label: 'Horizon for industrial transformation' },
]

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-small font-semibold uppercase tracking-[0.26em] text-copper">{children}</p>
  )
}

function GoldEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-small font-semibold uppercase tracking-[0.26em] text-gold">{children}</p>
  )
}

function GoldRule({ light = false }: { light?: boolean }) {
  return (
    <span
      className={`mt-5 block h-0.5 w-10 rounded-full ${light ? 'bg-gold-light' : 'bg-gold'}`}
      aria-hidden="true"
    />
  )
}

const goldButton =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 gold-metallic text-anthracite hover:-translate-y-0.5 hover:brightness-105 hover:shadow-gold focus-visible:outline-anthracite h-12 px-6 text-[11px]'

const goldOutlineButton =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold uppercase tracking-[0.06em] transition-all duration-[250ms] ease-discret active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 h-12 border border-gold px-6 text-[11px] text-gold hover:bg-gold hover:text-emerald-deep focus-visible:outline-gold'

export default function HonoraryCountryPage() {
  return (
    <main>
      {/* 1 · Hero — full-bleed Abidjan at dusk, left-aligned copy, 4 KPIs */}
      <section className="relative overflow-hidden bg-emerald-ink text-ivory">
        <img
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-right"
          src="/images/program/civ-abidjan-hero-2026.jpg"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-emerald-ink/90 via-emerald-ink/65 to-emerald-ink/25"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-emerald-ink/90 to-transparent"
        />
        <div className="relative z-10 mx-auto flex w-full max-w-[max(1280px,80vw)] flex-col justify-center px-4 py-16 sm:px-8 lg:min-h-[640px] lg:px-16 lg:pb-32 lg:pt-24">
          <p className="text-[13px] font-semibold uppercase tracking-[0.26em] text-gold-light [text-shadow:0_1px_10px_rgba(3,20,16,0.55)]">
            Honorary Country 2027
          </p>
          <h1 className="mt-3 font-display text-display text-ivory [text-shadow:0_2px_20px_rgba(3,20,16,0.55)] lg:text-[4rem]">
            Côte d&rsquo;Ivoire
          </h1>
          <p className="mt-6 max-w-[640px] text-lead text-ivory/85 [text-shadow:0_1px_14px_rgba(3,20,16,0.6)]">
            One Honorary Country, a continental showcase. Each A2M edition designates one African
            country as its Guest Honorary Country — for 2027, it is Côte d&rsquo;Ivoire, which will
            lead a high-level delegation to Montreal to present its flagship projects to Canadian
            investors and operators.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 border-ivory/15 border-t pt-6 sm:grid-cols-4 lg:mt-12">
            {heroStats.map((stat) => (
              <div key={stat.value} className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-1 h-9 w-0.5 shrink-0 rounded-full bg-gold/70" />
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="font-display font-bold text-[1.6rem] leading-none text-gold-light whitespace-nowrap">
                    {stat.value}
                  </span>
                  <span className="mt-1.5 block text-[13px] leading-[1.45] text-ivory/70">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-12 flex flex-wrap items-center justify-end gap-4 lg:mt-16">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ivory/80 [text-shadow:0_1px_10px_rgba(3,20,16,0.65)]">
              June 7–9, 2027 · Centre Mont-Royal, Montreal
            </span>
          </div>
        </div>
      </section>
      <OnThisPageNav
        items={[
          { id: 'rising-force', label: 'A rising force' },
          { id: 'full-ascent', label: 'A country in full ascent' },
          { id: 'gold-story', label: 'The gold story' },
          { id: 'exploration-surge', label: 'Exploration surge' },
          { id: 'beyond-gold', label: 'Beyond gold' },
          { id: 'proven-partner', label: 'A proven partner' },
          { id: 'vision', label: 'The vision' },
        ]}
      />

      {/* 2 · A rising force — three photo cards on white */}
      <section id="rising-force" className="scroll-mt-24 bg-ivory px-4 py-20 sm:scroll-mt-32 sm:px-8 lg:scroll-mt-24 lg:px-16">
        <div className="mx-auto w-full max-w-[max(1280px,80vw)]">
          <Eyebrow>Côte d&rsquo;Ivoire » Honorary Country 2027</Eyebrow>
          <h2 className="mt-3 font-display text-h1 text-ink">A rising force in West African mining</h2>
          <GoldRule />
          <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <li key={card.title} className="a2m-reveal">
                <article className="h-full overflow-hidden rounded-sm border border-hairline bg-card shadow-card">
                  <img
                    alt={card.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                    src={card.image}
                  />
                  <div className="p-6">
                    <h3 className="font-display font-semibold text-h3 text-emerald-deep">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-small text-muted">{card.body}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3 · A Country in Full Ascent — dark photo band, 4 stat cards */}
      <section id="full-ascent" className="relative scroll-mt-24 overflow-hidden bg-emerald-ink px-4 py-20 text-ivory sm:scroll-mt-32 sm:px-8 lg:scroll-mt-24 lg:px-16">
        <img
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/program/civ-culture.jpg"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-emerald-deep/78" />
        <div className="a2m-motif absolute inset-0" aria-hidden="true" />
        <div className="relative z-10 mx-auto w-full max-w-[max(1280px,80vw)]">
          <GoldEyebrow>Côte d&rsquo;Ivoire</GoldEyebrow>
          <h2 className="mt-3 font-display text-h1 text-ivory">A Country in Full Ascent</h2>
          <GoldRule light />
          <div className="mt-6 flex max-w-[760px] flex-col gap-4">
            <p className="text-lead text-champagne/85">
              Côte d&rsquo;Ivoire is writing one of the most compelling economic success stories in
              Africa. With consistent GDP growth above 6%, it offers investors a rare combination of
              stability, predictability, and momentum. The economy has rapidly diversified beyond
              its world-leading cocoa sector, with mining now a central pillar — contributing nearly
              5% of GDP and 13% of exports.
            </p>
            <p className="text-lead text-champagne/85">
              This impressive rise is no accident. It is the direct result of bold, investor-friendly
              reforms: a modernised mining code, a fully digitised cadastre, simplified permitting
              processes, and a government that has sent a clear message to the world — Côte
              d&rsquo;Ivoire is open for business and ready to deliver results.
            </p>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {ascentStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-sm border border-ivory/15 bg-ivory/[0.06] p-5"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="font-display font-bold text-[1.9rem] leading-none text-gold-light tnum">
                    {stat.value}
                  </span>
                  <span className="mt-2 block text-[11px] font-semibold uppercase tracking-[0.16em] text-ivory/70">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 4 · The Gold Story — production timeline, six stat cards */}
      <section id="gold-story" className="scroll-mt-24 bg-ivory px-4 py-20 sm:scroll-mt-32 sm:px-8 lg:scroll-mt-24 lg:px-16">
        <div className="mx-auto w-full max-w-[max(1280px,80vw)]">
          <Eyebrow>The Gold Story</Eyebrow>
          <h2 className="mt-3 font-display text-h1 text-ink">From Promise to Production</h2>
          <GoldRule />
          <p className="mt-6 max-w-[840px] text-lead text-muted">
            In just over a decade, gold production has surged more than fourfold — from 13.2 tonnes
            in 2012 to over 59.1 tonnes in 2024. Output is projected to reach 62 tonnes in 2026, 63
            tonnes in 2027, and 69 tonnes in 2028, with an ambitious national target of 100 tonnes
            per year by 2030.
          </p>
          <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {goldStory.map((card) => (
              <div
                key={card.year}
                className={
                  card.target
                    ? 'rounded-sm border border-gold bg-[#faf5e6] p-4'
                    : card.highlight
                      ? 'rounded-sm border-t-[3px] border-t-gold bg-[#faf5e6] p-4'
                      : 'rounded-sm border border-hairline bg-[#f5f5f4] p-4'
                }
              >
                <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  {card.year}
                </dt>
                <dd
                  className={`tnum mt-2 font-display font-bold text-[1.75rem] leading-none ${
                    card.target ? 'text-gold' : 'text-emerald-deep'
                  }`}
                >
                  {card.value}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 max-w-[840px] text-lead text-muted">
            Backed by an estimated 600 tonnes of gold potential in the prolific Birimian Greenstone
            Belt, Côte d&rsquo;Ivoire currently operates 19 mines and is preparing to bring major
            new projects online, including the Koné, Doropo, and Tanda mines. A standout development
            is Resolute Mining&rsquo;s $516 million Doropo Gold Project, with construction set to
            begin in 2026.
          </p>
        </div>
      </section>

      {/* 5 · Exploration surge — dark band with +82% stat card */}
      <section id="exploration-surge" className="relative scroll-mt-24 overflow-hidden bg-emerald-ink px-4 py-20 text-ivory sm:scroll-mt-32 sm:px-8 lg:scroll-mt-24 lg:px-16">
        <img
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/home/reasons-cote-divoire.jpg"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-emerald-deep/80" />
        <div className="a2m-motif absolute inset-0" aria-hidden="true" />
        <div className="relative z-10 mx-auto grid w-full max-w-[max(1280px,80vw)] items-center gap-12 lg:grid-cols-[1fr_360px]">
          <div>
            <GoldEyebrow>Africa&rsquo;s number one exploration destination</GoldEyebrow>
            <h2 className="mt-3 font-display text-h1 text-ivory">
              The global investment community has taken notice
            </h2>
            <GoldRule light />
            <p className="mt-6 max-w-[720px] text-lead text-champagne/85">
              According to S&amp;P Global Market Intelligence, Côte d&rsquo;Ivoire attracted $186
              million in exploration investment in 2025 — an 82% increase in a single year. This
              dramatic surge confirms what forward-looking investors already know: Côte
              d&rsquo;Ivoire is Africa&rsquo;s leading exploration destination, thanks to progressive
              policies, regulatory clarity, and exceptional geological potential.
            </p>
          </div>
          <aside className="rounded-sm border border-ivory/15 bg-ivory/[0.06] p-8">
            <p className="font-display font-bold text-[3.5rem] leading-none text-gold-light tnum">
              +82%
            </p>
            <p className="mt-4 text-small text-ivory/80">
              Growth in exploration investment year-over-year — $186M attracted in 2025
            </p>
            <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-ivory/50">
              S&amp;P Global Market Intelligence
            </p>
          </aside>
        </div>
      </section>

      {/* 6 · Beyond Gold — strategic minerals pills */}
      <section id="beyond-gold" className="scroll-mt-24 bg-ivory px-4 py-20 sm:scroll-mt-32 sm:px-8 lg:scroll-mt-24 lg:px-16">
        <div className="mx-auto w-full max-w-[max(1280px,80vw)]">
          <Eyebrow>Beyond Gold</Eyebrow>
          <h2 className="mt-3 font-display text-h1 text-ink">
            Strategic Minerals for the Energy Transition
          </h2>
          <GoldRule />
          <p className="mt-6 max-w-[840px] text-lead text-muted">
            Côte d&rsquo;Ivoire&rsquo;s mineral potential extends far beyond gold, offering a rich
            and diversified portfolio of critical minerals essential to the global energy transition
            and the green economy. The country&rsquo;s substantial deposits position it as an
            increasingly strategic player in the supply chains of the future.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {minerals.map((mineral) => (
              <li
                key={mineral}
                className="rounded-sm bg-mist px-4 py-2 text-[13px] font-medium text-emerald-deep"
              >
                {mineral}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-[840px] text-lead text-muted">
            With its favourable geology, stable investment climate, and government commitment to
            responsible resource development, Côte d&rsquo;Ivoire is emerging as a reliable and
            competitive source of the minerals the world needs for electric vehicles, renewable
            energy infrastructure, battery storage, and advanced technologies.
          </p>
        </div>
      </section>

      {/* 7 · A Proven Partner — dark editorial band, framed portrait + pull quote */}
      <section id="proven-partner" className="relative scroll-mt-24 overflow-hidden bg-emerald-ink px-4 py-20 text-ivory sm:scroll-mt-32 sm:px-8 lg:scroll-mt-24 lg:px-16 lg:py-28">
        <div aria-hidden="true" className="a2m-motif absolute inset-0" />
        <div className="relative z-10 mx-auto grid w-full max-w-[max(1280px,80vw)] items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <figure className="a2m-reveal mx-auto w-full max-w-[400px] overflow-hidden rounded-sm border border-gold/35 bg-emerald-deep shadow-[0_24px_60px_rgba(3,20,16,0.55)]">
            <img
              alt="Mamadou Sangafowa-Coulibaly, Minister of Mines, Petroleum and Energy of Côte d'Ivoire"
              loading="lazy"
              className="aspect-[1000/1049] w-full object-cover object-center"
              src="/images/people/mamadou-sangafowa-coulibaly.jpg"
            />
            <figcaption className="border-t border-ink/10 bg-ivory px-6 py-5 text-left">
              <p className="whitespace-nowrap font-display font-semibold text-body text-ink">
                Mamadou Sangafowa-Coulibaly
              </p>
              <p className="mt-2 text-small text-muted">
                <span className="block">Minister of Mines, Petroleum and Energy</span>
                <span className="mt-1 block">Côte d&rsquo;Ivoire</span>
              </p>
            </figcaption>
          </figure>
          <div>
            <GoldEyebrow>A proven partner for Canadian mining</GoldEyebrow>
            <h2 className="mt-3 font-display text-h1 text-ivory">
              Decades of shared success — <span className="text-gold-light">and counting</span>
            </h2>
            <GoldRule light />
            <p className="mt-6 max-w-[640px] text-lead text-ivory/85">
              For decades, Canadian companies have been at the forefront of Côte
              d&rsquo;Ivoire&rsquo;s mining success, investing billions and developing some of the
              country&rsquo;s most productive operations. The Toronto Stock Exchange has become
              one of the most active gateways for mining investment between North America and
              Africa.
            </p>
            <blockquote className="mt-8 max-w-[640px] border-l-2 border-gold pl-6">
              <p className="font-display text-h3 leading-snug text-ivory">
                &ldquo;A relationship spanning over 40 years — built on shared values, the French
                language, and a mutual commitment to long-term success.&rdquo;
              </p>
              <footer className="mt-3 text-small text-ivory/60">
                Reaffirmed at the highest level in June 2026 by Quebec&rsquo;s Deputy Minister of
                International Relations
              </footer>
            </blockquote>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                '40+ years of partnership',
                'TSX investment gateway',
                'Billions invested by Canadian companies',
              ].map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center rounded-none border border-gold/40 bg-gold/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold-light"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8 · The Vision — industrial transformation, 3 stat cards */}
      <section id="vision" className="scroll-mt-24 bg-ivory px-4 pt-20 pb-20 sm:scroll-mt-32 sm:px-8 lg:scroll-mt-24 lg:px-16 lg:pt-28">
        <div className="mx-auto w-full max-w-[max(1280px,80vw)]">
          <Eyebrow>The Vision</Eyebrow>
          <h2 className="mt-3 font-display text-h1 text-ink">Industrial Transformation</h2>
          <GoldRule />
          <p className="mt-6 max-w-[840px] text-lead text-muted">
            Côte d&rsquo;Ivoire is not simply chasing more mines — it is pursuing genuine industrial
            transformation. Through its Integrated Policy for Mineral and Energy Resources (PIRME),
            the government aims to double the mining-energy sector&rsquo;s contribution to GDP from
            7% to 14% by 2040. Supported by the ambitious National Development Plan 2026–2030
            (over 114,000 billion FCFA / $198 billion USD), this is a comprehensive strategy for
            infrastructure development, industrial growth, and sustainable prosperity.
          </p>
          <dl className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {visionStats.map((stat) => (
              <div
                key={stat.value}
                className="rounded-sm border border-hairline bg-card p-6 shadow-card"
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="tnum font-display font-bold text-data-xl text-emerald-deep">
                    {stat.value}
                  </span>
                  <span className="mt-2 block text-small text-muted">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 9 · Closing CTA — photo left, emerald panel right */}
      <section className="bg-ivory px-4 pb-20 sm:px-8 lg:px-16">
        <div className="mx-auto grid w-full max-w-[max(1280px,80vw)] overflow-hidden rounded-sm shadow-card lg:grid-cols-2">
          <img
            alt="Ministerial delegation gathered on stage at an African mining summit"
            loading="lazy"
            className="h-96 w-full object-cover lg:h-full lg:min-h-[30rem]"
            src="/images/home/ministerial-roundtable.jpg"
          />
          <div className="a2m-motif relative overflow-hidden bg-emerald-deep px-6 py-16 text-ivory sm:px-10 lg:flex lg:items-center lg:px-14">
            <div className="relative z-10 max-w-xl">
              <p className="text-small font-semibold uppercase tracking-[0.26em] text-gold">
                Meet the Ministerial Delegation
              </p>
              <h2 className="mt-3 font-display text-h1 text-ivory">
                Be part of African Mining in Montreal
              </h2>
              <p className="mt-5 text-lead text-champagne/85">
                Join ministers, executives and investors shaping the Canada-Africa mining agenda.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a className={goldButton} href={`${SITE_ORIGIN}/en/news#sign-up`}>
                  Join the waitlist
                </a>
                <a className={goldOutlineButton} href={PROGRAM_PDF} target="_blank" rel="noreferrer">
                  Download the program
                </a>
              </div>
              <p className="mt-8 text-small text-champagne/75">
                June 7–9, 2027 · Centre Mont-Royal, Montreal, Quebec, Canada
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
