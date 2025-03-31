import React from 'react';
import { useFormContext } from 'react-hook-form';

interface TechnicalDetailsProps {
  methods: any;
}

const TECHNOLOGIES = [
  'React',
  'Node.js',
  'Python',
  'Java',
  'JavaScript',
  'TypeScript',
  'AWS',
  'Docker',
  'Kubernetes',
  'MongoDB',
  'PostgreSQL',
  'Redis',
];

const TechnicalDetails: React.FC<TechnicalDetailsProps> = ({ methods }) => {
  const { register, formState: { errors } } = methods;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Technical Details</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Technology Stack
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {TECHNOLOGIES.map((tech) => (
              <label key={tech} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={tech}
                  {...register('techStack')}
                  className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                />
                <span className="text-gray-300">{tech}</span>
              </label>
            ))}
          </div>
          {errors.techStack && (
            <p className="mt-1 text-sm text-red-500">{errors.techStack.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Development Timeline
          </label>
          <select
            {...register('developmentTimeline')}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
          >
            <option value="">Select timeline</option>
            <option value="1-3 months">1-3 months</option>
            <option value="3-6 months">3-6 months</option>
            <option value="6-12 months">6-12 months</option>
            <option value="12+ months">12+ months</option>
          </select>
          {errors.developmentTimeline && (
            <p className="mt-1 text-sm text-red-500">{errors.developmentTimeline.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Budget Range
          </label>
          <select
            {...register('budget')}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
          >
            <option value="">Select budget range</option>
            <option value="Under $10,000">Under $10,000</option>
            <option value="$10,000 - $25,000">$10,000 - $25,000</option>
            <option value="$25,000 - $50,000">$25,000 - $50,000</option>
            <option value="$50,000 - $100,000">$50,000 - $100,000</option>
            <option value="Over $100,000">Over $100,000</option>
          </select>
          {errors.budget && (
            <p className="mt-1 text-sm text-red-500">{errors.budget.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechnicalDetails; 