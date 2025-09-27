import React from "react";

export default function Footer() {
  return (
    <footer className="mt-12 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
  <div className="text-sm text-gray-800 dark:text-gray-300">Built with <span aria-hidden>💗</span> by the Krea AI</div>

        <div className="flex items-center space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white text-sm font-medium"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-gray-200 hover:text-blue-700 text-sm font-medium"
            aria-label="Twitter"
          >
            Twitter
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 dark:text-gray-200 hover:text-indigo-700 text-sm font-medium"
            aria-label="Discord"
          >
            Discord
          </a>
        </div>
      </div>
    </footer>
  );
}
