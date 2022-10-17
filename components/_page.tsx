import React from 'react'

import _head from './_head'
import _header from './_header'
import _footer from './_footer'

type Props = { 
    title:string,
    classes?: string,
    children?: React.ReactNode 
};

const _page: React.FC<Props> = ({ title, children }) => {
    return (
        <>
            <_head />
            <main className='bg-teal-700 h-screen '>
                <_header title={title}/>
                <div className='max-v-90 max-h-90 overflow-x-auto py-8'>
                    {children}
                </div>
                <_footer />
            </main>
        </>
    )
}

export default _page