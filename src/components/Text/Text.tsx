import React from 'react'

type Props ={
    variant?: string,
    children: React.ReactNode,
    style?: React.CSSProperties,
    className?: string

}
export const Text: React.FC<Props> = ({variant, children, style}) => {
        if(variant === 'h1') return <h1>{children}</h1>;
        if(variant === 'h2') return <h2>{children}</h2>;
        if(variant === 'p') return <p>{children}</p>;
        if(variant === 'span') return <span>{children}</span>;       
    

       return <span style={style}>{children}</span>;
};

