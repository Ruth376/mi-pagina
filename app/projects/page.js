"use client";
import { motion } from "framer-motion";
import { useTranslations } from "../i18n-provider";

const getTechColor = (tech) => {
  switch (tech) {
    case "Java":
    case "Spring Boot":
      return "bg-cyan-600 dark:bg-cyan-500 text-white";
    case "Node.js":
    case "React":
    case "Next.js":
      return "bg-purple-600 dark:bg-purple-500 text-white";
    case "Docker":
      return "bg-blue-600 dark:bg-blue-500 text-white";
    case "MongoDB":
      return "bg-green-600 dark:bg-green-500 text-white";
    case "Tailwind CSS":
      return "bg-pink-600 dark:bg-pink-500 text-white";
    default:
      return "bg-gray-600 dark:bg-gray-500 text-white";
  }
};

export default function ProjectsPage() {
  const { t } = useTranslations(); // obtiene la función t

  const projects = [
    {
      name: t("project1.name", "projects"),
      description: t("project1.description", "projects"),
      tech: ["Node.js", "React", "Tailwind CSS"],
      link: "https://github.com/Ruth376/gestor-tareas",
    },
    {
      name: t("project2.name", "projects"),
      description: t("project2.description", "projects"),
      tech: ["Java", "Spring Boot", "MongoDB", "Docker"],
      link: "https://github.com/Ruth376/api-springboot",
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto py-16 px-6 transition-colors duration-300"
    >
      <motion.h2
        className="text-4xl font-bold text-cyan-500 dark:text-cyan-400 mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t("title", "projects")}
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="rounded-xl p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 
                       bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-2">
              {project.name}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className={`text-sm px-3 py-1 rounded-full ${getTechColor(tech)}`}
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-cyan-600 dark:text-cyan-400 font-medium hover:underline"
            >
              {t("viewProject", "projects")} →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
