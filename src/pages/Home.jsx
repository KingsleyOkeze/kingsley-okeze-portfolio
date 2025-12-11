import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Twitter, Instagram, ExternalLink, Menu, X, Download, Calendar } from 'lucide-react';

export default function Portfolio() {
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
    "Langchain", "Docker", "Google Cloud Platform", "AWS", "Vercel", "REST APIs", "Redis"
  ];

  const experience = [
    {
      company: "Crea8Genius",
      role: "Team Lead",
      period: "March 2025 - August 2025",
      description: `Led a team of Designers, Frontend and Backend Engineers to architect and develop
                    enterprise-level applications for clients and customers. 

                    Some of the the key project we built and optimized includes: an ed-tech platform 
                    and a WhatsApp reminder system—improving feature delivery speed by 35% and boosting 
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
                    tasks—order tracking, inventory updates, customer management, and coupon control—cutting 
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
              Kingsley Okeze.
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

      {/* Hero Section */}
      <section id="intro" className={`min-h-screen flex items-center justify-center px-6 pt-20 ${
        isDarkMode ? 'bg-slate-900' : 'bg-white'
      }`}>
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <p className={`text-lg font-light animate-in fade-in-up delay-100 ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              I am a
            </p>
            <h1 className={`text-5xl md:text-7xl font-bold leading-tight animate-in fade-in-up delay-200 ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Certified.<br />
              <span className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>FullStack Developer</span>
            </h1>
            
            <div className="flex justify-center gap-6 pt-8">
              {[Github, Linkedin, Twitter, Mail].map((Icon, index) => (
                <a 
                  key={index}
                  // href="#" 
                  className={`transition-all duration-300 hover:scale-125 hover:-translate-y-1 animate-in fade-in-up delay-${300 + index * 100} ${
                    isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                  
                  href={
                    index === 0 ? "https://github.com/KingsleyOkeze" :
                    index === 1 ? "https://www.linkedin.com/in/kingsley-okeze-b4b825263/" :
                    index === 2 ? "https://x.com/KingsleyTheDev" :
                      "mailto:your_email_address@example.com" 
                  }
                  target="_blank" 
                  rel="noopener 
                  noreferrer"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
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
                I’m a Full-Stack & React Native Engineer who helps startups turn ideas into fast, 
                scalable, production-ready digital products. I’ve delivered 15+ apps and admin dashboards, 
                helping businesses cut manual operations by 50%, improve user experience, and ship features 
                faster. My focus is building high-performing mobile apps, MERN-stack platforms, and 
                intelligent, LLM-powered systems that deliver measurable business impact. I design clean, 
                intuitive interfaces, build reliable architectures, and ship solutions that scale 
                effortlessly. 
              </p>
              <p className={`leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                Whether it’s an MVP or a full platform, I turn ideas into products that feel polished 
                from day one, the kind users enjoy and founders trust. I don’t just write code; I 
                create solutions that eliminate friction, solve real problems, and move businesses forward.
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
              Here are some of my favorite projects I have built recently. Feel free to check them out.
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



// import hamburgerMenu from "../assets/Sort.png";
// import dmanAdmin1 from "../assets/dmanAdmin1.png";
// import dmanAdmin2 from "../assets/dmanAdmin2.png";
// import dmanAdmin3 from "../assets/dmanAdmin3.png";
// import dmanEcom1 from "../assets/dmanEcom1.png";
// import dmanEcom2 from "../assets/dmanEcom2.png";
// import dmanEcom3 from "../assets/dmanEcom3.png";
// import add from "../assets/add.png";
// import circle from "../assets/circle.png";
// import play from "../assets/play.png";
// import vector from "../assets/vector.png";
// import { useState, useEffect, useRef } from "react";
// import { 
//     FaGithub, 
//     FaTwitter, 
//     FaLinkedinIn, 
//     FaWhatsapp, 
//     FaCode, 
//     FaMobileAlt, 
//     FaRobot, 
//     FaExternalLinkAlt, 
//     FaAndroid, 
//     FaApple 
// } from "react-icons/fa";
// import IgweImage from "../assets/igwe.png";

// function Home() {
//     const date = new Date();
//     const year = date.getFullYear();

//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [currentSlides, setCurrentSlides] = useState({});
//     const intervalRefs = useRef({});

//     const [projects, setProjects] = useState([
//         {
//         image: [dmanAdmin1, dmanAdmin2, dmanAdmin3],
//         url: "https://dman-officials-admin-panel.vercel.app/admin/login",
//         //   githubUrl: "https://github.com/your-repo/admin-panel", // Uncomment if public; omit if private
//         //   androidUrl: "https://your-apk-or-play-store-link", // Include only for mobile apps
//         //   iosUrl: "https://your-app-store-link", // Include only for iOS apps
//         description: `
//             This is an Admin web app for an e-commerce brand, designed to give the store owner 
//             full control and visibility into their platform. The dashboard acts as the control 
//             center for the entire store. Whether it's updating an order's status or tracking 
//             customer behavior, this tool makes managing an e-commerce brand 10x easier. 
//             Built with: React, Node.js, MongoDB, and CSS.`,
//         },
//         {
//         image: [dmanEcom1, dmanEcom2, dmanEcom3],
//         url: "https://dman-officials-ecommerce-store.vercel.app",
//         //   githubUrl: "https://github.com/your-repo/ecom-store", // Uncomment if public; omit if private
//         //   androidUrl: "https://your-apk-or-play-store-link", // Include only for mobile apps
//         //   iosUrl: "https://your-app-store-link", // Include only for iOS apps
//         description: `
//             Developed a user-centric e-commerce platform with a clean, mobile-responsive 
//             UI to ensure a seamless and secure shopping experience. The application features a streamlined 
//             checkout, intuitive product discovery with advanced filtering, and a robust user authentication 
//             system. This project showcases my ability to build a high-performance front-end that drives 
//             customer engagement and loyalty.
//         `,
//         },
//     ]);

//     const handleDownload = () => {
//             const link = document.createElement("a");
//             link.href = "/Kingsley_Okeze_Resume.pdf";
//             link.download = "My_Resume.pdf";
//             link.click();
//     };

//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth >= 768) {
//                 setIsMenuOpen(false);
//             }
//         };
//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     useEffect(() => {
//         projects.forEach((_, projectIndex) => {
//             intervalRefs.current[projectIndex] = setInterval(() => {
//                 setCurrentSlides((prev) => {
//                 const currentSlide = prev[projectIndex] || 0;
//                 const nextSlide = (currentSlide + 1) % projects[projectIndex].image.length;
//                 return { ...prev, [projectIndex]: nextSlide };
//                 });
//             }, 3000);

//             return () => {
//                 if (intervalRefs.current[projectIndex]) {
//                 clearInterval(intervalRefs.current[projectIndex]);
//                 }
//             };
//         });
//     }, [projects]);

//     return (
//         <div className="text-white bg-19191B p-5 lg:p-10 bg-gradient-to-b from-[#0E0E1A] to-[#080812]">
//             <div className="flex justify-between align-middle relative">
//                 <h3 className="font-bold text-3xl">KO</h3>
//                 <ul
//                 className={`md:hidden fixed top-0 left-0 h-full w-64 bg-[#0E0E1A] z-50 transform ${
//                     isMenuOpen ? "translate-x-0" : "-translate-x-full"
//                 } transition-transform duration-300 ease-in-out flex flex-col space-y-6 p-6`}
//                 >
//                 <button onClick={() => setIsMenuOpen(false)} className="self-end text-white text-2xl">
//                     &times;
//                 </button>
//                 <a href="#" onClick={() => setIsMenuOpen(false)}>
//                     <li className="w-full text-center cursor-pointer text-lg">Home</li>
//                 </a>
//                 <a href="#services" onClick={() => setIsMenuOpen(false)}>
//                     <li className="w-full text-center cursor-pointer text-lg">Services</li>
//                 </a>
//                 <a href="#projects" onClick={() => setIsMenuOpen(false)}>
//                     <li className="w-full text-center cursor-pointer text-lg">Projects</li>
//                 </a>
//                 <a href="#about" onClick={() => setIsMenuOpen(false)}>
//                     <li className="w-full text-center cursor-pointer text-lg">About</li>
//                 </a>
//                 <a href="#contact" onClick={() => setIsMenuOpen(false)}>
//                     <li className="w-full text-center cursor-pointer text-lg">Contact</li>
//                 </a>
//                 </ul>
//                 <div className={`md:hidden ${isMenuOpen ? "fixed inset-0 bg-black bg-opacity-50 z-40" : "hidden"}`}></div>
//                 <ul className="hidden md:flex px-4 py-2 rounded-md space-x-6">
//                 <a href="#">
//                     <li className="w-24 text-center cursor-pointer">Home</li>
//                 </a>
//                 <a href="#services">
//                     <li className="w-24 text-center cursor-pointer">Services</li>
//                 </a>
//                 <a href="#projects">
//                     <li className="w-24 text-center cursor-pointer">Projects</li>
//                 </a>
//                 <a href="#about">
//                     <li className="w-24 text-center cursor-pointer">About</li>
//                 </a>
//                 </ul>
//                 <a href="#contact">
//                 <button className="hidden cursor-pointer sm:block py-1 px-5 border-2 rounded-sm">Contact</button>
//                 </a>
//                 <img
//                 src={hamburgerMenu}
//                 width={50}
//                 height={50}
//                 className="sm:hidden cursor-pointer transition-transform duration-200 hover:scale-110"
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 />
//             </div>
//             <div className="md:flex md:justify-between mt-10">
//                 <div className="flex flex-col justify-between mt-0 mb-20 md:mb-0 md:basis-[50%]">
//                 <p className="font-medium leading-normal w-10/12 md:w-9/12 mb-5 text-4xl sm:text-3xl md:text-4xl sm:w-6/12 sm:z-21">
//                     Creating Products That Truly Matter
//                 </p>
//                 <div className="flex flex-col justify-between gap-1 text-base w-11/12 md:w-11/12 pb-4 sm:w-9/12 h-90 sm:z-21 leading-normal">
//                     <p>
//                     I don't just write code, I create products that solve problems and delight users. Whether it's a sleek web
//                     app, a scalable mobile app solution, or the next big AI-powered idea, I bring vision to life with clean,
//                     reliable, and future-proof development.
//                     </p>
//                     <p>Want the full story? Grab my resume below, consider it the director’s cut 🎬.</p>
//                     <p>It’s packed with my experience, tech stack, and the kind of impact I can bring to you.</p>
//                     <button
//                     onClick={handleDownload}
//                     className="bg-blue-800 hover:bg-blue-600 w-40 h-10 sm:h-[40px] md:h-[40px] lg:h-[40px] px-2 rounded-lg cursor-pointer"
//                     >
//                     Download Resume
//                     </button>
//                 </div>
//                 </div>
//                 <div className="relative w-full h-120 md:h-130 mx-auto flex items-center justify-center my-25 sm:my-0 md:basis-[55%]">
//                 <div className="bg-transparent border-2 w-[75%] md:w-[75%] lg:w-[90%] h-[245px] md:h-[245px] lg:h-[300px] max-w-[430px] max-h-[300px] rotate-10 absolute left-5 md:left-5 lg:left-0 xl:left-10 sm:left-20 sm:w-80 sm:h-85 rounded-2xl"></div>
//                 <div className="bg-[#5454D4] w-[70%] md:w-[75%] lg:w-[90%] h-[245px] md:h-[245px] lg:h-[300px] max-w-[430px] max-h-[300px] absolute top-30 md:top-30 rotate-11 translate-y-15 -translate-x-0 z-10 sm:h-85 sm:top-10 sm:w-80 rounded-2xl"></div>
//                 <img
//                     src={IgweImage}
//                     className="z-20 absolute object-cover top-10 md:-top-1 lg:top-12 sm:-top-0 w-[85%] h-[78%] max-w-[430px] sm:w-[430px] md:w-[330px] lg:w-[430px]"
//                     alt="Main hero"
//                 />
//                 <img src={vector} width={50} height={50} alt="vector icon" className="absolute top-0 left-0 z-11" />
//                 <img src={circle} width={50} height={50} alt="circle icon" className="absolute top-0 right-0 z-11" />
//                 <img src={play} width={50} height={30} alt="play icon" className="absolute bottom-0 left-0 z-11" />
//                 <img src={add} width={50} height={50} alt="add icon" className="absolute bottom-6 right-0 z-11" />
//                 </div>
//             </div>
//             <div id="about" className="flex flex-col justify-between sm:flex-row sm:justify-between sm:my-20 mb-25">
//                 <h3 className="w-9/12 mb-7 font-medium text-3xl sm:w-4/12">Why Work With Me?</h3>
//                 <p className="w-12/12 sm:w-6/12 text-sm leading-normal sm:text-base">
//                 I combine technical expertise with a builder’s mindset. I don’t just deliver features, I deliver outcomes. My
//                 code is scalable, my designs are user-focused, and my approach is all about helping businesses grow. If you’re
//                 looking for someone who takes ownership, adapts fast, and loves turning ideas into polished products - that’s me.
//                 Shoot me a message and let’s build something amazing together.
//                 </p>
//             </div>
//             <div className="my-20">
//                 <div className="aspect-video w-full relative pb-20">
//                 <iframe
//                     src="https://www.youtube.com/embed/JjuN6canRnQ?si=196WCW89qj5zw1uc"
//                     title="YouTube video player"
//                     frameBorder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                     referrerPolicy="strict-origin-when-cross-origin"
//                     allowFullScreen
//                     className="absolute top-0 left-0 w-full h-full"
//                 ></iframe>
//                 </div>
//             </div>
//             <div id="services" className="relative font-medium text-3xl text-center sm:text-center sm:w-9/12 mx-auto">
//                 <p>My Specialties</p>
//                 <img className="sm:hidden absolute -top-5" src={play} width={40} height={50} alt="play image" />
//                 <img className="sm:hidden absolute -bottom-7 right-2 rotate-30" src={add} width={30} height={50} alt="add image" />
//             </div>
//             <div className="flex flex-wrap justify-center gap-6 sm:gap-8 my-10">
//                 <div className="basis-full sm:basis-[30%] p-6 rounded-lg shadow-lg text-center">
//                 <div className="flex justify-center mb-4">
//                     <div className="relative w-20 h-20 flex items-center justify-center">
//                     <span className="absolute inset-0 rounded-full bg-cyan-400 opacity-30 animate-ripple"></span>
//                     <span className="absolute inset-0 rounded-full bg-cyan-400 opacity-20 animate-ripple delay-200"></span>
//                     <span className="absolute inset-0 rounded-full bg-cyan-400 opacity-10 animate-ripple delay-400"></span>
//                     <div className="relative z-10 w-20 h-20 flex items-center justify-center rounded-full bg-cyan-100/30 shadow-lg">
//                         <FaCode className="text-cyan-400 text-4xl drop-shadow" />
//                     </div>
//                     </div>
//                 </div>
//                 <h2 className="font-medium text-2xl mt-7 mb-2">Web Development</h2>
//                 <p className="text-sm leading-normal sm:text-base">
//                     From pixel-perfect frontends to scalable backends, I build web applications that don’t just look good, they
//                     perform flawlessly. Clean, maintainable, and optimized for growth.
//                 </p>
//                 </div>
//                 <div className="basis-full sm:basis-[30%] p-6 rounded-lg shadow-lg text-center">
//                 <div className="flex justify-center mb-4">
//                     <div className="relative w-20 h-20 flex items-center justify-center">
//                     <span className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ripple"></span>
//                     <span className="absolute inset-0 rounded-full bg-green-400 opacity-20 animate-ripple delay-200"></span>
//                     <span className="absolute inset-0 rounded-full bg-green-400 opacity-10 animate-ripple delay-400"></span>
//                     <div className="relative z-10 w-20 h-20 flex items-center justify-center rounded-full bg-green-100/30 shadow-lg">
//                         <FaMobileAlt className="text-green-400 text-4xl drop-shadow" />
//                     </div>
//                     </div>
//                 </div>
//                 <h2 className="font-medium text-2xl mt-7 mb-2">Mobile App Development</h2>
//                 <p className="text-sm leading-normal sm:text-base">
//                     Mobile is where your users live. I craft responsive, intuitive apps that work seamlessly across devices,
//                     ensuring your brand is always in their hands.
//                 </p>
//                 </div>
//                 <div className="basis-full sm:basis-[30%] p-6 rounded-lg shadow-lg text-center">
//                 <div className="flex justify-center mb-4">
//                     <div className="relative w-20 h-20 flex items-center justify-center">
//                     <span className="absolute inset-0 rounded-full bg-pink-400 opacity-30 animate-ripple"></span>
//                     <span className="absolute inset-0 rounded-full bg-pink-400 opacity-20 animate-ripple delay-200"></span>
//                     <span className="absolute inset-0 rounded-full bg-pink-400 opacity-10 animate-ripple delay-400"></span>
//                     <div className="relative z-10 w-20 h-20 flex items-center justify-center rounded-full bg-pink-100/30 shadow-lg">
//                         <FaRobot className="text-pink-400 text-4xl drop-shadow" />
//                     </div>
//                     </div>
//                 </div>
//                 <h2 className="font-medium text-2xl mt-7 mb-2">LLM Apps Development</h2>
//                 <p className="text-sm leading-normal sm:text-base">
//                     AI isn’t the future, it’s here. I develop AI-powered apps that integrate large language models into real
//                     products, helping businesses automate, scale, and innovate faster than ever.
//                 </p>
//                 </div>
//             </div>
//             <div>
//                 <h2 id="projects" className="text-center font-medium text-3xl">Awesome Portfolio</h2>
//                 <div className="sm:w-11/12 mx-auto my-10 grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-6">
//                 {projects.map((project, projectIndex) => {
//                     const currentSlide = currentSlides[projectIndex] || 0;

//                     const handleMouseEnter = () => {
//                     if (intervalRefs.current[projectIndex]) {
//                         clearInterval(intervalRefs.current[projectIndex]);
//                     }
//                     };
//                     const handleMouseLeave = () => {
//                     intervalRefs.current[projectIndex] = setInterval(() => {
//                         setCurrentSlides((prev) => {
//                         const currentSlide = prev[projectIndex] || 0;
//                         const nextSlide = (currentSlide + 1) % project.image.length;
//                         return { ...prev, [projectIndex]: nextSlide };
//                         });
//                     }, 3000);
//                     };

//                     return (
//                     <div
//                         key={projectIndex}
//                         className="bg-white/15 p-4 rounded-lg min-h-[378px] sm:min-h-[378px] flex flex-col justify-between transition-all duration-200 hover:scale-105"
//                         onMouseEnter={handleMouseEnter}
//                         onMouseLeave={handleMouseLeave}
//                     >
//                         <div className="relative overflow-hidden w-full max-h-[245px]">
//                         <div
//                             className="flex transition-transform duration-500 ease-in-out"
//                             style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//                         >
//                             {project.image.map((img, imgIndex) => (
//                             <img
//                                 key={imgIndex}
//                                 src={img}
//                                 className="w-full h-full object-cover rounded-md"
//                                 alt={`Project UI ${imgIndex + 1}`}
//                             />
//                             ))}
//                         </div>
//                         </div>
//                         <p className="text-sm leading-normal sm:text-base min-h-[120px] sm:min-h-[180px] break-words pt-4">
//                         {project.description}
//                         </p>
//                         <div className="flex justify-center space-x-4 mt-4">
//                         {project.url && (
//                             <div className="relative group">
//                             <a
//                                 href={project.url}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-blue-500 hover:text-blue-400 transition-all duration-200 transform hover:scale-110"
//                                 aria-label="View live project"
//                             >
//                                 <FaExternalLinkAlt className="text-xl" />
//                             </a>
//                             <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2">
//                                 View Live
//                             </span>
//                             </div>
//                         )}
//                         {project.githubUrl && (
//                             <div className="relative group">
//                             <a
//                                 href={project.githubUrl}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-gray-900 hover:text-gray-500 transition-all duration-200 transform hover:scale-110"
//                                 aria-label="View source code on GitHub"
//                             >
//                                 <FaGithub className="text-xl" />
//                             </a>
//                             <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2">
//                                 View Code
//                             </span>
//                             </div>
//                         )}
//                         {project.androidUrl && (
//                             <div className="relative group">
//                             <a
//                                 href={project.androidUrl}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-[#3DDC84] hover:text-[#2AB672] transition-all duration-200 transform hover:scale-110"
//                                 aria-label="Download Android app"
//                             >
//                                 <FaAndroid className="text-xl w-6 h-6" />
//                             </a>
//                             <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2">
//                                 Android App
//                             </span>
//                             </div>
//                         )}
//                         {project.iosUrl && (
//                             <div className="relative group">
//                             <a
//                                 href={project.iosUrl}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-[#A2AAAD] hover:text-[#F5F5F5] transition-all duration-200 transform hover:scale-110"
//                                 aria-label="Visit iOS App Store"
//                             >
//                                 <FaApple className="text-xl" />
//                             </a>
//                             <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2">
//                                 iOS App
//                             </span>
//                             </div>
//                         )}
//                         </div>
//                     </div>
//                     );
//                 })}
//                 </div>
//             </div>
//             <div id="contact" className="bg-white/15 h-60 grid place-items-center sm:w-80 mx-auto rounded-3xl my-15">
//                 <div className="flex flex-col h-47 justify-between text-center">
//                 <h2 className="font-medium text-2xl">Let’s Build Something Amazing</h2>
//                 <p className="font-medium">okezekingsley3@gmail.com</p>
//                 <p>+234 9026627307</p>
//                 <div className="flex flex-row justify-between w-35 mx-auto">
//                     <a href="https://www.linkedin.com/in/kingsley-okeze-b4b825263/" target="_blank" rel="noopener noreferrer">
//                     <FaLinkedinIn className="text-xl cursor-pointer" />
//                     </a>
//                     <a href="https://github.com/KingsleyOkeze" target="_blank" rel="noopener noreferrer">
//                     <FaGithub className="text-xl cursor-pointer" />
//                     </a>
//                     <a href="https://x.com/KingsleyTheDev" target="_blank" rel="noopener noreferrer">
//                     <FaTwitter className="text-xl cursor-pointer" />
//                     </a>
//                     <a href="https://wa.me/2349026627307" target="_blank" rel="noopener noreferrer">
//                     <FaWhatsapp className="text-xl cursor-pointer" />
//                     </a>
//                 </div>
//                 </div>
//             </div>
//             <footer className="h-15 text-center flex flex-col justify-between mt-20 mb-10">
//                 &copy; {year} <p>All rights reserved</p>
//             </footer>
//         </div>
//     );
// }

// export default Home;