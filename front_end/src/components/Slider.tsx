import React, {forwardRef,HTMLAttributes} from 'react'
import classNames from 'classnames';


interface SliderProps extends HTMLAttributes<HTMLSelectElement>{
    items: string[],
    placeHolder: string,
    className?: string,
}

function Slider(props : SliderProps){
    const {
        items,
        className,
        placeHolder,

        ...rest
    } = props;

    
    const classes  = classNames(
        'border',
        'border-black',
        'border-solid',
        'bg-white',
        'font-sans text-lg px-5 py-2',
        'mb-5',
        'px-2',
        className,
    );

    return(
        <select  {...rest} className={classes}>
            <option value='' disabled selected hidden>{placeHolder}</option>
            {
                items.map((item)=><option value={item}>{item}</option>)
            }
        </select>
    )

}

export default Slider;
