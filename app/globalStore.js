import {create} from 'zustand';

const useIdStore = create((set) => ({
   uuid:null,
    setId: (newId) => set({ uuid: newId }),
}));

export const useFormDataStore = create((set) => ({
    // Initial state
    formData: {},
  
    // Action to update the entire form data object
    setFormData: (newFormData) => set({ formData: newFormData }),
  
    // Action to update a specific field in the form data
    updateFormData: (field, value) => set((state) => ({
      formData: {
        ...state.formData,
        [field]: value,
      },
    })),
  
    // Action to reset the form data to initial state
    resetFormData: () => set({
      formData: {},
    }),
  
    // Action to set the final form data
    setFinalFormData: (finalFormData) => set({ formData: finalFormData }),
  }));

export default useIdStore;

export const useLoginStore = create((set) => ({
    isLoggedIn:null,
     setIsLoggedIn: (newId) => set({ isLoggedIn: newId }),
 }));
 

