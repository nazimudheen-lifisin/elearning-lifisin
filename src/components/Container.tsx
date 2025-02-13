import React from 'react'

interface Props {
    children: React.ReactNode
}

function Container({ children }: Props) {
  return (
    <div className='px-14 py-10'>
        {children}
    </div>
  )
}

export default Container