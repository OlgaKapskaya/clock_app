import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITimezone} from "react-timezone-select";
import moment, {Moment} from "moment-timezone";

export type StateClockType = {
    id: number,
    currentTimezone: ITimezone,
    datetime: Moment
}

const initialState = {
    clock: [] as StateClockType[]
}

export const clockSlice = createSlice({
    name: 'clock',
    initialState: initialState,
    reducers: {
        createClock: (state, action: PayloadAction<{id: number}>) => {
            const newClock = {
                id: action.payload.id,
                datetime: moment(),
                currentTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone
            }
            state.clock.push(newClock)
        },

        setTime: (state, action: PayloadAction<{id: number, timezone: string}>) => {
            state.clock = state.clock
                .map(elem => {
                        return elem.id !== action.payload.id ? elem : {
                            ...elem,
                            datetime: moment.tz(action.payload.timezone)
                        };
                    }
                )
        },
        setTimezone: (state, action: PayloadAction<{id: number, timezone: ITimezone}>) => {
            state.clock = state.clock
                .map(elem => elem.id === action.payload.id
                    ? {...elem, currentTimezone: action.payload.timezone}
                    : elem
                )
        },
    },
})
export const { createClock, setTime, setTimezone } = clockSlice.actions
export const clockReducer = clockSlice.reducer