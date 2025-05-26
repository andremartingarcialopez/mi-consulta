import type { Patient } from "../types/types"
import PatientDetailsIteam from "./PatientDetailsIteam"

type PatientsDetailsProps = {
    patient: Patient
}

export default function PatientsDetails({ patient }: PatientsDetailsProps) {
    return (
        <div className="border-b border-b-blue-700/60 flex flex-col space-y-2 py-2">
            <PatientDetailsIteam label= "Paciente" infoValue= {patient.name}/>
            <PatientDetailsIteam label= "Email" infoValue= {patient.email}/>
            <PatientDetailsIteam label= "Telefono" infoValue= {patient.phone}/>
            <PatientDetailsIteam label= "Fecha" infoValue= {patient.date.toString()}/>
            <PatientDetailsIteam label= "Sintomas" infoValue= {patient.symptoms}/>

        </div>
    )
}
