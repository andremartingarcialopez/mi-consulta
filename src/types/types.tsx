export type Patient = {
    name: string
    caretaker: string
    date: Date
    symptoms:string
    email: string
    id: string
}

export type DraftPatient = Omit<Patient, "id">