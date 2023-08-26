import React, {ChangeEvent} from 'react';
import s from './SetValuesComponent.module.css'
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../../store/store";
import {setStartValueAC} from "../../reducers/main-reducer";

export type SetValuesComponentType = {
    name: string
    startValue: number
    setTitle: (value: number) => void
}

export const SetValuesComponent = (props: SetValuesComponentType) => {

    const dispatch = useDispatch()
    const stateForSetter = useSelector((state: RootReducerType) => state.commonState);


    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let numberValue = Number(e.currentTarget.value);
        dispatch(setStartValueAC(numberValue));
        props.setTitle(numberValue);
    };

    return (
        <div className={s.SetterChild}>
            <div>{props.name}</div>
            <div className={'inputWrapper'}>
                <input type="number" value = {props.startValue} onChange={onChangeInputHandler} className={stateForSetter.error ? s.error : ''}/>
            </div>
        </div>
    );
};
