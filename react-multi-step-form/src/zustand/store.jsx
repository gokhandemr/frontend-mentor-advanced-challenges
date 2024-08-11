import {create} from "zustand";

export const useDataStore = create((set) => ({
  personalInfo: null,
  selectPlan: null,
  pickAddOns: null,
  setPersonalInfo: (newPersonalInfo) => set({personalInfo: newPersonalInfo}),
  setSelectPlan: (newSelectPlan) => set({selectPlan: newSelectPlan}),
  setPickAddOns: (newPickAddOns) => set({pickAddOns: newPickAddOns}),
}));
