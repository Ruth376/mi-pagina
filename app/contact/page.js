"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { useTranslations } from "../i18n-provider";

export default function ContactPage() {
  const { t } = useTranslations();
  const formEndpoint = "https://formspree.io/f/xyzabcde"; // reemplaza con tu endpoint real

  return (
    <section
      id="contact"
      className="max-w-3xl mx-auto py-16 px-6 text-center transition-colors duration-300"
    >
      <motion.h2
        className="text-4xl font-bold text-cyan-500 dark:text-cyan-400 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t("title", "contact")}
      </motion.h2>

      <motion.p
        className="text-gray-700 dark:text-gray-300 text-lg mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {t("description", "contact")}
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <a
          href="mailto:rojas.ruth2@gmail.com"
          className="flex items-center justify-center gap-3 px-6 py-3 rounded-lg 
                     bg-cyan-600 dark:bg-cyan-500 text-white hover:bg-cyan-500 dark:hover:bg-cyan-400 
                     transition shadow-md"
        >
          <FaEnvelope className="text-xl" /> {t("emailButton", "contact")}
        </a>

        <a
          href="https://www.linkedin.com/in/ruth-rojas-py/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 px-6 py-3 rounded-lg 
                     bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-500 dark:hover:bg-blue-400 
                     transition shadow-md"
        >
          <FaLinkedin className="text-xl" /> LinkedIn
        </a>

        <a
          href="https://github.com/Ruth376"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 px-6 py-3 rounded-lg 
                     bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-700 dark:hover:bg-gray-600 
                     transition shadow-md"
        >
          <FaGithub className="text-xl" /> GitHub
        </a>
      </motion.div>

      <motion.form
        action={formEndpoint}
        method="POST"
        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
                   rounded-xl shadow-lg p-8 text-left space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
            {t("nameLabel", "contact")}
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 
                       bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white 
                       focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
            {t("emailLabel", "contact")}
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 
                       bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white 
                       focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
        </div>

        <div>
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
            {t("messageLabel", "contact")}
          </label>
          <textarea
            name="message"
            required
            rows="4"
            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 
                       bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white 
                       focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-cyan-600 dark:bg-cyan-500 text-white font-semibold 
                     px-6 py-3 rounded-lg hover:bg-cyan-500 dark:hover:bg-cyan-400 
                     transition shadow-md"
        >
          {t("sendButton", "contact")}
        </button>
      </motion.form>
    </section>
  );
}
