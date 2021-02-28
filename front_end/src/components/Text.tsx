import React, {forwardRef, HTMLAttributes,FunctionComponent, ReactElement} from 'react'
import classNames from 'classnames';
import { View } from '.';


interface Props extends HTMLAttributes<HTMLParagraphElement>{
    children: string | number | object,
    className?: string,

    type?: string,
    black?: boolean,
    margin?: string,
    
    height?: string,
    clear?: boolean,
}


const Text = forwardRef(
    ({
        children,
        className,

        type,
        black,

        height,
        clear,

        ...props
    }: Props, ref) =>
    {
        
                
        if(ref){
            (props as any).ref = ref;
        }

        const classes  = classNames(
            className,
            type == "title" && "text-2em font-extrabold",
            type == "default" && "text-0.8em text-gray-700",
            black && `color-black`,
        );

        return <span {...props} className={classes}>
            {children}</span>
    }
)



export default Text
