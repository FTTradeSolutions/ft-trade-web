import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  createContext,
  useContext
} from 'react'
import {
  ArrowRight,
  Globe,
  BarChart2,
  CheckCircle2,
  CircleDot,
  MousePointer2,
  Activity,
  ScanLine,
  Settings,
  Hexagon
} from 'lucide-react'

// --- SISTEMA DE IDIOMAS (i18n) ---
const translations = {
  es: {
    navSystem: 'Metodología',
    navManifesto: 'Filosofía',
    navArchive: 'Impacto',
    navCTA: '¿Quieres saber más?',
    heroSubtitle: 'Fernando Tobía Trade & Solutions',
    heroTitle1: 'La estrategia es el',
    heroTitle2: 'Algoritmo',
    heroCTA: '¿Quieres saber más?',
    heroDesc: 'Ayudamos a empresas e importadores de todo el mundo a crecer.',
    featTitle1: 'No solo vendemos.',
    featTitle2A: 'Somos tu',
    featTitle2B: 'Socio Estratégico.',
    featDesc:
      'Reemplazamos la intuición por Datos. Desarrollamos infraestructuras comerciales que operan como maquinaria de precision para escalar tu empresa a nivel internacional.',
    feat1Title: '01. Diagnóstico Comercial.',
    feat1Card1: 'Eficiencia',
    feat1Card1V: 'Ahorro de horas',
    feat1Card1D: 'procesos manuales eliminados',
    feat1Card2: 'Planificación',
    feat1Card2V: 'Diseño Estratégico',
    feat1Card2D: 'rutas claras de conversión',
    feat1Card3: 'Crecimiento',
    feat1Card3V: 'Consigue Objetivos',
    feat1Card3D: 'metas medibles y escalables',
    feat2Title: '02. Resultados Medibles.',
    feat2P1: 'Optimizando tu embudo de ventas...',
    feat2P2: 'Generando leads...',
    feat2P3: 'Segmentando mercados...',
    feat2Live: 'EN VIVO',
    feat2Log: 'SISTEMA.LOG_ACTIVIDAD',
    feat2Stream: 'FLUJO_DATOS_ACTIVO',
    feat3Title: '03. Dirección por Objetivos.',
    feat3WidgetTitle: 'Cuadro de Mando',
    feat3Action: 'Acciones',
    days: ['L', 'M', 'X', 'J', 'V', 'S', 'D'],
    manifTag: 'El Cambio de Paradigma',
    manifL1: 'Lo normal es preguntar:',
    manifL2: '"¿Qué estamos haciendo mal?"',
    manifL3: 'Nosotros preguntamos:',
    manifL4: '"¿Dónde está tu máximo potencial?"',
    arch1Tag: 'Archivo',
    arch1Title: 'Diseñamos la maquinaria de Ventas.',
    arch1Sub: 'Personas que operan con precisión.',
    arch2Title: 'Flujo Continuo',
    arch2Sub: 'Resultados que palpitan, estrategias que respiran.',
    contactTitle1: 'Inicia tu',
    contactTitle2: 'Transformación.',
    contactDesc: 'Completa el formulario y comenzamos.',
    contactTag: 'COMIENZA EL CAMBIO',
    formNameL: 'Nombre completo',
    formNameP: 'Ej. Fernando Tobía',
    formCompL: 'Empresa',
    formCompP: 'Nombre de tu corporación',
    formEmailL: 'Email corporativo',
    formEmailP: 'contacto@empresa.com',
    formPhoneL: 'Teléfono (con prefijo)',
    formPhoneP: 'Ej. +34 600 000 000',
    formCTA: 'Solicitar Contacto',
    footerPrivacy: 'Privacidad',
    footerTerms: 'Términos',
    footerRights: 'Todos los derechos reservados.',
    footerSys: 'Sistema Operativo | Activo'
  },
  en: {
    navSystem: 'Methodology',
    navManifesto: 'Philosophy',
    navArchive: 'Impact',
    navCTA: 'Want to know more?',
    heroSubtitle: 'Fernando Tobía Trade & Solutions',
    heroTitle1: 'Strategy is the',
    heroTitle2: 'Algorithm',
    heroCTA: 'Want to know more?',
    heroDesc: 'We help companies and importers worldwide to grow.',
    featTitle1: "We don't just sell.",
    featTitle2A: "We're your",
    featTitle2B: 'Strategic Partner.',
    featDesc:
      'We replace intuition with Data. We develop commercial infrastructures that operate like precision machinery to scale your company internationally.',
    feat1Title: '01. Commercial Diagnosis.',
    feat1Card1: 'Efficiency',
    feat1Card1V: 'Hours saved',
    feat1Card1D: 'manual processes eliminated',
    feat1Card2: 'Planning',
    feat1Card2V: 'Strategic Design',
    feat1Card2D: 'clear conversion paths',
    feat1Card3: 'Growth',
    feat1Card3V: 'Achieve Goals',
    feat1Card3D: 'measurable and scalable targets',
    feat2Title: '02. Measurable Results.',
    feat2P1: 'Optimizing your sales funnel...',
    feat2P2: 'Generating leads...',
    feat2P3: 'Segmenting markets...',
    feat2Live: 'LIVE',
    feat2Log: 'SYSTEM.LOG_ACTIVITY',
    feat2Stream: 'DATA_STREAM_ACTIVE',
    feat3Title: '03. Management by Objectives.',
    feat3WidgetTitle: 'Dashboard',
    feat3Action: 'Actions',
    days: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    manifTag: 'The Paradigm Shift',
    manifL1: 'Normal is asking:',
    manifL2: '"What are we doing wrong?"',
    manifL3: 'We ask:',
    manifL4: '"Where is your maximum potential?"',
    arch1Tag: 'Archive',
    arch1Title: 'We design the Sales machinery.',
    arch1Sub: 'People who operate with precision.',
    arch2Title: 'Continuous Flow',
    arch2Sub: 'Results that pulsate, strategies that breathe.',
    contactTitle1: 'Start your',
    contactTitle2: 'Transformation.',
    contactDesc: "Fill the form and let's begin.",
    contactTag: 'THE CHANGE BEGINS',
    formNameL: 'Full Name',
    formNameP: 'E.g. Fernando Tobía',
    formCompL: 'Company',
    formCompP: 'Your corporation name',
    formEmailL: 'Corporate Email',
    formEmailP: 'contact@company.com',
    formPhoneL: 'Phone (with code)',
    formPhoneP: 'E.g. +1 555 000 0000',
    formCTA: 'Request Contact',
    footerPrivacy: 'Privacy',
    footerTerms: 'Terms',
    footerRights: 'All rights reserved.',
    footerSys: 'Operating System | Active'
  },
  fr: {
    navSystem: 'Méthodologie',
    navManifesto: 'Philosophie',
    navArchive: 'Impact',
    navCTA: 'En savoir plus ?',
    heroSubtitle: 'Fernando Tobía Trade & Solutions',
    heroTitle1: "La stratégie est l'",
    heroTitle2: 'Algorithme',
    heroCTA: 'En savoir plus ?',
    heroDesc:
      'Nous aidons les entreprises et importateurs du monde entier à croître.',
    featTitle1: 'Nous ne vendons pas seulement.',
    featTitle2A: 'Nous sommes votre',
    featTitle2B: 'Partenaire Stratégique.',
    featDesc:
      "Nous remplaçons l'intuition par les Données. Nous développons des infrastructures commerciales qui fonctionnent comme une machinerie de précision pour faire évoluer votre entreprise à l'international.",
    feat1Title: '01. Diagnostic Commercial.',
    feat1Card1: 'Efficacité',
    feat1Card1V: 'Heures économisées',
    feat1Card1D: 'processus manuels éliminés',
    feat1Card2: 'Planification',
    feat1Card2V: 'Design Stratégique',
    feat1Card2D: 'chemins de conversion clairs',
    feat1Card3: 'Croissance',
    feat1Card3V: 'Atteindre les Objectifs',
    feat1Card3D: 'cibles mesurables et évolutives',
    feat2Title: '02. Résultats Mesurables.',
    feat2P1: 'Optimisation de votre tunnel de vente...',
    feat2P2: 'Génération de leads...',
    feat2P3: 'Segmentation des marchés...',
    feat2Live: 'EN DIRECT',
    feat2Log: 'SYSTÈME.LOG_ACTIVITÉ',
    feat2Stream: 'FLUX_DONNÉES_ACTIF',
    feat3Title: '03. Direction par Objectifs.',
    feat3WidgetTitle: 'Tableau de Bord',
    feat3Action: 'Actions',
    days: ['L', 'M', 'M', 'J', 'V', 'S', 'D'],
    manifTag: 'Le Changement de Paradigme',
    manifL1: 'La norme est de demander :',
    manifL2: '"Qu\'est-ce qu\'on fait de mal ?"',
    manifL3: 'Nous demandons :',
    manifL4: '"Où est votre potentiel maximum ?"',
    arch1Tag: 'Archive',
    arch1Title: 'Nous concevons la mécanique de Vente.',
    arch1Sub: 'Des personnes qui opèrent avec précision.',
    arch2Title: 'Flux Continu',
    arch2Sub: 'Des résultats qui palpitent, des estrategias qui respirent.',
    contactTitle1: 'Commencez votre',
    contactTitle2: 'Transformation.',
    contactDesc: 'Remplissez le formulaire et commençons.',
    contactTag: 'LE CHANGEMENT COMMENCE',
    formNameL: 'Nom complet',
    formNameP: 'Ex. Fernando Tobía',
    formCompL: 'Entreprise',
    formCompP: 'Nom de votre entreprise',
    formEmailL: 'Email professionnel',
    formEmailP: 'contact@entreprise.com',
    formPhoneL: 'Téléphone (indicatif)',
    formPhoneP: 'Ex. +33 6 00 00 00 00',
    formCTA: 'Demander Contact',
    footerPrivacy: 'Confidentialité',
    footerTerms: 'Conditions',
    footerRights: 'Tous droits réservés.',
    footerSys: "Système d'Exploitation | Actif"
  },
  pt: {
    navSystem: 'Metodologia',
    navManifesto: 'Filosofia',
    navArchive: 'Impacto',
    navCTA: 'Quer saber mais?',
    heroSubtitle: 'Fernando Tobía Trade & Solutions',
    heroTitle1: 'A estratégia é o',
    heroTitle2: 'Algoritmo',
    heroCTA: 'Quer saber mais?',
    heroDesc: 'Ajudamos empresas e importadores de todo o mundo a crescer.',
    featTitle1: 'Não apenas vendemos.',
    featTitle2A: 'Somos o seu',
    featTitle2B: 'Parceiro Estratégico.',
    featDesc:
      'Substituímos a intuição por Dados. Desenvolvemos infraestruturas comerciales que operam como maquinaria de precisão para escalar sua empresa internacionalmente.',
    feat1Title: '01. Diagnóstico Comercial.',
    feat1Card1: 'Eficiência',
    feat1Card1V: 'Horas economizadas',
    feat1Card1D: 'processos manuais eliminados',
    feat1Card2: 'Planejamento',
    feat1Card2V: 'Design Estratégico',
    feat1Card2D: 'rotas de conversão claras',
    feat1Card3: 'Crescimento',
    feat1Card3V: 'Alcance Objetivos',
    feat1Card3D: 'metas mensuráveis e escaláveis',
    feat2Title: '02. Resultados Mensuráveis.',
    feat2P1: 'Otimizando seu funil de vendas...',
    feat2P2: 'Gerando leads...',
    feat2P3: 'Segmentando mercados...',
    feat2Live: 'AO VIVO',
    feat2Log: 'SISTEMA.LOG_ATIVIDADE',
    feat2Stream: 'FLUXO_DADOS_ATIVO',
    feat3Title: '03. Gestão por Objetivos.',
    feat3WidgetTitle: 'Painel de Controle',
    feat3Action: 'Ações',
    days: ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
    manifTag: 'A Mudança de Paradigma',
    manifL1: 'O normal é perguntar:',
    manifL2: '"O que estamos fazendo de errado?"',
    manifL3: 'Nós perguntamos:',
    manifL4: '"Onde está o seu potencial máximo?"',
    arch1Tag: 'Arquivo',
    arch1Title: 'Desenhamos a maquinaria de Vendas.',
    arch1Sub: 'Pessoas que operam con precisão.',
    arch2Title: 'Fluxo Contínuo',
    arch2Sub: 'Resultados que palpitentam, estratégias que respiram.',
    contactTitle1: 'Inicie sua',
    contactTitle2: 'Transformação.',
    contactDesc: 'Preencha o formulário e começaremos.',
    contactTag: 'A MUDANÇA COMEÇA',
    formNameL: 'Nome completo',
    formNameP: 'Ex. Fernando Tobía',
    formCompL: 'Empresa',
    formCompP: 'Nome da sua corporação',
    formEmailL: 'E-mail corporativo',
    formEmailP: 'contato@empresa.com',
    formPhoneL: 'Telefone (com código)',
    formPhoneP: 'Ex. +351 900 000 000',
    formCTA: 'Solicitar Contato',
    footerPrivacy: 'Privacidade',
    footerTerms: 'Termos',
    footerRights: 'Todos os derechos reservados.',
    footerSys: 'Sistema Operacional | Ativo'
  },
  it: {
    navSystem: 'Metodologia',
    navManifesto: 'Filosofia',
    navArchive: 'Impatto',
    navCTA: 'Vuoi saperne di più?',
    heroSubtitle: 'Fernando Tobía Trade & Solutions',
    heroTitle1: "La estrategia è l'",
    heroTitle2: 'Algoritmo',
    heroCTA: 'Vuoi saperne di più?',
    heroDesc:
      'Aiutiamo le aziende e gli importatori di tutto il mondo a crescere.',
    featTitle1: 'Non vendiamo e basta.',
    featTitle2A: 'Siamo il tuo',
    featTitle2B: 'Partner Strategico.',
    featDesc:
      "Sostituiamo l'intuizione con i Dati. Sviluppiamo infrastrutture commerciali che operano como macchinari di precisione per scalare la tua azienda a livello internazionale.",
    feat1Title: '01. Diagnosi Commerciale.',
    feat1Card1: 'Efficienza',
    feat1Card1V: 'Ore risparmiate',
    feat1Card1D: 'processi manuali eliminati',
    feat1Card2: 'Pianificazione',
    feat1Card2V: 'Design Strategico',
    feat1Card2D: 'percorsi di conversione chiari',
    feat1Card3: 'Crescita',
    feat1Card3V: 'Raggiungi gli Obiettivi',
    feat1Card3D: 'traguardi misurabili e scalabili',
    feat2Title: '02. Risultati Misurabili.',
    feat2P1: 'Ottimizzando il tuo funnel di vendita...',
    feat2P2: 'Generando lead...',
    feat2P3: 'Segmentando i mercati...',
    feat2Live: 'IN DIRETTA',
    feat2Log: 'SISTEMA.LOG_ATTIVITÀ',
    feat2Stream: 'FLUSSO_DATI_ATTIVO',
    feat3Title: '03. Direzione per Obiettivi.',
    feat3WidgetTitle: 'Pannello di Controllo',
    feat3Action: 'Azioni',
    days: ['L', 'M', 'M', 'G', 'V', 'S', 'D'],
    manifTag: 'Il Cambio di Paradigma',
    manifL1: 'La norma è chiedersi:',
    manifL2: '"Cosa stiamo sbagliando?"',
    manifL3: 'Noi chiediamo:',
    manifL4: '"Dov\'è il tuo massimo potenziale?"',
    arch1Tag: 'Archivio',
    arch1Title: 'Progettiamo la macchina delle Vendite.',
    arch1Sub: 'Persone que operano con precisione.',
    arch2Title: 'Flusso Continuo',
    arch2Sub: 'Risultati che palpitano, strategie que respirano.',
    contactTitle1: 'Inizia la tua',
    contactTitle2: 'Trasformazione.',
    contactDesc: 'Compila il modulo e iniziamo.',
    contactTag: 'IL CAMBIAMENTO INIZIA',
    formNameL: 'Nome completo',
    formNameP: 'Es. Fernando Tobía',
    formCompL: 'Azienda',
    formCompP: 'Nome della tua azienda',
    formEmailL: 'Email aziendale',
    formEmailP: 'contatto@azienda.com',
    formPhoneL: 'Telefono (con prefisso)',
    formPhoneP: 'Es. +39 300 000 0000',
    formCTA: 'Richiedi Contatto',
    footerPrivacy: 'Privacy',
    footerTerms: 'Termini',
    footerRights: 'Tutti i diritti riservati.',
    footerSys: 'Sistema Operativo | Attivo'
  }
}

const LanguageContext = createContext()

// --- UTILIDADES E COMPONENTES BASE ---

const MagneticButton = ({
  children,
  className = '',
  onClick,
  type = 'button'
}) => {
  const buttonRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const button = buttonRef.current
    const text = textRef.current
    if (!button || !text) return

    const handleMouseMove = (e) => {
      const { left, top, width, height } = button.getBoundingClientRect()
      const x = (e.clientX - left - width / 2) * 0.2
      const y = (e.clientY - top - height / 2) * 0.2

      if (window.gsap) {
        window.gsap.to(button, { x, y, duration: 0.5, ease: 'power3.out' })
        window.gsap.to(text, {
          x: x * 0.5,
          y: y * 0.5,
          duration: 0.5,
          ease: 'power3.out'
        })
      }
    }

    const handleMouseLeave = () => {
      if (window.gsap) {
        window.gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'power3.out'
        })
        window.gsap.to(text, { x: 0, y: 0, duration: 0.5, ease: 'power3.out' })
      }
    }

    button.addEventListener('mousemove', handleMouseMove)
    button.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      button.removeEventListener('mousemove', handleMouseMove)
      button.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <button
      ref={buttonRef}
      className={`relative overflow-hidden group ${className}`}
      onClick={onClick}
      type={type}
    >
      <div className='absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] rounded-full'></div>
      <span
        ref={textRef}
        className='relative z-10 flex items-center justify-center gap-2'
      >
        {children}
      </span>
    </button>
  )
}

const NoiseOverlay = () => (
  <svg className='pointer-events-none fixed inset-0 z-[9999] h-full w-full opacity-5 mix-blend-overlay'>
    <filter id='noise'>
      <feTurbulence
        type='fractalNoise'
        baseFrequency='0.8'
        numOctaves='3'
        stitchTiles='stitch'
      />
    </filter>
    <rect width='100%' height='100%' filter='url(#noise)' />
  </svg>
)

const Logo = ({ className = 'w-12 h-12' }) => {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div
        className={`${className} bg-white/10 backdrop-blur-md flex items-center justify-center drop-shadow-md`}
      >
        <Hexagon
          className='text-[#CC5833] w-3/4 h-3/4 fill-[#CC5833]/20'
          strokeWidth={1.5}
        />
      </div>
    )
  }

  return (
    <img
      src='/logo.png'
      alt='Fernando Tobía Logo'
      className={`${className} object-contain`}
      onError={() => setError(true)}
    />
  )
}

// --- COMPONENTES PRINCIPAIS ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const { lang, setLang, t } = useContext(LanguageContext)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollTo = (e, targetId) => {
    e.preventDefault()
    const target = document.getElementById(targetId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className='fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none'>
      <nav
        className={`pointer-events-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ease-out backdrop-blur-md border ${
          scrolled
            ? 'bg-white/80 border-[#2E4036]/10 shadow-[0_8px_32px_rgba(0,0,0,0.05)] text-[#2E4036] w-full max-w-4xl'
            : 'bg-transparent border-transparent text-white w-full max-w-7xl'
        }`}
      >
        <div className='flex items-center gap-3'>
          <Logo className='w-10 h-10' />
          <div className='font-sans-title font-bold text-sm tracking-widest uppercase hidden sm:block'>
            <span>
              F. Tobía
              <br />
              <span className='text-[10px] opacity-60 block font-normal tracking-normal'>
                TRADE & SOLUTIONS
              </span>
            </span>
          </div>
        </div>

        <div className='hidden md:flex items-center gap-8 font-sans-body text-sm font-semibold'>
          <a
            href='#features'
            onClick={(e) => handleScrollTo(e, 'features')}
            className='hover:text-[#CC5833] transition-colors cursor-pointer'
          >
            {t.navSystem}
          </a>
          <a
            href='#manifesto'
            onClick={(e) => handleScrollTo(e, 'manifesto')}
            className='hover:text-[#CC5833] transition-colors cursor-pointer'
          >
            {t.navManifesto}
          </a>
          <a
            href='#flujo-continuo'
            onClick={(e) => handleScrollTo(e, 'flujo-continuo')}
            className='hover:text-[#CC5833] transition-colors cursor-pointer'
          >
            {t.navArchive}
          </a>
        </div>

        <div className='flex items-center gap-4 md:gap-6'>
          <MagneticButton
            onClick={(e) => handleScrollTo(e, 'contact')}
            className={`px-3 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-colors ${scrolled ? 'bg-[#2E4036] text-white' : 'bg-white text-[#1A1A1A]'}`}
          >
            {t.navCTA}
          </MagneticButton>

          <div className='flex items-center gap-2 md:gap-3 font-mono-data text-[10px] md:text-xs uppercase tracking-widest border-l border-current/20 pl-4 md:pl-6'>
            {['es', 'en', 'fr', 'pt', 'it'].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`transition-all duration-300 ${lang === l ? 'opacity-100 font-bold scale-110 text-[#CC5833]' : 'opacity-40 hover:opacity-100'} ${l === 'pt' ? 'lowercase' : ''}`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

const Hero = () => {
  const heroRef = useRef(null)
  const { t } = useContext(LanguageContext)
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const generated = Array.from({ length: 25 }).map(() => ({
      size: Math.random() * 3 + 1.5,
      left: Math.random() * 100,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
      tx: Math.random() * 100 - 50
    }))
    setParticles(generated)
  }, [])

  useLayoutEffect(() => {
    if (!window.gsap) return
    let ctx = window.gsap.context(() => {
      window.gsap.fromTo(
        '.hero-text',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power4.out',
          delay: 0.2
        }
      )
    }, heroRef)
    return () => ctx.revert()
  }, [])

  const handleScrollToContact = (e) => {
    e.preventDefault()
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={heroRef}
      className='relative h-[100dvh] w-full overflow-hidden bg-[#1A1A1A] rounded-b-[2rem] md:rounded-b-[3rem] z-10'
    >
      <img
        src='https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?q=80&w=2070&auto=format&fit=crop'
        alt='Atmósfera forestal premium'
        className='absolute inset-0 w-full h-full object-cover opacity-70 transform-gpu animate-image-breath'
        style={{ transformOrigin: 'center 40%' }}
      />

      <div className='absolute -top-[20%] -right-[10%] w-[120%] h-[120%] pointer-events-none mix-blend-screen origin-top-right animate-light-rays'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(204,88,51,0.2),transparent_50%)]'></div>
        <div className='absolute inset-0 bg-[linear-gradient(115deg,transparent_35%,rgba(242,240,233,0.12)_45%,transparent_55%)] blur-2xl'></div>
        <div className='absolute inset-0 bg-[linear-gradient(100deg,transparent_40%,rgba(242,240,233,0.08)_50%,transparent_60%)] blur-3xl'></div>
      </div>

      <div className='absolute inset-0 pointer-events-none overflow-hidden mix-blend-screen z-0'>
        {particles.map((p, i) => (
          <div
            key={i}
            className='absolute bg-[#F2F0E9] rounded-full blur-[1px]'
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.left}%`,
              bottom: '-10%',
              opacity: 0,
              animation: `floatParticle ${p.duration}s ease-in-out ${p.delay}s infinite`,
              '--tx': `${p.tx}px`
            }}
          />
        ))}
      </div>

      <div className='absolute inset-0 bg-gradient-to-t from-[#2E4036] via-[#1A1A1A]/60 to-transparent z-0'></div>

      <div className='absolute inset-0 flex flex-col justify-end p-8 md:p-16 lg:p-24 pb-20 max-w-7xl mx-auto w-full z-10'>
        <div className='max-w-4xl'>
          <p className='hero-text text-white/70 font-mono-data text-xs md:text-sm tracking-[0.2em] uppercase mb-4 md:mb-6 flex items-center gap-3'>
            <span className='w-2 h-2 rounded-full bg-[#CC5833] animate-pulse'></span>
            {t.heroSubtitle}
          </p>
          <h1 className='text-white leading-[0.9] md:leading-[0.9] tracking-tighter'>
            <span className='hero-text block font-sans-title font-bold text-5xl md:text-7xl lg:text-8xl'>
              {t.heroTitle1}
            </span>
            <span className='hero-text block font-serif-italic text-[#F2F0E9] text-7xl md:text-9xl lg:text-[10rem] pr-4'>
              {t.heroTitle2}
            </span>
          </h1>
          <div className='hero-text mt-8 md:mt-12 flex flex-col md:flex-row gap-4 md:gap-6 md:items-center'>
            <MagneticButton
              onClick={handleScrollToContact}
              className='bg-[#CC5833] text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-sans-body font-semibold text-sm md:text-base flex items-center w-max'
            >
              {t.heroCTA} <ArrowRight className='w-4 h-4 md:w-5 md:h-5 ml-2' />
            </MagneticButton>
            <p className='font-sans-body text-white/60 text-sm md:text-base max-w-sm'>
              {t.heroDesc}
            </p>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .animate-image-breath { animation: image-breath 25s ease-in-out infinite alternate; }
        .animate-light-rays { animation: light-rays 12s ease-in-out infinite alternate; }
        @keyframes image-breath { 0% { transform: scale(1.02); } 100% { transform: scale(1.10); } }
        @keyframes light-rays { 0% { transform: rotate(0deg) scale(1); opacity: 0.6; } 100% { transform: rotate(-3deg) scale(1.05); opacity: 0.9; } }
        @keyframes floatParticle { 0% { transform: translate(0, 0); opacity: 0; } 20% { opacity: 0.6; } 80% { opacity: 0.6; } 100% { transform: translate(var(--tx), -100vh); opacity: 0; } }
      `
        }}
      />
    </section>
  )
}

// --- WIDGETS DE FEATURES ---

const FeatureDeck = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const { t } = useContext(LanguageContext)
  const cards = [
    { title: t.feat1Card1, value: t.feat1Card1V, desc: t.feat1Card1D },
    { title: t.feat1Card2, value: t.feat1Card2V, desc: t.feat1Card2D },
    { title: t.feat1Card3, value: t.feat1Card3V, desc: t.feat1Card3D }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [cards.length])

  return (
    <div className='relative h-full w-full flex items-center justify-center min-h-[250px]'>
      {cards.map((card, idx) => {
        const offset = (idx - activeIndex + cards.length) % cards.length
        return (
          <div
            key={idx}
            className='absolute w-full max-w-[320px] bg-white rounded-2xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]'
            style={{
              transform: `translateY(${offset * 12}px) scale(${1 - offset * 0.05})`,
              zIndex: 10 - offset,
              opacity: offset > 2 ? 0 : 1 - offset * 0.2
            }}
          >
            <div className='flex justify-between items-start mb-4'>
              <span className='font-sans-body text-xs font-semibold text-[#CC5833] uppercase tracking-wider'>
                {card.title}
              </span>
              <Activity className='w-4 h-4 text-[#2E4036]/40' />
            </div>
            <div className='font-sans-title font-bold text-2xl md:text-3xl leading-tight text-[#1A1A1A] mb-2'>
              {card.value}
            </div>
            <div className='font-sans-body text-sm text-gray-500'>
              {card.desc}
            </div>
          </div>
        )
      })}
    </div>
  )
}

const FeatureTelemetry = () => {
  const { t } = useContext(LanguageContext)
  const phrases = [t.feat2P1, t.feat2P2, t.feat2P3]
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex] || phrases[0]
    const typeSpeed = isDeleting ? 30 : 80
    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1500)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setPhraseIndex((prev) => (prev + 1) % phrases.length)
      } else {
        setText(currentPhrase.substring(0, text.length + (isDeleting ? -1 : 1)))
      }
    }, typeSpeed)
    return () => clearTimeout(timeout)
  }, [text, isDeleting, phraseIndex, phrases])

  return (
    <div className='bg-black/40 rounded-2xl p-6 md:p-8 h-full flex flex-col justify-between w-full relative min-h-[250px] border border-white/10 shadow-[inset_0_2px_15px_rgba(0,0,0,0.5)]'>
      <div className='absolute top-6 right-6 md:top-8 md:right-8 flex gap-2'>
        <div className='w-2 h-2 rounded-full bg-[#CC5833] animate-pulse'></div>
        <span className='font-mono-data text-[10px] text-[#CC5833] tracking-widest uppercase'>
          {t.feat2Live}
        </span>
      </div>
      <div className='mt-8 flex-grow'>
        <p className='font-mono-data text-white/60 text-xs mb-2'>
          {'>'} {t.feat2Log}
        </p>
        <div className='font-mono-data text-white text-base md:text-lg leading-relaxed h-12'>
          {text}
          <span className='inline-block w-2 h-4 bg-[#CC5833] ml-1 animate-ping'></span>
        </div>
      </div>
      <div className='border-t border-white/10 pt-4 mt-4 flex justify-between items-center text-white/40 font-mono-data text-[10px]'>
        <span>{t.feat2Stream}</span>
        <span>LAT: 12ms</span>
      </div>
    </div>
  )
}

const FeatureAgenda = () => {
  const { t } = useContext(LanguageContext)
  return (
    <div className='h-full w-full relative flex flex-col justify-center min-h-[250px]'>
      <div className='flex justify-between items-center mb-6'>
        <span className='font-sans-title font-semibold text-white/80'>
          {t.feat3WidgetTitle}
        </span>
        <Settings className='w-4 h-4 text-white/50' />
      </div>
      <div className='grid grid-cols-7 gap-2 mb-6 relative'>
        {t.days.map((day, i) => (
          <div
            key={i}
            className={`aspect-square rounded-lg flex items-center justify-center font-mono-data text-xs ${i === 3 ? 'bg-white text-[#2E4036] shadow-lg relative' : 'bg-white/10 text-white/50 border border-white/10'}`}
          >
            {day}
            {i === 3 && (
              <span className='absolute -top-1 -right-1 w-2 h-2 bg-[#CC5833] rounded-full'></span>
            )}
          </div>
        ))}
        <div className='absolute cursor-animation pointer-events-none z-10 flex flex-col items-center'>
          <MousePointer2 className='w-6 h-6 text-white fill-[#1A1A1A]' />
        </div>
      </div>
      <div className='w-full bg-white/10 rounded-full h-8 flex items-center justify-center font-sans-body text-xs text-white font-semibold'>
        {t.feat3Action}
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes autoCursor { 0% { transform: translate(150px, 80px); opacity: 0; } 10% { opacity: 1; } 30% { transform: translate(110px, -20px); scale: 1; } 40% { transform: translate(110px, -20px); scale: 1; } 60% { transform: translate(60px, 45px); scale: 1; } 70% { transform: translate(60px, 45px); scale: 1; } 90% { transform: translate(-20px, 100px); opacity: 1; } 100% { transform: translate(-20px, 100px); opacity: 0; } }
        .cursor-animation { animation: autoCursor 4s infinite cubic-bezier(0.25, 1, 0.5, 1); transform-origin: top left; }
      `
        }}
      />
    </div>
  )
}

const Features = () => {
  const { t } = useContext(LanguageContext)
  const containerRef = useRef(null)
  useLayoutEffect(() => {
    if (!window.gsap || !window.ScrollTrigger) return
    let ctx = window.gsap.context(() => {
      const cards = window.gsap.utils.toArray('.feature-stack-card')
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return
        window.ScrollTrigger.create({
          trigger: cards[i + 1],
          start: 'top 50%',
          end: 'top 25%',
          scrub: true,
          animation: window.gsap.to(card, {
            scale: 0.92,
            opacity: 0.6,
            y: -15,
            ease: 'none'
          })
        })
      })
    }, containerRef)
    return () => ctx.revert()
  }, [t])

  return (
    <section
      id='features'
      ref={containerRef}
      className='py-24 md:py-32 px-4 md:px-8 relative z-20 rounded-[2rem] md:rounded-[3rem] -mt-10'
    >
      <div className='absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-[#F2F0E9]'>
        <img
          src='https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop'
          alt='Strategy'
          className='w-full h-full object-cover opacity-[0.12] mix-blend-luminosity'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-[#F2F0E9] via-[#F2F0E9]/60 to-transparent h-64'></div>
      </div>
      <div className='max-w-5xl mx-auto mb-20 text-center relative z-10'>
        <h2 className='font-sans-title font-bold text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] mb-6 tracking-tight whitespace-pre-line'>
          {t.featTitle1}
          <br />
          {t.featTitle2A}{' '}
          <span className='font-serif-italic text-[#2E4036] font-normal'>
            {t.featTitle2B}
          </span>
        </h2>
        <p className='font-sans-body text-[#1A1A1A]/70 text-lg md:text-xl max-w-2xl mx-auto'>
          {t.featDesc}
        </p>
      </div>
      <div className='max-w-5xl mx-auto relative pb-[15vh] z-10'>
        <div className='feature-stack-card sticky top-[15vh] w-full bg-white rounded-[2rem] md:rounded-[3rem] shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 mb-[5vh] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden'>
          <div className='w-full md:w-1/2'>
            <h3 className='font-sans-title font-bold text-3xl md:text-5xl text-[#1A1A1A] mb-6 tracking-tight'>
              {t.feat1Title}
            </h3>
            <div className='w-12 h-1 bg-[#CC5833] rounded-full'></div>
          </div>
          <div className='w-full md:w-1/2 relative min-h-[300px]'>
            <FeatureDeck />
          </div>
        </div>
        <div className='feature-stack-card sticky top-[18vh] w-full bg-[#1A1A1A] rounded-[2rem] md:rounded-[3rem] shadow-[0_15px_50px_rgba(0,0,0,0.3)] border border-white/10 mb-[5vh] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 text-white overflow-hidden'>
          <div className='w-full md:w-1/2'>
            <h3 className='font-sans-title font-bold text-3xl md:text-5xl mb-6 tracking-tight'>
              {t.feat2Title}
            </h3>
            <div className='w-12 h-1 bg-[#CC5833] rounded-full'></div>
          </div>
          <div className='w-full md:w-1/2 relative min-h-[300px]'>
            <FeatureTelemetry />
          </div>
        </div>
        <div className='feature-stack-card sticky top-[21vh] w-full bg-[#2E4036] rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.4)] border border-white/5 mb-[5vh] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 text-white overflow-hidden'>
          <div className='w-full md:w-1/2'>
            <h3 className='font-sans-title font-bold text-3xl md:text-5xl mb-6 tracking-tight'>
              {t.feat3Title}
            </h3>
            <div className='w-12 h-1 bg-[#CC5833] rounded-full'></div>
          </div>
          <div className='w-full md:w-1/2 relative min-h-[300px]'>
            <FeatureAgenda />
          </div>
        </div>
      </div>
    </section>
  )
}

const Manifesto = () => {
  const sectionRef = useRef(null)
  const { t } = useContext(LanguageContext)
  useLayoutEffect(() => {
    if (!window.gsap || !window.ScrollTrigger) return
    let ctx = window.gsap.context(() => {
      window.gsap.fromTo(
        '.manifesto-line',
        { y: 40, opacity: 0, rotationX: -20 },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1,
          stagger: 0.3,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 60%' }
        }
      )
      window.gsap.to('.parallax-bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [t])

  return (
    <section
      id='manifesto'
      ref={sectionRef}
      className='relative py-32 md:py-48 overflow-hidden bg-[#1A1A1A] rounded-[2rem] md:rounded-[3rem] -mt-10 z-30 flex items-center'
    >
      <img
        src='https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop'
        alt='Organic'
        className='parallax-bg absolute inset-0 w-full h-[130%] object-cover opacity-30 mix-blend-luminosity'
      />
      <div className='absolute inset-0 bg-[#1A1A1A]/80'></div>
      <div className='relative z-10 max-w-5xl mx-auto px-6 text-center'>
        <p className='manifesto-line font-mono-data text-[#CC5833] text-sm uppercase tracking-[0.3em] mb-12'>
          {t.manifTag}
        </p>
        <h2 className='text-[#F2F0E9] text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight font-sans-title'>
          <span className='manifesto-line block text-white/40 mb-4'>
            {t.manifL1}
          </span>
          <span className='manifesto-line block text-white/40 font-serif-italic mb-12'>
            {t.manifL2}
          </span>
          <span className='manifesto-line block text-[#2E4036] font-bold'>
            {t.manifL3}
          </span>
          <span className='manifesto-line block font-serif-italic mt-2 text-[#F2F0E9]'>
            {t.manifL4}
          </span>
        </h2>
      </div>
    </section>
  )
}

const ArchivePanel = ({
  id,
  title,
  subtitle,
  bgColor,
  textColor,
  bgImage,
  overlayMode = 'dark',
  children
}) => (
  <div
    id={id}
    className={`sticky top-0 h-screen w-full ${bgColor} flex flex-col justify-center px-6 md:px-16 overflow-hidden rounded-t-[2rem] md:rounded-t-[3rem] archive-panel shadow-[0_-20px_50px_rgba(0,0,0,0.2)]`}
  >
    {bgImage && (
      <div className='absolute inset-0 z-0 pointer-events-none'>
        <img
          src={bgImage}
          alt='Background'
          className='w-full h-full object-cover opacity-15 mix-blend-luminosity scale-105'
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${overlayMode === 'dark' ? 'from-[#1A1A1A] via-transparent to-[#1A1A1A]/60' : 'from-[#F2F0E9] via-transparent to-[#F2F0E9]/80'}`}
        ></div>
      </div>
    )}
    <div className='max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12 z-10 relative'>
      <div className='w-full md:w-1/2'>
        <h2
          className={`font-sans-title font-bold text-5xl md:text-7xl mb-6 ${textColor} tracking-tight`}
        >
          {title}
        </h2>
        <p
          className={`font-serif-italic text-2xl md:text-3xl ${textColor} opacity-80`}
        >
          {subtitle}
        </p>
      </div>
      <div className='w-full md:w-1/2 flex justify-center items-center aspect-square relative'>
        {children}
      </div>
    </div>
  </div>
)

const Archive = () => {
  const containerRef = useRef(null)
  const { t } = useContext(LanguageContext)
  useLayoutEffect(() => {
    if (!window.gsap || !window.ScrollTrigger) return
    let ctx = window.gsap.context(() => {
      const panels = window.gsap.utils.toArray('.archive-panel')
      panels.forEach((panel, i) => {
        if (i === panels.length - 1) return
        window.ScrollTrigger.create({
          trigger: panels[i + 1],
          start: 'top bottom',
          end: 'top top',
          scrub: true,
          animation: window.gsap.to(panel, {
            scale: 0.92,
            opacity: 0.3,
            ease: 'none'
          })
        })
      })
    }, containerRef)
    return () => ctx.revert()
  }, [t])

  return (
    <section
      id='archive'
      ref={containerRef}
      className='relative w-full bg-[#1A1A1A] -mt-10 z-40 pb-[30vh]'
    >
      <ArchivePanel
        title={t.arch1Title}
        subtitle={t.arch1Sub}
        bgColor='bg-[#F2F0E9]'
        textColor='text-[#1A1A1A]'
        bgImage='https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop'
        overlayMode='light'
      >
        <div className='relative w-full h-full flex items-center justify-center'>
          <div className='absolute w-64 h-64 border-[1px] border-[#2E4036]/20 rounded-full animate-[spin_10s_linear_infinite]'></div>
          <div className='absolute w-48 h-48 border-[2px] border-[#CC5833]/30 rounded-full animate-[spin_7s_linear_infinite_reverse]'></div>
          <div className='absolute w-32 h-32 bg-[#2E4036] rounded-full flex items-center justify-center text-white'>
            <Settings className='w-10 h-10 animate-[spin_4s_linear_infinite]' />
          </div>
        </div>
      </ArchivePanel>
      <ArchivePanel
        id='flujo-continuo'
        title={t.arch2Title}
        subtitle={t.arch2Sub}
        bgColor='bg-[#1A1A1A]'
        textColor='text-[#F2F0E9]'
        bgImage='https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop'
        overlayMode='dark'
      >
        <div className='w-full h-full flex items-center justify-center'>
          <svg viewBox='0 0 1000 200' className='w-full h-32 relative z-10'>
            <path
              d='M0,100 L200,100 L250,20 L300,180 L350,100 L600,100 L650,50 L700,150 L750,100 L1000,100'
              fill='none'
              stroke='#CC5833'
              strokeWidth='4'
              className='path-pulse drop-shadow-[0_0_8px_rgba(204,88,51,0.6)]'
              strokeDasharray='2000'
              strokeDashoffset='2000'
            />
          </svg>
          <style
            dangerouslySetInnerHTML={{
              __html: `.path-pulse { animation: drawLine 3s linear infinite; } @keyframes drawLine { 0% { stroke-dashoffset: 2000; } 50% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: -2000; } }`
            }}
          />
        </div>
      </ArchivePanel>
    </section>
  )
}

const ContactAndFooter = () => {
  const { t } = useContext(LanguageContext)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const emailTo = 'ftobia@fttradesolutions.com'
    const subject = encodeURIComponent(
      `Nuevo contacto web: ${formData.name} - ${formData.company}`
    )
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\nEmpresa: ${formData.company}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\n\nMensaje:\n(Escribe aquí tu consulta...)`
    )
    window.open(`mailto:${emailTo}?subject=${subject}&body=${body}`, '_blank')
  }

  return (
    <div className='relative z-50 bg-[#1A1A1A] rounded-t-[2rem] md:rounded-t-[3rem] overflow-hidden'>
      <section
        id='contact'
        className='bg-[#2E4036] py-24 md:py-32 px-6 rounded-t-[2rem] md:rounded-t-[3rem]'
      >
        <div className='max-w-4xl mx-auto flex flex-col md:flex-row gap-16 items-center'>
          <div className='w-full md:w-1/2 text-white'>
            <div className='mb-8'>
              <Logo className='w-40 h-40 md:w-56 md:h-56 mb-6' />
              <div className='font-sans-title font-bold text-xl md:text-2xl tracking-widest uppercase text-white'>
                <span>
                  Fernando Tobía
                  <br />
                  <span className='text-xs md:text-sm text-white/60 block font-normal tracking-normal mt-1'>
                    TRADE & SOLUTIONS
                  </span>
                </span>
              </div>
            </div>
            <h2 className='font-sans-title font-bold text-4xl md:text-6xl mb-6'>
              {t.contactTitle1}
              <br />
              <span className='font-serif-italic font-normal'>
                {t.contactTitle2}
              </span>
            </h2>
            <p className='font-sans-body text-white/70 mb-8'>{t.contactDesc}</p>
            <div className='flex items-center gap-4 text-sm font-mono-data opacity-60'>
              <span className='w-2 h-2 rounded-full bg-[#CC5833] animate-pulse'></span>
              {t.contactTag}
            </div>
          </div>
          <div className='w-full md:w-1/2 bg-white rounded-3xl p-8 shadow-2xl'>
            <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
              <div>
                <label className='block font-sans-body text-xs font-semibold text-gray-500 uppercase mb-2'>
                  {t.formNameL}
                </label>
                <input
                  type='text'
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className='w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#2E4036] font-sans-body text-gray-800 bg-transparent'
                  placeholder={t.formNameP}
                />
              </div>
              <div>
                <label className='block font-sans-body text-xs font-semibold text-gray-500 uppercase mb-2'>
                  {t.formCompL}
                </label>
                <input
                  type='text'
                  required
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className='w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#2E4036] font-sans-body text-gray-800 bg-transparent'
                  placeholder={t.formCompP}
                />
              </div>
              <div>
                <label className='block font-sans-body text-xs font-semibold text-gray-500 uppercase mb-2'>
                  {t.formEmailL}
                </label>
                <input
                  type='email'
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className='w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#2E4036] font-sans-body text-gray-800 bg-transparent'
                  placeholder={t.formEmailP}
                />
              </div>
              <div>
                <label className='block font-sans-body text-xs font-semibold text-gray-500 uppercase mb-2'>
                  {t.formPhoneL}
                </label>
                <input
                  type='tel'
                  required
                  pattern='^\+[0-9\s\-]+'
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className='w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#2E4036] font-sans-body text-gray-800 bg-transparent'
                  placeholder={t.formPhoneP}
                />
              </div>
              <MagneticButton
                type='submit'
                className='w-full bg-[#CC5833] text-white py-4 rounded-xl font-sans-title font-semibold mt-4'
              >
                {t.formCTA}
              </MagneticButton>
            </form>
          </div>
        </div>
      </section>
      <footer className='bg-[#1A1A1A] py-12 px-6'>
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-b border-white/10 pb-12 mb-8'>
          <div className='flex items-center gap-4'>
            <Logo className='w-16 h-16' />
            <div className='font-sans-title font-bold text-xl tracking-widest uppercase text-white'>
              <span>
                F. Tobía
                <br />
                <span className='text-xs text-white/40 block font-normal mt-1'>
                  TRADE & SOLUTIONS
                </span>
              </span>
            </div>
          </div>
          <div className='flex gap-8 font-sans-body text-sm text-white/60'>
            <a
              href='https://www.linkedin.com/in/fernandotobia/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-white transition-colors'
            >
              LinkedIn
            </a>
            <a href='#' className='hover:text-white transition-colors'>
              {t.footerPrivacy}
            </a>
            <a href='#' className='hover:text-white transition-colors'>
              {t.footerTerms}
            </a>
          </div>
        </div>
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono-data text-white/40'>
          <p>
            © {new Date().getFullYear()} Fernando Tobía Trade & Solutions.{' '}
            {t.footerRights}
          </p>
          <div className='flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10'>
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2E4036] opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-[#2E4036]'></span>
            </span>
            {t.footerSys}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function App() {
  const [gsapLoaded, setGsapLoaded] = useState(false)
  const [lang, setLang] = useState('es')

  useEffect(() => {
    document.title = 'Fernando Tobía T&S'
    const loadScript = (src) =>
      new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = resolve
        document.head.appendChild(script)
      })
    loadScript(
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js'
    ).then(() => {
      loadScript(
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js'
      ).then(() => {
        if (window.gsap && window.ScrollTrigger) {
          window.gsap.registerPlugin(window.ScrollTrigger)
          setGsapLoaded(true)
        }
      })
    })
  }, [])

  if (!gsapLoaded)
    return (
      <div className='min-h-screen bg-[#1A1A1A] flex items-center justify-center font-sans-title text-[#F2F0E9] text-sm tracking-[0.2em] uppercase'>
        Inicializando Sistema...
      </div>
    )
  const t = translations[lang]
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <div className='relative min-h-screen bg-[#F2F0E9] text-[#1A1A1A] selection:bg-[#2E4036] selection:text-white smooth-scroll'>
        <style
          dangerouslySetInnerHTML={{
            __html: `@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=JetBrains+Mono:wght@400;700&family=Outfit:wght@300;400;600&family=Plus+Jakarta+Sans:wght@400;600;800&display=swap'); .font-sans-title { font-family: 'Plus Jakarta Sans', sans-serif; } .font-sans-body { font-family: 'Outfit', sans-serif; } .font-serif-italic { font-family: 'Cormorant Garamond', serif; font-style: italic; } .font-mono-data { font-family: 'JetBrains Mono', monospace; } body { margin: 0; background-color: #1A1A1A; } html { scroll-behavior: smooth; } ::-webkit-scrollbar { width: 8px; } ::-webkit-scrollbar-track { background: #1A1A1A; } ::-webkit-scrollbar-thumb { background: #2E4036; border-radius: 4px; } ::-webkit-scrollbar-thumb:hover { background: #CC5833; }`
          }}
        />
        <NoiseOverlay />
        <Navbar />
        <main className='relative flex flex-col'>
          <Hero />
          <Features />
          <Manifesto />
          <Archive />
        </main>
        <ContactAndFooter />
      </div>
    </LanguageContext.Provider>
  )
}
