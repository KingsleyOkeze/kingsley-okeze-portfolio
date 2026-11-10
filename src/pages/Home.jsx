import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Works from '../components/Works';
import Articles from '../components/Articles';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ProjectModal from '../components/ProjectModal';
import {
    socialLinks,
    projects,
    expertise,
    skills,
    experience,
    education,
    articles,
    testimonials,
    navItems
} from '../data/portfolioData';

function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeModal, setActiveModal] = useState(null);
    const [scrollY, setScrollY] = useState(0);
    const [visibleSections, setVisibleSections] = useState(new Set());
    const sectionRefs = useRef({});

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll, { passive: true });
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
            { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
        );

        Object.values(sectionRefs.current).forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        document.body.style.overflow = activeModal ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [activeModal]);

    const isVisible = (section) => visibleSections.has(section);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/Kingsley_Okeze_Resume.pdf';
        link.download = 'Kingsley_Okeze_Resume.pdf';
        link.click();
    };

    const setSectionRef = (name) => (el) => {
        sectionRefs.current[name] = el;
    };

    return (
        <div className="min-h-screen bg-surface font-sans text-warm-white">
            <Navbar
                scrollY={scrollY}
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                navItems={navItems}
            />

            <Hero
                socialLinks={socialLinks}
            />

            <About
                setSectionRef={setSectionRef}
                isVisible={isVisible}
                handleDownload={handleDownload}
                expertise={expertise}
                skills={skills}
            />

            <Experience
                setSectionRef={setSectionRef}
                isVisible={isVisible}
                experience={experience}
            />

            <Education
                setSectionRef={setSectionRef}
                isVisible={isVisible}
                education={education}
            />

            <Works
                setSectionRef={setSectionRef}
                isVisible={isVisible}
                projects={projects}
                setActiveModal={setActiveModal}
            />

            <Articles
                setSectionRef={setSectionRef}
                isVisible={isVisible}
                articles={articles}
            />

            <Testimonials
                setSectionRef={setSectionRef}
                isVisible={isVisible}
                testimonials={testimonials}
            />

            <Contact
                setSectionRef={setSectionRef}
                isVisible={isVisible}
                socialLinks={socialLinks}
            />

            <Footer />

            <ProjectModal
                activeModal={activeModal}
                setActiveModal={setActiveModal}
            />
        </div>
    );
}

export default Home;

