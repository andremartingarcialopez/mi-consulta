import { useForm } from "react-hook-form";
import Error from "./Error";
import type { DraftPatient } from "../types/types";


export default function Form() {

    const { register, handleSubmit, formState: { errors } } = useForm<DraftPatient>();

    function registePatient(data: DraftPatient) {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(registePatient)} className="p-10 bg-white rounded-lg border border-blue-600/50 flex flex-col space-y-4 lg:w-120">
            <div>
                <label className="font-semibold" htmlFor="name">Nombre:</label>
                <input type="text"
                    id="name"
                    placeholder="Nombre del Paciente"
                    className="border-b py-2 border-b-blue-700/50 w-full"
                    {...register("name", {
                        required: "Campo Nombre Obligatorio"
                    })}
                />
                {errors.name &&
                    <Error>
                        {errors.name?.message}
                    </Error>
                }


            </div>

            <div>
                <label className="font-semibold" htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="Email del Paciente" className="border-b py-2 border-b-blue-700/50 w-full" />
            </div>

            <div>
                <label className="font-semibold" htmlFor="phone">Email:</label>
                <input type="tel" id="phone" placeholder="Numero Celular" className="border-b py-2 border-b-blue-700/50 w-full" />
            </div>

            <div>
                <label className="font-semibold" htmlFor="date">Fecha:</label>
                <input type="date" id="date" className="border-b py-2 border-b-blue-700/50 w-full" />
            </div>

            <div>
                <label id="sintomas" className="font-semibold" htmlFor="sintomas">Fecha:</label>
                <textarea id="sintomas" className="border-b py-2 border-b-blue-700/50 w-full" placeholder="Sintomas que padece"></textarea>
            </div>

            <input type="submit" value={"Registrar Paciente"} className="bg-blue-700/70 text-white uppercase font-semibold p-2 rounded-lg borde border-blue-700 hover:bg-blue-700/90 cursor-pointer" />

        </form>
    )
}
