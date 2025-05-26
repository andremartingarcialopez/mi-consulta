import { create, } from "zustand";
import type { DraftPatient, Patient } from "../types/types";
import { v4 } from "uuid";
import { devtools } from "zustand/middleware";



type usePatientStoreProps = {
    patients: Patient[],
    editID: Patient["id"]
    addPatient: (data: DraftPatient) => void
    removePatient: (id: Patient["id"]) => void
    getEditID: (id: Patient["id"]) => void
}

export const usePatientStore = create<usePatientStoreProps>()(devtools((set) => ({
    patients: [],
    editID: "",

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
    },

    getEditID: (id) => {
        set(() => ({
            editID: id
        }))
    }

})));
