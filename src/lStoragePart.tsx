import {useState} from "react";

// let [maximumValue, setMaxValue] = useState(() => {
//     let maxValueAsString = localStorage.getItem('maximumValue')
//     if (maxValueAsString) {
//         let newMaxValue = JSON.parse(maxValueAsString)
//         return newMaxValue
//     }
//     return 5
// });
//
// let [minimumValue, setMinValue] = useState(() => {
//     let minValueAsString = localStorage.getItem('minimumValue')
//     if (minValueAsString) {
//         let newMinValue = JSON.parse(minValueAsString)
//         return newMinValue
//     }
//     return 0
// });
//
// const setValue = () => {
//     setIsChanged(false)
//     setCounter(minimumValue)
//     setIsSetClicked(true);
//     localStorage.setItem('minimumValue', JSON.stringify(minimumValue))
//     localStorage.setItem('maximumValue', JSON.stringify(maximumValue))
// }