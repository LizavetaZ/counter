import React, {useState} from "react";
import Button from "../Button/Button";
import s from './Counter.module.css'

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


export function Counter(props: CounterPropsType) {

    const minValue = props.minValue
    const maxValue = props.maxValue
    const counter = props.counter

    const handleSetValue = () => {
        props.setIsSetClicked(true);
    }



    return (
        <div className={s.Counter}>
            {props.error ? <div className={s.redcounterfield}>{props.error}</div> :
                <div className={props.error ? s.redcounterfield : s.counterfield}>
                    {props.isChanged ? 'enter values and press \'set\'' : (
                        <span style={counter === maxValue ? {color: 'red'} : undefined}>
                                {counter}
                        </span>)}
                </div>}
            <div className={s.buttons}>
                <Button name={'inc'} callback={props.increaseCount}
                        disabled={counter === maxValue || !!props.isChanged}/>
                <Button name={'reset'} callback={props.resetCount} disabled={counter <= minValue || !!props.isChanged}/>
                <Button name={'set'} callback={handleSetValue} disabled={false}/>
            </div>
        </div>
    )
}

