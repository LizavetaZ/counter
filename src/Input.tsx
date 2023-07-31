import React, {ChangeEvent, useEffect, useState} from 'react';
import './Input.css'

type PropsType = {
    title: string
    setTitle: (title: string) => void

}

export const Input = (props: PropsType) => {

    const [error, setError] = useState('')

    useEffect(() => {
        if (Number(props.title) <= -1) {
            setError('Value cannot be negative');
        } else {
            setError('');
        }
    }, [props.title]);

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value)
    }

    return (
        <>
            <input
                type={"number"}
                value={props.title}
                onChange={onChangeInputHandler}
                className={error ? 'error' : ''}/>
        </>
    );
};