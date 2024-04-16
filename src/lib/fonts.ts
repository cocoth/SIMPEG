import { Poppins, Fjalla_One, Ubuntu, Lobster, } from 'next/font/google'

export const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
    style: ['normal', 'italic'],
    display: 'swap',
    variable: '--font-poppins'
})
export const fajllaOne = Fjalla_One({
    weight: '400',
    subsets: ['latin'],
    style: ['normal'],
    display: 'swap',
    variable: '--font-fajllaOne'
})
export const ubuntu = Ubuntu({
    weight: '400',
    subsets: ['latin'],
    style: ['normal', 'italic'],
    display: 'swap',
    variable: '--font-ubuntu'
})
export const lobster = Lobster({
    weight: '400',
    subsets: ['latin'],
    style: ['normal'],
    display: 'swap',
    variable: '--font-lobster'
})