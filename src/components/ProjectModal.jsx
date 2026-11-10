import React, { useState, useEffect } from 'react';
import { X, Smartphone, ExternalLink, Layers, CheckCircle2, Play, Github } from 'lucide-react';

function ProjectModal({ activeModal, setActiveModal }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isVideoActive, setIsVideoActive] = useState(false);
    const [currentVideoUrl, setCurrentVideoUrl] = useState(null);

    useEffect(() => {
        if (activeModal) {
            setSelectedImage(activeModal.image);
            const videos = activeModal.videos && activeModal.videos.length > 0
                ? activeModal.videos
                : (activeModal.videoUrl ? [{ label: 'Video Demo', url: activeModal.videoUrl }] : []);

            if (videos.length > 0) {
                setCurrentVideoUrl(videos[0].url);
                setIsVideoActive(true);
            } else {
                setCurrentVideoUrl(null);
                setIsVideoActive(false);
            }
        }
    }, [activeModal]);

    if (!activeModal) return null;

    const gallery = activeModal.gallery && activeModal.gallery.length > 0
        ? activeModal.gallery
        : [activeModal.image];

    const videoList = activeModal.videos && activeModal.videos.length > 0
        ? activeModal.videos
        : (activeModal.videoUrl ? [{ label: 'Video Demo', url: activeModal.videoUrl }] : []);

    return (
        <div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md anim-fade-up"
            onClick={() => setActiveModal(null)}
        >
            <div
                className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-surface-alt border border-warm-border rounded-sm anim-scale-in shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={() => setActiveModal(null)}
                    className="absolute top-4 right-4 z-20 p-2.5 bg-surface-card/90 backdrop-blur-sm rounded-sm text-warm-gray hover:text-accent hover:rotate-90 transition-all duration-300 border border-warm-border/60"
                    aria-label="Close modal"
                >
                    <X size={20} />
                </button>

                {/* Primary Media Preview Area */}
                <div className="relative bg-surface-card border-b border-warm-border">
                    <div className="p-4 sm:p-6 flex items-center justify-center min-h-[280px] max-h-[52vh] overflow-hidden bg-surface-card">
                        {isVideoActive && currentVideoUrl ? (
                            <video
                                key={currentVideoUrl}
                                controls
                                autoPlay
                                playsInline
                                src={currentVideoUrl}
                                className="w-full h-auto max-h-[48vh] object-contain mx-auto rounded-sm"
                            />
                        ) : (
                            <img
                                src={selectedImage || activeModal.image}
                                alt={activeModal.title}
                                className="w-full h-auto max-h-[48vh] object-contain mx-auto rounded-sm transition-all duration-500"
                            />
                        )}
                    </div>

                    {/* Media Switcher: Video Feature Pills + Screenshot Thumbnails */}
                    {(gallery.length > 1 || videoList.length > 0) && (
                        <div className="p-3 bg-surface/90 border-t border-warm-border/80 flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto">
                            {/* Video Pills */}
                            {videoList.map((vid, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setCurrentVideoUrl(vid.url);
                                        setIsVideoActive(true);
                                    }}
                                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-sm border transition-all duration-300 flex-shrink-0 ${
                                        isVideoActive && currentVideoUrl === vid.url
                                            ? 'border-accent bg-accent/20 text-accent ring-1 ring-accent'
                                            : 'border-warm-border text-warm-gray hover:text-warm-white hover:border-warm-muted'
                                    }`}
                                >
                                    <Play size={13} className={isVideoActive && currentVideoUrl === vid.url ? 'text-accent' : 'text-warm-muted'} />
                                    <span>{vid.label}</span>
                                </button>
                            ))}

                            {/* Separator if both videos and screenshots exist */}
                            {videoList.length > 0 && gallery.length > 0 && (
                                <span className="w-px h-6 bg-warm-border flex-shrink-0 mx-1 hidden sm:inline-block" />
                            )}

                            {/* Screenshot Thumbnails */}
                            {gallery.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setIsVideoActive(false);
                                        setSelectedImage(img);
                                    }}
                                    className={`relative w-16 h-10 sm:h-12 rounded-sm overflow-hidden border transition-all duration-300 flex-shrink-0 ${
                                        !isVideoActive && (selectedImage || activeModal.image) === img
                                            ? 'border-accent ring-2 ring-accent/30 scale-105'
                                            : 'border-warm-border hover:border-warm-muted opacity-60 hover:opacity-100'
                                    }`}
                                    aria-label={`View Screenshot ${idx + 1}`}
                                >
                                    <img
                                        src={img}
                                        alt={`Thumbnail ${idx + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Detailed Information */}
                <div className="p-6 sm:p-10 space-y-8">
                    {/* Header */}
                    <div>
                        <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-wider text-accent">
                            <span>{activeModal.category}</span>
                            <span className="text-warm-muted">·</span>
                            <span className="text-warm-muted">{activeModal.company}</span>
                        </div>
                        <h3 className="font-serif text-3xl sm:text-4xl text-warm-white">
                            {activeModal.title}
                        </h3>
                    </div>

                    {/* Metric Highlight (clean typography, zero emojis) */}
                    {activeModal.metrics && (
                        <div className="p-4 bg-surface rounded-sm border border-warm-border">
                            <span className="text-xs uppercase tracking-widest text-accent font-mono block mb-1">
                                Proven Impact &amp; Results
                            </span>
                            <p className="text-sm font-mono text-warm-white">
                                {activeModal.metrics}
                            </p>
                        </div>
                    )}

                    {/* Description */}
                    <div>
                        <h4 className="text-xs font-semibold tracking-[0.25em] uppercase text-warm-muted mb-3 font-mono">
                            Overview
                        </h4>
                        <p className="text-warm-gray leading-relaxed text-base">
                            {activeModal.description}
                        </p>
                    </div>

                    {/* System Architecture */}
                    {activeModal.architecture && (
                        <div className="p-5 bg-surface rounded-sm border border-warm-border">
                            <div className="flex items-center gap-2 mb-2 text-xs font-semibold tracking-[0.2em] uppercase text-warm-muted font-mono">
                                <Layers size={15} className="text-accent" />
                                <span>System Architecture &amp; Data Pipeline</span>
                            </div>
                            <p className="text-xs sm:text-sm font-mono text-warm-gray leading-relaxed">
                                {activeModal.architecture}
                            </p>
                        </div>
                    )}

                    {/* Key Engineering Features */}
                    <div>
                        <h4 className="text-xs font-semibold tracking-[0.25em] uppercase text-warm-muted mb-4 font-mono">
                            Key Deliverables &amp; Features
                        </h4>
                        <ul className="space-y-2.5">
                            {activeModal.features.map((feature, i) => (
                                <li
                                    key={i}
                                    className="flex items-start gap-3 text-warm-gray text-sm sm:text-base hover:text-warm-white transition-colors duration-300"
                                >
                                    <CheckCircle2 size={16} className="text-accent mt-1 flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                        <h4 className="text-xs font-semibold tracking-[0.25em] uppercase text-warm-muted mb-4 font-mono">
                            Technologies &amp; Infrastructure
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {activeModal.tech.map((tech, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1.5 text-xs sm:text-sm text-warm-gray border border-warm-border rounded-sm hover:border-accent/40 hover:text-accent transition-all duration-300 font-mono"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons: Live App, App Binary, Codebase */}
                    <div className="pt-4 border-t border-warm-border/60 flex flex-wrap items-center gap-4">
                        {/* Mobile App Download */}
                        {activeModal.type === 'app' && (
                            <>
                                <a
                                    href={activeModal.androidDownload}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    download
                                    className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-accent text-surface font-semibold text-sm rounded-sm hover:bg-accent-hover transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5"
                                >
                                    <Smartphone size={16} />
                                    Download Android APK
                                </a>
                                <span className="inline-flex items-center gap-2 px-5 py-3.5 border border-warm-border text-warm-muted text-sm rounded-sm cursor-default">
                                    <Smartphone size={16} />
                                    iOS Build (Internal Testing)
                                </span>
                            </>
                        )}

                        {/* Web Live Deployment */}
                        {activeModal.type !== 'app' && activeModal.link && (
                            <a
                                href={activeModal.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-accent text-surface font-semibold text-sm rounded-sm hover:bg-accent-hover transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5"
                            >
                                <ExternalLink size={16} />
                                Open Live Deployment
                            </a>
                        )}

                        {/* Codebase Repository Links */}
                        {activeModal.githubUrl && (
                            <a
                                href={activeModal.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-2.5 px-6 py-3.5 font-semibold text-sm rounded-sm transition-all duration-300 hover:-translate-y-0.5 ${
                                    !activeModal.link && activeModal.type !== 'app'
                                        ? 'bg-accent text-surface hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20'
                                        : 'border border-warm-border text-warm-white hover:border-accent hover:text-accent'
                                }`}
                            >
                                <Github size={16} />
                                {activeModal.githubLabel || (activeModal.backendGithubUrl ? (activeModal.type === 'app' ? 'Mobile App Code' : 'Frontend Code') : 'View Source Code')}
                            </a>
                        )}

                        {activeModal.backendGithubUrl && (
                            <a
                                href={activeModal.backendGithubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-warm-border text-warm-white font-semibold text-sm rounded-sm hover:border-accent hover:text-accent transition-all duration-300 hover:-translate-y-0.5"
                            >
                                <Github size={16} />
                                {activeModal.backendGithubLabel || (activeModal.type === 'app' ? 'Backend Microservices Code' : 'Backend Code')}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectModal;
