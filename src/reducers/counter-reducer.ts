
import {initialState, RootSetterType, setIsSetClickedAC} from "./setter-reducer";

// export const setterReducer = (state: SetterPropsType = initialState, action: RootSetterType): SetterPropsType => {
//     switch (action.type) {
//         case 'SET-MAX-VALUE':
//             return { ...state, maximumValue: action.payload.value};
//         case 'SET-MIN-VALUE':
//             return { ...state, minimumValue: action.payload.value};
//         case 'SET-IS-CHANGED':
//             return { ...state, isChanged: action.payload.isChanged};
//         case 'SET-VALUE':
//             return {
//                 ...state,
//                 isChanged: false,
//                 counter: state.minimumValue,
//                 setIsSetClicked: () => setIsSetClickedAC(true)
//             };
//         case 'SET-IS-SET-CLICKED':
//             return {  ...state, setIsSetClicked: () => action.payload.value};
//         default:
//             return state;
//     }
// };