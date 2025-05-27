import Form from "./components/Form"
import PatientsTracker from "./components/PatientsTracker"
import { ToastContainer } from 'react-toastify';


function App() {

  return (
    <>
      <header className="sticky top-0 z-50 glass  flex justify-center items-center border border-pink-400/50">
      <img src='/public/Garlo.png' className="w-40 md:w-80 m-0" alt="imagen-logo-garlop"/>
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
