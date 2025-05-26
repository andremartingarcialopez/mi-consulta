import { usePatientStore } from "../store/store"
import PatientsDetails from "./PatientsDetails"

export default function PatientsTracker() {

  const { patients } = usePatientStore()
  return (

    <>
      {patients.length ?
        <>
          <h1 className="text-2xl md:text-4xl text-center font-bold text-gray-800 my-10 lg:mt-0">Tus <span className="text-blue-700/70">Pacientes</span></h1>

          <div className="p-10 bg-white rounded-lg border-3 border-blue-600/50 flex flex-col space-y-4 lg:w-120 mx-2 shadow-lg shadow-blue-700/50">
            {patients.map(function (patient) {
              return (
                <PatientsDetails
                  key={patient.id}
                  patient={patient}
                />
              )
            })}
          </div>
        </>
        :
        <h1 className="text-2xl md:text-4xl text-center font-bold text-gray-800 my-10 lg:mt-0">Nada <span className="text-blue-700/70">Registrado</span></h1>
      }
    </>


  )
}
