import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Twitter, Instagram, ExternalLink, Menu, X, Download, Calendar, ArrowDown } from 'lucide-react';

function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set(['intro']));
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode
  
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.dataset.section]));
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -100px 0px' }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

   const handleDownload = () => {
      const link = document.createElement("a");
      link.href = "/Kingsley_Okeze_Resume.pdf";
      link.download = "My_Resume.pdf";
      link.click();
    };

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      company: "DMAN OFFICIALS",
      category: "E-Commerce",
      image: "https://res.cloudinary.com/dvgqi0ajq/image/upload/v1765382897/xyrzx7f6s5r9nwauxmpx.png",
      description: `Developed a full-stack, 𝘂𝘀𝗲𝗿-𝗰𝗲𝗻𝘁𝗿𝗶𝗰 𝗲-𝗰𝗼𝗺𝗺𝗲𝗿𝗰𝗲 𝗽𝗹𝗮𝘁𝗳𝗼𝗿𝗺 for a growing online 
                    brand, focusing on creating a 𝘀𝗲𝗮𝗺𝗹𝗲𝘀𝘀, 𝘀𝗲𝗰𝘂𝗿𝗲, 𝗮𝗻𝗱 𝗺𝗼𝗯𝗶𝗹𝗲-𝗿𝗲𝘀𝗽𝗼𝗻𝘀𝗶𝘃𝗲 𝘀𝗵𝗼𝗽𝗽𝗶𝗻𝗴 
                    𝗲𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗲. The platform was built to be fast, intuitive, and frictionless across 
                    all devices. Which led to an estimated 25% boosted in orders completion, 
                    giving the brand a smoother, higher-converting shopping experience.`,
      features: ["Seamless Product Discovery", "Payment Gateway Integration", "Real-time Order Tracking", "Personalized Experience"],
      tech: ["React.js", "Node.js", "MongoDB", "Paystack API", "Redis"],
      link: "https://dman-officials-ecommerce-store.vercel.app/"
    },
    {
      id: 2,
      title: "E-Commerce Admin Dashboard",
      company: "DMAN OFFICIALS",
      category: "E-Commerce",
      image: "https://res.cloudinary.com/dvgqi0ajq/image/upload/v1765455702/qrhs8d5ak7hwdxrmz4pe.png",
      description: `
                    Developed a full-stack admin panel for a growing online brand, giving the store owner 
                    𝗰𝗼𝗺𝗽𝗹𝗲𝘁𝗲 𝗰𝗼𝗻𝘁𝗿𝗼𝗹 𝗼𝘃𝗲𝗿 𝗼𝗽𝗲𝗿𝗮𝘁𝗶𝗼𝗻𝘀. Focused on a 𝗵𝗶𝗴𝗵-𝗽𝗲𝗿𝗳𝗼𝗿𝗺𝗮𝗻𝗰𝗲, 𝗶𝗻𝘁𝘂𝗶𝘁𝗶𝘃𝗲 𝗽𝗹𝗮𝘁𝗳𝗼𝗿𝗺 that 
                    streamlines workflows and boosts efficiency. Built the internal admin 
                    dashboard powering product management, real-time order tracking, inventory oversight, 
                    and automated status updates; cutting manual workload by 40% and improving processing 
                    speed 3×. The dashboard quickly became the operational backbone, enabling faster decisions 
                    and smoother fulfilment.
                  `,
      features: ["Order & Inventory Management", "Product & Catalog Management", "Customer Relation Management", "Performance & Usability"],
      tech: ["React.js", "Node.js", "MongoDB", "Redis" ],
      link: "https://dman-officials-admin-panel.vercel.app/admin"
    },
    // {
    //   id: 3,
    //   title: "Financial Analytics Dashboard",
    //   company: "FinanceHub",
    //   category: "Fintech",
    //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    //   description: "A powerful analytics platform for financial professionals. Provides real-time market data, portfolio tracking, and predictive insights to help users make informed investment decisions.",
    //   features: ["Real-time Market Data", "Portfolio Tracking", "Predictive Analytics", "Custom Reports"],
    //   tech: ["Next.js", "D3.js", "PostgreSQL", "REST APIs", "Tailwind CSS"],
    //   link: "#"
    // },
    // {
    //   id: 4,
    //   title: "Social Network App",
    //   company: "ConnectHub",
    //   category: "Mobile Development",
    //   image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    //   description: "A modern social networking platform built for communities. Features real-time messaging, content sharing, and community building tools with a focus on user engagement.",
    //   features: ["Real-time Messaging", "Media Sharing", "User Profiles", "Community Groups"],
    //   tech: ["React Native", "Firebase", "Redux", "Node.js", "Socket.io"],
    //   link: "#"
    // }
  ];

  const skills = [
    "JavaScript", "React.js", "React Native", "TypeScript", "Node.js", "Express.js",
    "MongoDB", "PostgreSQL", "Firebase", "Git & GitHub", "Tailwind CSS", "Python",
    "Langchain", "Docker", "Google Cloud Platform", "Superbase", "Vercel", "REST APIs", "Redis"
  ];

  const experience = [
    {
      company: "Crea8Genius",
      role: "Team Lead",
      period: "March 2025 - August 2025",
      description: `Led a team of Designers, Frontend and Backend Engineers to architect and develop
                    enterprise-level applications for clients and customers. 

                    Some of the the key project we built and optimized includes: an ed-tech platform 
                    and a WhatsApp reminder system; improving feature delivery speed by 35% and boosting 
                    user engagement by 30%. My work strengthened platform reliability, streamlined 
                    internal workflows, and helped the team scale products faster with fewer operational 
                    bottlenecks.
                    
                    `
    },
    {
      company: "DMAN OFFICIALS",
      role: "Full Stack Engineer",
      period: "October 2024 - February 2025",
      description: `
                    Contracted as a Full-Stack Developer for Dman Officials, a fashion brand that formerly operated fully offline, 
                    I built their first online shopping platform, delivering a fast, secure, mobile-optimized 
                    experience that increased order completion by 25% and gave customers a seamless way to 
                    browse and buy. I then engineered a full admin system that automated previously manual 
                    tasks: order tracking, inventory updates, customer management, and coupon control, cutting 
                    operational workload by 50% and eliminating errors that slowed the business down.
                    My work didn’t just put the brand online; it modernized their entire sales pipeline, 
                    improved efficiency, and positioned them to scale with a fully digital commerce workflow.
                  `
    },
    {
      company: "Ferify",
      role: "Chief Product Engineer",
      period: "September 2025 - Present",
      description: `
                    Built an app that helps everyday commuters in Nigerian cities know the real-time estimated fares 
                    between two routes so they don’t avoid feeling overcharged or cheated, especially in areas they don’t 
                    know. On top of that, it breaks down each route, showing bus stops, landmarks, and directions, plus real-time 
                    price estimates for every leg. The app processes over 1,000 submissions daily, improving fare 
                    accuracy by 85% across 100+ routes, making travel easier, more transparent, and helping even 
                    non-tech users plan their movement confidently.
                  `
    }
  ];

  const isVisible = (section) => visibleSections.has(section);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-slate-900' : 'bg-slate-50'}`}>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-in {
          animation-fill-mode: both;
        }

        .fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }

        .fade-in-left {
          animation: fadeInLeft 0.6s ease-out;
        }

        .fade-in-right {
          animation: fadeInRight 0.6s ease-out;
        }

        .scale-in {
          animation: scaleIn 0.5s ease-out;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }

        .invisible-initial {
          opacity: 0;
        }



        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrollY > 50 
          ? isDarkMode 
            ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg shadow-slate-950/50' 
            : 'bg-white shadow-md'
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#home" className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
              isDarkMode ? 'text-white hover:text-slate-300' : 'text-slate-900 hover:text-slate-700'
            }`}>
              KO.
            </a>
            
            <div className="hidden md:flex items-center space-x-1">
              {['Intro', 'About', 'Works', 'Contact'].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`px-4 py-2 transition-all duration-300 font-medium relative group ${
                    isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  {item}
                  <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 group-hover:w-full group-hover:left-0 transition-all duration-300 ${
                    isDarkMode ? 'bg-white' : 'bg-slate-900'
                  }`}></span>
                </a>
              ))}
              
              {/* Dark Mode Toggle */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`ml-4 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-slate-800 text-white hover:bg-slate-700' 
                    : 'bg-slate-200 text-slate-900 hover:bg-slate-300'
                }`}
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
            </div>

            <button
              className={`md:hidden transition-transform duration-300 hover:scale-110 ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className={`md:hidden border-t ${
            isDarkMode ? 'bg-slate-900/95 border-slate-800' : 'bg-white'
          }`}>
            <div className="px-6 py-4 space-y-2">
              {['Intro', 'About', 'Works', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`block px-4 py-2 rounded transition-colors duration-300 ${
                    isDarkMode 
                      ? 'text-slate-300 hover:bg-slate-800' 
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`w-full px-4 py-2 rounded transition-all duration-300 text-left ${
                  isDarkMode 
                    ? 'bg-slate-800 text-white hover:bg-slate-700' 
                    : 'bg-slate-200 text-slate-900 hover:bg-slate-300'
                }`}
              >
                {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - REDESIGNED */}
<section id="intro" className={`relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden ${
  isDarkMode ? 'bg-slate-900' : 'bg-white'
}`}>
  {/* Animated Background */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div 
      className={`absolute w-96 h-96 rounded-full blur-3xl opacity-20 ${
        isDarkMode ? 'bg-blue-500' : 'bg-blue-300'
      }`}
      style={{ 
        top: '10%', 
        left: '10%',
        animation: 'float 3s ease-in-out infinite',
        animationDelay: '0s'
      }}
    ></div>
    <div 
      className={`absolute w-80 h-80 rounded-full blur-3xl opacity-20 ${
        isDarkMode ? 'bg-purple-500' : 'bg-purple-300'
      }`}
      style={{ 
        bottom: '10%', 
        right: '10%',
        animation: 'float 3s ease-in-out infinite',
        animationDelay: '1s'
      }}
    ></div>
  </div>

  <div className="max-w-6xl mx-auto w-full relative z-10">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Left side - Text content */}
      <div className="space-y-8">
        <div className="space-y-4">
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium opacity-0 ${
            isDarkMode ? 'bg-slate-800 text-slate-300 border border-slate-700' : 'bg-slate-100 text-slate-700 border border-slate-200'
          }`} style={{ animation: 'slideUp 0.8s ease-out 0.1s forwards' }}>
            👋 Available for new projects
          </span>
          
          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight opacity-0 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`} style={{ animation: 'slideUp 0.8s ease-out 0.2s forwards' }}>
            Crafting Digital<br />
            <span className={isDarkMode ? 'text-blue-400' : 'text-blue-600'}>Experiences</span>
          </h1>
        </div>

        <p className={`text-lg md:text-xl leading-relaxed opacity-0 ${
          isDarkMode ? 'text-slate-400' : 'text-slate-600'
        }`} style={{ animation: 'slideUp 0.8s ease-out 0.3s forwards' }}>
          Full-Stack Engineer specializing in building scalable web & mobile applications 
          that solve real problems and deliver measurable results.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 opacity-0" style={{ animation: 'slideUp 0.8s ease-out 0.4s forwards' }}>
          <a href="#works" className={`group px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center gap-2 ${
            isDarkMode ? 'bg-white text-slate-900 hover:bg-slate-100' : 'bg-slate-900 text-white hover:bg-slate-800'
          }`}>
            View My Work
            <ArrowDown className="group-hover:translate-y-1 transition-transform duration-300" size={18} />
          </a>
          
          <a href="#contact" className={`px-8 py-4 rounded-lg font-semibold border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
            isDarkMode ? 'border-slate-700 text-white hover:bg-slate-800' : 'border-slate-300 text-slate-900 hover:bg-slate-50'
          }`}>
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 pt-4 opacity-0" style={{ animation: 'slideUp 0.8s ease-out 0.5s forwards' }}>
          {[
            { Icon: Github, url: "https://github.com/KingsleyOkeze" },
            { Icon: Linkedin, url: "https://www.linkedin.com/in/kingsley-okeze-b4b825263/" },
            { Icon: Twitter, url: "https://x.com/KingsleyTheDev" },
            { Icon: Mail, url: "mailto:kingsleyokeze3@gmail.com" }
          ].map(({ Icon, url }, index) => (
            <a 
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                isDarkMode ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>

      {/* Right side - Visual element */}
      <div className="relative hidden md:block opacity-0" style={{ animation: 'scaleIn 0.5s ease-out 0.6s forwards' }}>
        <div className="relative">
          <div className={`relative rounded-2xl overflow-hidden shadow-2xl ${
            isDarkMode ? 'shadow-slate-950/50' : 'shadow-slate-900/20'
          }`}>
            <img
              src="https://res.cloudinary.com/dvgqi0ajq/image/upload/v1765056552/rgh0bdj7vi53llrse8oi.jpg"
              alt="Profile"
              className="w-full h-[500px] object-cover"
            />
            
            <div className={`absolute inset-0 ${
              isDarkMode ? 'bg-gradient-to-t from-slate-900 via-transparent to-transparent' : 'bg-gradient-to-t from-white via-transparent to-transparent'
            }`}></div>
          </div>

          {/* Floating badges */}
          <div className={`absolute -top-6 -left-6 px-6 py-3 rounded-xl shadow-lg backdrop-blur-sm opacity-0 ${
            isDarkMode ? 'bg-slate-800/90 border border-slate-700' : 'bg-white/90 border border-slate-200'
          }`} style={{ animation: 'slideUp 0.8s ease-out 0.7s forwards' }}>
            <p className={`text-sm font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              🚀 15+ Projects Delivered
            </p>
          </div>

          <div className={`absolute -bottom-6 -right-6 px-6 py-3 rounded-xl shadow-lg backdrop-blur-sm opacity-0 ${
            isDarkMode ? 'bg-slate-800/90 border border-slate-700' : 'bg-white/90 border border-slate-200'
          }`} style={{ animation: 'slideUp 0.8s ease-out 0.8s forwards' }}>
            <p className={`text-sm font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              ⚡ 50% Faster Workflows
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Scroll indicator */}
  <a href="#about" className={`absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 z-50 ${
    isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
  } transition-colors duration-300`} style={{ animation: 'slideUp 0.8s ease-out 0.7s forwards' }}>
    <div className="flex flex-col items-center gap-2">
      <span className="text-sm font-medium">Scroll to explore</span>
      <ArrowDown className="animate-bounce" size={20} />
    </div>
  </a>
</section>

      {/* About Section */}
      <section 
        id="about" 
        className={`py-20 px-6 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'}`}
        ref={(el) => sectionRefs.current['about'] = el}
        data-section="about"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className={`${isVisible('about') ? 'animate-in fade-in-left' : 'invisible-initial'}`}>
              <img
                src="https://res.cloudinary.com/dvgqi0ajq/image/upload/v1765056552/rgh0bdj7vi53llrse8oi.jpg"
                alt="Profile"
                className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-500"
              />
            </div>
            
            <div className={`space-y-6 ${isVisible('about') ? 'animate-in fade-in-right' : 'invisible-initial'}`}>
              <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>About</h2>
              <p className={`leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                I’m Kingsley Okeze, a Full-Stack & React Native Engineer who helps startups turn ideas into fast, 
                scalable, production-ready digital products. I’ve delivered 15+ apps and admin dashboards, 
                helping businesses cut manual operations by 50%, improve user experience, and ship features 
                faster. My focus is building high-performing applications, MERN-stack platforms, and 
                intelligent AI-powered systems that deliver measurable business impact. I design clean, 
                intuitive interfaces, build reliable architectures, and ship solutions that scale 
                effortlessly. 
              </p>
              <p className={`leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                Whether it’s an MVP or a full platform, I turn ideas into products that feel polished 
                from day one, the kind users enjoy and founders trust. I don’t just write code; I 
                create solutions that eliminate friction, solve real problems, and move businesses forward.
                Book a call and let’s explore how I can help.
              </p>

              <div className="flex gap-4 pt-4">
                <a href="https://calendly.com/okezekingsley3/new-meeting" target="_blank">
                    <button className={`px-6 py-3 rounded transition-all duration-300 inline-flex items-center gap-2 hover:shadow-lg hover:-translate-y-1 ${
                    isDarkMode 
                        ? 'bg-white text-slate-900 hover:bg-slate-100' 
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}>
                        
                        <Calendar size={18} />
                        Book a call
                    </button>
                </a>
                <button className={`px-6 py-3 border-2 rounded transition-all duration-300 inline-flex items-center gap-2 hover:shadow-lg hover:-translate-y-1 ${
                  isDarkMode 
                    ? 'border-white text-white hover:bg-white hover:text-slate-900' 
                    : 'border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'
                }`}
                 onClick={handleDownload}
                >
                  <Download size={18} />
                  Download CV
                </button>
              </div>

              <div className="pt-8">
                <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Expertise</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm border transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${
                        isDarkMode 
                          ? 'bg-slate-700 text-slate-200 border-slate-600 hover:border-slate-400' 
                          : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section 
        className={`py-20 px-6 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}
        ref={(el) => sectionRefs.current['experience'] = el}
        data-section="experience"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 ${
            isVisible('experience') ? 'animate-in fade-in-up' : 'invisible-initial'
          } ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Experience
          </h2>
          
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div 
                key={index} 
                className={`border-l-2 pl-8 relative transition-colors duration-300 ${
                  isVisible('experience') ? `animate-in fade-in-left delay-${(index + 1) * 100}` : 'invisible-initial'
                } ${
                  isDarkMode 
                    ? 'border-slate-700 hover:border-slate-500' 
                    : 'border-slate-200 hover:border-slate-400'
                }`}
              >
                <div className={`absolute -left-2 top-0 w-4 h-4 rounded-full transition-transform duration-300 hover:scale-150 ${
                  isDarkMode ? 'bg-white' : 'bg-slate-900'
                }`}></div>
                <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{exp.company}</h3>
                <p className={`text-lg font-medium mb-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>{exp.role}</p>
                <p className={`text-sm mb-4 ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>{exp.period}</p>
                <p className={`leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-700'}`}>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section 
        id="works" 
        className={`py-20 px-6 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'}`}
        ref={(el) => sectionRefs.current['works'] = el}
        data-section="works"
      >
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 ${isVisible('works') ? 'animate-in fade-in-up' : 'invisible-initial'}`}>
            <h2 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Recent Works</h2>
            <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Here are some of my favorite projects I have built. Feel free to check them out.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setActiveModal(project)}
                className={`rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer group hover:-translate-y-2 ${
                  isVisible('works') ? `animate-in scale-in delay-${(index + 1) * 100}` : 'invisible-initial'
                } ${isDarkMode ? 'bg-slate-700' : 'bg-white'}`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 transition-colors duration-300 ${
                    isDarkMode ? 'bg-slate-900/0 group-hover:bg-slate-900/20' : 'bg-slate-900/0 group-hover:bg-slate-900/10'
                  }`}></div>
                </div>
                <div className="p-6">
                  <p className={`text-sm mb-2 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{project.company}</p>
                  <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                    isDarkMode 
                      ? 'text-white group-hover:text-slate-300' 
                      : 'text-slate-900 group-hover:text-slate-600'
                  }`}>{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className={`py-20 px-6 ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}
        ref={(el) => sectionRefs.current['contact'] = el}
        data-section="contact"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl font-bold mb-4 ${
            isVisible('contact') ? 'animate-in fade-in-up delay-100' : 'invisible-initial'
          } ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Get In Touch
          </h2>
          <p className={`text-lg mb-12 ${
            isVisible('contact') ? 'animate-in fade-in-up delay-200' : 'invisible-initial'
          } ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            I love to hear from you. Whether you have a question or want to collaborate, 
            <strong> shoot me a message</strong>.
          </p>

          <div className={`grid md:grid-cols-2 gap-12 text-left mb-12 ${
            isVisible('contact') ? 'animate-in fade-in-up delay-300' : 'invisible-initial'
          }`}>
            <div>
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Reach me at</h3>
              <a href="mailto:your.email@example.com" className={`text-lg transition-colors duration-300 ${
                isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}>
                kingsleyokeze3@gmail.com
              </a>
            </div>
            
            <div>
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Social</h3>
              <div className="space-y-2">
                {['LinkedIn', 'GitHub', 'Twitter'].map((social, index) => (
                  <a 
                    key={social}
                    href={
                      index === 0 ? "https://www.linkedin.com/in/kingsley-okeze-b4b825263/" :
                      index === 1 ? "https://github.com/KingsleyOkeze" :
                          "https://x.com/KingsleyTheDev" 
                    }
                    target="_blank" 
                    rel="noopener 
                    noreferrer"
                    className={`block transition-all duration-300 hover:translate-x-2 ${
                      isDarkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a
            href="mailto:your.email@example.com"
            className={`inline-block px-8 py-4 rounded text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
              isVisible('contact') ? 'animate-in scale-in delay-400' : 'invisible-initial'
            } ${
              isDarkMode 
                ? 'bg-white text-slate-900 hover:bg-slate-100' 
                : 'bg-slate-900 text-white hover:bg-slate-800'
            }`}
          >
            Say Hello.
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p 
            className="text-slate-400"
          >
            © Copyright Kingsley Okeze. Made to demonstrate my approach: practical, thoughtful, and result driven.
          </p>
        </div>
      </footer>

      {/* Project Modal */}
      {activeModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-in fade-in-up" onClick={() => setActiveModal(null)}>
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-in scale-in" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-slate-100 transition-all duration-300 z-10 hover:rotate-90 hover:scale-110"
              >
                <X size={24} className="text-slate-900" />
              </button>
              <img
                src={activeModal.image}
                alt={activeModal.title}
                className="w-full h-96 object-cover"
              />
            </div>
            
            <div className="p-8 space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">{activeModal.title}</h3>
                <p className="text-slate-600">{activeModal.company}</p>
              </div>

              <p className="text-slate-700 leading-relaxed">{activeModal.description}</p>

              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {activeModal.features.map((feature, index) => (
                    <li key={index} className="text-slate-700 flex items-start hover:translate-x-2 transition-transform duration-300">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {activeModal.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm hover:bg-slate-200 transition-all duration-300 hover:-translate-y-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={activeModal.link}
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded hover:bg-slate-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                View Project <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}




export default Portfolio;