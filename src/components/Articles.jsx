import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import SectionLabel from './SectionLabel';

function Articles({ setSectionRef, isVisible, articles }) {
    return (
        <section
            id="articles"
            className="py-28 md:py-36 px-6 lg:px-12 bg-surface-alt"
            ref={setSectionRef('articles')}
            data-section="articles"
        >
            <div className="max-w-7xl mx-auto">
                <SectionLabel animate visible={isVisible('articles')}>Articles</SectionLabel>

                <p
                    className={`font-serif text-3xl md:text-4xl lg:text-5xl leading-tight max-w-3xl mt-4 mb-16 ${
                        isVisible('articles') ? 'anim-fade-up delay-100' : 'anim-hidden'
                    }`}
                >
                    Thoughts on engineering, leadership &amp; building products.
                </p>

                <div className="space-y-0 divide-y divide-warm-border">
                    {articles.map((article, index) => (
                        <a
                            key={index}
                            href={article.url}
                            target={article.url !== '#' ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            className={`group block py-8 md:py-10 first:pt-0 last:pb-0 ${
                                isVisible('articles') ? `anim-fade-up delay-${(index + 1) * 100}` : 'anim-hidden'
                            }`}
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                <div className="flex-1 max-w-2xl">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-xs font-medium tracking-[0.15em] uppercase text-warm-muted">
                                            {article.publication}
                                        </span>
                                        <span className="text-warm-muted">·</span>
                                        <span className="text-xs text-warm-muted">{article.date}</span>
                                    </div>

                                    <h3 className="font-serif text-2xl md:text-3xl text-warm-white group-hover:text-accent transition-colors duration-300 mb-3">
                                        {article.title}
                                    </h3>

                                    <p className="text-warm-gray leading-relaxed mb-4">
                                        {article.excerpt}
                                    </p>

                                    {article.tags && (
                                        <div className="flex flex-wrap gap-2">
                                            {article.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2.5 py-1 text-xs text-warm-muted border border-warm-border rounded-sm"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="flex-shrink-0 self-start mt-1">
                                    <ArrowUpRight
                                        size={20}
                                        className="text-warm-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                                    />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Articles;

