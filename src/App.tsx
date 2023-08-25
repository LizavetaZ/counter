import React from 'react';
import './App.css'
import {Setter} from "./components/Setter/Setter";
import {Counter} from "./components/Conter/Counter";
import {useSelector} from "react-redux";
import {RootReducerType} from "./store/store";

function App() {

    // const [isChanged, setIsChanged] = useState(false);
    //
    // const [counter, setCounter] = useState<number>(minimumValue)
    //
    //
    // const increaseCount = () => {
    //     let incremet = counter + 1
    //     if (incremet <= maximumValue) {
    //         setCounter(incremet)
    //     }
    // }
    //
    // const resetCount = () => {
    //     setCounter(minimumValue)
    // }
    //
    // const [error, setError] = useState('');
    //
    // useEffect(() => {
    //     if (minimumValue < 0 || minimumValue === maximumValue || minimumValue > maximumValue || maximumValue < 0) {
    //         setError('Incorrect value!');
    //     } else {
    //         setError('');
    //     }
    // }, [minimumValue, maximumValue]);
    //
    // const setValue = () => {
    //     setIsChanged(false)
    //     setCounter(minimumValue)
    //     setIsSetClicked(true);
    // }
    //

    const isSetClicked = useSelector((state: RootReducerType) => state.setter.isSetClicked);

    return (
        <div className="App">
            {isSetClicked ?
                <Setter />
                : <Counter/>}

        </div>
    );
}

export default App;
