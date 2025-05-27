import { create, } from "zustand";
import type { DraftPatient, Patient } from "../types/types";
import { v4 } from "uuid";
import { devtools } from "zustand/middleware";
import { persist } from "zustand/middleware";


type usePatientStoreProps = {
    patients: Patient[],
    editID: Patient["id"]
    addPatient: (data: DraftPatient) => void
    removePatient: (id: Patient["id"]) => void
    getEditID: (id: Patient["id"]) => void
    editPatient: (draftPatient: DraftPatient) => void
}

function createPatientID(draftPatient: DraftPatient): Patient {
    return { ...draftPatient, id: v4() }
}

export const usePatientStore = create<usePatientStoreProps>()(
    devtools(
        persist(
            (set) => ({
                patients: [],
                editID: "",

                addPatient: (data) => {
                    const newPatient = createPatientID(data)
                    set((state) => ({
                        ...state,
                        patients: [...state.patients, newPatient]
                    }));
                },

                removePatient: (id) => {
                    set((state) => ({
                        ...state,
                        patients: state.patients.filter(patient => patient.id !== id)
                    }))
                },

                getEditID: (id) => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    set(() => ({
                        editID: id
                    }))
                },

                editPatient: (draftPatient) => {
                    set((state) => ({
                        ...state,
                        patients: state.patients.map(function (patient) {
                            if (patient.id == state.editID) {
                                return { ...draftPatient, id: state.editID }
                            } else {
                                return patient
                            }
                        }),
                        editID: ""
                    }))
                }

            }
            ), {
            name: "patients"
        })
    )
);
