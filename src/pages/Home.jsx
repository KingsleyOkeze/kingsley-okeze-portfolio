import hamburgerMenu from "../assets/Sort.png";
import dmanAdmin1 from "../assets/dmanAdmin1.png";
import dmanAdmin2 from "../assets/dmanAdmin2.png";
import dmanAdmin3 from "../assets/dmanAdmin3.png";
import dmanEcom1 from "../assets/dmanEcom1.png";
import dmanEcom2 from "../assets/dmanEcom2.png";
import dmanEcom3 from "../assets/dmanEcom3.png";
import add from "../assets/add.png";
import circle from "../assets/circle.png";
import play from "../assets/play.png";
import vector from "../assets/vector.png";
import { useState, useEffect, useRef } from "react";
import { 
    FaGithub, 
    FaTwitter, 
    FaLinkedinIn, 
    FaWhatsapp, 
    FaCode, 
    FaMobileAlt, 
    FaRobot, 
    FaExternalLinkAlt, 
    FaAndroid, 
    FaApple 
} from "react-icons/fa";
import IgweImage from "../assets/igwe.png";

function Home() {
    const date = new Date();
    const year = date.getFullYear();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentSlides, setCurrentSlides] = useState({});
    const intervalRefs = useRef({});

    const [projects, setProjects] = useState([
        {
        image: [dmanAdmin1, dmanAdmin2, dmanAdmin3],
        url: "https://dman-officials-admin-panel.vercel.app/admin/login",
        //   githubUrl: "https://github.com/your-repo/admin-panel", // Uncomment if public; omit if private
        //   androidUrl: "https://your-apk-or-play-store-link", // Include only for mobile apps
        //   iosUrl: "https://your-app-store-link", // Include only for iOS apps
        description: `
            This is an Admin web app for an e-commerce brand, designed to give the store owner 
            full control and visibility into their platform. The dashboard acts as the control 
            center for the entire store. Whether it's updating an order's status or tracking 
            customer behavior, this tool makes managing an e-commerce brand 10x easier. 
            Built with: React, Node.js, MongoDB, and CSS.`,
        },
        {
        image: [dmanEcom1, dmanEcom2, dmanEcom3],
        url: "https://dman-officials-ecommerce-store.vercel.app",
        //   githubUrl: "https://github.com/your-repo/ecom-store", // Uncomment if public; omit if private
        //   androidUrl: "https://your-apk-or-play-store-link", // Include only for mobile apps
        //   iosUrl: "https://your-app-store-link", // Include only for iOS apps
        description: `
            Developed a user-centric e-commerce platform with a clean, mobile-responsive 
            UI to ensure a seamless and secure shopping experience. The application features a streamlined 
            checkout, intuitive product discovery with advanced filtering, and a robust user authentication 
            system. This project showcases my ability to build a high-performance front-end that drives 
            customer engagement and loyalty.
        `,
        },
    ]);

    const handleDownload = () => {
            const link = document.createElement("a");
            link.href = "/Kingsley_Okeze_Resume.pdf";
            link.download = "My_Resume.pdf";
            link.click();
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        projects.forEach((_, projectIndex) => {
            intervalRefs.current[projectIndex] = setInterval(() => {
                setCurrentSlides((prev) => {
                const currentSlide = prev[projectIndex] || 0;
                const nextSlide = (currentSlide + 1) % projects[projectIndex].image.length;
                return { ...prev, [projectIndex]: nextSlide };
                });
            }, 3000);

            return () => {
                if (intervalRefs.current[projectIndex]) {
                clearInterval(intervalRefs.current[projectIndex]);
                }
            };
        });
    }, [projects]);

    return (
        <div className="text-white bg-19191B p-5 lg:p-10 bg-gradient-to-b from-[#0E0E1A] to-[#080812]">
            <div className="flex justify-between align-middle relative">
                <h3 className="font-bold text-3xl">KO</h3>
                <ul
                className={`md:hidden fixed top-0 left-0 h-full w-64 bg-[#0E0E1A] z-50 transform ${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out flex flex-col space-y-6 p-6`}
                >
                <button onClick={() => setIsMenuOpen(false)} className="self-end text-white text-2xl">
                    &times;
                </button>
                <a href="#" onClick={() => setIsMenuOpen(false)}>
                    <li className="w-full text-center cursor-pointer text-lg">Home</li>
                </a>
                <a href="#services" onClick={() => setIsMenuOpen(false)}>
                    <li className="w-full text-center cursor-pointer text-lg">Services</li>
                </a>
                <a href="#projects" onClick={() => setIsMenuOpen(false)}>
                    <li className="w-full text-center cursor-pointer text-lg">Projects</li>
                </a>
                <a href="#about" onClick={() => setIsMenuOpen(false)}>
                    <li className="w-full text-center cursor-pointer text-lg">About</li>
                </a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                    <li className="w-full text-center cursor-pointer text-lg">Contact</li>
                </a>
                </ul>
                <div className={`md:hidden ${isMenuOpen ? "fixed inset-0 bg-black bg-opacity-50 z-40" : "hidden"}`}></div>
                <ul className="hidden md:flex px-4 py-2 rounded-md space-x-6">
                <a href="#">
                    <li className="w-24 text-center cursor-pointer">Home</li>
                </a>
                <a href="#services">
                    <li className="w-24 text-center cursor-pointer">Services</li>
                </a>
                <a href="#projects">
                    <li className="w-24 text-center cursor-pointer">Projects</li>
                </a>
                <a href="#about">
                    <li className="w-24 text-center cursor-pointer">About</li>
                </a>
                </ul>
                <a href="#contact">
                <button className="hidden cursor-pointer sm:block py-1 px-5 border-2 rounded-sm">Contact</button>
                </a>
                <img
                src={hamburgerMenu}
                width={50}
                height={50}
                className="sm:hidden cursor-pointer transition-transform duration-200 hover:scale-110"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
            </div>
            <div className="md:flex md:justify-between mt-10">
                <div className="flex flex-col justify-between mt-0 mb-20 md:mb-0 md:basis-[50%]">
                <p className="font-medium leading-normal w-10/12 md:w-9/12 mb-5 text-4xl sm:text-3xl md:text-4xl sm:w-6/12 sm:z-21">
                    Creating Products That Truly Matter
                </p>
                <div className="flex flex-col justify-between gap-1 text-base w-11/12 md:w-11/12 pb-4 sm:w-9/12 h-90 sm:z-21 leading-normal">
                    <p>
                    I don't just write code, I create products that solve problems and delight users. Whether it's a sleek web
                    app, a scalable mobile app solution, or the next big AI-powered idea, I bring vision to life with clean,
                    reliable, and future-proof development.
                    </p>
                    <p>Want the full story? Grab my resume below, consider it the director’s cut 🎬.</p>
                    <p>It’s packed with my experience, tech stack, and the kind of impact I can bring to you.</p>
                    <button
                    onClick={handleDownload}
                    className="bg-blue-800 hover:bg-blue-600 w-40 h-10 sm:h-[40px] md:h-[40px] lg:h-[40px] px-2 rounded-lg cursor-pointer"
                    >
                    Download Resume
                    </button>
                </div>
                </div>
                <div className="relative w-full h-120 md:h-130 mx-auto flex items-center justify-center my-25 sm:my-0 md:basis-[55%]">
                <div className="bg-transparent border-2 w-[75%] md:w-[75%] lg:w-[90%] h-[245px] md:h-[245px] lg:h-[300px] max-w-[430px] max-h-[300px] rotate-10 absolute left-5 md:left-5 lg:left-0 xl:left-10 sm:left-20 sm:w-80 sm:h-85 rounded-2xl"></div>
                <div className="bg-[#5454D4] w-[70%] md:w-[75%] lg:w-[90%] h-[245px] md:h-[245px] lg:h-[300px] max-w-[430px] max-h-[300px] absolute top-30 md:top-30 rotate-11 translate-y-15 -translate-x-0 z-10 sm:h-85 sm:top-10 sm:w-80 rounded-2xl"></div>
                <img
                    src={IgweImage}
                    className="z-20 absolute object-cover top-10 md:-top-1 lg:top-12 sm:-top-0 w-[85%] h-[78%] max-w-[430px] sm:w-[430px] md:w-[330px] lg:w-[430px]"
                    alt="Main hero"
                />
                <img src={vector} width={50} height={50} alt="vector icon" className="absolute top-0 left-0 z-11" />
                <img src={circle} width={50} height={50} alt="circle icon" className="absolute top-0 right-0 z-11" />
                <img src={play} width={50} height={30} alt="play icon" className="absolute bottom-0 left-0 z-11" />
                <img src={add} width={50} height={50} alt="add icon" className="absolute bottom-6 right-0 z-11" />
                </div>
            </div>
            <div id="about" className="flex flex-col justify-between sm:flex-row sm:justify-between sm:my-20 mb-25">
                <h3 className="w-9/12 mb-7 font-medium text-3xl sm:w-4/12">Why Work With Me?</h3>
                <p className="w-12/12 sm:w-6/12 text-sm leading-normal sm:text-base">
                I combine technical expertise with a builder’s mindset. I don’t just deliver features, I deliver outcomes. My
                code is scalable, my designs are user-focused, and my approach is all about helping businesses grow. If you’re
                looking for someone who takes ownership, adapts fast, and loves turning ideas into polished products - that’s me.
                Shoot me a message and let’s build something amazing together.
                </p>
            </div>
            <div className="my-20">
                <div className="aspect-video w-full relative pb-20">
                <iframe
                    src="https://www.youtube.com/embed/JjuN6canRnQ?si=196WCW89qj5zw1uc"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                ></iframe>
                </div>
            </div>
            <div id="services" className="relative font-medium text-3xl text-center sm:text-center sm:w-9/12 mx-auto">
                <p>My Specialties</p>
                <img className="sm:hidden absolute -top-5" src={play} width={40} height={50} alt="play image" />
                <img className="sm:hidden absolute -bottom-7 right-2 rotate-30" src={add} width={30} height={50} alt="add image" />
            </div>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8 my-10">
                <div className="basis-full sm:basis-[30%] p-6 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4">
                    <div className="relative w-20 h-20 flex items-center justify-center">
                    <span className="absolute inset-0 rounded-full bg-cyan-400 opacity-30 animate-ripple"></span>
                    <span className="absolute inset-0 rounded-full bg-cyan-400 opacity-20 animate-ripple delay-200"></span>
                    <span className="absolute inset-0 rounded-full bg-cyan-400 opacity-10 animate-ripple delay-400"></span>
                    <div className="relative z-10 w-20 h-20 flex items-center justify-center rounded-full bg-cyan-100/30 shadow-lg">
                        <FaCode className="text-cyan-400 text-4xl drop-shadow" />
                    </div>
                    </div>
                </div>
                <h2 className="font-medium text-2xl mt-7 mb-2">Web Development</h2>
                <p className="text-sm leading-normal sm:text-base">
                    From pixel-perfect frontends to scalable backends, I build web applications that don’t just look good, they
                    perform flawlessly. Clean, maintainable, and optimized for growth.
                </p>
                </div>
                <div className="basis-full sm:basis-[30%] p-6 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4">
                    <div className="relative w-20 h-20 flex items-center justify-center">
                    <span className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ripple"></span>
                    <span className="absolute inset-0 rounded-full bg-green-400 opacity-20 animate-ripple delay-200"></span>
                    <span className="absolute inset-0 rounded-full bg-green-400 opacity-10 animate-ripple delay-400"></span>
                    <div className="relative z-10 w-20 h-20 flex items-center justify-center rounded-full bg-green-100/30 shadow-lg">
                        <FaMobileAlt className="text-green-400 text-4xl drop-shadow" />
                    </div>
                    </div>
                </div>
                <h2 className="font-medium text-2xl mt-7 mb-2">Mobile App Development</h2>
                <p className="text-sm leading-normal sm:text-base">
                    Mobile is where your users live. I craft responsive, intuitive apps that work seamlessly across devices,
                    ensuring your brand is always in their hands.
                </p>
                </div>
                <div className="basis-full sm:basis-[30%] p-6 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4">
                    <div className="relative w-20 h-20 flex items-center justify-center">
                    <span className="absolute inset-0 rounded-full bg-pink-400 opacity-30 animate-ripple"></span>
                    <span className="absolute inset-0 rounded-full bg-pink-400 opacity-20 animate-ripple delay-200"></span>
                    <span className="absolute inset-0 rounded-full bg-pink-400 opacity-10 animate-ripple delay-400"></span>
                    <div className="relative z-10 w-20 h-20 flex items-center justify-center rounded-full bg-pink-100/30 shadow-lg">
                        <FaRobot className="text-pink-400 text-4xl drop-shadow" />
                    </div>
                    </div>
                </div>
                <h2 className="font-medium text-2xl mt-7 mb-2">LLM Apps Development</h2>
                <p className="text-sm leading-normal sm:text-base">
                    AI isn’t the future, it’s here. I develop AI-powered apps that integrate large language models into real
                    products, helping businesses automate, scale, and innovate faster than ever.
                </p>
                </div>
            </div>
            <div>
                <h2 id="projects" className="text-center font-medium text-3xl">Awesome Portfolio</h2>
                <div className="sm:w-11/12 mx-auto my-10 grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-6">
                {projects.map((project, projectIndex) => {
                    const currentSlide = currentSlides[projectIndex] || 0;

                    const handleMouseEnter = () => {
                    if (intervalRefs.current[projectIndex]) {
                        clearInterval(intervalRefs.current[projectIndex]);
                    }
                    };
                    const handleMouseLeave = () => {
                    intervalRefs.current[projectIndex] = setInterval(() => {
                        setCurrentSlides((prev) => {
                        const currentSlide = prev[projectIndex] || 0;
                        const nextSlide = (currentSlide + 1) % project.image.length;
                        return { ...prev, [projectIndex]: nextSlide };
                        });
                    }, 3000);
                    };

                    return (
                    <div
                        key={projectIndex}
                        className="bg-white/15 p-4 rounded-lg min-h-[378px] sm:min-h-[378px] flex flex-col justify-between transition-all duration-200 hover:scale-105"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="relative overflow-hidden w-full max-h-[245px]">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {project.image.map((img, imgIndex) => (
                            <img
                                key={imgIndex}
                                src={img}
                                className="w-full h-full object-cover rounded-md"
                                alt={`Project UI ${imgIndex + 1}`}
                            />
                            ))}
                        </div>
                        </div>
                        <p className="text-sm leading-normal sm:text-base min-h-[120px] sm:min-h-[180px] break-words pt-4">
                        {project.description}
                        </p>
                        <div className="flex justify-center space-x-4 mt-4">
                        {project.url && (
                            <div className="relative group">
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:text-blue-400 transition-all duration-200 transform hover:scale-110"
                                aria-label="View live project"
                            >
                                <FaExternalLinkAlt className="text-xl" />
                            </a>
                            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2">
                                View Live
                            </span>
                            </div>
                        )}
                        {project.githubUrl && (
                            <div className="relative group">
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-900 hover:text-gray-500 transition-all duration-200 transform hover:scale-110"
                                aria-label="View source code on GitHub"
                            >
                                <FaGithub className="text-xl" />
                            </a>
                            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2">
                                View Code
                            </span>
                            </div>
                        )}
                        {project.androidUrl && (
                            <div className="relative group">
                            <a
                                href={project.androidUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#3DDC84] hover:text-[#2AB672] transition-all duration-200 transform hover:scale-110"
                                aria-label="Download Android app"
                            >
                                <FaAndroid className="text-xl w-6 h-6" />
                            </a>
                            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2">
                                Android App
                            </span>
                            </div>
                        )}
                        {project.iosUrl && (
                            <div className="relative group">
                            <a
                                href={project.iosUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#A2AAAD] hover:text-[#F5F5F5] transition-all duration-200 transform hover:scale-110"
                                aria-label="Visit iOS App Store"
                            >
                                <FaApple className="text-xl" />
                            </a>
                            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2">
                                iOS App
                            </span>
                            </div>
                        )}
                        </div>
                    </div>
                    );
                })}
                </div>
            </div>
            <div id="contact" className="bg-white/15 h-60 grid place-items-center sm:w-80 mx-auto rounded-3xl my-15">
                <div className="flex flex-col h-47 justify-between text-center">
                <h2 className="font-medium text-2xl">Let’s Build Something Amazing</h2>
                <p className="font-medium">okezekingsley3@gmail.com</p>
                <p>+234 9026627307</p>
                <div className="flex flex-row justify-between w-35 mx-auto">
                    <a href="https://www.linkedin.com/in/kingsley-okeze-b4b825263/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className="text-xl cursor-pointer" />
                    </a>
                    <a href="https://github.com/KingsleyOkeze" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-xl cursor-pointer" />
                    </a>
                    <a href="https://x.com/KingsleyTheDev" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-xl cursor-pointer" />
                    </a>
                    <a href="https://wa.me/2349026627307" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="text-xl cursor-pointer" />
                    </a>
                </div>
                </div>
            </div>
            <footer className="h-15 text-center flex flex-col justify-between mt-20 mb-10">
                &copy; {year} <p>All rights reserved</p>
            </footer>
        </div>
    );
}

export default Home;