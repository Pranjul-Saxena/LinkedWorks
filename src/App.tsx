import React, { useState, useEffect } from "react";
import { Rocket, ArrowDown, Code2, Users, Zap } from "lucide-react";
import MultiStepForm from "./components/MultiStepForm";
import FormList from "./components/FormList";

function App() {
  const [ideasCount, setIdeasCount] = useState(45);
  const [isVisible, setIsVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showFormList, setShowFormList] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const position = aboutSection.getBoundingClientRect();
        setIsVisible(position.top < window.innerHeight - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmitClick = () => {
    setShowForm(true);
  };

  const handleViewSubmissions = () => {
    setShowFormList(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Submit Your Idea</h2>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <MultiStepForm />
            </div>
          </div>
        </div>
      )}

      {/* Form List Modal */}
      {showFormList && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 rounded-xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Submitted Ideas</h2>
                <button
                  onClick={() => setShowFormList(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <FormList />
            </div>
          </div>
        </div>
      )}

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
              <span className="text-3xl font-bold text-blue-400">
                {ideasCount}
              </span>
              <span className="text-3xl font-bold text-gray-500">/100</span>
              <p className="text-sm text-gray-400 mt-1">Ideas Submitted</p>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={handleSubmitClick}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Submit Your Idea
            </button>
            <button
              onClick={handleViewSubmissions}
              className="px-8 py-4 bg-gray-700 hover:bg-gray-600 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View Submissions
            </button>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            {/* <ArrowDown className="w-6 h-6 text-gray-400" /> */}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div
        id="about"
        className={`min-h-screen flex items-center justify-center px-4 py-2 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="max-w-4xl">
          <div className="max-w-7xl m-0 ro mx-auto px-4 sm:px-6 lg:px-8 ">
            <h2 className="pt-16 pb-8 text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-700 backdrop-blur">
                <div className="h-16 w-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-check-circle h-8 w-8 text-indigo-600"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <path d="m9 11 3 3L22 4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  1. Submit Your Idea
                </h3>
                <p className="text-gray-600">
                  Share your software idea with our community and get initial
                  feedback from experts.
                </p>
              </div>
              <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-700 backdrop-blur">
                <div className="h-16 w-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-trending-up h-8 w-8 text-indigo-600"
                  >
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  2. Build &amp; Scale
                </h3>
                <p className="text-gray-600">
                  Collaborate with experts to develop and scale your solution
                  using our platform tools.
                </p>
              </div>
              <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-700 backdrop-blur">
                <div className="h-16 w-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-award h-8 w-8 text-indigo-600"
                  >
                    <circle cx="12" cy="8" r="6"></circle>
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  3. Launch &amp; Succeed
                </h3>
                <p className="text-gray-600">
                  Launch your product in our marketplace and reach a global
                  audience of customers.
                </p>
              </div>
            </div>
          </div>
          <div className="text-white p-0 m-4">
            <div className="relative overflow-hidden px-4">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-300 mb-6">
                  Turn Your Ideas Into
                  <span className="text-indigo-600"> Reality</span>
                </h1>
                <p className="text-xl text-gray-500 max-w-3xl mx-auto mb-8">
                  Join a community of innovators, entrepreneurs, and developers.
                  Build, collaborate, and scale your software ideas on the
                  Linked Work platform.
                </p>
                <div className="flex gap-4 justify-center">
                  <button onClick={handleSubmitClick}
                  className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2">
                    Get Started <Rocket className="w-5 h-5 text-blue-100" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-700 backdrop-blur">
                  <Code2 className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Innovate</h3>
                  <p className="text-gray-400">
                    Transform your software ideas into reality with our
                    comprehensive platform.
                  </p>
                </div>
                <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-700 backdrop-blur">
                  <Users className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Collaborate</h3>
                  <p className="text-gray-400">
                    Connect with experts and like-minded innovators in our
                    growing community.
                  </p>
                </div>
                <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-700 backdrop-blur">
                  <Zap className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Scale</h3>
                  <p className="text-gray-400">
                    Take your project from concept to successful venture with
                    our support.
                  </p>
                </div>
              </div>
              {/* About */}
              <div className="text-center space-y-6">
                <h2 className="pt-16 text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  About
                </h2>
                <p className="text-lg text-gray-300">
                  At Linked Works, we believe that every great idea deserves a
                  chance to become reality. Our platform is designed to help
                  innovators, entrepreneurs, and developers bring their
                  software-based ideas to life by providing the necessary
                  resources, support, and marketplace to scale.
                </p>
                <p className="text-lg text-gray-300">
                  Whether you're looking to submit an idea, collaborate with
                  experts, or sell your software, Linked Work ensures that your
                  journey from concept to execution is seamless and secure.
                </p>
                <p className="text-lg text-gray-300">
                  Join a community of like-minded visionaries, explore
                  opportunities across industries, and turn your ideas into
                  successful ventures. The future starts here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="text-center">
            <div className="flex justify-center items-center gap-10">
              <h3 className="text-white font-semibold text-lg mb-4">
                Linked Work
              </h3>
              <p className="text-sm">
                Empowering innovators to build the future of software, one idea
                at a time.
              </p>
            </div> */}
          {/* <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Marketplace</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div> 
          </div>*/}
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            <h3 className="text-white font-semibold text-lg mb-4">
              Linked Works
            </h3>
            <p>
              &copy; {new Date().getFullYear()} Linked Works. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

//get started button --Done
//footer   -- Done
//About us -- Done
//bg theme -- Done
// counting no.
//form handling
