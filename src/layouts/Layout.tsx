import { useEffect } from 'react';
import {Outlet} from 'react-router-dom';
//Se importa el componente Header
import Header from '../components/Header';
import Modal from '../components/Modal';
import { useAppStore } from '../stores/useAppStore';
import Notification from '../components/Notification';


export default function Layout() {

  const loadFromStorage =  useAppStore((state) => state.loadFromStorage)

  useEffect(() => {
    loadFromStorage()
    }, [])

  return (

  
    <>
        <Header/>
        {/* Outlet lo que hace es visualizar un componente en varias VIEWS ,  
            dentro del router.tsx tenemos un Route que agarra como elemento layout 
            y Rodeamos todas las VIEWS dentro de layout para que se rendericen todos los componentes
        */}

        <main className='container mx-auto py-16'>
            <Outlet/>
        </main>
        
        <Modal
          
        />

        <Notification
        
        />
        
    </>
  )
}
