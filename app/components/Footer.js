"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-gray-700/40 dark:border-gray-600/40">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse" />

      <motion.div
        className="max-w-6xl mx-auto py-10 px-6 flex flex-col items-center space-y-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex space-x-6">
          <a href="https://github.com/Ruth376" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-400 transition text-2xl">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ruth-rojas-py/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-400 transition text-2xl">
            <FaLinkedin />
          </a>
          <a href="mailto:rojas.ruth2@gmail.com" className="text-gray-500 hover:text-cyan-400 transition text-2xl">
            <FaEnvelope />
          </a>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Ruth Rojas — Desarrolladora backend y fullstack en formación.
        </p>
      </motion.div>
    </footer>
  );
}
