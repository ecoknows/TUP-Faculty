import React, {forwardRef} from 'react'
import classNames from 'classnames';


interface Props {
    children: any,
    className?: string,
    
    center?: boolean,
    middle?: boolean,

    height?: string,
}

const defaultProps = {
    flex: 'flex',
    backgroundColor: 'bg-white',
}


const View = forwardRef(
    ({
        children,
        className,

        center,
        middle,

        height,

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
            height && `height-${height}`,
            center && `items-center`,
            middle && `items-middle`,
        );

        return <div {...props} className={classes}>
            {children}</div>
    }
)

export default View
