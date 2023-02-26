
import s from "./AnalogClock.module.css"
import {FC} from "react";
import {Moment} from "moment-timezone";

export type ClockType = {
    date: Moment
}
export const AnalogClock: FC<ClockType>= ({date}) => {

    const secondsStyle = {
        transform: `rotate(${date.seconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.minutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.hours() * 30}deg)`
    };
    return (
        <div className={s.clock}>
            <div className={s.analog_clock}>
                <div className={`${s.dial} ${s.seconds}`} style={secondsStyle}/>
                <div className={`${s.dial} ${s.minutes}`} style={minutesStyle}/>
                <div className={`${s.dial} ${s.hours}`} style={hoursStyle}/>
            </div>
        </div>
    )
}