
import Logo from "../src/assets/cavana.png"

const Hero = () => {
  return (
    <section className='mt-0'>
      
      {/* contenido central */}
      <div className='h-screen w-screen flex items-center justify-center'>

      
        
        <div className='p-2 ' >

          {/* Imagen */}

          <div className='flex justify-center'>
            <img src={Logo} alt="Logo de la página" width={450} />
          </div>

          {/* Textosy descripción */}

          <h1 className="position-middle text-3xl text-white text-center font-bold">
          WE ARE WORKING ON IT
          </h1>
                
        </div>

      </div>

    {/* barra de informacion empresarial */}

      <div className='bg-blue-950 text-white p-4 text-center grid grid-cols-1 md:grid-cols-2 '>
        
        <div>
        <p className='text-sm'>© All Copyright 2026 by AM Software. All rights reserved.</p>
        </div>

        <div>
        <p className='text-sm'>Contact us: <a href="mailto:aebmm5113@gmail.com" className='text-gray-400 hover:underline'>aebmm5113@gmail.com</a></p>
        </div>

      </div>

  
    </section>


  )
}

export default Hero
