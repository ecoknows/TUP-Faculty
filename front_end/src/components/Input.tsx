import React, {forwardRef, HTMLAttributes, useState} from 'react'
import classNames from 'classnames';
import View from './View';


interface Props extends HTMLAttributes<HTMLInputElement> {
    className?: string,
    type: string,
    toggler?: boolean,
}

const defaultProps = {
    flex: 'flex',
    backgroundColor: 'bg-white',
    input : 'input',
    inputPassword : 'input-password',
    inputBorderNone : 'input-border-none'
}


const Input = forwardRef(
    ({
        className,
        type,
        toggler,
        ...props
    }: Props, ref) =>
    {

        if(ref){
            (props as any).ref = ref;
        }

        if(type){
            (props as any ).type = type;
        }

        const classes  = classNames(
            className,
            defaultProps.flex,
            defaultProps.backgroundColor,
            defaultProps.input,
        );


        if(toggler && type == 'password'){
            return <InputWithEye type={type} classes={classes} props={props}/>
        }

        return <input {...props} className={classes} />
    }
)

const InputWithEye = forwardRef(
    ({type, classes, props} : any, ref) =>
    {
        const [show, setShow] = useState(false);

        
        if(ref){
            (props as any).ref = ref;
        }

        if(type){
            (props as any ).type = show ?  'text' : type;
        }

        return (
            <View relative center middle>
                <input {...props} className={classes + ' ' + defaultProps.inputPassword} />
                <i className={`las la-eye${show ? '' : '-slash'} input-eye`}
                    onClick={()=>setShow(!show)}
                />
            </View>
        )
    }
)

export default Input;
