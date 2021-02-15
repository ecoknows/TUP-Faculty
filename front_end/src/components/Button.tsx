import React, {forwardRef,HTMLAttributes} from 'react'
import classNames from 'classnames';
import View, {ViewProps} from './View';


interface Props extends ViewProps{
    className?: string,
    title: string,
    margin?: string,
   
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
            <View className={classes} {...props}> 
                 {title} 
            </View>
        )
    }
)

export default Button
