import { legacy_createStore as createStore,combineReducers} from 'redux'
import {setterReducer} from "../reducers/setter-reducer";

export const RootReducer=combineReducers({
    setter: setterReducer
})

export const store=createStore(RootReducer)

export type RootReducerType = ReturnType<typeof RootReducer>
export type RootState = ReturnType<typeof store.getState>