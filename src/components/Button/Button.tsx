import React from 'react';
import s from './Button.module.css'

type PropsType = {
    name: string
    callback:() => void
    disabled: boolean
}

const Button = (props: PropsType) => {

    return (

        <button disabled = {props.disabled} onClick={props.callback}
        className={props.disabled ? s.disbutton : s.activebutton}>{props.name}</button>
    );
};

export default Button;