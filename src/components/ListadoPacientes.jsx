import { useEffect } from 'react';
import Paciente from './Paciente';


export const ListadoPacientes = ({pacientes, setPaciente,eliminarPaciente}) => {

  useEffect(() => {
    if (pacientes.length > 0) {
      console.log('Nuevo PAciente');
    }
   
  },[pacientes])

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {/* Validando si hay o no pacientes */}

      {pacientes && pacientes.length ? (
        <>
         <h2 className="font-black text-center text-3xl ">Listado Pacientes</h2>
        <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
        </p>
        {pacientes.map( paciente => (
          <Paciente  
          paciente={paciente}
          key={paciente.id}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
          />
        ))}

        </>
       
      ) : (
        <>
         <h2 className="font-black text-center text-3xl ">No hay pacientes</h2>
        <p className="text-xl mt-5 mb-10 text-center">
           Comienza agregando pacientes {''}
            <span className="text-indigo-600 font-bold">Y apareceran en este lugar</span>
        </p>
        
        </>
      )}
       
        
    </div>
  )
}

export default ListadoPacientes