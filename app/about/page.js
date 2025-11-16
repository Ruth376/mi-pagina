"use client";
import { motion } from "framer-motion";
import { useTranslations } from "../i18n-provider";

const skills = [
  { name: "Java", level: "Expert" },
  { name: "Spring Boot", level: "Expert" },
  { name: "Docker", level: "Intermediate" },
  { name: "Git", level: "Advanced" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "Node.js", level: "Learning" },
  { name: "React", level: "Learning" },
  { name: "Next.js", level: "Learning" },
  { name: "Tailwind CSS", level: "Learning" },
];

const getLevelColor = (level) => {
  switch (level) {
    case "Expert":
    case "Experto":
      return "bg-cyan-600 dark:bg-cyan-500 text-white";
    case "Advanced":
    case "Avanzado":
      return "bg-blue-600 dark:bg-blue-500 text-white";
    case "Intermediate":
    case "Intermedio":
      return "bg-green-600 dark:bg-green-500 text-white";
    case "Learning":
    case "Aprendiendo":
      return "bg-purple-600 dark:bg-purple-500 text-white";
    default:
      return "bg-gray-600 dark:bg-gray-500 text-white";
  }
};

export default function AboutPage() {
  const { t } = useTranslations();

  return (
    <section
      id="about"
      className="max-w-6xl mx-auto py-16 px-6 transition-colors duration-300"
    >
      <motion.h2
        className="text-4xl font-bold text-cyan-500 dark:text-cyan-400 mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t("title", "about")}
      </motion.h2>

      <motion.p
        className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto mb-14 text-center leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {t("description1", "about")} <strong>Java + Spring Boot</strong>, <strong>Docker</strong>, <strong>Git</strong> y <strong>MongoDB</strong>. {t("description2", "about")} <strong>Node.js</strong>, <strong>React</strong> y <strong>Next.js</strong>.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className={`p-5 rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 ${getLevelColor(
              t(`skillLevel${skill.level}`, "about")
            )}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-1">{skill.name}</h3>
            <p className="text-sm opacity-90">{t(`skillLevel${skill.level}`, "about")}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
