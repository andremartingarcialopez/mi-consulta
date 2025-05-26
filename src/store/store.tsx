import { create, } from "zustand";
import type { DraftPatient, Patient } from "../types/types";
import { v4 } from "uuid";



type usePatientStoreProps = {
    patients: Patient[]
    addPatient: (data: DraftPatient) => void
}

export const usePatientStore = create<usePatientStoreProps>((set) => ({
    patients: [],

    addPatient: (data) => {
        set((state) => ({
            ...state,
            patients: [...state.patients, { ...data, id: v4() }]
        }));
    }
    
}));
