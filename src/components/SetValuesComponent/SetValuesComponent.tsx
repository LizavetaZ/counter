import React, {ChangeEvent, useState} from 'react';
import s from './SetValuesComponent.module.css'
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../../store/store";

export type SetValuesComponentType = {
    name: string
    startValue: number
    setTitle: (value: number) => void
    error: string
}

export const SetValuesComponent = (props: SetValuesComponentType) => {

    const dispatch = useDispatch()
    const stateForSetter = useSelector((state: RootReducerType) => state.setter);


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
                <input type="number" value = {value} onChange={onChangeInputHandler} className={stateForSetter.error ? s.error : ''}/>
            </div>
        </div>
    );
};
