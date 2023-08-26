import React from 'react';
import './App.css'
import {Setter} from "./components/Setter/Setter";
import {Counter} from "./components/Conter/Counter";
import {useSelector} from "react-redux";
import {RootReducerType} from "./store/store";

function App() {

    const isSetClicked = useSelector((state: RootReducerType) => state.commonState.isSetClicked);

    return (
        <div className="App">
            {isSetClicked ?
                <Setter />
                : <Counter/>}

        </div>
    );
}

export default App;
