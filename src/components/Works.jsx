import React from 'react';
import SectionLabel from './SectionLabel';
import { ExternalLink, Smartphone, ArrowUpRight } from 'lucide-react';

function Works({ setSectionRef, isVisible, projects, setActiveModal }) {
    return (
        <section
            id="works"
            className="py-28 md:py-36 px-6 lg:px-12 bg-surface"
            ref={setSectionRef('works')}
            data-section="works"
        >
            <div className="max-w-7xl mx-auto">
                <SectionLabel animate visible={isVisible('works')}>Recent Works</SectionLabel>

                <p
                    className={`font-serif text-3xl md:text-4xl lg:text-5xl leading-tight max-w-3xl mt-4 mb-16 ${
                        isVisible('works') ? 'anim-fade-up delay-100' : 'anim-hidden'
                    }`}
                >
                    Here are some of my favorite projects.
                    Feel free to check them out.
                </p>

                {/* Project Grid */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            onClick={() => setActiveModal(project)}
                            className={`group cursor-pointer rounded-sm overflow-hidden border border-warm-border hover:border-accent/40 bg-surface-alt transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between ${
                                isVisible('works') ? `anim-scale-in delay-${(index + 1) * 200}` : 'anim-hidden'
                            }`}
                        >
                            {/* Card Image Showcase */}
                            <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden bg-surface-card border-b border-warm-border/60">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-contain p-4 group-hover:scale-[1.03] transition-transform duration-700"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-surface-alt/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Platform Type Tag on Image */}
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="inline-block px-2.5 py-1 text-xs font-mono text-warm-gray bg-surface/90 backdrop-blur-md border border-warm-border rounded-sm uppercase tracking-wider">
                                        {project.type === 'app' ? 'Mobile App' : 'Web Platform'}
                                    </span>
                                </div>

                                {/* Hover Prompt */}
                                <div className="absolute bottom-4 right-4 z-10 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold tracking-wide text-surface bg-accent rounded-sm shadow-lg">
                                        Case Study &amp; Gallery <ArrowUpRight size={14} />
                                    </span>
                                </div>
                            </div>

                            {/* Card Details */}
                            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                                <div>
                                    <div className="flex items-center justify-between gap-2 mb-2">
                                        <span className="text-xs font-semibold tracking-[0.18em] uppercase text-accent font-mono">
                                            {project.category}
                                        </span>
                                        <span className="text-xs text-warm-muted font-mono">
                                            {project.company}
                                        </span>
                                    </div>

                                    <h3 className="font-serif text-2xl sm:text-3xl text-warm-white group-hover:text-accent transition-colors duration-300">
                                        {project.title}
                                    </h3>

                                    {/* Project Outcome Metric */}
                                    {project.metrics && (
                                        <p className="text-xs sm:text-sm text-warm-gray/90 font-mono mt-3 pt-3 border-t border-warm-border/60">
                                            <span className="text-accent/90 font-semibold mr-1.5">Impact:</span>
                                            {project.metrics}
                                        </p>
                                    )}
                                </div>

                                {/* Tech Pills */}
                                <div className="flex flex-wrap gap-1.5 mt-5">
                                    {project.tech.slice(0, 4).map((t, i) => (
                                        <span
                                            key={i}
                                            className="px-2.5 py-1 text-xs text-warm-muted bg-surface border border-warm-border rounded-sm"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                    {project.tech.length > 4 && (
                                        <span className="px-2 py-1 text-xs text-accent/80 font-mono">
                                            +{project.tech.length - 4} more
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Works;
