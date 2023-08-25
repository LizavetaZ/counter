import React, {useState} from "react";
import Button from "../Button/Button";
import s from './Counter.module.css'
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../../store/store";
import {setCounterAC, setIsSetClickedAC} from "../../reducers/setter-reducer";

export type CounterPropsType = {
    maxValue: number
    minValue: number
    isChanged: boolean
    increaseCount: () => void
    counter: number
    resetCount: () => void
    error: string
    setIsSetClicked: (value: boolean) => void
}


export function Counter() {


    const dispatch = useDispatch()
    const stateForSetter = useSelector((state: RootReducerType) => state.setter);

    const handleSetValue = () => {
        dispatch(setIsSetClickedAC(true))
    }

    const increaseCount = () => {
        let incremet = stateForSetter.counter + 1
        if (incremet <= stateForSetter.maximumValue) {
           dispatch(setCounterAC(incremet))
        }
    }

    const resetCount = () => {
        dispatch(setCounterAC(stateForSetter.minimumValue))
    }


    return (
        <div className={s.Counter}>
            {stateForSetter.error ? <div className={s.redcounterfield}>{stateForSetter.error}</div> :
                <div className={stateForSetter.error ? s.redcounterfield : s.counterfield}>
                    {stateForSetter.isChanged ? 'enter values and press \'set\'' : (
                        <span style={stateForSetter.counter === stateForSetter.maximumValue ? {color: 'red'} : undefined}>
                                {stateForSetter.counter}
                        </span>)}
                </div>}
            <div className={s.buttons}>
                <Button name={'inc'} callback={increaseCount}
                        disabled={stateForSetter.counter === stateForSetter.maximumValue || !!stateForSetter.isChanged}/>
                <Button name={'reset'} callback={resetCount} disabled={stateForSetter.counter <= stateForSetter.minimumValue || !!stateForSetter.isChanged}/>
                <Button name={'set'} callback={handleSetValue} disabled={false}/>
            </div>
        </div>
    )
}

