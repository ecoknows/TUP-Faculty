import React, {forwardRef, HTMLAttributes} from 'react'
import classNames from 'classnames';
import { View } from '.';


interface Props extends HTMLAttributes<HTMLDivElement>{
    children: typeof View,
    className?: string,

    type?: string,

    height?: string,
    clear?: boolean,
}

const defaultProps = {
    backgroundColor: 'bg-white',
}


const Text = forwardRef(
    ({
        children,
        className,

        type,

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
            defaultProps.backgroundColor,
            type && `text-${type}`
        );

        return <span {...props} className={classes}>
            {children}</span>
    }
)



export default Text
