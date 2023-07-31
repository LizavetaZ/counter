import React, {ChangeEvent, useState} from 'react';
import s from './SetValuesComponent.module.css'

export type SetValuesComponentType = {
    name: string
    startValue: number
    setTitle: (value: number) => void
    error: string
}

export const SetValuesComponent = (props: SetValuesComponentType) => {

    const [value, setValue] = useState(props.startValue)

        const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
            let numberValue = Number(e.currentTarget.value)
            setValue(numberValue)
            props.setTitle(numberValue)
        }

    return (
        <div className={s.SetterChild}>
            <div>{props.name}</div>
            <div className={'inputWrapper'}>
                <input type="number" value = {value} onChange={onChangeInputHandler} className={props.error ? s.error : ''}/>
            </div>
        </div>
    );
};
