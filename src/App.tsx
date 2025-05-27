import Form from "./components/Form"
import PatientsTracker from "./components/PatientsTracker"
import { ToastContainer } from 'react-toastify';


function App() {

  return (
    <>
      <header className="sticky top-0 z-50 glass p-5">
        <h1 className="text-2xl md:text-4xl text-white font-bold text-center uppercase">Mi Consulta</h1>
      </header>
      <div className=" mt-5 md:mt-10 mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 justify-around">
        <Form />


        <PatientsTracker />

      </div>

      <ToastContainer/>
    </>


  )
}

export default App
