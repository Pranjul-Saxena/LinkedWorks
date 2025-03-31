import { create } from 'zustand';

interface FormData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // Project Information
  projectTitle: string;
  projectDescription: string;
  targetAudience: string;
  problemStatement: string;
  solution: string;
  
  // Technical Details
  techStack: string[];
  developmentTimeline: string;
  budget: string;
  
  // Additional Information
  marketResearch: string;
  competitors: string;
  uniqueValue: string;
}

interface FormStore {
  currentStep: number;
  formData: FormData;
  setCurrentStep: (step: number) => void;
  updateFormData: (data: Partial<FormData>) => void;
  resetForm: () => void;
}

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  projectTitle: '',
  projectDescription: '',
  targetAudience: '',
  problemStatement: '',
  solution: '',
  techStack: [],
  developmentTimeline: '',
  budget: '',
  marketResearch: '',
  competitors: '',
  uniqueValue: '',
};

export const useFormStore = create<FormStore>((set) => ({
  currentStep: 1,
  formData: initialFormData,
  setCurrentStep: (step) => set({ currentStep: step }),
  updateFormData: (data) => 
    set((state) => ({ 
      formData: { ...state.formData, ...data } 
    })),
  resetForm: () => set({ 
    currentStep: 1, 
    formData: initialFormData 
  }),
}));