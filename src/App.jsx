import React, { useState, useEffect } from 'react';
import { 
  Mic, 
  Play, 
  Radio, 
  Cpu, 
  Globe, 
  Zap, 
  Youtube, 
  Instagram, 
  Linkedin, 
  Mail, 
  ChevronRight,
  Menu,
  X,
  ExternalLink,
  Users,
  TrendingUp,
  Camera,
  ArrowRight,
  Activity,
  Twitter
} from 'lucide-react';

// --- Assets & Constants ---
const LOGO_URL = "https://image2url.com/r2/default/images/1770535060849-18ae1578-df43-480e-ad38-84be1d72f070.jpeg";
const PROFILE_URL = "https://image2url.com/r2/default/images/1770535168928-dc981dbb-e0ab-4c06-8ac1-322ef48f4cc2.jpeg";

const SOCIALS = {
  youtube: "https://www.youtube.com/@expressbymansi",
  linkedin: "https://www.linkedin.com/in/mansi-verma-4794a4328/",
  instagram: "https://www.instagram.com/expressbymansi?igsh=MWx4OHV3dXlqZ3Y5dg==",
  x: "https://x.com/MansiVe61115132",
  email: "expressbymansi@gmail.com"
};

const LIFESTYLE_IMAGES = [
  "https://image2url.com/r2/default/images/1770538846062-f32bd1e3-97aa-42c6-b7dc-ad2404d2ef9b.jpeg",
  "https://image2url.com/r2/default/images/1770538871600-65dc13d9-35bb-4223-affd-09b6f16d4d3a.jpeg",
  "https://image2url.com/r2/default/images/1770538896674-b92e0548-0006-46eb-80d3-572629c12821.jpeg"
];

const COLORS = {
  primary: 'from-[#FF9800] via-[#E91E63] to-[#9C27B0]', 
  navy: 'text-[#1A237E]', 
  textMain: 'text-slate-800',
  textMuted: 'text-slate-600',
  bgMain: 'bg-white',
  bgAlt: 'bg-slate-50',
  glass: 'bg-white/80 backdrop-blur-md border border-slate-200',
  gradientText: 'bg-clip-text text-transparent bg-gradient-to-r from-[#FF9800] via-[#E91E63] to-[#9C27B0]'
};

// --- Animations Helper ---
const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

// --- Components ---

const BackgroundAnimation = () => (
  <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none opacity-30">
    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-pink-200/40 blur-[120px] rounded-full animate-float-slow" />
    <div className="absolute bottom-[10%] right-[-5%] w-[45%] h-[45%] bg-orange-200/30 blur-[120px] rounded-full animate-float-reverse" />
    <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-purple-200/20 blur-[100px] rounded-full animate-pulse-slow" />
  </div>
);

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Episodes', href: '#episodes' },
    { name: 'Topics', href: '#topics' },
    { name: 'Vlogs', href: '#lifestyle' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 animate-header-down ${scrolled ? 'py-2 bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-sm' : 'py-3 bg-transparent'}`}>
      <div className="w-full px-4 md:px-8 flex justify-between items-center">
        {/* Logo at Left with Elegant Entry - Indentation removed */}
        <a href="#home" className="flex items-center group cursor-pointer relative">
          <div className="absolute inset-0 bg-pink-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
          <img 
            src={LOGO_URL} 
            alt="EBM Logo" 
            className="h-10 md:h-14 w-auto object-contain transition-all duration-500 group-hover:scale-105 relative z-10" 
          />
        </a>

        {/* Pretty Desktop Navigation Links */}
        <div className="hidden lg:flex gap-10 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[11px] font-bold text-slate-500 hover:text-pink-600 transition-all uppercase tracking-[0.3em] font-serif relative group/link"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-gradient-to-r from-orange-400 to-purple-600 transition-all duration-500 group-hover/link:w-full" />
            </a>
          ))}
          <div className="flex gap-3">
            <a href={SOCIALS.youtube} target="_blank" rel="noreferrer" className={`px-8 py-2.5 rounded-2xl bg-gradient-to-r ${COLORS.primary} text-white font-bold text-[10px] shadow-lg shadow-pink-500/20 hover:scale-105 hover:shadow-pink-500/40 transition-all uppercase tracking-widest font-serif`}>
              WATCH ON YT
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className={`${COLORS.navy} lg:hidden p-2 hover:bg-white/50 rounded-xl transition-all shadow-sm`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-[56px] md:top-[64px] bg-white/95 backdrop-blur-2xl z-40 lg:hidden animate-in fade-in slide-in-from-top-3 duration-300">
          <div className="flex flex-col p-10 gap-8 text-center items-center">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className={`text-3xl font-black ${COLORS.navy} hover:text-pink-500 transition-colors uppercase tracking-tight font-serif italic`}>
                {link.name}
              </a>
            ))}
            <div className="h-[1px] w-20 bg-slate-200 my-2" />
            <a href={SOCIALS.youtube} target="_blank" rel="noreferrer" className={`w-full py-5 rounded-2xl bg-gradient-to-r ${COLORS.primary} text-white text-center font-bold shadow-xl uppercase tracking-[0.2em] font-serif`}>
              WATCH ON YOUTUBE
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Ticker = () => (
  <div className="pt-20 md:pt-22 pb-2 bg-white border-b border-slate-100 overflow-hidden font-serif relative z-10">
    <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap gap-12 items-center">
      {[1, 2, 3].map((_, i) => (
        <div key={i} className="flex gap-12 items-center italic">
          <span className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]"><Activity size={12} className="text-teal-500"/> BTC/USD $96,432 (+2.4%)</span>
          <span className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]"><Zap size={12} className="text-yellow-500"/> AI AGENTS TRENDING</span>
          <span className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]"><Globe size={12} className="text-blue-500"/> WEB3 GLOBAL ADOPTION</span>
          <span className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]"><Mic size={12} className="text-pink-500"/> LIVE IN STUDIO: MAN$I VERMA</span>
        </div>
      ))}
    </div>
  </div>
);

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[65vh] lg:min-h-[75vh] flex items-center justify-center overflow-hidden pt-4 pb-8 lg:pb-0 bg-white/50 backdrop-blur-[2px] border-b border-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="text-center lg:text-left scroll-animate opacity-0 translate-y-10 duration-700">
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black ${COLORS.navy} leading-[1.1] lg:leading-[0.9] mb-4 lg:mb-6 tracking-tighter font-serif italic`}>
            TECH MEETS <br />
            <span className={COLORS.gradientText + " not-italic"}>EXPRESSION</span>
          </h1>
          <p className="text-slate-500 text-base md:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 mb-4 lg:mb-6 leading-relaxed font-medium font-serif italic">
            Join <span className="text-slate-900 font-bold tracking-wider uppercase not-italic">MAN$I VERMA</span> as I explore Web3, AI, and Blockchain through a bold lens.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start font-serif">
            <a href={SOCIALS.youtube} target="_blank" rel="noreferrer" className={`group px-8 py-3 rounded-2xl bg-gradient-to-r ${COLORS.primary} text-white font-bold flex items-center justify-center gap-3 shadow-2xl shadow-pink-500/30 hover:shadow-pink-500/50 hover:-translate-y-1 transition-all uppercase tracking-widest text-sm`}>
              Watch Podcast <Play size={18} fill="currentColor" />
            </a>
            <a href="#topics" className="px-8 py-3 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200 text-slate-800 text-center font-bold hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm text-sm uppercase tracking-widest">
              Explore Topics
            </a>
          </div>
        </div>

        <div className="relative flex justify-center items-center scroll-animate opacity-0 translate-y-10 duration-1000 delay-200 order-first lg:order-last">
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] flex items-center justify-center text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF9800]/20 via-[#E91E63]/20 to-[#9C27B0]/20 rounded-full animate-pulse blur-[60px] lg:blur-[80px] opacity-60" />
            <div className="relative z-10 w-full p-6 md:p-10 bg-white/40 backdrop-blur-md rounded-[2rem] lg:rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] border border-white/60 hover:scale-105 transition-transform duration-700 overflow-hidden text-center">
               <img src={LOGO_URL} alt="EBM Official Logo" className="w-full h-auto object-contain drop-shadow-xl mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SectionHeading = ({ subtitle, title, centered = true }) => (
  <div className={`${centered ? 'text-center mx-auto' : 'text-center md:text-left'} mb-4 md:mb-6 scroll-animate opacity-0 translate-y-10 transition-all duration-700 font-serif`}>
    {subtitle && <span className="text-[#E91E63] font-bold uppercase tracking-[0.4em] text-[10px] mb-1 block">{subtitle}</span>}
    <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black ${COLORS.navy} tracking-tight uppercase leading-tight italic`}>{title}</h2>
  </div>
);

const About = () => (
  <section id="about" className="pt-6 pb-2 md:pt-10 relative bg-slate-50/40 backdrop-blur-[1px] overflow-hidden font-serif">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      <div className="relative scroll-animate opacity-0 translate-y-10 transition-all duration-700">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-100 rounded-full blur-3xl opacity-50" />
        <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border-4 md:border-8 border-white shadow-2xl bg-white group max-w-md mx-auto text-center">
          <img src={PROFILE_URL} alt="Mansi Verma" className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105 inline-block" />
        </div>
        <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 p-4 sm:p-6 px-6 sm:px-10 rounded-2xl sm:rounded-3xl bg-white shadow-2xl border border-slate-100 flex flex-col items-center">
           <span className={`font-black text-lg sm:text-2xl tracking-[0.1em] ${COLORS.navy} not-italic`}>MAN$I VERMA</span>
           <span className="text-pink-500 text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.3em] mt-1 border-t border-slate-100 pt-1 w-full text-center italic">Founder & Host</span>
        </div>
      </div>
      
      <div className="scroll-animate opacity-0 translate-y-10 transition-all duration-700 text-center lg:text-left mt-4 lg:mt-0 pb-6 md:pb-10">
        <SectionHeading subtitle="" title="About me" centered={false} />
        <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-4 italic">
          Hi, I’m <span className="font-black not-italic text-slate-900">MAN$I VERMA</span> a tech-evangelist, content creator and the face behind <span className={COLORS.gradientText + " font-black not-italic"}>Express by Mansi</span>.
        </p>
        <p className="text-slate-500 text-base md:text-lg leading-relaxed mb-4 font-serif italic">
          I’m passionate about expressing thoughts, stories, and creativity in a way that feels real and relatable. This space is where ideas turn into words and emotions find a voice.
        </p>
        <p className="text-pink-500 font-bold mb-8 text-sm italic uppercase tracking-widest text-center lg:text-left">
          Thank you for being here and supporting my journey.
        </p>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-md mx-auto lg:mx-0">
          <a href={SOCIALS.youtube} target="_blank" rel="noreferrer" className="p-4 sm:p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200 shadow-sm hover:shadow-md transition-all group/icon text-center">
            <div className="text-red-600 mb-2 flex justify-center group-hover/icon:scale-110 transition-transform"><Youtube size={24} /></div>
            <h4 className={`font-black ${COLORS.navy} text-xs sm:text-sm uppercase not-italic`}>YouTube</h4>
          </a>
          <a href={SOCIALS.instagram} target="_blank" rel="noreferrer" className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all group/icon text-center">
            <div className="text-pink-600 mb-2 flex justify-center group-hover/icon:scale-110 transition-transform"><Instagram size={24} /></div>
            <h4 className={`font-black ${COLORS.navy} text-xs sm:text-sm uppercase not-italic`}>Instagram</h4>
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Topics = () => {
  const topics = [
    { title: 'Blockchain', icon: <Globe />, color: 'text-orange-500', desc: 'Understanding decentralized ecosystems.' },
    { title: 'Web3', icon: <Zap />, color: 'text-pink-500', desc: 'The future of internet ownership.' },
    { title: 'AI Awareness', icon: <Cpu />, color: 'text-purple-600', desc: 'Demystifying the age of intelligence.' },
    { title: 'Digital Trends', icon: <TrendingUp />, color: 'text-teal-500', desc: 'Staying relevant in a fast world.' },
    { title: 'Creator Journey', icon: <Camera />, color: 'text-blue-500', desc: 'Behind the lens of a creator.' }
  ];

  return (
    <section id="topics" className="py-6 md:py-10 bg-white/40 font-serif border-b border-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <SectionHeading subtitle="Our Core Focus" title="Topics We Explore" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {topics.map((t, idx) => (
            <div key={idx} className="group relative p-[1.5px] rounded-[2rem] scroll-animate opacity-0 translate-y-10 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-slate-200 rounded-[2rem] overflow-hidden text-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] h-[250%] bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 group-hover:animate-[spin_3s_linear_infinite]" />
              </div>
              <div className="relative bg-white rounded-[1.95rem] p-6 md:p-8 h-full text-center flex flex-col items-center shadow-sm border border-slate-100">
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-slate-50 flex items-center justify-center ${t.color} mb-4 md:mb-6 group-hover:scale-110 transition-transform group-hover:shadow-lg group-hover:bg-white`}>
                  {t.icon}
                </div>
                <h3 className={`font-black ${COLORS.navy} text-base md:text-lg mb-2 uppercase tracking-tight not-italic`}>{t.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed font-bold italic">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EpisodeCard = ({ title, ep, thumbnail }) => (
  <div className="group bg-white/80 backdrop-blur-sm rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 scroll-animate opacity-0 translate-y-10 transition-all duration-700 hover:shadow-xl font-serif text-center">
    <div className="aspect-[16/10] relative overflow-hidden">
      <img src={thumbnail} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={title} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
         <a href={SOCIALS.youtube} target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 hover:scale-110 transition-transform">
            <Play fill="currentColor" size={20} />
         </a>
      </div>
      <div className="absolute top-4 left-4">
        <span className="px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-pink-600 text-[10px] font-black uppercase tracking-[0.2em] shadow-sm not-italic">
           {ep}
        </span>
      </div>
    </div>
    <div className="p-5 md:p-6">
       <h4 className={`font-black ${COLORS.navy} text-base md:text-lg mb-3 group-hover:text-pink-600 transition-colors line-clamp-2 leading-tight uppercase italic`}>{title}</h4>
       <a href={SOCIALS.youtube} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em] group-hover:text-pink-500 transition-colors">
         Listen Now <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
       </a>
    </div>
  </div>
);

const Episodes = () => {
  const episodes = [
    { title: "Decoding the Web3 Revolution", ep: "EBM01", thumbnail: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800" },
    { title: "AI Ethics & Productivity in 2026", ep: "EBM02", thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" },
    { title: "The Lifestyle of a Tech Content Creator", ep: "EBM03", thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <section id="episodes" className="py-6 md:py-10 bg-slate-50/60 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        <div className="w-full text-center mb-6 md:mb-8">
           <SectionHeading subtitle="Broadcast Library" title="Podcast Episodes" />
           <a href={SOCIALS.youtube} target="_blank" rel="noreferrer" className={`inline-flex px-8 py-2.5 rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200 ${COLORS.navy} font-bold text-[10px] uppercase tracking-widest hover:shadow-xl hover:border-pink-200 transition-all`}>
             BROWSE ALL EPISODES
           </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
           {episodes.map((ep, i) => <EpisodeCard key={i} {...ep} />)}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-8 md:py-12 bg-white/40 relative border-b border-slate-50 font-serif">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="bg-white/60 backdrop-blur-md rounded-[2rem] md:rounded-[3rem] p-6 md:p-8 shadow-inner scroll-animate opacity-0 translate-y-10 border border-slate-100">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
           <div className="scroll-animate opacity-0 translate-y-5 transition-all text-center lg:text-left">
              <h2 className={`text-3xl md:text-5xl font-black ${COLORS.navy} mb-4 leading-tight uppercase italic`}>LET'S CONNECT & <br /><span className={COLORS.gradientText + " not-italic"}>COLLABORATE</span></h2>
              <p className={`text-[#1A237E] bg-white/80 p-4 rounded-xl border border-slate-200 mb-6 text-sm md:text-base font-bold italic shadow-sm`}>
                Interested in brand partnerships, guest speaker slots, or just want to talk tech? My inbox is always open.
              </p>
              <div className="space-y-4 flex flex-col items-center lg:items-start">
                 <a href={`mailto:${SOCIALS.email}`} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-2xl bg-white shadow-sm flex items-center justify-center text-pink-500 group-hover:scale-110 transition-transform"><Mail size={18} /></div>
                    <span className="font-bold text-slate-700 tracking-tight text-sm sm:text-base not-italic">{SOCIALS.email}</span>
                 </a>
                 <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform"><Linkedin size={18} /></div>
                    <span className="font-bold text-slate-700 tracking-tight text-sm sm:text-base not-italic">Mansi Verma / LinkedIn</span>
                 </a>
              </div>
           </div>
           
           <form action={`mailto:${SOCIALS.email}`} method="post" encType="text/plain" className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-[2rem] shadow-2xl border border-slate-100 flex flex-col gap-4 scroll-animate opacity-0 translate-y-5 transition-all">
              <div className="space-y-1 text-left font-serif">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 text-left block">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full px-5 py-3 rounded-xl bg-slate-50/50 border border-transparent focus:border-pink-500 outline-none transition-all font-bold text-slate-800 text-sm" />
              </div>
              <div className="space-y-1 text-left font-serif">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1 text-left block">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full px-5 py-3 rounded-xl bg-slate-50/50 border border-transparent focus:border-pink-500 outline-none transition-all font-bold text-slate-800 text-sm" />
              </div>
              <button type="submit" className={`w-full py-4 rounded-2xl bg-gradient-to-r ${COLORS.primary} text-white font-bold text-xs shadow-xl shadow-pink-500/20 hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-[0.3em] mt-2 font-serif`}>
                SEND MESSAGE
              </button>
           </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="pt-6 pb-6 bg-white/60 backdrop-blur-sm border-t border-slate-100 font-serif relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4 relative z-10 text-center">
        <div className="flex flex-col items-center group cursor-pointer scroll-animate opacity-0 translate-y-3 transition-all">
          <div className="relative p-2 rounded-full bg-white shadow-lg border border-slate-50 group-hover:scale-105 transition-all">
             <img src={LOGO_URL} alt="EBM Logo" className="h-10 md:h-12 w-auto object-contain relative z-10 mx-auto" />
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-[10px] font-bold uppercase tracking-[0.3em]">
            <a href={SOCIALS.youtube} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-red-600 transition-all transform hover:-translate-y-0.5">Youtube</a>
            <a href={SOCIALS.instagram} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-pink-600 transition-all transform hover:-translate-y-0.5">Instagram</a>
            <a href={SOCIALS.x} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 transition-all transform hover:-translate-y-0.5">X / Twitter</a>
            <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-600 transition-all transform hover:-translate-y-0.5">LinkedIn</a>
        </div>
        <div className="w-full h-[1px] bg-slate-200/50 max-w-sm" />
        <div className="w-full flex justify-center items-center px-4">
          <div className="bg-white/80 px-8 py-3 rounded-full border border-slate-100 shadow-sm transition-all hover:bg-white hover:shadow-md text-center group cursor-default">
            <p className="text-[#1A237E] text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] italic">
              © 2026 <span className="text-pink-600 group-hover:text-orange-500 transition-colors duration-500 not-italic">EXPRESS BY MANSI</span> — ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
    </div>
  </footer>
);

export default function App() {
  useScrollAnimation();
  return (
    <div className={`min-h-screen ${COLORS.bgMain} selection:bg-pink-100 selection:text-pink-600 font-sans antialiased overflow-x-hidden relative`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..900&family=Lora:ital,wght@0,400..700;1,400..700&display=swap');
        body { font-family: 'Crimson Pro', serif; }
        h1, h2, h3, h4, .font-serif { font-family: 'Lora', serif; }
        @keyframes float {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-33.33%); } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes header-down { from { transform: translateY(-100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .animate-header-down { animation: header-down 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .animate-float-slow { animation: float 15s ease-in-out infinite; }
        .animate-float-reverse { animation: float 18s ease-in-out infinite reverse; }
        .animate-pulse-slow { animation: pulse 12s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        html { scroll-behavior: smooth; }
        .scroll-animate { transition-property: opacity, transform; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #fcfcfc; }
        ::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 10px; border: 2px solid #fcfcfc; }
        ::-webkit-scrollbar-thumb:hover { background: #d1d5db; }
      `}</style>
      <BackgroundAnimation />
      <Nav />
      <Ticker />
      <Hero />
      <div className="bg-white/30 backdrop-blur-[1px] py-4 md:py-6 overflow-hidden border-y border-slate-100/50 relative z-10">
         <div className="flex justify-around items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700 px-6 text-center">
            <a href={SOCIALS.youtube} target="_blank" rel="noreferrer" className="flex items-center gap-2 group hover:opacity-100"><Youtube size={20} className="group-hover:text-red-500 md:w-6 md:h-6"/><span className="text-[10px] font-bold uppercase tracking-widest hidden md:inline font-serif">Youtube</span></a>
            <a href={SOCIALS.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-2 group hover:opacity-100"><Instagram size={20} className="group-hover:text-pink-500 md:w-6 md:h-6"/><span className="text-[10px] font-bold uppercase tracking-widest hidden md:inline font-serif">Instagram</span></a>
            <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 group hover:opacity-100"><Linkedin size={20} className="group-hover:text-blue-500 md:w-6 md:h-6"/><span className="text-[10px] font-bold uppercase tracking-widest hidden md:inline font-serif">LinkedIn</span></a>
            <a href={SOCIALS.x} target="_blank" rel="noreferrer" className="flex items-center gap-2 group hover:opacity-100"><Twitter size={20} className="group-hover:text-slate-900 md:w-6 md:h-6"/><span className="text-[10px] font-black uppercase tracking-widest hidden md:inline font-serif">X / Twitter</span></a>
            <div className="flex items-center gap-2 font-serif italic"><Globe size={20} className="md:w-6 md:h-6" /><span className="text-[10px] font-bold uppercase tracking-widest hidden md:inline">Global Vision</span></div>
         </div>
      </div>
      <div className="relative z-10">
        <About />
        <Topics />
        <Episodes />
        <section id="lifestyle" className="py-8 md:py-12 bg-white/30 font-serif italic border-b border-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
             <SectionHeading subtitle="Content Creator" title="Lifestyle & Vlogs" />
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {LIFESTYLE_IMAGES.map((src, i) => (
                  <div key={i} className={`aspect-[4/3] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white scroll-animate opacity-0 translate-y-10 group bg-white/50 relative ${i > 0 ? 'delay-'+(i*100) : ''}`}>
                     <img src={src} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0" alt={`Creator Lifestyle ${i+1}`} />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 md:p-8 text-center justify-center">
                        <span className="text-white font-bold text-xs uppercase tracking-widest not-italic">
                          {i === 0 ? "Web3 Awareness" : i === 1 ? "Creator Journey" : "Digital Expression"}
                        </span>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </section>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}