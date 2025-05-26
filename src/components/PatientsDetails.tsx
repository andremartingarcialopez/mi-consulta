import { usePatientStore } from "../store/store"
import type { Patient } from "../types/types"
import PatientDetailsIteam from "./PatientDetailsIteam"

type PatientsDetailsProps = {
    patient: Patient
}

export default function PatientsDetails({ patient }: PatientsDetailsProps) {

    const {removePatient, getEditID} = usePatientStore()

    return (
        <div className="border-b border-b-blue-700/60 flex flex-col space-y-2 py-2">
            <PatientDetailsIteam label="ID" infoValue={patient.id} />
            <PatientDetailsIteam label="Paciente" infoValue={patient.name} />
            <PatientDetailsIteam label="Email" infoValue={patient.email} />
            <PatientDetailsIteam label="Telefono" infoValue={patient.phone} />
            <PatientDetailsIteam label="Fecha" infoValue={patient.date.toString()} />
            <PatientDetailsIteam label="Sintomas" infoValue={patient.symptoms} />

            <div className="flex flex-col lg:flex-row lg:justify-between text-white font-semibold">
                <button onClick={() => getEditID(patient.id)} className="bg-gray-700/70 lg:w-30 rounded-lg p-1 hover:bg-gray-700/80 cursor-pointer mb-2">Editar</button>

                <button onClick={() => removePatient(patient.id)} className="bg-red-700/70 lg:w-30 rounded-lg p-1 hover:bg-red-700/80 cursor-pointer mb-2">Eliminar</button>
            </div>

        </div>
    )
}
