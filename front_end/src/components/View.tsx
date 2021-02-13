import React, {forwardRef,HTMLAttributes} from 'react'
import classNames from 'classnames';


interface Props extends HTMLAttributes<HTMLDivElement>{
    children: any,
    className?: string,
    
    center?: boolean,
    middle?: boolean,
    column?: boolean,
    color?: string,
    relative?: boolean,


    height?: string,
}

const View = forwardRef(
    ({
        children,
        className,

        center,
        middle,
        column,
        color,
        relative,

        height,

        ...props
    }: Props, ref) =>
    {

        
        if(ref){
            (props as any).ref = ref;
        }

        const classes  = classNames(
            'view',
            className,
            height && `height-${height}`,
            center && `items-center`,
            middle && `items-middle`,
            column && `items-column`,
            color && `bg-${color}`,
            relative && `relative`,
        );

        return <div {...props} className={classes}>
            {children}</div>
    }
)

export default View
