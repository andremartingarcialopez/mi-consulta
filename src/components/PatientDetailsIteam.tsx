type PatientDetailsIteamProps = {
    label: string,
    infoValue: string
}

export default function PatientDetailsIteam({ label, infoValue }: PatientDetailsIteamProps) {
    return (
         <p className="font-semibold text-gray-600 lg:text-lg">{label}: <span className="font-normal">{infoValue}</span></p>
    )
}
