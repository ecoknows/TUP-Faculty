import React, {forwardRef,HTMLAttributes} from 'react'
import classNames from 'classnames';


interface Props extends HTMLAttributes<HTMLDivElement>{
    className?: string,
    title: string,
   
}

const Button = forwardRef(
    ({
        className,
        title,

        ...props
    }: Props, ref) =>
    {

        
        if(ref){
            (props as any).ref = ref;
        }

        const classes  = classNames(
            'button',
            className,
        );

        return (
            <div className={classes}> 
                 {title} 
            </div>
        )
    }
)

export default Button
