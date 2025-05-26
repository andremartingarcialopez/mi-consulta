import Form from "./components/Form"
import PatientsTracker from "./components/PatientsTracker"


function App() {

  return (
    <>
      <h1 className=" glass text-2xl md:text-4xl text-white font-bold p-5 text-center uppercase">Mi Consulta</h1>

      <div className=" mt-5 md:mt-10 mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 justify-around">
        <Form/>
        
        
        <PatientsTracker/>

      </div>
    </>


  )
}

export default App
