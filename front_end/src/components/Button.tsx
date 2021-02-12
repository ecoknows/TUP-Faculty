import {Button } from 'react-bootstrap';
import classNames from 'classnames';

export interface ButtonProps {
    children: any,
    width: string | number,
}

const defaultProps = {
    backgroundColor: 'bg-blue',
}


const Main = ({children, width}: ButtonProps ) => {
    
    
    const classes  = classNames(
        defaultProps.backgroundColor,
        typeof width == 'string' && `width-${width}`
    );

    return (
        <Button className={classes} {...rest}>
            {children}
        </Button>
    )
}

export default Main;
