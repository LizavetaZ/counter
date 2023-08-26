import React, {useEffect} from 'react';
import {SetValuesComponent} from "../SetValuesComponent/SetValuesComponent";
import Button from "../Button/Button";
import s from './Setter.module.css'
import {
    cleanErrorAC, isSetClickedAC,
    setErrorAC,
    setIsChangedAC,
    setMaxValueAC,
    setMinValueAC,
    setValueAC
} from "../../reducers/main-reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../../store/store";


export const Setter = () => {

    const dispatch = useDispatch()
    const stateForSetter = useSelector((state: RootReducerType) => state.commonState);

    const handleMaxValueChange = (value: number) => {
        dispatch(setMaxValueAC(value));
        dispatch(setIsChangedAC(true));
    };

    const handleMinValueChange = (value: number) => {
        dispatch(setMinValueAC(value));
        dispatch(setIsChangedAC(true));
    };

    const handleSetValueAndCheckIsClicked = () => {
        dispatch(setValueAC());
        dispatch(isSetClickedAC(false));
    };

    useEffect(() => {
        if (stateForSetter.minimumValue < 0 || stateForSetter.minimumValue === stateForSetter.maximumValue || stateForSetter.minimumValue > stateForSetter.maximumValue || stateForSetter.maximumValue < 0) {
            dispatch(setErrorAC())
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
                    setTitle={handleMaxValueChange}/>
                <SetValuesComponent
                    name={'min value'}
                    startValue={stateForSetter.minimumValue}
                    setTitle={handleMinValueChange}/>
            </div>
            <div className={s.setButton}>
                    <Button name={'set'} callback={handleSetValueAndCheckIsClicked}  disabled={!stateForSetter.isChanged || stateForSetter.error}/>
            </div>
        </div>
    );
};
