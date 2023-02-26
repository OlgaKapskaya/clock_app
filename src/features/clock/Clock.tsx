import {useEffect, useState} from "react";
import {ITimezone} from "react-timezone-select";
import moment from "moment-timezone";
import timezone from "dayjs/plugin/timezone";
import {AnalogClock} from "./analog-clock/AnalogClock";
import {DigitalClock} from "./digital-clock/DigitalClock";
import {Timezones} from "./timezones/Timezones";

export const Clock = () => {
    const [currentTimezone, setCurrentTimezone] = useState<ITimezone>(Intl.DateTimeFormat().resolvedOptions().timeZone);
    const [datetime, setDatetime] = useState(moment());


    //@ts-ignore
    const tz = currentTimezone.value ?? currentTimezone
    useEffect(() => {
        setDatetime(moment.tz(tz));
    }, [timezone, datetime]);

    useEffect(() => {
        let timerID = setInterval(() => {
            setDatetime(moment())
        }, 1000)
        return () => {
            clearInterval(timerID)
        }
    }, [])
    return (
        <div className="clock_wrapper">
            <AnalogClock date={datetime}/>
            <DigitalClock date={datetime}/>
            <Timezones timezone={currentTimezone} onChange={setCurrentTimezone}/>
        </div>
    )

}