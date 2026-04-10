import { useEffect, useRef, useState } from 'react';
import {
  Phone, Mail, MapPin, ChevronDown, ExternalLink, Check,
  Users, Calendar, FileText, Search, Clock, TrendingUp,
  Star, Shield, Zap, MessageSquare, ArrowRight, X, Award, Target
} from 'lucide-react';

/* ─── Hook: scroll‑triggered visibility ─── */
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const fade = (v: boolean) =>
  `transition-all duration-700 ${v ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;

/* ─── Calendly popup ─── */
function openCalendly() {
  (window as any).Calendly?.initPopupWidget({ url: 'https://calendly.com/workwithjpr/30min' });
}

/* ═══════════════════════════════════════════════════════
   APP
   ═══════════════════════════════════════════════════════ */
export default function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const s1 = useInView(); const s2 = useInView(); const s3 = useInView();
  const s4 = useInView(); const s5 = useInView(); const s6 = useInView();
  const s7 = useInView(); const s8 = useInView();

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans antialiased">

      {/* ── Sticky Nav ── */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-black/70 backdrop-blur-xl border-b border-amber-500/10">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <a href="#" className="font-display text-xl tracking-wider">
            <span className="text-amber-400">JPR</span> GYM DIGITAL
          </a>
          <div className="hidden md:flex items-center gap-7 text-[13px] text-gray-500 font-medium">
            <a href="#problem" className="hover:text-amber-400 transition">Problem</a>
            <a href="#loesung" className="hover:text-amber-400 transition">Lösung</a>
            <a href="#referenz" className="hover:text-amber-400 transition">Referenz</a>
            <a href="#preise" className="hover:text-amber-400 transition">Pakete</a>
            <a href="#faq" className="hover:text-amber-400 transition">FAQ</a>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={openCalendly}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-xs font-bold rounded-lg transition shadow-lg shadow-red-900/30"
            >
              Kostenloses Erstgespräch
            </button>
            <button className="md:hidden text-white" onClick={() => setMobileMenu(!mobileMenu)}>
              {mobileMenu ? <X className="w-5 h-5" /> : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>}
            </button>
          </div>
        </div>
        {mobileMenu && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-amber-500/10 px-4 pb-4 space-y-2">
            {[['#problem', 'Problem'], ['#loesung', 'Lösung'], ['#referenz', 'Referenz'], ['#preise', 'Pakete'], ['#faq', 'FAQ']].map(([h, l]) => (
              <a key={h} href={h} onClick={() => setMobileMenu(false)} className="block py-2.5 text-gray-300 hover:text-amber-400 font-medium">{l}</a>
            ))}
            <button onClick={() => { openCalendly(); setMobileMenu(false); }} className="w-full py-3 bg-red-600 text-white font-bold rounded-lg mt-2">
              Kostenloses Erstgespräch
            </button>
          </div>
        )}
      </nav>

      {/* ── Hero ── */}
      <header className="relative min-h-[90dvh] flex items-center px-4 pt-20 pb-12 overflow-hidden">
        {/* Multi-layer background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(220,38,38,0.15),transparent)]" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        {/* Gold accent line */}
        <div className="absolute top-14 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-[1fr_auto] gap-12 items-center">
          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/5 text-amber-400 text-[11px] font-bold uppercase tracking-[0.15em] mb-6">
              <Award className="w-3 h-3" /> Nur für Kampfsport-Gyms
            </div>

            <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] tracking-tight leading-[0.92] mb-5">
              DEIN GYM VERDIENT<br />
              EINE WEBSITE, DIE<br />
              <span className="bg-gradient-to-r from-red-500 via-red-400 to-amber-500 bg-clip-text text-transparent">SO GUT IST WIE</span><br />
              <span className="bg-gradient-to-r from-red-500 via-red-400 to-amber-500 bg-clip-text text-transparent">DEIN TRAINING.</span>
            </h1>

            <p className="text-base md:text-lg text-gray-400 max-w-lg mb-8 leading-relaxed">
              Mehr Probetrainings. Weniger WhatsApp-Chaos.<br />
              Keine Technik-Kopfschmerzen.<br />
              <span className="text-white font-semibold">In einer Woche online. Erster Entwurf kostenlos.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-3">
              <button
                onClick={openCalendly}
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold rounded-lg transition shadow-xl shadow-red-900/40 active:scale-[0.98]"
              >
                Kostenloses Erstgespräch <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <span className="text-gray-600 text-xs py-3.5 sm:py-0 sm:pt-4">Nur 3 Plätze/Monat — April: 1 frei</span>
            </div>
          </div>

          {/* Right: Stats card */}
          <div className="hidden lg:block">
            <div className="w-64 p-5 rounded-2xl bg-zinc-900/80 border border-white/5 backdrop-blur space-y-4">
              <div className="text-[11px] text-amber-400 font-bold uppercase tracking-wider mb-3">Live Ergebnisse</div>
              {[
                { val: '~5', unit: '/Woche', label: 'Neue Interessenten', color: 'text-red-400' },
                { val: '7', unit: ' Tage', label: 'Bis zur fertigen Website', color: 'text-amber-400' },
                { val: '0€', unit: '/Monat', label: 'Software-Kosten', color: 'text-green-400' },
                { val: '24/7', unit: '', label: 'Online-Buchung aktiv', color: 'text-white' },
              ].map((s, i) => (
                <div key={i} className="flex items-baseline justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0">
                  <div>
                    <span className={`font-display text-2xl ${s.color}`}>{s.val}</span>
                    <span className="text-gray-500 text-xs">{s.unit}</span>
                  </div>
                  <span className="text-gray-600 text-xs">{s.label}</span>
                </div>
              ))}
              <div className="pt-1 text-[10px] text-gray-600 text-center">Daten: Muay Thai Subyen e.V.</div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Trust Bar ── */}
      <div className="border-y border-amber-500/10 bg-zinc-950/50 py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[12px]">
          <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
            <Star className="w-3.5 h-3.5 fill-amber-400" /> 5.0 Google
          </span>
          <span className="text-gray-600">|</span>
          <span className="text-gray-400">Referenz: Muay Thai Subyen e.V.</span>
          <span className="text-gray-600">|</span>
          <span className="text-gray-400">Berlin</span>
          <span className="text-gray-600">|</span>
          <span className="text-gray-400">React — kein WordPress</span>
        </div>
      </div>

      {/* ── Problem Section ── */}
      <section id="problem" ref={s1.ref} className={`py-20 px-4 ${fade(s1.visible)}`}>
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
            {/* Left: headline */}
            <div className="lg:sticky lg:top-24">
              <p className="text-amber-400 text-[11px] font-bold uppercase tracking-[0.15em] mb-3">Das Problem</p>
              <h2 className="font-display text-4xl md:text-5xl tracking-tight leading-[0.95] mb-4">
                DEIN TRAINING<br />IST WELTKLASSE.
              </h2>
              <p className="font-display text-4xl md:text-5xl tracking-tight leading-[0.95] text-red-500 mb-6">
                DEINE ONLINE-<br />PRÄSENZ NICHT.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Du investierst hunderte Stunden ins Training — aber dein digitaler Auftritt vertreibt Kunden, statt sie zu gewinnen.
              </p>
            </div>

            {/* Right: pain points */}
            <div className="space-y-3">
              {[
                { icon: Search, title: 'Unsichtbar auf Google', text: 'Interessenten suchen "Kampfsport Berlin" — und finden deine Konkurrenz. Dein Gym taucht nicht mal auf Seite 2 auf.' },
                { icon: MessageSquare, title: 'WhatsApp-Chaos', text: '30+ Nachrichten am Tag für Probetraining-Anfragen. Du antwortest abends, wenn du müde bist. Die Hälfte springt vorher ab.' },
                { icon: FileText, title: 'Zettelwirtschaft', text: 'Mitgliederverwaltung per Excel oder Ordner. Wer hat bezahlt? Wer kündigt wann? Wer hat welchen Vertrag? Keiner weiß es genau.' },
                { icon: Clock, title: 'Website von 2015', text: 'Kein Buchungssystem, keine Preise, kein aktueller Trainingsplan. Stock-Fotos von UFC-Kämpfern. Auf dem Handy unbenutzbar.' },
              ].map((p, i) => (
                <div key={i} className="group p-5 rounded-xl bg-zinc-900/40 border border-white/5 hover:border-red-500/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 group-hover:bg-red-500/20 flex items-center justify-center transition">
                      <p.icon className="w-4 h-4 text-red-400" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-bold text-sm">{p.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed pl-11">{p.text}</p>
                </div>
              ))}

              <div className="p-4 rounded-xl bg-gradient-to-r from-red-950/40 to-amber-950/20 border border-red-500/20">
                <p className="text-sm text-gray-300 leading-relaxed">
                  <span className="text-amber-400 font-bold">Rechne mal:</span> 5–15 verlorene Interessenten pro Monat bei €80/Monat Mitgliedsbeitrag = <span className="text-red-400 font-bold">€4.800–€14.400 pro Jahr</span>, die du auf dem Tisch liegen lässt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Solution Section ── */}
      <section id="loesung" ref={s2.ref} className={`py-20 px-4 ${fade(s2.visible)}`}>
        <div className="max-w-5xl mx-auto">
          <p className="text-amber-400 text-[11px] font-bold uppercase tracking-[0.15em] mb-3 text-center">Die Lösung</p>
          <h2 className="font-display text-4xl md:text-5xl text-center mb-3 tracking-tight">
            ALLES WAS DEIN GYM BRAUCHT.
          </h2>
          <p className="font-display text-4xl md:text-5xl text-center mb-4 tracking-tight text-red-500">
            NICHTS WAS ES NICHT BRAUCHT.
          </p>
          <p className="text-gray-500 text-center mb-14 max-w-xl mx-auto">
            Kein WordPress. Keine monatlichen SaaS-Gebühren. Keine Abhängigkeit. Deine Website, deine Daten, dein Eigentum.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: Calendar, title: 'Online-Probetraining', desc: 'Interessenten buchen direkt — du bekommst eine Benachrichtigung. Kein WhatsApp-Ping-Pong.', accent: 'red' },
              { icon: Users, title: 'Mitgliederverwaltung', desc: 'Digitale Verträge, Beitragsübersicht, Kündigungen — alles an einem Ort.', accent: 'red' },
              { icon: TrendingUp, title: 'Google-Sichtbarkeit', desc: 'SEO für deinen Bezirk. "Muay Thai Berlin Charlottenburg" — dein Gym ganz oben.', accent: 'amber' },
              { icon: FileText, title: 'Trainingsplan live', desc: 'Immer aktuell, immer sichtbar. Änderungen in Minuten, nicht Tagen.', accent: 'red' },
              { icon: Target, title: 'Conversion-optimiert', desc: 'Jede Sektion hat ein Ziel: den Besucher zum Probetraining zu bringen.', accent: 'amber' },
              { icon: Shield, title: 'DSGVO-konform', desc: 'Keine externen Fonts, kein Tracking ohne Einwilligung. Rechtssicher.', accent: 'red' },
            ].map((s, i) => (
              <div key={i} className="group relative p-5 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-amber-500/20 transition-all duration-300 overflow-hidden">
                {/* Subtle top accent line */}
                <div className={`absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent ${s.accent === 'amber' ? 'via-amber-500/40' : 'via-red-500/40'} to-transparent opacity-0 group-hover:opacity-100 transition`} />
                <div className={`w-10 h-10 rounded-lg ${s.accent === 'amber' ? 'bg-amber-500/10' : 'bg-red-500/10'} flex items-center justify-center mb-3`}>
                  <s.icon className={`w-5 h-5 ${s.accent === 'amber' ? 'text-amber-400' : 'text-red-400'}`} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold mb-1.5">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Study: Muay Thai Subyen ── */}
      <section id="referenz" ref={s3.ref} className={`py-20 px-4 bg-gradient-to-b from-[#0a0a0a] via-zinc-950 to-[#0a0a0a] ${fade(s3.visible)}`}>
        <div className="max-w-5xl mx-auto">
          <p className="text-amber-400 text-[11px] font-bold uppercase tracking-[0.15em] mb-3 text-center">Referenz</p>
          <h2 className="font-display text-4xl md:text-5xl text-center mb-14 tracking-tight">
            MUAY THAI SUBYEN <span className="text-amber-400">E.V.</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Screenshot */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
              <img
                src="/muay-thai-subyen.webp"
                alt="Muay Thai Subyen Website"
                className="w-full aspect-[16/10] object-cover group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-5">
                <a
                  href="https://www.muaythai-subyen.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-white text-sm font-semibold"
                >
                  Live ansehen <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Details */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[11px] font-bold uppercase tracking-wider mb-4">
                <Shield className="w-3 h-3" /> Thailand Sports Authority zertifiziert
              </div>
              <h3 className="text-xl font-bold mb-5">Berlins einziges zertifiziertes Muay Thai Gym — jetzt mit digitaler Infrastruktur.</h3>

              {/* KPI Grid */}
              <div className="grid grid-cols-2 gap-2 mb-5">
                {[
                  { num: '~5', label: 'Leads / Woche', color: 'text-red-400' },
                  { num: '7', label: 'Tage Umsetzung', color: 'text-amber-400' },
                  { num: '0', label: 'Excel nötig', color: 'text-green-400' },
                  { num: '24/7', label: 'Online-Buchung', color: 'text-white' },
                ].map((k, i) => (
                  <div key={i} className="p-3 rounded-lg bg-black/60 border border-white/5">
                    <div className={`font-display text-2xl ${k.color}`}>{k.num}</div>
                    <div className="text-[11px] text-gray-600">{k.label}</div>
                  </div>
                ))}
              </div>

              <ul className="space-y-1.5 mb-5">
                {[
                  'Online-Probetraining direkt auf der Startseite',
                  'Digitale Mitgliederverwaltung + Online-Verträge',
                  'Interaktiver Trainingsplan (immer aktuell)',
                  'Optimiert für Google und KI-Suche',
                  'Dark Theme mit authentischen Gym-Fotos',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                    <Check className="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="https://www.muaythai-subyen.de"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold text-sm transition"
              >
                Live ansehen <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section ref={s4.ref} className={`py-20 px-4 ${fade(s4.visible)}`}>
        <div className="max-w-4xl mx-auto">
          <p className="text-amber-400 text-[11px] font-bold uppercase tracking-[0.15em] mb-3 text-center">So läuft's</p>
          <h2 className="font-display text-4xl md:text-5xl text-center mb-14 tracking-tight">
            3 SCHRITTE. <span className="text-red-500">FERTIG.</span>
          </h2>

          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-[27px] top-8 bottom-8 w-px bg-gradient-to-b from-red-500/40 via-amber-500/20 to-transparent hidden md:block" />

            <div className="space-y-6">
              {[
                { step: '01', title: 'Kostenloses Erstgespräch', desc: '30 Minuten. Wir schauen uns an, was du brauchst, wie dein Gym tickt, was der Plan ist. Kein Verkaufsgespräch — passt es nicht, sagen wir das ehrlich.', color: 'border-red-500/30' },
                { step: '02', title: 'Erster Entwurf in 3 Tagen', desc: 'Keine PowerPoint-Folien — ein klickbarer Entwurf deiner echten Website. Gefällt dir nicht? Du zahlst nichts.', color: 'border-amber-500/30' },
                { step: '03', title: 'Live in einer Woche', desc: 'Fertige Website mit allem: Probetraining-Buchung, Trainingsplan, Mitgliederverwaltung, SEO. Am Ende der Woche ist sie online.', color: 'border-amber-500/30' },
              ].map((s) => (
                <div key={s.step} className={`flex gap-5 items-start p-5 rounded-xl bg-zinc-900/30 border ${s.color} transition hover:bg-zinc-900/50`}>
                  <div className="w-14 h-14 rounded-xl bg-black border border-white/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-display text-2xl text-red-500">{s.step}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="preise" ref={s5.ref} className={`py-20 px-4 bg-gradient-to-b from-[#0a0a0a] via-zinc-950 to-[#0a0a0a] ${fade(s5.visible)}`}>
        <div className="max-w-5xl mx-auto">
          <p className="text-amber-400 text-[11px] font-bold uppercase tracking-[0.15em] mb-3 text-center">Pakete</p>
          <h2 className="font-display text-4xl md:text-5xl text-center mb-3 tracking-tight">
            KLARE PREISE.
          </h2>
          <p className="font-display text-4xl md:text-5xl text-center mb-4 tracking-tight text-red-500">
            KEINE ÜBERRASCHUNGEN.
          </p>
          <p className="text-gray-500 text-center mb-14 max-w-lg mx-auto text-sm">
            Einmal zahlen, dauerhaft nutzen. Keine monatlichen SaaS-Gebühren.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                name: 'STARTER',
                price: '1.500',
                desc: 'Professionelle Online-Präsenz.',
                features: ['Moderne Website (mobil optimiert)', 'Trainingsplan & Preise online', 'Probetraining-Kontaktformular', 'Google Business Setup', 'Basis-SEO für deinen Bezirk'],
                popular: false,
                accent: 'white/10',
              },
              {
                name: 'FIGHTER',
                price: '2.500',
                desc: 'Alles was 90% der Gyms brauchen.',
                features: ['Alles aus Starter', 'Online-Probetraining-Buchung', 'Trainingsplan (selbst änderbar)', 'Erweiterte Google-Optimierung', 'Trainer-Profile mit Bios', 'Cookie-Banner + DSGVO-konform'],
                popular: true,
                accent: 'red-500',
              },
              {
                name: 'CHAMPION',
                price: '4.500',
                desc: 'Das volle Programm.',
                features: ['Alles aus Fighter', 'Digitale Mitgliederverwaltung', 'Online-Verträge (rechtssicher)', 'Beitragsübersicht für Mitglieder', 'KI-Suchoptimierung', 'Prioritäts-Support'],
                popular: false,
                accent: 'amber-500',
              },
            ].map((pkg) => (
              <div
                key={pkg.name}
                className={`relative p-6 rounded-2xl transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-gradient-to-b from-red-950/30 to-zinc-900/50 border-2 border-red-500/40 shadow-2xl shadow-red-900/20 scale-[1.02]'
                    : pkg.name === 'CHAMPION'
                      ? 'bg-zinc-900/30 border border-amber-500/15 hover:border-amber-500/30'
                      : 'bg-zinc-900/30 border border-white/5 hover:border-white/15'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-red-600 text-white text-[10px] font-bold rounded-full uppercase tracking-widest">
                    Meistgebucht
                  </div>
                )}
                <h3 className="font-display text-2xl mb-1 tracking-wider">
                  {pkg.name === 'CHAMPION' ? <span className="text-amber-400">{pkg.name}</span> : pkg.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl font-bold">€{pkg.price}</span>
                  <span className="text-gray-600 text-xs">einmalig</span>
                </div>
                <p className="text-gray-500 text-sm mb-5">{pkg.desc}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <Check className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${pkg.name === 'CHAMPION' ? 'text-amber-400' : 'text-red-400'}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={openCalendly}
                  className={`w-full py-3 rounded-lg font-bold text-sm transition ${
                    pkg.popular
                      ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-900/30'
                      : pkg.name === 'CHAMPION'
                        ? 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/20'
                        : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  }`}
                >
                  {pkg.name} anfragen
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-700 text-xs mt-8">
            Plus Hosting: ab €19/Monat (inkl. SSL, Updates, kleine Änderungen). Kein Software-Abo — du zahlst einmal, es gehört dir.
          </p>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section ref={s6.ref} className={`py-16 px-4 ${fade(s6.visible)}`}>
        <div className="max-w-2xl mx-auto">
          <div className="p-8 rounded-2xl bg-zinc-900/30 border border-amber-500/10 relative">
            <div className="absolute -top-3 left-8 text-amber-400/20 font-display text-6xl leading-none">"</div>
            <div className="flex gap-0.5 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <blockquote className="text-lg text-gray-200 leading-relaxed mb-5">
              Professionell, schnell und genau das was wir brauchten. Die Website mit Mitgliederverwaltung war in einer Woche fertig.
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-amber-600 flex items-center justify-center text-white font-bold text-sm">HZ</div>
              <div>
                <div className="font-bold text-sm">Hassan El Zaghir</div>
                <div className="text-gray-600 text-xs">Vorstand, Muay Thai Subyen e.V.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" ref={s7.ref} className={`py-20 px-4 ${fade(s7.visible)}`}>
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-400 text-[11px] font-bold uppercase tracking-[0.15em] mb-3 text-center">FAQ</p>
          <h2 className="font-display text-4xl text-center mb-14 tracking-tight">
            BEVOR DU <span className="text-red-500">FRAGST.</span>
          </h2>

          <div className="space-y-3">
            {[
              { q: 'Warum kein WordPress?', a: 'WordPress ist langsam, unsicher und braucht ständig Updates und Plugins. Wir bauen mit moderner Technologie — schneller, sicherer, keine Plugin-Hölle. Deine Website lädt in unter 2 Sekunden.' },
              { q: 'Warum kein Eversports oder Fitogram?', a: 'Eversports nimmt €49–149/Monat — für immer. Nach 2 Jahren hast du €1.200–€3.600 bezahlt und besitzt nichts. Bei uns zahlst du einmal und die Lösung gehört dir.' },
              { q: 'Was wenn mir der Entwurf nicht gefällt?', a: 'Dann zahlst du nichts. Du siehst den klickbaren Entwurf deiner echten Website, bevor du einen Cent investierst.' },
              { q: 'Kann ich die Website selbst bearbeiten?', a: 'Trainingsplan und einfache Inhalte — ja. Für technische Änderungen sind wir da. Im Hosting ist ein monatliches Kontingent für Anpassungen inklusive.' },
              { q: 'Ich bin ein Verein (e.V.) — geht das?', a: 'Ja. Muay Thai Subyen ist ein e.V. — unser Referenzprojekt. Wir kennen die Anforderungen: Satzungskonformität, Beitragsstruktur, Vorstandskommunikation.' },
              { q: 'Wie lange dauert es wirklich?', a: 'Starter: 5–7 Tage. Mit Mitgliederverwaltung (Champion): 10–14 Tage. Wir arbeiten fokussiert an einem Projekt — nicht an zehn gleichzeitig.' },
            ].map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section ref={s8.ref} className={`py-20 px-4 relative overflow-hidden ${fade(s8.visible)}`}>
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(220,38,38,0.12),transparent)]" />

        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-4 tracking-tight">
            BEREIT?
          </h2>
          <p className="font-display text-4xl md:text-5xl mb-6 tracking-tight bg-gradient-to-r from-red-500 to-amber-500 bg-clip-text text-transparent">
            LASS UNS REDEN.
          </p>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            30 Minuten. Kein Verkaufsgespräch. Wir schauen uns an, wo dein Gym steht — und was der nächste Schritt wäre.
          </p>
          <button
            onClick={openCalendly}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-lg font-bold rounded-lg transition shadow-2xl shadow-red-900/40 active:scale-[0.98]"
          >
            Kostenloses Erstgespräch buchen <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-sm text-gray-600">
            <a href="tel:+4917631504123" className="flex items-center gap-1.5 hover:text-amber-400 transition">
              <Phone className="w-3.5 h-3.5" /> +49 176 3150 4123
            </a>
            <a href="mailto:jan@workwithjpr.com" className="flex items-center gap-1.5 hover:text-amber-400 transition">
              <Mail className="w-3.5 h-3.5" /> jan@workwithjpr.com
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> Berlin
            </span>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/5 py-6 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-[12px] text-gray-700">
          <div className="flex items-center gap-3">
            <span className="font-display text-base"><span className="text-amber-400">JPR</span> GYM DIGITAL</span>
            <span className="hidden md:inline text-gray-800">JPR Consulting GmbH, Berlin</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="https://workwithjpr.com/imprint" className="hover:text-white transition">Impressum</a>
            <a href="https://workwithjpr.com/privacy" className="hover:text-white transition">Datenschutz</a>
            <a href="https://g.page/r/Cbent0mi4nueEAE/review" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-amber-500/60 hover:text-amber-400 transition">
              <Star className="w-3 h-3" /> Bewerten
            </a>
          </div>
        </div>
      </footer>

      {/* ── Sticky Mobile CTA ── */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-50 p-3 bg-black/90 backdrop-blur-xl border-t border-amber-500/10">
        <button
          onClick={openCalendly}
          className="w-full py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-lg text-sm shadow-lg shadow-red-900/30"
        >
          Kostenloses Erstgespräch buchen
        </button>
      </div>

      {/* ── Calendly ── */}
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <script src="https://assets.calendly.com/assets/external/widget.js" async></script>
    </div>
  );
}

/* ─── FAQ Accordion ─── */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/5 rounded-xl overflow-hidden hover:border-amber-500/15 transition">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-white/[0.02] transition"
      >
        <span className="font-bold text-sm pr-4">{q}</span>
        <ChevronDown className={`w-4 h-4 text-amber-400/60 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="px-4 pb-4 text-gray-500 text-sm leading-relaxed">
            {a}
          </div>
        </div>
      </div>
    </div>
  );
}
