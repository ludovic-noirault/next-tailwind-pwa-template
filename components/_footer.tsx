import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css'

const _footer = () => {
    return (
        <footer className="mx-4 border-t-2 border-slate-300 flex-col text-center ">
            <div>An app created by</div> 
            <a className="text-blue-500" href="https://horyon.tech">Ludovic Noirault - Horyon</a>
        </footer>
    )
}

export default _footer