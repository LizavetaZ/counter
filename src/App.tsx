import React, {useEffect, useState} from 'react';
import './App.css'
import {Setter} from "./components/Setter/Setter";
import s from "./components/Conter/Counter.module.css";
import {Counter} from "./components/Conter/Counter";

function App() {

    let [maximumValue, setMaxValue] = useState(() => {
        let maxValueAsString = localStorage.getItem('maximumValue')
        if (maxValueAsString) {
            let newMaxValue = JSON.parse(maxValueAsString)
            return newMaxValue
        }
        return 5 });

    let [minimumValue, setMinValue] = useState(() => {
        let minValueAsString = localStorage.getItem('minimumValue')
        if (minValueAsString) {
            let newMinValue = JSON.parse(minValueAsString)
            return newMinValue
        }
        return 0});


    let [isChanged, setIsChanged] = useState(false);

    const [counter, setCounter] = useState<number>(minimumValue)



    const increaseCount = () => {
        let incremet = counter+1
        if (incremet <= maximumValue) {
            setCounter(incremet)
        }
    }

    const resetCount = () => {
        setCounter(minimumValue)
    }

    const [error, setError] = useState('');

    useEffect(() => {
        if (minimumValue < 0 || minimumValue === maximumValue || minimumValue > maximumValue) {
            setError('Incorrect value!');
        } else {
            setError('');
        }
    }, [minimumValue, maximumValue]);

    return (
        <div className="App">
            <div className="Setter">
                <Setter maximumValue={maximumValue}
                        minimumValue = {minimumValue}
                        error = {error}
                        isChanged = {isChanged}
                        setIsChanged = {setIsChanged}
                        setMaxValue = {setMaxValue}
                        setMinValue = {setMinValue}
                        counter = {counter}
                        setCounter = {setCounter}/>
            </div>
            <div>
                <div className={s.Counter}>
                    <Counter
                        maxValue={maximumValue}
                        minValue={minimumValue}
                        isChanged={isChanged}
                        increaseCount = {increaseCount}
                        counter = {counter}
                        resetCount = {resetCount}
                        error = {error}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
