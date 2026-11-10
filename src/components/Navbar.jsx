import React from 'react';
import { Menu, X } from 'lucide-react';

function Navbar({ scrollY, isMenuOpen, setIsMenuOpen, navItems }) {
    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                scrollY > 50
                    ? 'bg-surface/95 backdrop-blur-md shadow-[0_1px_0_0_theme(--color-warm-border)]'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a
                        href="#intro"
                        className="font-serif text-2xl text-warm-white hover:text-accent transition-colors duration-300"
                    >
                        KO.
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-10">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="relative text-[13px] font-medium tracking-[0.2em] uppercase text-warm-gray hover:text-accent transition-colors duration-300 group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
                            </a>
                        ))}
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-warm-white hover:text-accent transition-colors duration-300"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-400 ${
                    isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="bg-surface/98 backdrop-blur-md border-t border-warm-border px-6 py-6 space-y-1">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setIsMenuOpen(false)}
                            className="block py-3 text-[13px] font-medium tracking-[0.2em] uppercase text-warm-gray hover:text-accent hover:pl-2 transition-all duration-300"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

