import { useMemo } from 'react'
import { NavLink, useLocation } from 'react-router-dom'


export default function Header() {

  const {pathname} = useLocation()
  

  const isHome = useMemo(() => pathname === '/' , [pathname])
  console.log(isHome)

  return (
    <header className={ isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800'}>
        <div className="mx-auto container px-5 py-16">
            <div className="flex justify-between items-center">
                <div>
                    <img className="w-32" src="/logo.svg" alt="LogoTipo" />
                </div>

                <nav className="text-white uppercase font-bold flex gap-4">
                  {/* NavLink es una propiedad de react-router-dom y sirve para que no salga un "Flash" cuando cambiamos entre VIEWS */}
                  <NavLink to="/" className={({isActive}) => isActive? 'text-orange-500' : ''}>Inicio</NavLink>
                  <NavLink to="/favoritos" className={({isActive}) => isActive? 'text-orange-500 ' : '' }>Favoritos</NavLink>
                </nav>
            </div>


            {isHome && (
              <form className='md:w-1/2 2xl:w-1/3 bg-orange-500 my-32 p-10 rounded-lg shadow space-y-6' >
                <div className='space-y-4'>
                  <label htmlFor="ingredient" className='block text-white uppercase font-extrabold text-lg'>Nombre o Ingredientes</label>
                  <input id='ingredient' type='text' name='ingredient' className='p-3 w-full rounded-lg focus:outline-none' placeholder='Nombre o Ingrediente. Ej. Vodka, Tequila, Cafe' />
                </div>

                <div className='space-y-4'>
                  <label htmlFor="ingredient" className='block text-white uppercase font-extrabold text-lg'>Categoria</label>
                  <select id='ingredient'name='ingredient' className='p-3 w-full rounded-lg focus:outline-none'>
                    <option value="" className='text-cyan-400'>-- Seleccione --</option>  
                  </select>
                </div>
                <input type="submit" value='Buscar Recetas' className='cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase'/>

              </form>
            )}
        </div>
    </header>
  )
}
