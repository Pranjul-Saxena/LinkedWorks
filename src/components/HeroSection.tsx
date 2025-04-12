import React from 'react';
import { Rocket } from 'lucide-react';

interface HeroSectionProps {
  ideasCount: number;
  onSubmitClick: () => void;
  onViewSubmissions: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  ideasCount,
  onSubmitClick,
  onViewSubmissions,
}) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900/20" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center mb-8">
          <Rocket className="w-12 h-12 text-blue-400" />
          <h1 className="text-3xl font-bold ml-3">Linked Works</h1>
        </div>

        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Your Idea. Your Impact.
          <br />
          Be One of the First 100 Innovators.
        </h2>

        <p className="text-xl text-gray-300 mb-8">
          We are collecting groundbreaking software-based ideas.
          <br />
          Share yours and be part of the movement.
        </p>

        <div className="mb-12">
          <div className="inline-block px-8 py-4 bg-gray-800/50 backdrop-blur rounded-2xl border border-gray-700">
            <span className="text-3xl font-bold text-blue-400">
              {ideasCount}
            </span>
            <span className="text-3xl font-bold text-gray-500">/100</span>
            <p className="text-sm text-gray-400 mt-1">Ideas Submitted</p>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={onSubmitClick}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Submit Your Idea
          </button>
          <button
            onClick={onViewSubmissions}
            className="px-8 py-4 bg-gray-700 hover:bg-gray-600 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View Submissions
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 