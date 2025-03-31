import React from 'react';
import { useFormContext } from 'react-hook-form';

interface ProjectInfoProps {
  methods: any;
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({ methods }) => {
  const { register, formState: { errors } } = methods;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Project Information</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Project Title
          </label>
          <input
            type="text"
            {...register('projectTitle')}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
          />
          {errors.projectTitle && (
            <p className="mt-1 text-sm text-red-500">{errors.projectTitle.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Project Description
          </label>
          <textarea
            {...register('projectDescription')}
            rows={4}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
          />
          {errors.projectDescription && (
            <p className="mt-1 text-sm text-red-500">{errors.projectDescription.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Target Audience
          </label>
          <textarea
            {...register('targetAudience')}
            rows={3}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
          />
          {errors.targetAudience && (
            <p className="mt-1 text-sm text-red-500">{errors.targetAudience.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Problem Statement
          </label>
          <textarea
            {...register('problemStatement')}
            rows={4}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
          />
          {errors.problemStatement && (
            <p className="mt-1 text-sm text-red-500">{errors.problemStatement.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Proposed Solution
          </label>
          <textarea
            {...register('solution')}
            rows={4}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
          />
          {errors.solution && (
            <p className="mt-1 text-sm text-red-500">{errors.solution.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo; 