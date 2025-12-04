import { NavLink, Outlet } from "react-router"
import LogoRickAndMorty from '@/assets/rick-and-morty-logo.svg'
import FooterBg from '@/assets/bg-rick-and-morty.webp';
import GithubIcon from '@/assets/github-mark-white.svg';

export default function MainLayout(){

    const menuLinks = [
        {
            label : "Personajes",
            link    : "/characters",
        }
    ];

    const authors = [
        {
            names : "Sergio silva sanchez",
            github : "https://github.com/Cotopaco1",
            profession : "Full stack web developer"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <header className=" mb-10 bg-secondary py-4 h-20">
                <div className="container flex gap-4 items-center justify-between h-full">
                    {/* LOGO */}
                    <div className="h-full">
                        <img className="max-h-full" src={LogoRickAndMorty} alt="logo" />
                    </div>
                    {/* Navegacion */}
                    <nav className="h-full flex items-center justify-center">
                        <ul>
                            {menuLinks.map(link => (
                                <li className="">
                                    <NavLink to={link.link} className="">{link.label}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>

                </div>
            </header>
            <main className="container flex-1 min-h-[80vh]">
                <Outlet/>
            </main>
            <footer className="h-120 bg-secondary relative mt-10 py-4 md:py-8">
                <img src={FooterBg} alt="bg-footer" className="absolute inset-0 object-cover w-full h-full brightness-50" />
                <div className="relative w-full h-full container">
                    <h2 className="text-white text-3xl md:text-5xl mb-6 md:mb-16">Rick and Morty React Wiki</h2>
                    <div className="grid md:grid-cols-2 gap-6 md:gap-0 text-white">
                        {/* Creditos a */}
                        <div className="flex flex-col  justify-center ">
                            <h2 className="header_subtitle">Creditos</h2>
                            <ul className="">
                                {authors.map(author => (
                                    <li className="text-xl md:text-2xl flex flex-col gap-2">
                                        <p>- {author.names} <span className="italic text-sm">{author.profession}</span></p>
                                        <div className="flex items-center justify-start pl-4">
                                            <a href={author.github}><img width="30" src={GithubIcon} alt="Github" /></a>

                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Stack and Technologies */}
                        <div>
                            <h2 className="header_subtitle">Stack utilizado</h2>
                            <p>React, React-Router, TailwindCSS, Vite</p>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
        
    )
}