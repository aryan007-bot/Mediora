import React from 'react';
import { Github, Globe, Mail } from 'lucide-react';
import { PageContainer } from './ui/PageContainer';

export default function About() {
  return (
    <PageContainer
      icon={<Globe className="w-6 h-6 text-blue-600" />}
      title="About Medvora"
    >
      <div className="max-w-2xl mx-auto space-y-8">
        <section className="prose prose-blue max-w-none">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3">About Mediora</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Mediora is an AI-first personal healthcare assistant designed to help users understand medical information quickly and confidently. It combines natural language understanding with curated medical knowledge to provide features such as symptom guidance, medication interaction checks, medical-term explanations, and concise report summaries.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Our goal is to make trustworthy health information accessible while encouraging users to consult licensed professionals for diagnosis and treatment. Medvora focuses on clarity, privacy, and useful next-steps so people can make better informed decisions about their health.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Maintainers</h3>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900 rounded-lg p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <img
                src="/Screenshot 2025-10-09 223551.png"
                alt="Medvora logo"
                className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-lg"
              />
              <div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200">Mediora Team</h4>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Mediora is maintained by a small team focused on building practical AI tools for healthcare. We prioritize accuracy, privacy, and clear next steps so users can make better informed choices.
                </p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <a
                    href="mailto:dagararyan947@gmail.com"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-700 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Report an issue</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3">Technologies Used</h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
            <li>React with TypeScript for the frontend</li>
            <li>Tailwind CSS for styling</li>
            <li>Google's Gemini AI API for intelligent analysis</li>
            <li>Lucide React for beautiful icons</li>
            <li>React Markdown for formatted text rendering</li>
          </ul>
        </section>
      </div>
    </PageContainer>
  );
}