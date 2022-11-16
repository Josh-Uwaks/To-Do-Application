import React from 'react'
import AppContent from './components/AppContent'
import Appheader from './components/Appheader'
import Title from './components/Pagetitle'
import {Toaster} from 'react-hot-toast'
export default function App(){
    return(
        <div className='max-w-[750px] mx-auto'>
            <Title/>
            <Appheader/>
            <AppContent/>
            <Toaster position='bottom-right' toastOptions={{style: {
                fontSize: '1rem',
            }}}
            />
        </div>
    )
}