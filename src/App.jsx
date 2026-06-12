import { useState, useEffect } from "react";
import "./styles.css";

const LANGS = {
  en: {
    nav: ["Services", "Sectors", "Why ANC", "Clients", "Contact"],
    hero_label: "Food & Beverage · North & South America",
    hero_h1: ["Your field service", "partner across", "the Americas."],
    hero_sub:
      "We install, configure and maintain production lines and industrial equipment throughout the Americas — from Mexico to Tierra del Fuego.",
    hero_cta: "Get in touch",
    about_label: "About Us",
    about_h2: "Built in the field. Trusted across continents.",
    about_p:
      "Founded in 2022 by industry veterans, ANC Industrial Services is a technical services company based in La Serena, Chile. With a network of qualified technicians spanning North and South America, we deliver fast response and competitive costs without compromising compliance.",
    stats: [
      { n: "2022", l: "Founded" },
      { n: "5+", l: "Min. yrs exp." },
      { n: "MX→TdF", l: "Coverage" },
      { n: "100%", l: "Compliance" },
    ],
    services_label: "Services",
    services_h2: "One partner. Every discipline.",
    services: [
      {
        icon: "ti-bolt",
        title: "Electrical Installation",
        desc: "Wiring, panels, electrical automation and commissioning for F&B plants.",
      },
      {
        icon: "ti-settings-2",
        title: "Mechanical Installation",
        desc: "Line assembly, conveyors, fillers, palletizers and end-of-line systems.",
      },
      {
        icon: "ti-tool",
        title: "Maintenance & Support",
        desc: "Preventive and corrective maintenance with on-site technical support 24/7.",
      },
      {
        icon: "ti-cpu",
        title: "Software & Automation",
        desc: "PLC/SCADA configuration, HMI programming and system integrations.",
      },
    ],
    sectors_label: "Sectors",
    sectors_h2: "Where we operate.",
    sectors: [
      {
        num: "01",
        title: "Beverage",
        desc: "Bottling, filling and packaging lines for water, soft drinks, beer and juices.",
        img: "img_filling",
      },
      {
        num: "02",
        title: "Dairy & Food",
        desc: "Installation and technical support on dairy and food processing lines.",
        img: "img_conveyor",
      },
      {
        num: "03",
        title: "Wine & Spirits",
        desc: "All-in-one support on bottling lines for wine, spirits and alcoholic products.",
        img: "img_machinery",
      },
      {
        num: "04",
        title: "Packaging & End-of-Line",
        desc: "Commissioning and maintenance of palletizers, wrappers and end-of-line systems.",
        img: "img_filling",
      },
    ],
    why_label: "Why ANC",
    why_h2: "Four reasons clients come back.",
    why: [
      {
        icon: "ti-map-pin",
        title: "Continental Coverage",
        desc: "Qualified technicians from Mexico to Tierra del Fuego — fast response, no intercontinental travel costs.",
      },
      {
        icon: "ti-users",
        title: "Specialized Team",
        desc: "Minimum 5 years experience per technician. Intermediate-to-high English; many also speak Italian.",
      },
      {
        icon: "ti-components",
        title: "Multi-disciplinary",
        desc: "One contact for electrical, mechanical and software: reduce coordination costs and optimize timelines.",
      },
      {
        icon: "ti-shield-check",
        title: "Compliance & Reliability",
        desc: "Full compliance with local regulations and EU international standards required by global clients.",
      },
    ],
    clients_label: "Clients",
    clients_h2: "Trusted by global brands.",
    clients_note: "References available upon request",
    contact_label: "Contact",
    contact_h2: "Let's talk.",
    contact_sub:
      "Tell us where you need us. We'll be there.",
    contact_name: "Your name",
    contact_email: "Email address",
    contact_msg: "Message",
    contact_send: "Send message",
    footer_rights: "All rights reserved.",
  },
  es: {
    nav: ["Servicios", "Sectores", "Por qué ANC", "Clientes", "Contacto"],
    hero_label: "Food & Beverage · Norte y Sudamérica",
    hero_h1: ["Tu socio de servicios", "de campo en", "las Américas."],
    hero_sub:
      "Instalamos, configuramos y mantenemos líneas de producción y equipos industriales en toda América — desde México hasta Tierra del Fuego.",
    hero_cta: "Contáctanos",
    about_label: "Sobre Nosotros",
    about_h2: "Forjados en campo. Confiables en todo el continente.",
    about_p:
      "Fundada en 2022 por veteranos de la industria, ANC Industrial Services es una empresa de servicios técnicos con sede en La Serena, Chile. Con una red de técnicos calificados en toda América, ofrecemos tiempos de respuesta rápidos y costos competitivos sin comprometer el cumplimiento normativo.",
    stats: [
      { n: "2022", l: "Fundación" },
      { n: "5+", l: "Años mín. exp." },
      { n: "MX→TdF", l: "Cobertura" },
      { n: "100%", l: "Cumplimiento" },
    ],
    services_label: "Servicios",
    services_h2: "Un solo socio. Todas las disciplinas.",
    services: [
      {
        icon: "ti-bolt",
        title: "Instalación Eléctrica",
        desc: "Cableados, tableros, automatización eléctrica y puesta en marcha de plantas F&B.",
      },
      {
        icon: "ti-settings-2",
        title: "Instalación Mecánica",
        desc: "Montaje de líneas, transportadores, llenadoras, paletizadoras y fin de línea.",
      },
      {
        icon: "ti-tool",
        title: "Mantenimiento & Soporte",
        desc: "Mantenimiento preventivo y correctivo con asistencia técnica en sitio 24/7.",
      },
      {
        icon: "ti-cpu",
        title: "Software & Automatización",
        desc: "Configuración PLC/SCADA, programación HMI e integraciones de sistemas.",
      },
    ],
    sectors_label: "Sectores",
    sectors_h2: "Dónde operamos.",
    sectors: [
      {
        num: "01",
        title: "Bebidas",
        desc: "Líneas de embotellado, llenado y envasado para agua, refrescos, cerveza y jugos.",
        img: "img_filling",
      },
      {
        num: "02",
        title: "Lácteos & Alimentos",
        desc: "Instalación y asistencia técnica en plantas lácteas y líneas de transformación alimentaria.",
        img: "img_conveyor",
      },
      {
        num: "03",
        title: "Vinos & Destilados",
        desc: "Soporte integral en líneas de embotellado para vinos, destilados y bebidas alcohólicas.",
        img: "img_machinery",
      },
      {
        num: "04",
        title: "Packaging & Fin de Línea",
        desc: "Puesta en marcha y mantenimiento de paletizadoras, envolvedoras y sistemas de fin de línea.",
        img: "img_filling",
      },
    ],
    why_label: "Por qué ANC",
    why_h2: "Cuatro razones por las que los clientes vuelven.",
    why: [
      {
        icon: "ti-map-pin",
        title: "Cobertura Continental",
        desc: "Técnicos calificados de México a Tierra del Fuego — respuesta rápida, sin costos de vuelo intercontinental.",
      },
      {
        icon: "ti-users",
        title: "Equipo Especializado",
        desc: "Mínimo 5 años de experiencia por técnico. Inglés intermedio-alto; muchos también hablan italiano.",
      },
      {
        icon: "ti-components",
        title: "Multidisciplinario",
        desc: "Un solo contacto para lo eléctrico, mecánico y software: reduce costos de coordinación y optimiza tiempos.",
      },
      {
        icon: "ti-shield-check",
        title: "Cumplimiento & Confiabilidad",
        desc: "Pleno cumplimiento con normativas locales y estándares internacionales UE exigidos por clientes globales.",
      },
    ],
    clients_label: "Clientes",
    clients_h2: "La confianza de marcas globales.",
    clients_note: "Referencias verificables bajo solicitud",
    contact_label: "Contacto",
    contact_h2: "Hablemos.",
    contact_sub: "Dinos dónde nos necesitas. Estaremos ahí.",
    contact_name: "Tu nombre",
    contact_email: "Correo electrónico",
    contact_msg: "Mensaje",
    contact_send: "Enviar mensaje",
    footer_rights: "Todos los derechos reservados.",
  },
  it: {
    nav: ["Servizi", "Settori", "Perché ANC", "Clienti", "Contatti"],
    hero_label: "Food & Beverage · Nord e Sudamerica",
    hero_h1: ["Il tuo partner", "di servizi industriali", "nelle Americhe."],
    hero_sub:
      "Installiamo, configuriamo e manteniamo linee di produzione e impianti industriali in tutto il continente americano — dal Messico alla Terra del Fuoco.",
    hero_cta: "Contattaci",
    about_label: "Chi Siamo",
    about_h2: "Nati sul campo. Affidabili su tutto il continente.",
    about_p:
      "Fondata nel 2022 da veterani del settore, ANC Industrial Services è una società di servizi tecnici con sede a La Serena, Cile. Con una rete di tecnici qualificati in tutta l'America, garantiamo interventi rapidi e costi competitivi senza rinunciare alla conformità.",
    stats: [
      { n: "2022", l: "Fondazione" },
      { n: "5+", l: "Anni min. exp." },
      { n: "MX→TdF", l: "Copertura" },
      { n: "100%", l: "Conformità" },
    ],
    services_label: "Servizi",
    services_h2: "Un unico fornitore. Ogni disciplina.",
    services: [
      {
        icon: "ti-bolt",
        title: "Installazione Elettrica",
        desc: "Cablaggi, quadri, automazione elettrica e messa in servizio impianti F&B.",
      },
      {
        icon: "ti-settings-2",
        title: "Installazione Meccanica",
        desc: "Montaggio linee, convogliatori, riempitrici, pallettizzatori e fine linea.",
      },
      {
        icon: "ti-tool",
        title: "Manutenzione & Assistenza",
        desc: "Manutenzione preventiva e correttiva con assistenza tecnica on-site 24/7.",
      },
      {
        icon: "ti-cpu",
        title: "Software & Automazione",
        desc: "Configurazione PLC/SCADA, HMI e integrazioni di sistema per linee esistenti.",
      },
    ],
    sectors_label: "Settori",
    sectors_h2: "Dove operiamo.",
    sectors: [
      {
        num: "01",
        title: "Beverage",
        desc: "Linee di imbottigliamento, riempimento e confezionamento per acqua, bibite, birra e succhi.",
        img: "img_filling",
      },
      {
        num: "02",
        title: "Dairy & Food",
        desc: "Installazione e assistenza tecnica su impianti lattiero-caseari e linee di trasformazione alimentare.",
        img: "img_conveyor",
      },
      {
        num: "03",
        title: "Wine & Spirits",
        desc: "Supporto all-in-one su linee di imbottigliamento vini, distillati e prodotti alcolici.",
        img: "img_machinery",
      },
      {
        num: "04",
        title: "Packaging & Fine Linea",
        desc: "Avviamento e manutenzione di pallettizzatori, confezionatrici e sistemi di fine linea.",
        img: "img_filling",
      },
    ],
    why_label: "Perché ANC",
    why_h2: "Quattro motivi per cui i clienti tornano.",
    why: [
      {
        icon: "ti-map-pin",
        title: "Presenza Continentale",
        desc: "Tecnici qualificati dal Messico alla Terra del Fuoco — interventi rapidi senza costi di volo intercontinentale.",
      },
      {
        icon: "ti-users",
        title: "Team Specializzato",
        desc: "Minimo 5 anni di esperienza per tecnico. Inglese medio-alto; molti parlano anche italiano.",
      },
      {
        icon: "ti-components",
        title: "Pluridisciplinare",
        desc: "Un unico fornitore per elettrico, meccanico e software: riduci i costi di coordinamento.",
      },
      {
        icon: "ti-shield-check",
        title: "Conformità & Affidabilità",
        desc: "Operatività conforme alle normative locali e agli standard EU internazionali richiesti dai clienti.",
      },
    ],
    clients_label: "Clienti",
    clients_h2: "La fiducia dei brand globali.",
    clients_note: "Referenze verificabili su richiesta",
    contact_label: "Contatti",
    contact_h2: "Parliamo.",
    contact_sub: "Dicci dove hai bisogno di noi. Ci saremo.",
    contact_name: "Il tuo nome",
    contact_email: "Indirizzo email",
    contact_msg: "Messaggio",
    contact_send: "Invia messaggio",
    footer_rights: "Tutti i diritti riservati.",
  },
};

const CLIENTS = [
  { name: "Coca-Cola", sub: "Chile (Andina)" },
  { name: "Coca-Cola", sub: "United States" },
  { name: "PepsiCo", sub: "United States" },
  { name: "The Wine Group", sub: "California, USA" },
  { name: "AFIA", sub: "Saudi Arabia" },
  { name: "Envases", sub: "Denmark" },
  { name: "Virù", sub: "Peru" },
  { name: "Amcor", sub: "United States" },
];

// Image map — in prod these would be real URLs; for Vercel deploy they'll be in /public
const IMAGES = {
  hero_bg: "/hero_bg.png",
  img_filling: "/img_filling.png",
  img_conveyor: "/img_conveyor.png",
  img_machinery: "/img_machinery.png",
  logo: "/anc_logo.png",
};

export default function App() {
  const [lang, setLang] = useState("en");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = LANGS[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const sectionIds = ["services", "sectors", "why", "clients", "contact"];

  return (
    <div className="app">
      {/* NAV */}
      <nav className={`nav${scrolled ? " nav--scrolled" : ""}`}>
        <button className="nav__logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src={IMAGES.logo} alt="ANC Industrial Services" className="nav__logo-img" />
        </button>
        <div className={`nav__links${menuOpen ? " nav__links--open" : ""}`}>
          {t.nav.map((label, i) => (
            <button key={i} className="nav__link" onClick={() => scrollTo(sectionIds[i])}>
              {label}
            </button>
          ))}
        </div>
        <div className="nav__right">
          <div className="lang-switcher">
            {["en", "es", "it"].map((l) => (
              <button
                key={l}
                className={`lang-btn${lang === l ? " lang-btn--active" : ""}`}
                onClick={() => setLang(l)}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <i className={`ti ${menuOpen ? "ti-x" : "ti-menu-2"}`}></i>
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero__bg" style={{ backgroundImage: `url(${IMAGES.hero_bg})` }} />
        <div className="hero__overlay" />
        <div className="hero__content">
          <p className="hero__label">{t.hero_label}</p>
          <h1 className="hero__h1">
            {t.hero_h1.map((line, i) => (
              <span key={i} className={i === 2 ? "hero__h1-accent" : ""}>{line}<br /></span>
            ))}
          </h1>
          <p className="hero__sub">{t.hero_sub}</p>
          <button className="btn-primary" onClick={() => scrollTo("contact")}>
            {t.hero_cta} <i className="ti ti-arrow-right"></i>
          </button>
        </div>
        <div className="hero__stats">
          {t.stats.map((s, i) => (
            <div key={i} className="hero__stat">
              <span className="hero__stat-n">{s.n}</span>
              <span className="hero__stat-l">{s.l}</span>
            </div>
          ))}
        </div>
        <div className="hero__scroll-hint">
          <i className="ti ti-chevron-down"></i>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about section--dark" id="about">
        <div className="container about__grid">
          <div className="about__text">
            <p className="section-label">{t.about_label}</p>
            <h2 className="section-h2">{t.about_h2}</h2>
            <p className="about__p">{t.about_p}</p>
          </div>
          <div className="about__visual">
            <div className="about__map">
              <svg viewBox="0 0 160 300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                {/* Americas schematic silhouette */}
                <path d="M60,15 L95,12 L108,28 L115,48 L102,68 L95,82 L82,88 L75,76 L62,80 L52,95 L46,108 L58,115 L64,128" fill="none" stroke="#1A5C26" strokeWidth="1.5" opacity="0.6"/>
                <path d="M64,128 L60,142 L66,155 L62,168" fill="none" stroke="#1A5C26" strokeWidth="1.5" opacity="0.5"/>
                <path d="M62,168 L70,172 L84,175 L90,188 L86,205 L78,222 L68,240 L60,256 L54,268 L48,278" fill="none" stroke="#1A5C26" strokeWidth="1.5" opacity="0.6"/>
                {/* Route dots */}
                <circle cx="85" cy="38" r="5" fill="#7CB518" opacity="0.9"/>
                <text x="94" y="42" fill="#9DB89F" fontSize="9" fontFamily="sans-serif">USA / Canada</text>
                <circle cx="64" cy="76" r="4" fill="#7CB518" opacity="0.8"/>
                <text x="73" y="80" fill="#9DB89F" fontSize="9" fontFamily="sans-serif">Mexico</text>
                <circle cx="66" cy="148" r="3.5" fill="#7CB518" opacity="0.7"/>
                <text x="73" y="152" fill="#9DB89F" fontSize="9" fontFamily="sans-serif">Colombia</text>
                <circle cx="70" cy="188" r="4" fill="#7CB518" opacity="0.8"/>
                <text x="79" y="192" fill="#9DB89F" fontSize="9" fontFamily="sans-serif">Brasil / Peru</text>
                <circle cx="63" cy="228" r="4.5" fill="#7CB518" opacity="0.9"/>
                <text x="72" y="232" fill="#9DB89F" fontSize="9" fontFamily="sans-serif">Chile</text>
                <circle cx="55" cy="258" r="3" fill="#7CB518" opacity="0.6"/>
                <text x="64" y="262" fill="#9DB89F" fontSize="9" fontFamily="sans-serif">Patagonia</text>
                {/* Dashed connector */}
                <line x1="67" y1="12" x2="52" y2="278" stroke="#7CB518" strokeWidth="0.5" strokeDasharray="4,6" opacity="0.2"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services section--light" id="services">
        <div className="container">
          <p className="section-label">{t.services_label}</p>
          <h2 className="section-h2 section-h2--dark">{t.services_h2}</h2>
          <div className="services__grid">
            {t.services.map((s, i) => (
              <div key={i} className="service-card">
                <div className="service-card__icon">
                  <i className={`ti ${s.icon}`}></i>
                </div>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="sectors section--dark" id="sectors">
        <div className="container">
          <p className="section-label">{t.sectors_label}</p>
          <h2 className="section-h2">{t.sectors_h2}</h2>
        </div>
        <div className="sectors__grid">
          {t.sectors.map((s, i) => (
            <div key={i} className="sector-card" style={{ backgroundImage: `url(${IMAGES[s.img]})` }}>
              <div className="sector-card__overlay" />
              <div className="sector-card__content">
                <span className="sector-card__num">{s.num}</span>
                <h3 className="sector-card__title">{s.title}</h3>
                <p className="sector-card__desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY ANC */}
      <section className="why section--light" id="why">
        <div className="container">
          <p className="section-label">{t.why_label}</p>
          <h2 className="section-h2 section-h2--dark">{t.why_h2}</h2>
          <div className="why__grid">
            {t.why.map((w, i) => (
              <div key={i} className="why-card">
                <div className="why-card__icon">
                  <i className={`ti ${w.icon}`}></i>
                </div>
                <div>
                  <h3 className="why-card__title">{w.title}</h3>
                  <p className="why-card__desc">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="clients section--green" id="clients">
        <div className="container">
          <p className="section-label section-label--light">{t.clients_label}</p>
          <h2 className="section-h2 section-h2--white">{t.clients_h2}</h2>
          <div className="clients__grid">
            {CLIENTS.map((c, i) => (
              <div key={i} className="client-card">
                <p className="client-card__name">{c.name}</p>
                <p className="client-card__sub">{c.sub}</p>
              </div>
            ))}
          </div>
          <p className="clients__note">{t.clients_note}</p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact section--dark" id="contact">
        <div className="container contact__grid">
          <div className="contact__info">
            <p className="section-label">{t.contact_label}</p>
            <h2 className="section-h2">{t.contact_h2}</h2>
            <p className="contact__sub">{t.contact_sub}</p>
            <div className="contact__details">
              <a href="mailto:contact.tech@ancindustrialservice.com" className="contact__line">
                <i className="ti ti-mail"></i>
                contact.tech@ancindustrialservice.com
              </a>
              <a href="tel:+56987189018" className="contact__line">
                <i className="ti ti-phone"></i>
                +56 9 8718 9018
              </a>
              <a href="tel:+393717660332" className="contact__line">
                <i className="ti ti-phone"></i>
                +39 371 7660332
              </a>
              <span className="contact__line">
                <i className="ti ti-map-pin"></i>
                La Serena, Chile
              </span>
            </div>
          </div>
          <form
            className="contact__form"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `mailto:contact.tech@ancindustrialservice.com?subject=Website inquiry`;
            }}
          >
            <input type="text" placeholder={t.contact_name} className="form-input" required />
            <input type="email" placeholder={t.contact_email} className="form-input" required />
            <textarea placeholder={t.contact_msg} className="form-input form-textarea" rows={5} required></textarea>
            <button type="submit" className="btn-primary btn-primary--full">
              {t.contact_send} <i className="ti ti-send"></i>
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer__inner">
          <img src={IMAGES.logo} alt="ANC" className="footer__logo" />
          <p className="footer__copy">© {new Date().getFullYear()} ANC Industrial Services — La Serena, Chile. {t.footer_rights}</p>
          <div className="footer__langs">
            {["en", "es", "it"].map((l) => (
              <button key={l} className={`lang-btn${lang === l ? " lang-btn--active" : ""}`} onClick={() => setLang(l)}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
