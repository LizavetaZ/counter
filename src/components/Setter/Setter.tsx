import React from 'react';
import {SetValuesComponent} from "../SetValuesComponent/SetValuesComponent";
import Button from "../Button/Button";
import s from './Setter.module.css'

export type SetterPropsType = {
    minimumValue: number
    maximumValue: number
    counter: number
    error: string
    isChanged: boolean
    setIsChanged:(isChanged: boolean) => void
    setMaxValue: (maximumValue: number) => void
    setMinValue: (minimumValue: number) => void
    setCounter: (counter: number) => void
    setValue: () => void
    setIsSetClicked: (value: boolean) => void
}


export const Setter = (props: SetterPropsType) => {

    const handleMaxValueChange = (value: number) => {
        props.setMaxValue(value)
        props.setIsChanged(true)
    };
    const handleMinValueChange = (value: number) => {
        props.setMinValue(value);
        props.setIsChanged(true)
    };

    const handleSetValueAndChickIsClickedSet = () => {
        props.setValue()
        props.setIsSetClicked(false)
    }

    return (
        <div className={s.Setter}>
            <div className={s.inputsLine}>
                <SetValuesComponent
                    name={'max value'}
                    startValue={props.maximumValue}
                    setTitle={(value) => handleMaxValueChange(value)} error={props.error}/>
                <SetValuesComponent
                    name={'min value'}
                    startValue={props.minimumValue}
                    setTitle={(value) => handleMinValueChange(value)} error={props.error}/>
            </div>
            <div className={s.setButton}>
                    <Button name={'set'} callback={handleSetValueAndChickIsClickedSet}  disabled={!props.isChanged || !!props.error}/>
            </div>
        </div>
    );
};
