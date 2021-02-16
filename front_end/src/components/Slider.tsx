import React, {forwardRef,HTMLAttributes} from 'react'
import classNames from 'classnames';


interface SliderProps extends HTMLAttributes<HTMLSelectElement>{
    items: string[],
    className?: string,
}

function Slider(props : SliderProps){
    const {
        items,
        className,

        ...rest
    } = props;

    
    const classes  = classNames(
        'border',
        'border-black',
        'border-solid',
        'mb-5',
        'px-2',
        className,
    );

    return(
        <select  {...rest} className={classes}>
            {
                items.map((item)=><option value={item}>{item}</option>)
            }
        </select>
    )

}

export default Slider;
