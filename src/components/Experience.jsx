import React from 'react';
import SectionLabel from './SectionLabel';

function Experience({ setSectionRef, isVisible, experience }) {
    return (
        <section
            className="py-28 md:py-36 px-6 lg:px-12 bg-surface"
            ref={setSectionRef('experience')}
            data-section="experience"
        >
            <div className="max-w-7xl mx-auto">
                <SectionLabel animate visible={isVisible('experience')}>Experience</SectionLabel>

                <div className="mt-12 max-w-4xl">
                    {experience.map((exp, index) => (
                        <div
                            key={index}
                            className={`relative pl-8 pb-14 last:pb-0 border-l border-warm-border group ${
                                isVisible('experience') ? `anim-fade-up delay-${(index + 1) * 200}` : 'anim-hidden'
                            }`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-surface group-hover:ring-accent/20 transition-all duration-500" />

                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                                <h3 className="font-serif text-2xl md:text-3xl text-warm-white">
                                    {exp.company}
                                </h3>
                                <span className="text-sm text-warm-muted tracking-wide">
                                    {exp.period}
                                </span>
                            </div>

                            <p className="text-accent text-sm font-medium tracking-wide mb-4">
                                {exp.role}
                            </p>

                            <p className="text-warm-gray leading-relaxed max-w-2xl">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;

