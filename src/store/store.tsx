import { create, } from "zustand";
import type { DraftPatient, Patient } from "../types/types";
import { v4 } from "uuid";



type usePatientStoreProps = {
    patients: Patient[]
    addPatient: (data: DraftPatient) => void
    removePatient: (id: Patient["id"]) => void
}

export const usePatientStore = create<usePatientStoreProps>((set) => ({
    patients: [],

    addPatient: (data) => {
        set((state) => ({
            ...state,
            patients: [...state.patients, { ...data, id: v4() }]
        }));
    },

    removePatient: (id) => {
        set((state) => ({
            ...state,
            patients: state.patients.filter(patient => patient.id !== id)
        }))
    }
    
}));
