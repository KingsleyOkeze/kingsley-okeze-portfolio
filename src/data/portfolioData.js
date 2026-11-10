import soveremaPreview from '../assets/soveremaPreview.jpg';
import ferifyHomeScreen from '../assets/ferifyHomeScreen.jpg';
import ferifyBadgeScreen from '../assets/ferifyBadgeScreen.jpg';
import ferifyProfileScreen from '../assets/ferifyProfileScreen.jpg';
import dmanEcom1 from '../assets/dmanEcom1.png';
import dmanEcom2 from '../assets/dmanEcom2.png';
import dmanEcom3 from '../assets/dmanEcom3.png';
import dmanAdmin1 from '../assets/dmanAdmin1.png';
import dmanAdmin2 from '../assets/dmanAdmin2.png';
import dmanAdmin3 from '../assets/dmanAdmin3.png';
import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

export const socialLinks = [
    { label: 'Github', url: 'https://github.com/KingsleyOkeze', Icon: Github },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/kingsley-okeze-b4b825263/', Icon: Linkedin },
    { label: 'WhatsApp', url: 'https://wa.me/2349026627307?text=Hi%20Kingsley%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect.', Icon: MessageCircle },
    { label: 'Email', url: 'mailto:kingsleyokeze3@gmail.com', Icon: Mail }
];

export const projects = [
    {
        id: 'soverema',
        title: 'Soverema',
        company: 'Soverema',
        category: 'AI & Computer Vision',
        type: 'web',
        image: soveremaPreview,
        gallery: [soveremaPreview],
        videoUrl: 'https://res.cloudinary.com/dvgqi0ajq/video/upload/f_auto,q_auto/v1794248983/d0hs6t0ugbonwpaks1ad.mp4',
        githubUrl: null,
        link: 'https://soverema.com',
        architecture: 'CCTV Live Video Streams → Real-Time Computer Vision & Edge AI Models → Node.js / Express Backend & WebSockets → Push Alert Pipeline',
        description: 'Soverema is an AI-powered retail loss prevention and surveillance intelligence platform designed to help commercial retailers detect theft as it happens. Built to turn passive CCTV streams into proactive security alerts, the system integrates with existing store camera infrastructure to identify suspicious concealment behavior, dispatch automated real-time alerts to on-floor security personnel in under 2 seconds, and eliminate manual video monitoring overhead without requiring costly specialized hardware.',
        features: [
            'Real-Time CCTV Stream Ingestion & Multi-Camera Analysis',
            'Intelligent Shoplifting & Concealment Detection Engine',
            'Sub-2-Second Instant Security Notification Pipeline',
            'Hardware-Agnostic Architecture (Runs on Standard Store Infrastructure)',
            'Centralized Store Surveillance & Incident Review Dashboard'
        ],
        tech: ['Python', 'OpenCV', 'PyTorch', 'Node.js', 'Express.js', 'WebSockets', 'MongoDB', 'Docker', 'React.js'],
        metrics: 'Flags 90% suspicious events · Sub-2s security alert dispatch · 70% faster theft response'
    },
    {
        id: 'ferify',
        title: 'Ferify',
        company: 'Ferify',
        category: 'Transit & Mobile',
        type: 'app',
        image: ferifyHomeScreen,
        gallery: [ferifyHomeScreen, ferifyBadgeScreen, ferifyProfileScreen],
        videos: [
            { label: 'Full Walkthrough (4m)', url: 'https://res.cloudinary.com/dvgqi0ajq/video/upload/f_auto,q_auto/v1794233131/wxhnnuqbutq0fbpsupfr.mp4' },
            { label: 'Voice Search Demo', url: 'https://res.cloudinary.com/dvgqi0ajq/video/upload/f_auto,q_auto/v1794232741/suihfse41xj2lvylfet8.mp4' },
            { label: 'Onboarding Flow', url: 'https://res.cloudinary.com/dvgqi0ajq/video/upload/f_auto,q_auto/v1794232694/kxjramznzjqctjp5ggnh.mp4' }
        ],
        githubUrl: 'https://github.com/KingsleyOkeze/ferify-mobile-app',
        backendGithubUrl: 'https://github.com/KingsleyOkeze/ferify-mobile-app-backend-microservices',
        architecture: 'React Native (Expo) Client → Node.js / Express Microservices → Socket.io & Redis Pub/Sub → MongoDB & Google Cloud Platform',
        description: `Ferify is a high-performance, community-driven transit platform designed to democratize transport data. The system empowers users to contribute, verify, and access real-time fare information and optimized routing through a seamless, gamified mobile experience. Built on a cutting-edge microservices architecture, Ferify ensures data integrity and scalability, handling real-time synchronization between thousands of users and transit data points.`,
        features: [
            'Real-Time Community Fare Verification (Socket.io)',
            'Scalable Microservices (Node.js/Express)',
            'Gamified User Engagement & Rewards Engine',
            'React Native Mobile Infrastructure',
            'Data-Driven Route Optimization'
        ],
        tech: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'MongoDB', 'Socket.io', 'Redis', 'Google Cloud Platform'],
        metrics: '85% fare accuracy · 1,000+ daily submissions · 100+ routes',
        androidDownload: 'https://drive.google.com/uc?export=download&id=1Vr4AZLgOj13bzVaeYBSplwS8GyFXRNbw',
        iosDownload: '#'
    },
    {
        id: 'dman-ecom',
        title: 'E-Commerce Platform',
        company: 'DMAN OFFICIALS',
        category: 'E-Commerce',
        type: 'web',
        image: dmanEcom1,
        gallery: [dmanEcom1, dmanEcom2, dmanEcom3],
        videoUrl: 'https://res.cloudinary.com/dvgqi0ajq/video/upload/f_auto,q_auto/v1794251929/hz1xvyqozboztjq4iqt6.mp4',
        githubUrl: 'https://github.com/KingsleyOkeze/dman-officials-ecommerce-store',
        githubLabel: 'Storefront Code',
        backendGithubUrl: 'https://github.com/KingsleyOkeze/dman-officials-backend',
        backendGithubLabel: 'Backend API Code',
        architecture: 'React.js SPA → Node.js / Express REST API → Paystack Payment Webhooks → Redis Cache & MongoDB',
        description: `Developed a full-stack, user-centric e-commerce platform for a growing online brand, focusing on creating a seamless, secure, and mobile-responsive shopping experience. The platform was built to be fast, intuitive, and frictionless across all devices — leading to an estimated 25% boost in order completion, giving the brand a smoother, higher-converting shopping experience.`,
        features: [
            'Seamless Product Discovery & Category Filters',
            'Integrated Paystack Payment Gateway with Webhook Verification',
            'Real-Time Order Tracking & Customer History',
            'Mobile-Optimized Cart & One-Click Checkout Experience'
        ],
        tech: ['React.js', 'Node.js', 'MongoDB', 'Paystack API', 'Redis'],
        metrics: '25% increase in order completion',
        link: null
    },
    {
        id: 'dman-admin',
        title: 'E-Commerce Admin Dashboard',
        company: 'DMAN OFFICIALS',
        category: 'E-Commerce & Operations',
        type: 'web',
        image: dmanAdmin1,
        gallery: [dmanAdmin1, dmanAdmin2, dmanAdmin3],
        videoUrl: 'https://res.cloudinary.com/dvgqi0ajq/video/upload/f_auto,q_auto/v1794231332/zlpxcppsazck2ayvaxxt.mp4',
        githubUrl: 'https://github.com/KingsleyOkeze/dman-officials-admin-panel',
        githubLabel: 'Admin Panel Code',
        backendGithubUrl: 'https://github.com/KingsleyOkeze/dman-officials-backend',
        backendGithubLabel: 'Backend API Code',
        architecture: 'React.js Dashboard → Role-Based Auth (JWT) → Automated Inventory Pipelines & Webhook Handlers → MongoDB',
        description: `Developed a full-stack admin panel for a growing online brand, giving the store owner complete control over operations. Focused on a high-performance, intuitive platform that streamlines workflows and boosts efficiency. Built the internal admin dashboard powering product management, real-time order tracking, inventory oversight, and automated status updates — cutting manual workload by 40% and improving processing speed 3×.`,
        features: [
            'Order Lifecycle & Automated Status Tracking',
            'Product & Stock Inventory Oversight with Instant Low-Stock Alerts',
            'Customer Relationship Management & Order History',
            'Sales Analytics & Fast Real-Time Data Processing'
        ],
        tech: ['React.js', 'Node.js', 'MongoDB', 'Redis'],
        metrics: '40% less manual workload · 3× processing speed',
        link: null
    }
];

export const expertise = [
    'Full-Stack Development',
    'Mobile Engineering',
    'System Architecture',
    'API Design & Integration',
    'Cloud Infrastructure'
];

export const skills = [
    'JavaScript', 'React.js', 'React Native', 'TypeScript', 'Node.js', 'Express.js', 'HTML5', 'CSS3',
    'MongoDB', 'PostgreSQL', 'Firebase', 'Git & GitHub', 'Tailwind CSS', 'Python',
    'Langchain', 'Docker', 'Google Cloud Platform', 'Supabase', 'Vercel', 'Render', 'REST APIs', 'Redis',
    'Microservices', 'BullMQ', 
];

export const experience = [
    {
        company: 'Soverema',
        role: 'Software Engineer',
        period: 'August 2025 — Present',
        description: `At Soverema, I lead the development of an AI-powered retail security platform that helps businesses detect shoplifting early, prevent losses, and respond faster. I contributed in designing the system architecture and built the core AI and backend systems to detect potential theft across CCTV feeds and alert security teams in real time. Also integrated the platform with existing CCTV infrastructure, helping retailers improve security without investing in additional surveillance hardware.`
    },
    {
        company: 'Ferify',
        role: 'Software Engineer',
        period: 'September 2025 — March 2025',
        description: `Contributed in building an app that helps everyday commuters in Nigerian cities know the real-time estimated fares between two routes so they can avoid feeling overcharged or cheated, especially in areas they don't know. The app processes over 1,000 submissions daily, improving fare accuracy by 85% across 100+ routes, making travel easier, more transparent, and helping even non-tech users plan their movement confidently.`
    },
    {
        company: 'Crea8Genius',
        role: 'Team Lead',
        period: 'March 2025 — August 2025',
        description: `Led a team of Designers, Frontend and Backend Engineers to architect and develop enterprise-level applications for clients. Key projects included an ed-tech platform and a WhatsApp reminder system — improving feature delivery speed by 35% and boosting user engagement by 30%.`
    },
    {
        company: 'DMAN OFFICIALS',
        role: 'Full Stack Engineer',
        period: 'October 2024 — February 2025',
        description: `Built the brand's first online shopping platform, delivering a fast, secure, mobile-optimized experience that increased order completion by 25%. Engineered a full admin system that automated previously manual tasks — cutting operational workload by 50% and eliminating errors that slowed the business down.`
    }
];

export const education = [
    {
        institution: 'Osun State University',
        degree: 'Bachelor of Science in Computer Science',
        period: 'November 2020 — September 2024',
        description: 'Studied foundational and advanced topics in Computer Science, including programming, algorithms, software engineering, and computer networks. Gained deep grounding in scalable system architecture, data structures, and database systems.'
    },
    {
        institution: 'HiiT Plc',
        degree: 'SIWES Technical Training — Ethical Hacking & Networking',
        period: 'May 2023 — September 2023',
        description: 'Completed a 5-month intensive Student Industrial Work Experience Scheme (SIWES) in Ethical Hacking and Computer Networking. Gained hands-on experience identifying and securing system vulnerabilities, configuring commercial routers and switches, and managing enterprise LAN/WAN infrastructure.'
    }
];

export const articles = [
    {
        title: 'How I Built a Real-Time Transit Fare Platform from Scratch',
        publication: 'Coming Soon',
        date: '2026',
        excerpt: 'A deep dive into the architecture behind Ferify — from React Native and Socket.io to community-driven fare verification at scale.',
        url: '#',
        tags: ['React Native', 'System Design', 'Node.js']
    },
    {
        title: 'From Offline to Online: Digitizing a Fashion Brand\'s Entire Sales Pipeline',
        publication: 'Coming Soon',
        date: '2026',
        excerpt: 'Lessons learned building a full e-commerce platform and admin dashboard that cut operational workload by 50%.',
        url: '#',
        tags: ['Full-Stack', 'E-Commerce', 'MongoDB']
    },
    {
        title: 'Leading Engineers: What I Learned as a Team Lead at 20-Something',
        publication: 'Coming Soon',
        date: '2026',
        excerpt: 'On managing designers and developers, shipping faster, and navigating the shift from individual contributor to leader.',
        url: '#',
        tags: ['Leadership', 'Career', 'Engineering']
    }
];

export const testimonials = [
    {
        quote: 'Kingsley possesses that rare ability to bridge deep technical architecture with commercial product reality. His work on Ferify reduced operational friction and gave our users a fast, reliable mobile experience.',
        author: 'Hilda',
        role: 'Product Designer',
        company: 'Ferify'
    },
    {
        quote: 'Bringing Kingsley on to build our online store and admin dashboard transformed how we operate. He cut out weeks of manual overhead and gave us a platform that immediately lifted order completion.',
        author: 'Temidayo',
        role: 'Founder',
        company: 'DMAN Officials'
    },
    {
        quote: "As a team lead, Kingsley brought clarity, engineering discipline, and steady progress to our team's work. He is dependable, communicative, and always focused on delivering quality.",
        author: 'Henry',
        role: 'Founder & CEO',
        company: 'FixItPro'
    }
];

export const navItems = ['Intro', 'About', 'Works', 'Articles', 'Contact'];

