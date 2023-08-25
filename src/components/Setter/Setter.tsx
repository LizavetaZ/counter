import React, {useEffect} from 'react';
import {SetValuesComponent} from "../SetValuesComponent/SetValuesComponent";
import Button from "../Button/Button";
import s from './Setter.module.css'
import {
    cleanErrorAC,
    setErrorAC,
    setIsChangedAC,
    setIsSetClickedAC,
    setMaxValueAC,
    setMinValueAC,
    setValueAC
} from "../../reducers/setter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../../store/store";


export const Setter = () => {

    const dispatch = useDispatch()
    const stateForSetter = useSelector((state: RootReducerType) => state.setter);

    const handleMaxValueChange = (value: number) => {
        dispatch(setMaxValueAC(value));
        dispatch(setIsChangedAC(true));
    };

    const handleMinValueChange = (value: number) => {
        dispatch(setMinValueAC(value));
        dispatch(setIsChangedAC(true));
    };

    const handleSetValueAndChickIsClickedSet = () => {
        dispatch(setValueAC());
        dispatch(setIsSetClickedAC(false));
    };

    useEffect(() => {
        if (stateForSetter.minimumValue < 0 || stateForSetter.minimumValue === stateForSetter.maximumValue || stateForSetter.minimumValue > stateForSetter.maximumValue || stateForSetter.maximumValue < 0) {
            dispatch(setErrorAC('Incorrect value!'))
        } else {
            dispatch(cleanErrorAC());
        }
    }, [stateForSetter.minimumValue, stateForSetter.maximumValue]);

    return (
        <div className={s.Setter}>
            <div className={s.inputsLine}>
                <SetValuesComponent
                    name={'max value'}
                    startValue={stateForSetter.maximumValue}
                    setTitle={(value) => handleMaxValueChange(value)} error={stateForSetter.error}/>
                <SetValuesComponent
                    name={'min value'}
                    startValue={stateForSetter.minimumValue}
                    setTitle={(value) => handleMinValueChange(value)} error={stateForSetter.error}/>
            </div>
            <div className={s.setButton}>
                    <Button name={'set'} callback={handleSetValueAndChickIsClickedSet}  disabled={!stateForSetter.isChanged || !!stateForSetter.error}/>
            </div>
        </div>
    );
};
