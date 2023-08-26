export type ReducerPropsType = {
    minimumValue: number
    maximumValue: number
    counter: number
    error: boolean
    isChanged: boolean
    isSetClicked: boolean
    startValue: number
    setIsChanged: (isChanged: boolean) => void
    setMaxValue: (maximumValue: number) => void
    setMinValue: (minimumValue: number) => void
    setCounter: (counter: number) => void
    setValue: () => void
}

export const initialState: ReducerPropsType = {
    minimumValue: 0,
    maximumValue: 4,
    counter: 0,
    error: false,
    isChanged: false,
    isSetClicked: false,
    startValue: 0,
    setIsChanged: () => {
    },
    setMaxValue: () => {
    },
    setMinValue: () => {
    },
    setCounter: () => {
    },
    setValue: () => {
    },
};

export const mainReducer = (state: ReducerPropsType = initialState, action: RootSetterType): ReducerPropsType => {
    switch (action.type) {
        case 'SET-MAX-VALUE':
            return {...state, maximumValue: action.payload.value};
        case 'SET-MIN-VALUE':
            return {...state, minimumValue: action.payload.value};
        case 'SET-IS-CHANGED':
            if ('isChanged' in action.payload) {
                return {...state, isChanged: action.payload.isChanged};
            }
            return state;
        case 'SET-VALUE':
            return {
                ...state,
                isChanged: false,
                counter: state.minimumValue,
                isSetClicked: true
            };
        case 'IS-SET-CLICKED':
            return {
                ...state,
                isSetClicked: action.payload.value,
            }
        case 'SET-ERROR':
            return {
                ...state,
                error: true,
            };
        case 'CLEAN-ERROR':
            return {
                ...state,
                error: false,
            };
        case 'SET-COUNTER':
            return {
                ...state,
                counter: action.payload.value
            }
        case 'SET-START-VALUE':
            return {...state, startValue: action.payload.value};
        default:
            return state;
    }
};

export type RootSetterType =
    setMaxValueACType
    | setMinValueACType
    | setIsChangedACType
    | setValueACType
    | setErrorACType
    | cleanErrorACType
    | setCounterACType
    | isSetClickedACType
    | setStartValueACType

type setMaxValueACType = ReturnType<typeof setMaxValueAC>
type setMinValueACType = ReturnType<typeof setMinValueAC>
type setIsChangedACType = ReturnType<typeof setIsChangedAC>
type setValueACType = ReturnType<typeof setValueAC>
type setErrorACType = ReturnType<typeof setErrorAC>
type cleanErrorACType = ReturnType<typeof cleanErrorAC>
type setCounterACType = ReturnType<typeof setCounterAC>
type isSetClickedACType = ReturnType<typeof isSetClickedAC>
type setStartValueACType = ReturnType<typeof setStartValueAC>


export const setMaxValueAC = (value: number) => {
    return {
        type: 'SET-MAX-VALUE',
        payload: {value},
    } as const
}

export const setMinValueAC = (value: number) => {
    return {
        type: 'SET-MIN-VALUE',
        payload: {value},
    } as const
}

export const setIsChangedAC = (isChanged: boolean) => {
    return {
        type: 'SET-IS-CHANGED',
        payload: {isChanged},
    } as const
}

export const setValueAC = () => {
    return {
        type: 'SET-VALUE'
    } as const
}

export const setErrorAC = () => {
    return {
        type: 'SET-ERROR'
    } as const
}

export const cleanErrorAC = () => {
    return {
        type: 'CLEAN-ERROR'
    } as const
}

export const setCounterAC = (value: number) => {
    return {
        type: 'SET-COUNTER',
        payload: {value}
    } as const
}

export const isSetClickedAC = (value: boolean) => {
    return {
        type: 'IS-SET-CLICKED',
        payload: {value},
    } as const;
};

export const setStartValueAC = (value: number) => {
    return {
        type: 'SET-START-VALUE',
        payload: {value},
    } as const;
};