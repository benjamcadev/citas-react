import {useState, useEffect} from 'react';
import Error from './Error';

export const Formulario = ({ setPacientes, pacientes, paciente, setPaciente }) => {

  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)

  useEffect(() => {
    if(Object.keys(paciente).length > 0){ // validando que no este vacio el objeto editar paciente
     setNombre(paciente.nombre)
     setPropietario(paciente.propietario)
     setEmail(paciente.email)
     setFecha(paciente.fecha)
     setSintomas(paciente.sintomas)
    }else{
      console.log('no hay nada');
    }
  },[paciente]) // Cuando no hay dependencias el useEffect se ejecuta cuando esta ilsto el componnente, si tiene algo se ejecutara cuano sea modificado esa dependencia



  const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)
    return random + fecha

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //Validacion del form
    if ([ nombre, propietario, email, fecha, sintomas ].includes('')) {
      setError(true)
      return
    }

    setError(false)

    //Construir el objeto de paciente
    const objetoPaciente = {
      nombre, 
      propietario,
      email,
      fecha,
      sintomas,
    }

    if (paciente.id) {
      // Editanto paciente
      objetoPaciente.id = paciente.id

      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
      setPacientes(pacientesActualizados)
      setPaciente({})
    }else{
      // nuevo registro
      objetoPaciente.id = generarId()
      setPacientes([...pacientes, objetoPaciente])
    }

   

    //Reiniciar el form
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className=" text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form 
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-md py-10 px-5 mx-5"
      >
          { error && <Error><p>Todos los campos son obligatorios</p></Error>
          }

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="nombreMascota">Nombre Mascota</label>
          <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
          type="text" 
          placeholder="Nombre de la mascota" 
          id="nombreMascota"
          value={nombre}
          onChange={ (e) => setNombre(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="nombrePropietario">Nombre Propietario</label>
          <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
          type="text" 
          placeholder="Nombre del propietario" 
          id="nombrePropietario"
          value={propietario}
          onChange={ (e) => setPropietario(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email</label>
          <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
          type="email" 
          placeholder="Email del propietario" 
          id="email"
          value={email}
          onChange={ (e) => setEmail(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Alta</label>
          <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
          type="date" 
          id="alta"
          value={fecha}
          onChange={ (e) => setFecha(e.target.value) }
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Sintomas</label>
         <textarea
         id="sintomas"
         className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
         placeholder="Describe los sintomas"
         value={sintomas}
         onChange={ (e) => setSintomas(e.target.value) }
         />
        </div>

        <input 
        type="submit"
        className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all"
        value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
        />

      </form>
    </div>
  )
}

export default Formulario
