import { usePatientStore } from "../store/store"
import PatientsDetails from "./PatientsDetails"

export default function PatientsTracker() {

  const { patients } = usePatientStore()

  return (

    <>
      {patients.length ?
        <div>
          <h1 className="text-3xl md:text-4xl text-center font-bold text-gray-800 my-5 lg:my-0">Tus <span className="text-blue-700/70">Pacientes</span></h1>
          
          <div className="px-5 py-2 bg-white rounded-lg border-3 border-blue-600/50 mx-2 shadow-lg shadow-blue-700/50 max-h-130 overflow-y-scroll mb-3">
            {patients.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).map(function (patient) {
              return (
                <PatientsDetails
                  key={patient.id}
                  patient={patient}
                />
              )
            })}
          </div>
        </div>
        :
        <h1 className="text-2xl md:text-4xl text-center font-bold text-gray-800 my-10 lg:mt-0">Nada <span className="text-blue-700/70">Registrado</span></h1>
      }
    </>


  )
}
