"use client";
import { motion } from "framer-motion";
import { useTranslations } from "./i18n-provider"; // CORRECTO

export default function Home() {
  const { t } = useTranslations("common");

  const skills = [
    "Java", "Spring Boot", "Docker", "Git", "MongoDB",
    "Node.js", "React", "Next.js", "Tailwind CSS"
  ];

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen text-center space-y-6 px-4"
    >
      <motion.img
        src="/mi-foto.jpg"
        alt={t("greeting")}
        className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-cyan-500 dark:border-cyan-400"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      <motion.h1
        className="text-5xl font-extrabold text-cyan-400 mt-4 dark:text-cyan-500"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {t("greetingPrefix")} <span className="text-gray-900 dark:text-gray-200">Ruth Rojas</span>!
      </motion.h1>

      <motion.p
        className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {t("intro")}
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-3 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        {skills.map((skill, i) => (
          <span
            key={i}
            className="px-4 py-2 bg-cyan-600 dark:bg-cyan-500 text-white rounded-full text-sm font-medium shadow-md hover:bg-cyan-500 dark:hover:bg-cyan-400 transition"
          >
            {skill}
          </span>
        ))}
      </motion.div>

      <motion.div
        className="flex space-x-4 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <a
          href="https://github.com/Ruth376"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 dark:bg-gray-800 text-white px-5 py-3 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-700 transition shadow-md"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/ruth-rojas-py/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cyan-600 dark:bg-cyan-500 text-white px-5 py-3 rounded-lg hover:bg-cyan-500 dark:hover:bg-cyan-400 transition shadow-md"
        >
          LinkedIn
        </a>
      </motion.div>

      <motion.a
        href="/projects"
        className="mt-10 inline-block border border-cyan-500 dark:border-cyan-400 text-cyan-400 dark:text-cyan-300 px-6 py-3 rounded-lg hover:bg-cyan-500 dark:hover:bg-cyan-400 hover:text-white transition shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        {t("seeProjects")}
      </motion.a>
    </section>
  );
}
