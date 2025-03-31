import * as yup from 'yup';

export const personalInfoSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
});

export const projectInfoSchema = yup.object().shape({
  projectTitle: yup.string().required('Project title is required'),
  projectDescription: yup.string().required('Project description is required'),
  targetAudience: yup.string().required('Target audience is required'),
  problemStatement: yup.string().required('Problem statement is required'),
  solution: yup.string().required('Solution description is required'),
});

export const technicalDetailsSchema = yup.object().shape({
  techStack: yup.array().of(yup.string()).min(1, 'Select at least one technology'),
  developmentTimeline: yup.string().required('Development timeline is required'),
  budget: yup.string().required('Budget information is required'),
});

export const additionalInfoSchema = yup.object().shape({
  marketResearch: yup.string().required('Market research is required'),
  competitors: yup.string().required('Competitor information is required'),
  uniqueValue: yup.string().required('Unique value proposition is required'),
}); 