import React from 'react';
import { MessageCircle } from 'lucide-react';
import SectionLabel from './SectionLabel';

function Contact({ setSectionRef, isVisible, socialLinks }) {
    return (
        <section
            id="contact"
            className="py-28 md:py-36 px-6 lg:px-12 bg-surface"
            ref={setSectionRef('contact')}
            data-section="contact"
        >
            <div className="max-w-7xl mx-auto">
                <SectionLabel animate visible={isVisible('contact')}>Get In Touch</SectionLabel>

                <h2
                    className={`font-serif text-4xl md:text-5xl lg:text-6xl leading-tight max-w-3xl mt-4 mb-6 ${
                        isVisible('contact') ? 'anim-fade-up delay-100' : 'anim-hidden'
                    }`}
                >
                    I'd love to hear from you.
                </h2>

                <p
                    className={`text-lg text-warm-gray max-w-xl mb-16 ${
                        isVisible('contact') ? 'anim-fade-up delay-200' : 'anim-hidden'
                    }`}
                >
                    Whether you have a question, want to collaborate, or just want
                    to say hello — shoot me a message.
                </p>

                <div
                    className={`grid md:grid-cols-2 gap-12 mb-16 ${
                        isVisible('contact') ? 'anim-fade-up delay-300' : 'anim-hidden'
                    }`}
                >
                    {/* Email */}
                    <div>
                        <h3 className="text-xs font-semibold tracking-[0.25em] uppercase text-warm-muted mb-4">
                            Reach me at
                        </h3>
                        <a
                            href="mailto:kingsleyokeze3@gmail.com"
                            className="text-xl md:text-2xl font-serif text-warm-white hover:text-accent transition-colors duration-300"
                        >
                            kingsleyokeze3@gmail.com
                        </a>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-xs font-semibold tracking-[0.25em] uppercase text-warm-muted mb-4">
                            Social
                        </h3>
                        <div className="space-y-3">
                            {socialLinks.filter(s => s.label !== 'Email').map(({ label, url }) => (
                                <a
                                    key={label}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-warm-gray hover:text-accent hover:translate-x-2 transition-all duration-300"
                                >
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <a
                    href="https://wa.me/2349026627307?text=Hi%20Kingsley%2C%20I%20came%20across%20your%20portfolio%20and%20wanted%20to%20say%20hello!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-3 px-10 py-4 bg-accent text-surface font-semibold tracking-wide rounded-sm hover:bg-accent-hover transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5 ${
                        isVisible('contact') ? 'anim-scale-in delay-400' : 'anim-hidden'
                    }`}
                >
                    <MessageCircle size={18} />
                    Say Hello on WhatsApp
                </a>
            </div>
        </section>
    );
}

export default Contact;

