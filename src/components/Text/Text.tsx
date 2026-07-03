import React from 'react'

type Props ={
    varient?: string,
    children: React.ReactNode,
    style?: React.CSSProperties

}

export const Text: React.FC<Props> = ({varient,children,style}) => {
if(varient === 'h1') return <h1 style={style}>{children}</h1>
if(varient === 'h1') return <h1 style={style}>{children}</h1>
if(varient === 'h1') return <h1 style={style}>{children}</h1>
if(varient === 'h1') return <h1 style={style}>{children}</h1>
  return (
    <div>Text</div>
  )
}
