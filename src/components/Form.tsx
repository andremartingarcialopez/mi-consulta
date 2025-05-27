import { useForm } from "react-hook-form";
import Error from "./Error";
import type { DraftPatient } from "../types/types";
import { usePatientStore } from "../store/store";
import { useEffect } from "react";
import { Bounce, toast } from 'react-toastify';

export default function Form() {

    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<DraftPatient>();

    const { addPatient, editID, patients, editPatient } = usePatientStore();

    useEffect(() => {
        if (editID) {
            const patientEdit = patients.filter(function (patient) {
                return patient.id == editID;
            })[0];
            setValue("name", patientEdit.name);
            setValue("email", patientEdit.email);
            setValue("phone", patientEdit.phone);
            setValue("date", patientEdit.date);
            setValue("symptoms", patientEdit.symptoms);

        }
    }, [editID])

    function registePatient(data: DraftPatient) {

        if (editID) {
            editPatient(data);
            toast.success('Paciente Editado con Exito!!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
        } else {
            addPatient(data);
            toast.success('Paciente Agregado con Exito!!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
            });
        }
        reset();
    }

    return (
        <form onSubmit={handleSubmit(registePatient)} className="p-10 bg-white rounded-lg border-3 border-pink-400/50 flex flex-col space-y-4 lg:w-120 mx-2 shadow-lg shadow-pink-500/40 ">
            <div>
                <label className="font-semibold text-gray-700" htmlFor="name">Nombre:</label>
                <input type="text"
                    id="name"
                    placeholder="Nombre del Paciente"
                    className="border-b py-2 border-b-pink-500/50 w-full"
                    {...register("name", {
                        required: "Campo Nombre Obligatorio",
                        validate: value => value.trim() !== "" || "Campo Obligatorio"
                    })}
                />
                {errors.name &&
                    <Error>
                        {errors.name?.message}
                    </Error>
                }
            </div>

            <div>
                <label className="font-semibold text-gray-700" htmlFor="email">Email:</label>
                <input type="email"
                    id="email"
                    placeholder="Email del Paciente"
                    className="border-b py-2 border-b-pink-500/50 w-full"
                    {...register("email", {
                        required: "Campo Email Obligatorio",
                        validate: value => value.trim() !== "" || "Campo Obligatorio",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Email No Válido'
                        }
                    })} />
                {errors.email &&
                    <Error>
                        {errors.email?.message}
                    </Error>
                }
            </div>

            <div>
                <label className="font-semibold text-gray-700" id="phone" htmlFor="phone">Telefono:</label>
                <input type="tel"
                    id="phone"
                    placeholder="Numero Celular"
                    className="border-b py-2 border-b-pink-500/50 w-full"
                    {...register("phone", {
                        required: "Campo Telefono Obligatorio",
                        validate: value => value.trim() !== "" || "Campo Obligatorio",
                        pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Debe tener 10 dígitos"
                        }
                    })} />
                {errors.phone &&
                    <Error>
                        {errors.phone?.message}
                    </Error>
                }
            </div>

            <div>
                <label className="font-semibold text-gray-700" htmlFor="date">Fecha:</label>
                <input type="date"
                    id="date"
                    className="border-b py-2 border-b-pink-500/50 w-full"
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
                <label id="symptoms" className="font-semibold text-gray-700" htmlFor="symptoms">Sintomas:</label>
                <textarea id="symptoms"
                    className="border-b py-2 border-b-pink-500/50 w-full"
                    placeholder="Razon de la cita"
                    {...register("symptoms", {
                        required: "Campo sintomas Obligatorio",
                        validate: value => value.trim() !== "" || "Campo Obligatorio"
                    })} />
                {errors.symptoms &&
                    <Error>
                        {errors.symptoms?.message}
                    </Error>
                }
            </div>

            <input type="submit" value={editID ? "Editar Paciente" : "Agregar Paciente"} className="bg-pink-500/50 text-white uppercase font-semibold  p-2 rounded-lg borde border-pink-700 hover:bg-pink-500/80 cursor-pointer" />

        </form>
    )
}
