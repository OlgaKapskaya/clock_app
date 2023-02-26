import {FC} from "react";
import {ClockType} from "../analog-clock/AnalogClock";
import {formatTime} from "../../../common/helpers/formatTime";
import s from "./DigitalClock.module.css"

export const DigitalClock: FC<ClockType> = ({date}) => {
    const hours = formatTime(date.hours())
    const minutes = formatTime(date.minutes())
    const seconds = formatTime(date.seconds())

    return (
        <div className={s.digitalClockWrapper}>
            <span> {hours} </span>:<span> {minutes} </span>:<span> {seconds} </span>
        </div>
    )
}