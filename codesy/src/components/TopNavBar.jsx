import React from 'react';
import { NavLink } from 'react-router-dom';
import { useUI } from '../context/UIContext';
import logo from '../assets/charanilogo.jpg'; // Import the logo


const TopNavBar = () => {
    const { openContactModal } = useUI();

    return (
        <header className="fixed top-0 left-0 right-0 h-[70px] bg-slate-900/80 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-8 z-50 shadow-md">
            <div className="flex items-center gap-4">
                {/* Logo Section */}
                <div className="flex items-center gap-3">
                    {/* Placeholder for logo - using a styled text or img if available */}
                    <img src={logo} alt="Codeasy Logo" className="h-10 w-auto rounded-lg shadow-lg shadow-indigo-500/20" />
                    {/* If user wants the image back later: <img src="./assets/logo.png" alt="Codesy Logo" className="h-10 w-auto" /> */}
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
                        Codeasy
                    </h1>
                    {/* <p className="text-sm text-slate-400">Empowering the next generation of tech leaders through industry-aligned training.</p> */}
                </div>
            </div>

            <nav className="flex items-center gap-6">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isActive
                            ? 'bg-white/10 text-white'
                            : 'text-slate-400 hover:text-white hover:bg-white/5'
                        }`
                    }
                >
                    About Codeasy
                </NavLink>

                <button
                    onClick={openContactModal}
                    className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-300"
                >
                    Contact Us
                </button>
            </nav>
        </header>
    );
};

export default TopNavBar;
