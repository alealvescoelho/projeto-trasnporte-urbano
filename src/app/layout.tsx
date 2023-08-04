'use client'

import Headermenu from '@/components/headermenu'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import { Provider } from 'react-redux'
import Logo from '../../public/logo-1.svg'
import store from '../store'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TUPI Piracicaba',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-background-light text-color-neutral-900 dark:text-color-neutral-500 min-w-full min-h-full flex'>
        <header className='flex flex-col'>
          <div className='flex flex-row'>
              <Image className='max-h-32 m-3' src={Logo} alt='logo da Tupi'/>
          </div>
            <Provider store={store}>
              <Headermenu />
              <div>
                {children}
              </div>
            </Provider>
        </header>
      </body>
    </html>
  )
}
