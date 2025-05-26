import { useForm } from "react-hook-form";
import Error from "./Error";
import type { DraftPatient } from "../types/types";
import { usePatientStore } from "../store/store";


export default function Form() {

    const { register, handleSubmit, formState: { errors } } = useForm<DraftPatient>();
    
    const {addPatient} = usePatientStore()

    function registePatient(data: DraftPatient) {
        addPatient(data)
    }

    return (
        <form onSubmit={handleSubmit(registePatient)} className="p-10 bg-white rounded-lg border-3 border-blue-600/50 flex flex-col space-y-4 lg:w-120 mx-2 shadow-lg shadow-blue-700/50">
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
                <input type="email"
                    id="email"
                    placeholder="Email del Paciente"
                    className="border-b py-2 border-b-blue-700/50 w-full"
                    {...register("email", {
                        required: "Campo Email Obligatorio"
                    })} />
                {errors.email &&
                    <Error>
                        {errors.email?.message}
                    </Error>
                }
            </div>

            <div>
                <label className="font-semibold" id="phone" htmlFor="phone">Telefono:</label>
                <input type="tel"
                    id="phone"
                    placeholder="Numero Celular"
                    className="border-b py-2 border-b-blue-700/50 w-full"
                    {...register("phone", {
                        required: "Campo Telefono Obligatorio"
                    })} />
                {errors.phone &&
                    <Error>
                        {errors.phone?.message}
                    </Error>
                }
            </div>

            <div>
                <label className="font-semibold" htmlFor="date">Fecha:</label>
                <input type="date"
                    id="date"
                    className="border-b py-2 border-b-blue-700/50 w-full"
                    {...register("date", {
                        required: "Campo Fecha Obligatorio"
                    })} />
                {errors.date &&
                    <Error>
                        {errors.date.message}
                    </Error>
                }
            </div>

            <div>
                <label id="symptoms" className="font-semibold" htmlFor="symptoms">Sintomas:</label>
                <textarea id="symptoms"
                    className="border-b py-2 border-b-blue-700/50 w-full"
                    placeholder="symptoms que padece"
                    {...register("symptoms", {
                        required: "Campo sintomas Obligatorio"
                    })} />
                {errors.symptoms &&
                    <Error>
                        {errors.symptoms?.message}
                    </Error>
                }
            </div>

            <input type="submit" value={"Registrar Paciente"} className="bg-blue-700/70 text-white uppercase font-semibold p-2 rounded-lg borde border-blue-700 hover:bg-blue-700/90 cursor-pointer" />

        </form>
    )
}
