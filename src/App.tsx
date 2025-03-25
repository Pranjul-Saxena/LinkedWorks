import React, { useState, useEffect } from 'react';
import { Rocket, ArrowDown, Code2, Users, Zap } from 'lucide-react';

function App() {
  const [ideasCount, setIdeasCount] = useState(45);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const position = aboutSection.getBoundingClientRect();
        setIsVisible(position.top < window.innerHeight - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmitClick = () => {
    // Placeholder for submission functionality
    alert('Submission form coming soon!');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
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
              <span className="text-3xl font-bold text-blue-400">{ideasCount}</span>
              <span className="text-3xl font-bold text-gray-500">/100</span>
              <p className="text-sm text-gray-400 mt-1">Ideas Submitted</p>
            </div>
          </div>

          <button
            onClick={handleSubmitClick}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Submit Your Idea
          </button>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div
        id="about"
        className={`min-h-screen flex items-center justify-center px-4 py-20 transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 backdrop-blur">
              <Code2 className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovate</h3>
              <p className="text-gray-400">Transform your software ideas into reality with our comprehensive platform.</p>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 backdrop-blur">
              <Users className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Collaborate</h3>
              <p className="text-gray-400">Connect with experts and like-minded innovators in our growing community.</p>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 backdrop-blur">
              <Zap className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Scale</h3>
              <p className="text-gray-400">Take your project from concept to successful venture with our support.</p>
            </div>
          </div>

          <div className="text-center space-y-6 mb-12">
            <p className="text-lg text-gray-300">
              At Linked Works, we believe that every great idea deserves a chance to become reality. Our platform is
              designed to help innovators, entrepreneurs, and developers bring their software-based ideas to life by
              providing the necessary resources, support, and marketplace to scale.
            </p>
            <p className="text-lg text-gray-300">
              Whether you're looking to submit an idea, collaborate with experts, or sell your software, Linked Work
              ensures that your journey from concept to execution is seamless and secure.
            </p>
            <p className="text-lg text-gray-300">
              Join a community of like-minded visionaries, explore opportunities across industries, and turn your ideas
              into successful ventures. The future starts here.
            </p>
          </div>

          <div className="text-center">
            <button
              onClick={handleSubmitClick}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Submit Your Idea
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;