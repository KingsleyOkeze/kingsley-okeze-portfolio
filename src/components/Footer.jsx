import React from 'react';

function Footer() {
    return (
        <footer className="py-10 px-6 lg:px-12 bg-surface border-t border-warm-border">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-warm-muted">
                    &copy; {new Date().getFullYear()} Kingsley Okeze
                </p>
                <p className="text-sm text-warm-muted">
                    Practical. Thoughtful. Result-driven.
                </p>
            </div>
        </footer>
    );
}

export default Footer;

