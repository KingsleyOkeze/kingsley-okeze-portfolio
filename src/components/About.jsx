import React from 'react';
import { Download, MessageCircle } from 'lucide-react';
import SectionLabel from './SectionLabel';

function About({ setSectionRef, isVisible, handleDownload, expertise, skills }) {
    return (
        <section
            id="about"
            className="py-28 md:py-36 px-6 lg:px-12 bg-surface-alt"
            ref={setSectionRef('about')}
            data-section="about"
        >
            <div className="max-w-7xl mx-auto">
                <SectionLabel animate visible={isVisible('about')}>About</SectionLabel>

                <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 mt-12">
                    {/* Photo */}
                    <div
                        className={`lg:col-span-2 ${
                            isVisible('about') ? 'anim-fade-left delay-100' : 'anim-hidden'
                        }`}
                    >
                        <div className="relative">
                            <img
                                src="https://res.cloudinary.com/dvgqi0ajq/image/upload/v1765056552/rgh0bdj7vi53llrse8oi.jpg"
                                alt="Kingsley Okeze"
                                className="w-full aspect-[3/4] object-cover rounded-sm grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                                loading="lazy"
                            />
                            {/* Decorative corner accent */}
                            <div className="absolute -bottom-3 -right-3 w-full h-full border border-accent/30 rounded-sm -z-10" />
                        </div>
                    </div>

                    {/* Info */}
                    <div
                        className={`lg:col-span-3 ${
                            isVisible('about') ? 'anim-fade-right delay-200' : 'anim-hidden'
                        }`}
                    >
                        <p className="text-lg md:text-xl leading-relaxed text-warm-gray mb-6">
                            I build software that solves business problems, supports growth, and simplifies complex operations. 
                            With over half a decade of experience in software engineering, I've contributed to products across 
                            fintech, edtech, retail, eCommerce, and SaaS, building everything from customer-facing applications 
                            to backend systems that power critical business operations.
                        </p>

                        <p className="text-lg md:text-xl leading-relaxed text-warm-gray mb-6">
                            My work has contributed to measurable business improvements, including a 35% increase in delivery 
                            efficiency, 30% growth in user engagement, 25% improvement in order completion, and up to 50% reduction 
                            in administrative workload.
                        </p>

                        <p className="text-lg md:text-xl leading-relaxed text-warm-gray mb-6">
                            From translating business requirements into technical solutions to designing system architectures, 
                            building APIs, engineering real-time systems, and integrating AI capabilities, I work across the full product 
                            lifecycle. My technical experience spans web and mobile development, backend engineering, databases, 
                            cloud platforms, and applied AI, with a focus on building reliable, maintainable software that delivers lasting value.
                        </p>
                        
                        <p className="text-lg md:text-xl leading-relaxed text-warm-gray mb-10">
                            While not coding, I enjoy watching documentaries and experimenting with hardware and IoT projects, especially where 
                            software interacts with real-world devices.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 mb-14">
                            <a
                                href="https://wa.me/2349026627307?text=Hi%20Kingsley%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-accent text-surface font-semibold text-sm tracking-wide rounded-sm hover:bg-accent-hover transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5"
                            >
                                <MessageCircle size={16} />
                                Chat on WhatsApp
                            </a>
                            <button
                                onClick={handleDownload}
                                className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-warm-border text-warm-white font-semibold text-sm tracking-wide rounded-sm hover:border-accent hover:text-accent transition-all duration-300 hover:-translate-y-0.5"
                            >
                                <Download size={16} />
                                Download CV
                            </button>
                        </div>

                        {/* Expertise */}
                        <div>
                            <h3 className="text-xs font-semibold tracking-[0.25em] uppercase text-warm-muted mb-6">
                                Expertise
                            </h3>
                            <ul className="space-y-2">
                                {expertise.map((item) => (
                                    <li
                                        key={item}
                                        className="font-serif text-2xl md:text-3xl text-warm-white/90 hover:text-accent transition-colors duration-300 cursor-default"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Skills */}
                        <div className="mt-10">
                            <h3 className="text-xs font-semibold tracking-[0.25em] uppercase text-warm-muted mb-5">
                                Technologies
                            </h3>
                            <div className="flex flex-wrap gap-2.5">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3.5 py-1.5 text-sm text-warm-gray border border-warm-border rounded-sm hover:border-accent/50 hover:text-accent transition-all duration-300"
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
    );
}

export default About;

