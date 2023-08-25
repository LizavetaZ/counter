export type SetterPropsType = {
    minimumValue: number
    maximumValue: number
    counter: number
    error: string
    isChanged: boolean
    isSetClicked: boolean
    setIsChanged: (isChanged: boolean) => void
    setMaxValue: (maximumValue: number) => void
    setMinValue: (minimumValue: number) => void
    setCounter: (counter: number) => void
    setValue: () => void
    setIsSetClicked: (value: boolean) => void
}

export const initialState: SetterPropsType = {
    minimumValue: 0,
    maximumValue: 4,
    counter: 0,
    error: '',
    isChanged: false,
    isSetClicked: false,
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
    setIsSetClicked: () => {
    },
};

export const setterReducer = (state: SetterPropsType = initialState, action: RootSetterType): SetterPropsType => {
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
                setIsSetClicked: () => setIsSetClickedAC(true)
            };
        case 'IS-SET-CLICKED':
            return {
                ...state,
                isSetClicked: action.payload.value,
            }
        case 'SET-IS-SET-CLICKED':
            return {...state, isSetClicked: action.payload.value};
        case 'SET-ERROR':
            return {
                ...state,
                error: String(action.payload.value),
            };
        case 'CLEAN-ERROR':
            return {
                ...state,
                error: '',
            };
        case 'SET-COUNTER':
            return {
                ...state,
                counter: action.payload.value
            }
        default:
            return state;
    }
};

export type RootSetterType =
    setMaxValueACType
    | setMinValueACType
    | setIsChangedACType
    | setValueACType
    | setIsSetClickedACType
    | setErrorACType
    | cleanErrorACType
    | setCounterACType
    | isSetClickedACType

type setMaxValueACType = ReturnType<typeof setMaxValueAC>
type setMinValueACType = ReturnType<typeof setMinValueAC>
type setIsChangedACType = ReturnType<typeof setIsChangedAC>
type setValueACType = ReturnType<typeof setValueAC>
type setIsSetClickedACType = ReturnType<typeof setIsSetClickedAC>
type setErrorACType = ReturnType<typeof setErrorAC>
type cleanErrorACType = ReturnType<typeof cleanErrorAC>
type setCounterACType = ReturnType<typeof setCounterAC>
type isSetClickedACType = ReturnType<typeof isSetClickedAC>


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

export const setIsSetClickedAC = (value: boolean) => {
    return {
        type: 'SET-IS-SET-CLICKED',
        payload: {value},
    } as const
}

export const setErrorAC = (value: string) => {
    return {
        type: 'SET-ERROR',
        payload: {value}
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