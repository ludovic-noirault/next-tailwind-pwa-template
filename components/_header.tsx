import React from 'react'

type HeaderProps = {
    title: string
}

const _header = ({title}: HeaderProps) => {
  return (
        <header className='flex align-center justify-center border-b-2 border-slate-300 mx-4'>
            <h1 className="text-xl text-slate-300 p-3 text-center">{title}</h1>
        </header>
    )
}

export default _header