import React from 'react';
import { useFormContext } from 'react-hook-form';

interface PersonalInfoProps {
  methods: any;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ methods }) => {
  const { register, formState: { errors } } = methods;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Personal Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            First Name
          </label>
          <input
            type="text"
            {...register('firstName')}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Last Name
          </label>
          <input
            type="text"
            {...register('lastName')}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            {...register('email')}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            {...register('phone')}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo; 