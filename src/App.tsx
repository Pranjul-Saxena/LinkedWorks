import React, { useState, useEffect } from "react";
import { Rocket } from "lucide-react";
import MultiStepForm from "./components/MultiStepForm";
import FormList from "./components/FormList";
import { getFormData } from "./services/firebaseService";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs1";
import ModalWrapper from "./components/ModalWrapper";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import FeatureGrid from "./components/FeatureGrid";
import Navbar from './components/Navbar';

function App() {
  const [ideasCount, setIdeasCount] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [showFormList, setShowFormList] = useState(false);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const data = await getFormData();
        setIdeasCount(data.length);
      } catch (err) {
        console.error("Error fetching submissions:", err);
      }
    };

    fetchSubmissions();
  }, []);

  const handleSubmitClick = () => setShowForm(true);
  const handleViewSubmissions = () => setShowFormList(true);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      {/* Form Modal */}
      <ModalWrapper
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        title="Submit Your Idea"
      >
        <MultiStepForm />
      </ModalWrapper>

      {/* Form List Modal */}
      <ModalWrapper
        isOpen={showFormList}
        onClose={() => setShowFormList(false)}
        title="Submitted Ideas"
        maxWidth="max-w-6xl"
      >
        <FormList />
      </ModalWrapper>

      {/* Hero Section */}
      <HeroSection
        ideasCount={ideasCount}
        onSubmitClick={handleSubmitClick}
        onViewSubmissions={handleViewSubmissions}
      />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Feature Grid */}
      <div className="text-white p-0 m-4">
        <div className="relative overflow-hidden px-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 text-center">
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
              <button
                onClick={handleSubmitClick}
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2"
              >
                Get Started <Rocket className="w-5 h-5 text-blue-100" />
              </button>
            </div>
          </div>
          <FeatureGrid />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AboutUs />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
