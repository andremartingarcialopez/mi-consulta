import type { Patient } from "../types/types"

type PatientsDetailsProps = {
    patient: Patient
}

export default function PatientsDetails({ patient }: PatientsDetailsProps) {
    return (
        <div>
            <p>{patient.name}</p>
        </div>
    )
}
