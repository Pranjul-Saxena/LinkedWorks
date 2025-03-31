import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useFormStore } from '../store/formStore';
import PersonalInfo from './form-steps/PersonalInfo';
import ProjectInfo from './form-steps/ProjectInfo';
import TechnicalDetails from './form-steps/TechnicalDetails';
import AdditionalInfo from './form-steps/AdditionalInfo';
import { personalInfoSchema, projectInfoSchema, technicalDetailsSchema, additionalInfoSchema } from '../validation/formSchema';

const MultiStepForm: React.FC = () => {
  const { currentStep, setCurrentStep, formData, updateFormData } = useFormStore();
  const totalSteps = 4;

  const methods = useForm({
    defaultValues: formData,
    resolver: yupResolver(
      currentStep === 1
        ? personalInfoSchema
        : currentStep === 2
        ? projectInfoSchema
        : currentStep === 3
        ? technicalDetailsSchema
        : additionalInfoSchema
    ),
  });

  const onSubmit = async (data: any) => {
    updateFormData(data);

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Handle final submission
      try {
        // TODO: Implement API call
        console.log('Form submitted:', formData);
        // Reset form after successful submission
        useFormStore.getState().resetForm();
      } catch (error) {
        console.error('Submission error:', error);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfo methods={methods} />;
      case 2:
        return <ProjectInfo methods={methods} />;
      case 3:
        return <TechnicalDetails methods={methods} />;
      case 4:
        return <AdditionalInfo methods={methods} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-800 rounded-xl shadow-lg">
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {Array.from({ length: totalSteps }, (_, i) => (
            <div
              key={i + 1}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentStep >= i + 1
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-400'
              }`}
            >
              {i + 1}
            </div>
          ))}
        </div>
        <div className="h-2 bg-gray-700 rounded-full">
          <div
            className="h-full bg-blue-600 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
        {renderStep()}

        <div className="flex justify-between pt-6">
          <button
            type="button"
            onClick={handlePrevious}
            className={`px-6 py-2 rounded-lg ${
              currentStep === 1
                ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                : 'bg-gray-700 text-white hover:bg-gray-600'
            }`}
            disabled={currentStep === 1}
          >
            Previous
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {currentStep === totalSteps ? 'Submit' : 'Next'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm; 