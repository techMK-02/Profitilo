import React from 'react';
import { Github, Twitter, Globe, Heart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white px-4 py-10 font-sans">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 text-transparent bg-clip-text">
          Your Name
        </h1>
        <p className="mt-4 text-lg font-semibold text-gray-300">
          Let's Connect & Build Together
        </p>
        <p className="mt-4 text-gray-400">
          Building open-source tools and sharing insights about software development and modern web technologies.
        </p>

        <div className="mt-8 flex justify-center gap-8 bg-gradient-to-r from-purple-900/40 to-blue-900/30 p-4 rounded-xl shadow-xl">
          <div className="flex items-center gap-2">
            <Heart className="text-pink-400" size={20} />
            <span>800+ Stars</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="text-blue-400" size={20} />
            <span>50+ Countries</span>
          </div>
        </div>

        <div className="mt-10 space-y-4">
          <a
            href="https://github.com/your-username"
            target="_blank"
            className="flex items-center justify-between bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition"
          >
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-xl">
                <Github size={24} />
              </div>
              <div>
                <p className="font-medium">
                  GitHub
                  <span className="text-sm bg-gray-700 px-2 py-0.5 rounded ml-2">Code</span>
                </p>
                <p className="text-sm text-gray-400">Open Source Projects & Tools</p>
              </div>
            </div>
            <span className="text-gray-400">↗</span>
          </a>

          <a
            href="https://twitter.com/your-handle"
            target="_blank"
            className="flex items-center justify-between bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition"
          >
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-xl">
                <Twitter size={24} />
              </div>
              <div>
                <p className="font-medium">
                  Twitter
                  <span className="text-sm bg-gray-700 px-2 py-0.5 rounded ml-2">Updates</span>
                </p>
                <p className="text-sm text-gray-400">Crafting Digital Futures</p>
              </div>
            </div>
            <span className="text-gray-400">↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
