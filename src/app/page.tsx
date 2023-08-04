'use client'

import { Provider, connect } from 'react-redux'
import store from '../store'
import Image from 'next/image'
import Logo from '../../public/logo-1.svg'
import HeaderMenu from '../components/headermenu'

export default function Home() {
  return (
    <div className='bg-color-primary-300 justify-center flex'>
      <div className='w-5/6 bg-color-secondary-300 mt-2'>
        Home
      </div>
    </div>
    // <body className='bg-background-light text-color-neutral-900 dark:text-color-neutral-100 min-w-full min-h-full flex'>
    //   <header className='flex flex-col'>
    //     <div className='flex flex-row'>
    //         <Image className='max-h-32 m-3' src={Logo} alt='logo da Tupi'/>
    //     </div>
    //       <Provider store={store}>
    //         <HeaderMenu />
    //       </Provider>
    //   </header>
    // </body>
  )
}
