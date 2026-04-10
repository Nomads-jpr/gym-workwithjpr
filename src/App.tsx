import { useEffect, useRef, useState } from 'react';
import {
  Phone, Mail, MapPin, ChevronDown, ExternalLink, Check,
  Users, Calendar, FileText, Search, Clock, TrendingUp,
  Star, Shield, Zap, MessageSquare, ArrowRight, X
} from 'lucide-react';

/* ─── Hook: scroll‑triggered visibility ─── */
function useInView(threshold = 0.15) {
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
  const s7 = useInView();

  return (
    <div className="bg-black text-white min-h-screen font-sans antialiased">

      {/* ── Sticky Nav ── */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#" className="font-display text-2xl tracking-wide">
            JPR <span className="text-red-500">GYM</span> DIGITAL
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#problem" className="hover:text-white transition">Dein Problem</a>
            <a href="#loesung" className="hover:text-white transition">Unsere Lösung</a>
            <a href="#preise" className="hover:text-white transition">Pakete</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={openCalendly}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded-lg transition"
            >
              Kostenlose Beratung
            </button>
            <button className="md:hidden text-white" onClick={() => setMobileMenu(!mobileMenu)}>
              {mobileMenu ? <X className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {mobileMenu && (
          <div className="md:hidden bg-black/95 border-t border-white/5 px-4 pb-4 space-y-3">
            {[['#problem', 'Dein Problem'], ['#loesung', 'Unsere Lösung'], ['#preise', 'Pakete'], ['#faq', 'FAQ']].map(([h, l]) => (
              <a key={h} href={h} onClick={() => setMobileMenu(false)} className="block py-2 text-gray-300 hover:text-white">{l}</a>
            ))}
            <button onClick={() => { openCalendly(); setMobileMenu(false); }} className="w-full py-3 bg-red-600 text-white font-bold rounded-lg">
              Kostenlose Beratung
            </button>
          </div>
        )}
      </nav>

      {/* ── Hero ── */}
      <header className="relative min-h-[100dvh] flex items-center justify-center px-4 pt-20 pb-16 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/30 via-black to-black" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-red-600/8 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-semibold uppercase tracking-widest mb-8">
            <Zap className="w-3.5 h-3.5" /> Spezialisiert auf Kampfsport-Gyms
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl tracking-tight leading-[0.9] mb-6">
            DEIN GYM VERDIENT<br />
            <span className="text-red-500">EINE WEBSITE,</span><br />
            DIE SO GUT IST<br />
            <span className="text-red-500">WIE DEIN TRAINING.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Mehr Probetrainings. Weniger WhatsApp-Chaos. Keine Technik-Kopfschmerzen.
            <br className="hidden sm:block" />
            <span className="text-white font-semibold">In einer Woche online — erster Entwurf kostenlos.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <button
              onClick={openCalendly}
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white text-lg font-bold rounded-lg transition active:scale-[0.98] shadow-[0_0_40px_rgba(220,38,38,0.3)]"
            >
              Kostenloses Erstgespräch <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-gray-600 text-sm">Nur 3 Plätze pro Monat — April: noch 1 frei</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-600" />
        </div>
      </header>

      {/* ── Social Proof Strip ── */}
      <div className="border-y border-white/5 py-5 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-gray-500">
          <span className="flex items-center gap-2"><Star className="w-4 h-4 text-gold-400" /> 5.0 auf Google</span>
          <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-red-400" /> Muay Thai Subyen — Referenzprojekt</span>
          <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-gray-400" /> Website in 7 Tagen</span>
          <span className="flex items-center gap-2"><Users className="w-4 h-4 text-gray-400" /> 5+ neue Leads pro Woche</span>
        </div>
      </div>

      {/* ── Problem Section ── */}
      <section id="problem" ref={s1.ref} className={`py-20 px-4 ${fade(s1.visible)}`}>
        <div className="max-w-4xl mx-auto">
          <p className="text-red-400 text-xs font-bold uppercase tracking-widest mb-3 text-center">Das Problem</p>
          <h2 className="font-display text-4xl md:text-5xl text-center mb-4 tracking-tight">
            DEIN TRAINING IST WELTKLASSE.<br />
            <span className="text-red-500">DEINE ONLINE-PRÄSENZ NICHT.</span>
          </h2>
          <p className="text-gray-400 text-center text-lg mb-14 max-w-2xl mx-auto">
            Du investierst hunderte Stunden in dein Training — aber dein digitaler Auftritt sieht aus wie 2015.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: Search, text: 'Interessenten googeln "Kampfsport Berlin" — und finden deine Konkurrenz.' },
              { icon: MessageSquare, text: '30+ WhatsApp-Nachrichten am Tag für Probetraining-Anfragen. Du antwortest abends, wenn du müde bist.' },
              { icon: FileText, text: 'Mitgliederverwaltung per Excel oder Zettelwirtschaft. Verträge? Irgendwo in einem Ordner.' },
              { icon: Clock, text: 'Deine Website wurde vor 5 Jahren gebaut. Seitdem: nichts. Kein Buchungssystem, keine Preise, kein Trainingsplan.' },
            ].map((p, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-zinc-900/60 border border-white/5 hover:border-red-500/20 transition">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                  <p.icon className="w-5 h-5 text-red-400" strokeWidth={1.5} />
                </div>
                <p className="text-gray-300 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 rounded-xl bg-red-500/5 border border-red-500/20 text-center">
            <p className="text-red-300 text-sm">
              <span className="font-bold">Realität:</span> Jeder Interessent, der dich nicht online findet oder abspringt, geht zum nächsten Gym.
              Das sind 5–15 verlorene Mitglieder pro Monat — bei €80/Monat sind das <span className="font-bold text-red-400">€4.800–€14.400 pro Jahr</span>, die du liegen lässt.
            </p>
          </div>
        </div>
      </section>

      {/* ── Solution Section ── */}
      <section id="loesung" ref={s2.ref} className={`py-20 px-4 bg-zinc-950 ${fade(s2.visible)}`}>
        <div className="max-w-5xl mx-auto">
          <p className="text-red-400 text-xs font-bold uppercase tracking-widest mb-3 text-center">Die Lösung</p>
          <h2 className="font-display text-4xl md:text-5xl text-center mb-4 tracking-tight">
            ALLES, WAS DEIN GYM BRAUCHT.<br />
            <span className="text-red-500">NICHTS, WAS ES NICHT BRAUCHT.</span>
          </h2>
          <p className="text-gray-400 text-center text-lg mb-14 max-w-2xl mx-auto">
            Kein WordPress. Keine monatlichen SaaS-Gebühren. Kein Technik-Bullshit. Eine Lösung, die für dich arbeitet — nicht umgekehrt.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Calendar,
                title: 'Online-Probetraining',
                desc: 'Interessenten buchen direkt auf deiner Website. Du bekommst eine Benachrichtigung. Kein WhatsApp-Ping-Pong mehr.',
              },
              {
                icon: Users,
                title: 'Mitgliederverwaltung',
                desc: 'Digitale Verträge, Beitragsübersicht, Kündigungen — alles an einem Ort. Keine Excel-Listen, kein Papierkram.',
              },
              {
                icon: TrendingUp,
                title: 'Google-Sichtbarkeit',
                desc: 'SEO für deinen Bezirk. Wenn jemand "Muay Thai Berlin Charlottenburg" googelt, soll DEIN Gym oben stehen.',
              },
              {
                icon: FileText,
                title: 'Trainingsplan online',
                desc: 'Immer aktuell, immer sichtbar. Änderungen in Minuten, nicht Tagen. Kein PDF, das keiner findet.',
              },
              {
                icon: Star,
                title: 'Professioneller Auftritt',
                desc: 'Dark Theme, echte Gym-Fotos, dein Branding. Eine Website, die aussieht wie die Energie in deinem Gym sich anfühlt.',
              },
              {
                icon: Shield,
                title: 'DSGVO-konform',
                desc: 'Kein Google Fonts extern, kein Tracking ohne Einwilligung, korrektes Impressum. Alles rechtssicher.',
              },
            ].map((s, i) => (
              <div key={i} className="p-6 rounded-xl bg-black border border-white/5 hover:border-red-500/20 transition group">
                <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition">
                  <s.icon className="w-6 h-6 text-red-400" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Study: Muay Thai Subyen ── */}
      <section ref={s3.ref} className={`py-20 px-4 ${fade(s3.visible)}`}>
        <div className="max-w-5xl mx-auto">
          <p className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-3 text-center">Referenz</p>
          <h2 className="font-display text-4xl md:text-5xl text-center mb-14 tracking-tight">
            MUAY THAI SUBYEN E.V.<br />
            <span className="text-red-500">VON NULL AUF PROFESSIONELL.</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-zinc-900">
              <div className="aspect-[16/10] bg-zinc-800 flex items-center justify-center text-gray-600">
                <img
                  src="/muay-thai-subyen.webp"
                  alt="Muay Thai Subyen Website"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-gold-400" />
                <span className="text-gold-400 text-sm font-semibold">Zertifiziert durch Thailand Sports Authority</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Berlins einziges zertifiziertes Muay Thai Gym</h3>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { num: '~5', label: 'neue Interessenten / Woche' },
                  { num: '7', label: 'Tage Umsetzung' },
                  { num: '0', label: 'Excel-Listen nötig' },
                  { num: '24/7', label: 'Online-Buchung' },
                ].map((k, i) => (
                  <div key={i} className="p-3 rounded-lg bg-zinc-900 border border-white/5 text-center">
                    <div className="text-2xl font-display text-red-400">{k.num}</div>
                    <div className="text-xs text-gray-500">{k.label}</div>
                  </div>
                ))}
              </div>

              <ul className="space-y-2 mb-6">
                {[
                  'Online-Probetraining-Buchung direkt auf der Startseite',
                  'Digitale Mitgliederverwaltung + Online-Verträge',
                  'Trainingsplan interaktiv und immer aktuell',
                  'Optimiert für Google und KI-Suche',
                  'Dark Theme mit authentischen Gym-Fotos',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="https://www.muaythai-subyen.de"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-semibold text-sm transition"
              >
                Live ansehen <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section ref={s4.ref} className={`py-20 px-4 bg-zinc-950 ${fade(s4.visible)}`}>
        <div className="max-w-4xl mx-auto">
          <p className="text-red-400 text-xs font-bold uppercase tracking-widest mb-3 text-center">So läuft's</p>
          <h2 className="font-display text-4xl md:text-5xl text-center mb-14 tracking-tight">
            VON NULL ZUR WEBSITE<br />
            <span className="text-red-500">IN 3 SCHRITTEN.</span>
          </h2>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Kostenloses Erstgespräch',
                desc: '30 Minuten per Video oder Telefon. Wir schauen uns an, was du brauchst, wie dein Gym tickt, und was der Plan ist. Kein Verkaufsgespräch — wenn wir nicht zusammenpassen, sagen wir das.',
              },
              {
                step: '02',
                title: 'Erster Entwurf in 3 Tagen',
                desc: 'Du bekommst einen klickbaren Entwurf — keine PowerPoint-Folien, sondern die echte Website. Gefällt dir nicht? Du zahlst nichts. Gefällt dir? Weiter zu Schritt 3.',
              },
              {
                step: '03',
                title: 'Live in einer Woche',
                desc: 'Wir bauen die fertige Website mit allem drum und dran: Probetraining-Buchung, Trainingsplan, Mitgliederverwaltung, SEO. Am Ende der Woche ist sie live.',
              },
            ].map((s) => (
              <div key={s.step} className="flex gap-6 items-start p-6 rounded-xl bg-black border border-white/5 hover:border-red-500/15 transition">
                <div className="font-display text-5xl text-red-500/30 leading-none flex-shrink-0">{s.step}</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">{s.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="preise" ref={s5.ref} className={`py-20 px-4 ${fade(s5.visible)}`}>
        <div className="max-w-5xl mx-auto">
          <p className="text-red-400 text-xs font-bold uppercase tracking-widest mb-3 text-center">Pakete</p>
          <h2 className="font-display text-4xl md:text-5xl text-center mb-4 tracking-tight">
            KLARE PREISE.<br />
            <span className="text-red-500">KEINE ÜBERRASCHUNGEN.</span>
          </h2>
          <p className="text-gray-400 text-center text-lg mb-14 max-w-xl mx-auto">
            Einmal zahlen, dauerhaft nutzen. Keine monatlichen SaaS-Gebühren, die dich auffressen.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Starter',
                price: '1.500',
                desc: 'Für Gyms, die erstmal eine professionelle Online-Präsenz brauchen.',
                features: ['Moderne Website (mobil optimiert)', 'Trainingsplan & Preise', 'Probetraining-Kontaktformular', 'Google Business Setup', 'Basis-SEO'],
                cta: 'Starter anfragen',
                popular: false,
              },
              {
                name: 'Fighter',
                price: '2.500',
                desc: 'Unser meistgebuchtes Paket. Alles, was 90% der Gyms brauchen.',
                features: ['Alles aus Starter', 'Online-Probetraining-Buchung', 'Trainingsplan (änderbar)', 'Google-Optimierung für deinen Bezirk', 'Trainer-Profile mit Bios', 'Cookie-Banner + DSGVO'],
                cta: 'Fighter anfragen',
                popular: true,
              },
              {
                name: 'Champion',
                price: '4.500',
                desc: 'Für Gyms, die das volle Programm wollen.',
                features: ['Alles aus Fighter', 'Mitgliederverwaltung', 'Digitale Verträge online', 'Beitragsübersicht für Mitglieder', 'Erweiterte SEO + KI-Suchoptimierung', 'Prioritäts-Support'],
                cta: 'Champion anfragen',
                popular: false,
              },
            ].map((pkg) => (
              <div
                key={pkg.name}
                className={`relative p-6 rounded-2xl border transition ${
                  pkg.popular
                    ? 'border-red-500/50 bg-red-500/5 ring-1 ring-red-500/20'
                    : 'border-white/10 bg-zinc-900/50 hover:border-white/20'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-red-600 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    Beliebteste Wahl
                  </div>
                )}
                <h3 className="font-display text-2xl mb-1">{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-3xl font-bold">€{pkg.price}</span>
                  <span className="text-gray-500 text-sm">einmalig</span>
                </div>
                <p className="text-gray-400 text-sm mb-6">{pkg.desc}</p>
                <ul className="space-y-2 mb-8">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={openCalendly}
                  className={`w-full py-3 rounded-lg font-bold text-sm transition ${
                    pkg.popular
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  }`}
                >
                  {pkg.cta}
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 text-sm mt-8">
            Plus Hosting: ab €19/Monat (inkl. SSL, Updates, kleine Änderungen).
            <br />Kein Abo für die Software — du zahlst einmal und es gehört dir.
          </p>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section ref={s6.ref} className={`py-16 px-4 bg-zinc-950 ${fade(s6.visible)}`}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-5 h-5 text-gold-400 fill-gold-400" />
            ))}
          </div>
          <blockquote className="text-xl md:text-2xl text-gray-200 font-medium leading-relaxed mb-6">
            "Professionell, schnell und genau das was wir brauchten. Die Website mit Mitgliederverwaltung war in einer Woche fertig."
          </blockquote>
          <div>
            <div className="font-bold">Hassan El Zaghir</div>
            <div className="text-gray-500 text-sm">Vorstand, Muay Thai Subyen e.V.</div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" ref={s7.ref} className={`py-20 px-4 ${fade(s7.visible)}`}>
        <div className="max-w-3xl mx-auto">
          <p className="text-red-400 text-xs font-bold uppercase tracking-widest mb-3 text-center">Häufige Fragen</p>
          <h2 className="font-display text-4xl text-center mb-14 tracking-tight">
            BEVOR DU FRAGST.
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'Warum kein WordPress?',
                a: 'WordPress ist langsam, unsicher und braucht ständig Updates und Plugins. Wir bauen mit moderner Technologie (React) — schneller, sicherer, keine Plugin-Hölle. Deine Website lädt in unter 2 Sekunden, nicht in 5.',
              },
              {
                q: 'Warum kein Eversports oder Fitogram?',
                a: 'Eversports nimmt €49–149/Monat — für immer. Nach 2 Jahren hast du €1.200–€3.600 bezahlt und besitzt nichts. Bei uns zahlst du einmal und die Lösung gehört dir.',
              },
              {
                q: 'Was wenn mir der Entwurf nicht gefällt?',
                a: 'Dann zahlst du nichts. Wir zeigen dir den Entwurf bevor du einen Cent investierst. Passt er nicht? Kein Risiko, kein Druck.',
              },
              {
                q: 'Kann ich die Website selbst bearbeiten?',
                a: 'Den Trainingsplan und einfache Inhalte — ja. Für technische Änderungen sind wir da. Im Hosting ist ein kleines monatliches Kontingent für Anpassungen inklusive.',
              },
              {
                q: 'Ich bin ein Verein (e.V.) — geht das auch?',
                a: 'Ja, Muay Thai Subyen ist ein e.V. — unser Referenzprojekt. Wir kennen die Anforderungen: Satzungskonformität, Beitragsstruktur, Vorstandskommunikation. Einziger Unterschied: e.V.-Entscheidungen brauchen manchmal etwas länger.',
              },
              {
                q: 'Wie lange dauert es wirklich?',
                a: 'Einfache Website (Starter): 5–7 Tage. Mit Mitgliederverwaltung (Champion): 10–14 Tage. Wir arbeiten fokussiert an einem Projekt, nicht an zehn gleichzeitig.',
              },
            ].map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 px-4 bg-gradient-to-b from-black via-red-950/20 to-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-4 tracking-tight">
            BEREIT?<br />
            <span className="text-red-500">LASS UNS REDEN.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            30 Minuten. Kein Verkaufsgespräch. Wir schauen uns an, wo dein Gym steht und was der nächste Schritt wäre.
          </p>
          <button
            onClick={openCalendly}
            className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white text-lg font-bold rounded-lg transition active:scale-[0.98] shadow-[0_0_40px_rgba(220,38,38,0.3)]"
          >
            Kostenloses Erstgespräch buchen <ArrowRight className="w-5 h-5" />
          </button>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <a href="tel:+4917631504123" className="flex items-center gap-2 hover:text-white transition">
              <Phone className="w-4 h-4" /> +49 176 3150 4123
            </a>
            <a href="mailto:jan@workwithjpr.com" className="flex items-center gap-2 hover:text-white transition">
              <Mail className="w-4 h-4" /> jan@workwithjpr.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Berlin
            </span>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/5 py-8 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-4">
            <span className="font-display text-lg text-white">JPR <span className="text-red-500">GYM</span> DIGITAL</span>
            <span className="hidden md:inline">Ein Angebot der JPR Consulting GmbH</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://workwithjpr.com/imprint" className="hover:text-white transition">Impressum</a>
            <a href="https://workwithjpr.com/privacy" className="hover:text-white transition">Datenschutz</a>
            <a
              href="https://g.page/r/Cbent0mi4nueEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition"
            >
              <Star className="w-3.5 h-3.5" /> Bewerten
            </a>
          </div>
        </div>
      </footer>

      {/* ── Sticky Mobile CTA ── */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-50 p-3 bg-black/90 backdrop-blur-lg border-t border-white/5">
        <button
          onClick={openCalendly}
          className="w-full py-3.5 bg-red-600 text-white font-bold rounded-lg text-sm"
        >
          Kostenloses Erstgespräch buchen
        </button>
      </div>

      {/* ── Calendly Script ── */}
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <script src="https://assets.calendly.com/assets/external/widget.js" async></script>
    </div>
  );
}

/* ─── FAQ Accordion Item ─── */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/5 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition"
      >
        <span className="font-bold text-sm pr-4">{q}</span>
        <ChevronDown className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}
