

export const Error = ({ children }) => {    //Todo lo que se pase al componente dentro de las etiquetas car en children
  return (

        <div className='bg-red-700 text-white text-center p-3 uppercase font-bold mb-3 rounded-md'>
        {children}
        </div>
  )
}

export default Error
