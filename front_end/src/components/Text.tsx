import React, {forwardRef} from 'react'
import classNames from 'classnames';


interface Props {
    children: any,
    className?: string,

    type?: string,

    height?: string,
    clear?: boolean,
}

const defaultProps = {
    flex: 'flex',
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
            defaultProps.flex,
            defaultProps.backgroundColor,
            type && `text-${type}`
        );

        return <span {...props} className={classes}>
            {children}</span>
    }
)

export default Text
