import React from 'react';

function SectionLabel({ children, animate = false, visible = true }) {
    return (
        <div className={`flex items-center gap-4 mb-6 ${animate ? (visible ? 'anim-fade-up' : 'anim-hidden') : ''}`}>
            <span className="block w-12 h-px bg-accent" />
            <span className="text-xs font-sans font-semibold tracking-[0.25em] uppercase text-accent">
                {children}
            </span>
        </div>
    );
}

export default SectionLabel;

