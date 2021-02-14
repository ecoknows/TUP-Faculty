import React, {forwardRef, HTMLAttributes,FunctionComponent, ReactElement} from 'react'
import classNames from 'classnames';
import { View } from '.';


interface Props extends HTMLAttributes<HTMLDivElement>{
    children: string | number,
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

        const styles = [
            {color: 'red'},
            {color: 'red'},
        ];
        
                
        if(ref){
            (props as any).ref = ref;
        }

        const classes  = classNames(
            'text',
            className,
            type && `text-${type}`,
            black && `color-black`,
        );

        return <span {...props} className={classes}>
            {children}</span>
    }
)



export default Text
