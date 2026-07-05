import React from 'react'

type Props ={
    children: React.ReactNode
}

export const ContentContainer: React.FC<Props> = ({ children }) => {
  return (
    <div style={{ maxWidth:1200,padding: 10}}>
      {children}
    </div>
  )
}
