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
}


export function Counter(props: CounterPropsType) {

    const minValue = props.minValue
    const maxValue = props.maxValue
    const counter = props.counter


return (
    <>
        {props.error ? <div className={`${s.counterfield} ${s.error}`}>{props.error}</div> :
            <div className={counter===maxValue ? s.redcounterfield : s.counterfield}>{props.isChanged ? 'enter values and press \'set\'' : counter}
        </div>}
        <div className = 'buttons'>
            <Button name={'inc'} callback={props.increaseCount} disabled={counter===maxValue }/>
            <Button name={'reset'} callback={props.resetCount} disabled={counter <= minValue }/>
        </div>
    </>
)
}

