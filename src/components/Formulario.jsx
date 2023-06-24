

export const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className=" text-lg mt-5 text-center mb-10">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form className="bg-white shadow-md rounded-md py-10 px-5">

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="nombreMascota">Nombre Mascota</label>
          <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
          type="text" 
          placeholder="Nombre de la mascota" 
          id="nombreMascota"/>
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="nombrePropietario">Nombre Propietario</label>
          <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
          type="text" 
          placeholder="Nombre del propietario" 
          id="nombrePropietario"/>
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email</label>
          <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
          type="email" 
          placeholder="Email del propietario" 
          id="email"/>
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Alta</label>
          <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
          type="date" 
          id="alta"/>
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Sintomas</label>
         <textarea
         id="sintomas"
         className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
         placeholder="Describe los sintomas"
         />
        </div>

        <input 
        type="submit"
        className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all"
        value="Agregar Paciente"
        />

      </form>
    </div>
  )
}

export default Formulario
