import React from 'react';
import { ArrowDown } from 'lucide-react';

function Hero({ socialLinks }) {
    return (
        <section
            id="intro"
            className="relative min-h-screen flex items-center px-6 lg:px-12"
        >
            <div className="max-w-7xl mx-auto w-full">
                <div className="max-w-5xl">
                    {/* Pretitle */}
                    <div className="flex items-center gap-4 mb-10 opacity-0 anim-hero delay-100">
                        <span className="block w-12 h-px bg-accent" />
                        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-accent">
                            Hi there!
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="font-serif leading-[0.95] tracking-tight mb-12">
                        <span className="block text-[clamp(3rem,8vw,7rem)] opacity-0 anim-hero delay-200">
                            I am Kingsley,
                        </span>
                        <span className="block text-[clamp(3rem,8vw,7rem)] opacity-0 anim-hero delay-300">
                            A Software
                        </span>
                        <span className="block text-[clamp(3rem,8vw,7rem)] text-accent opacity-0 anim-hero delay-400">
                            Engineer.
                        </span>
                    </h1>

                    {/* Sub-headline */}
                    <p className="max-w-xl text-lg md:text-xl leading-relaxed text-warm-gray mb-12 opacity-0 anim-hero delay-500">
                        Your software should solve problems, not create them. I build reliable applications that make life easier.
                    </p>

                    {/* Social Links */}
                    <ul className="flex flex-wrap gap-x-8 gap-y-3 opacity-0 anim-hero delay-600">
                        {socialLinks.map(({ label, url }) => (
                            <li key={label}>
                                <a
                                    href={url}
                                    target={url.startsWith('mailto') ? undefined : '_blank'}
                                    rel="noopener noreferrer"
                                    className="text-sm tracking-wide text-warm-muted hover:text-accent transition-colors duration-300"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Scroll indicator */}
            <a
                href="#about"
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-warm-muted hover:text-accent transition-colors duration-300 opacity-0 anim-hero delay-800"
                aria-label="Scroll to About section"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
                    <ArrowDown size={18} style={{ animation: 'gentleBounce 2s ease-in-out infinite' }} />
                </div>
            </a>
        </section>
    );
}

export default Hero;

