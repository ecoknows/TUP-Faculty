import React, {forwardRef,HTMLAttributes} from 'react'
import classNames from 'classnames';


export interface ViewProps extends HTMLAttributes<HTMLDivElement>{
    children?: any,
    className?: string,
    
    center?: boolean,
    middle?: boolean,
    column?: boolean,
    color?: string,
    relative?: boolean,
    flex?: boolean,
    end?: boolean,

    margin?: string,

    height?: string,
    width?: string,
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
        flex,
        end,

        margin,

        height,
        width,

        ...props
    }: ViewProps, ref) =>
    {

        
        if(ref){
            (props as any).ref = ref;
        }

        const classes  = classNames(
            'flex',
            className,
            height && `h-${height}`,    
            width && `w-${width}`,
            center && `justify-center`,
            middle && `items-center`,
            column && `flex-col`,
            color && `bg-${color}`,
            relative && `relative`,
            flex && 'flex', 
            end && 'items-end',

            // TAILWINDCSS START
            margin,



        );

        return <div {...props} className={classes}>
            {children}</div>
    }
)

export default View
