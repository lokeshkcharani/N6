import StarCanvas from "@/components/auth/StarCanvas";
import '@/index.css';
import logo from '@/assets/Nexi5Logo-1.png';
import { useAppContext } from "@/hooks/useAppContext";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function AuthLayout({ children }) {

    const { isDark } = useAppContext();

    return (
        <div className="w-screen h-screen overflow-hidden bg-[#020617] relative">
            {/* Background elements */}
            <div className="absolute inset-0 z-0">
                <StarCanvas />
                {/* Logo-themed Glows */}
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-indigo-500/5 rounded-full blur-[150px]" />
            </div>

            {/* Minimal Home Button */}
            <div className="fixed top-8 left-8 z-50">
                <Link
                    to="/"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md text-white transition-all duration-300 group shadow-lg hover:bg-white/10 hover:border-white/40 hover:scale-105"
                    aria-label="Go to Home"
                >
                    <Home size={20} className="transition-transform group-hover:scale-110 text-[#3ec3ff]" />
                    <span className="text-[14px] font-bold tracking-tight">Home</span>
                </Link>
            </div>

            {/* Login / Register card container - Center perfectly on mobile, left-aligned absolute on desktop */}
            <div className="absolute inset-0 z-30 flex items-center justify-center md:left-[25%] md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 md:w-auto p-4 md:p-0">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.1 }}
                    className="w-full max-w-[440px] relative mt-16 md:mt-0"
                >
                    {children}
                </motion.div>
            </div>

            {/* background glowing logo - Hidden on mobile */}
            <div className="hidden md:block absolute top-0 right-0 h-screen w-screen overflow-hidden z-20 pointer-events-none">
                <img
                    src={logo}
                    className="absolute right-[10%] top-[0%] w-[750px] logo-glow"
                    alt="NEXI5 Glow Logo"
                />
            </div>

        </div>
    );
}