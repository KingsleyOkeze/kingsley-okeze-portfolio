import React from 'react';
import { Quote } from 'lucide-react';
import SectionLabel from './SectionLabel';

function Testimonials({ setSectionRef, isVisible, testimonials }) {
    return (
        <section
            id="testimonials"
            className="py-28 md:py-36 px-6 lg:px-12 bg-surface border-t border-warm-border"
            ref={setSectionRef('testimonials')}
            data-section="testimonials"
        >
            <div className="max-w-7xl mx-auto">
                <SectionLabel animate visible={isVisible('testimonials')}>Endorsements</SectionLabel>

                <p
                    className={`font-serif text-3xl md:text-4xl lg:text-5xl leading-tight max-w-3xl mt-4 mb-16 ${
                        isVisible('testimonials') ? 'anim-fade-up delay-100' : 'anim-hidden'
                    }`}
                >
                    What collaborators and teams say about building together.
                </p>

                {/* Testimonial Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, idx) => (
                        <div
                            key={idx}
                            className={`relative p-8 md:p-10 rounded-sm bg-surface-alt border border-warm-border hover:border-accent/40 transition-all duration-500 flex flex-col justify-between group hover:-translate-y-1 ${
                                isVisible('testimonials') ? `anim-scale-in delay-${(idx + 1) * 150}` : 'anim-hidden'
                            }`}
                        >
                            <div>
                                <Quote
                                    size={28}
                                    className="text-accent/60 group-hover:text-accent mb-6 transition-colors duration-300"
                                />
                                <p className="text-warm-gray leading-relaxed mb-8 italic">
                                    "{item.quote}"
                                </p>
                            </div>

                            <div className="pt-6 border-t border-warm-border/60">
                                <h4 className="font-serif text-xl text-warm-white group-hover:text-accent transition-colors duration-300">
                                    {item.author}
                                </h4>
                                <p className="text-xs text-warm-muted tracking-wide mt-1">
                                    {item.role} · <span className="text-accent/90">{item.company}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;

