import React from "react";
import Button from "../Button/Button";
import s from './Counter.module.css'
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../../store/store";
import {isSetClickedAC, setCounterAC} from "../../reducers/main-reducer";

export function Counter() {


    const dispatch = useDispatch()
    const stateForCounter = useSelector((state: RootReducerType) => state.commonState);

    const handleSetValue = () => {
        dispatch(isSetClickedAC(true))
    }

    const increaseCount = () => {
        let incremet = stateForCounter.counter + 1
        if (incremet <= stateForCounter.maximumValue) {
            dispatch(setCounterAC(incremet))
        }
    }

    const resetCount = () => {
        dispatch(setCounterAC(stateForCounter.minimumValue))
    }


    return (
        <div className={s.Counter}>
            {stateForCounter.error ? <div className={s.redcounterfield}>{stateForCounter.error}</div> :
                <div className={stateForCounter.error ? s.redcounterfield : s.counterfield}>
                        <span
                            style={stateForCounter.counter === stateForCounter.maximumValue ? {color: 'red'} : undefined}>
                                {stateForCounter.counter}
                        </span>
                </div>}
            <div className={s.buttons}>
                <Button name={'inc'} callback={increaseCount}
                        disabled={stateForCounter.counter === stateForCounter.maximumValue}/>
                <Button name={'reset'} callback={resetCount}
                        disabled={stateForCounter.counter <= stateForCounter.minimumValue}/>
                <Button name={'set'} callback={handleSetValue} disabled={false}/>
            </div>
        </div>
    )
}

