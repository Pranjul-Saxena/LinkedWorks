import React from 'react';
import { useFormContext } from 'react-hook-form';

interface AdditionalInfoProps {
  methods: any;
}

const AdditionalInfo: React.FC<AdditionalInfoProps> = ({ methods }) => {
  const { register, formState: { errors } } = methods;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Additional Information</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Market Research
          </label>
          <textarea
            {...register('marketResearch')}
            rows={4}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
            placeholder="Describe your market research findings, target market size, and potential growth opportunities..."
          />
          {errors.marketResearch && (
            <p className="mt-1 text-sm text-red-500">{errors.marketResearch.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Competitors Analysis
          </label>
          <textarea
            {...register('competitors')}
            rows={4}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
            placeholder="List your main competitors and explain how your solution differs from existing alternatives..."
          />
          {errors.competitors && (
            <p className="mt-1 text-sm text-red-500">{errors.competitors.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Unique Value Proposition
          </label>
          <textarea
            {...register('uniqueValue')}
            rows={4}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
            placeholder="Explain what makes your solution unique and why customers would choose it over alternatives..."
          />
          {errors.uniqueValue && (
            <p className="mt-1 text-sm text-red-500">{errors.uniqueValue.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo; 