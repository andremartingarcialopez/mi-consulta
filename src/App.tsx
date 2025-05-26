import Form from "./components/Form"

function App() {

  return (
    <>
      <h1 className=" glass text-2xl md:text-4xl text-white font-bold p-5 text-center uppercase">Mi Consulta</h1>

      <div className=" mt-5 md:mt-10 mx-auto max-w-4xl grid grid-cols-1 lg:grid-cols-2 justify-around items-center">
        <Form/>
        <p>2</p>
      </div>
    </>


  )
}

export default App
