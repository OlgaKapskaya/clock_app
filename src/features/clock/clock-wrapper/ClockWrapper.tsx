import {FC, memo, useCallback, useEffect} from "react";
import {ITimezone} from "react-timezone-select";
import {AnalogClock} from "./analog-clock/AnalogClock";
import {DigitalClock} from "./digital-clock/DigitalClock";
import {Timezones} from "./timezones/Timezones";

import s from "./ClockWrapper.module.css"
import {useDispatch} from "react-redux";
import {setTime, setTimezone} from "../clockSlice";
import {useAppSelector} from "../../../common/hooks/useAppSelector";

type ClockWrapperType = {
    id: number
}

export const ClockWrapper: FC<ClockWrapperType> = memo(({id}) => {
    const clockArray = useAppSelector(state => state.clock.clock)
    const currentClock = clockArray.filter(elem => elem.id === id)[0]

    const currentTimezone = currentClock.currentTimezone
    const datetime = currentClock.datetime

    const dispatch = useDispatch()

    const onChangeTimezone = useCallback((timezone: ITimezone) => {
        dispatch(setTimezone({id, timezone}))
    }, [])

    //@ts-ignore
    const tz = currentTimezone.value ?? currentTimezone

    useEffect(() => {
        dispatch(setTime({id, timezone: tz}))
    }, [currentTimezone]);

    useEffect(() => {
        let timerID = setInterval(() => {
            dispatch(setTime({id, timezone: tz}))
        }, 1000)
        return () => {
            clearInterval(timerID)
        }
    }, [tz])


    return (
        <div className={s.clock_wrapper}>
            <AnalogClock date={datetime}/>
            <DigitalClock date={datetime}/>
            <Timezones timezone={currentTimezone} onChange={onChangeTimezone}/>
        </div>
    )
})