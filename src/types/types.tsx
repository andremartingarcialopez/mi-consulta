export type Patient = {
    name: string
    email: string
    date: Date
    phone: string
    symptoms:string
    id: string
}

export type DraftPatient = Omit<Patient, "id">