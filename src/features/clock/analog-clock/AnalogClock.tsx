import s from "./AnalogClock.module.css"
import {FC} from "react";
import {Moment} from "moment-timezone";

export type ClockType = {
    date: Moment
}
export const AnalogClock: FC<ClockType>= ({date}) => {

    const secondsStyle = {
        transform: `rotateZ(${date.seconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotateZ(${date.minutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotateZ(${date.hours() * 30}deg)`
    };
    return (
            <div className={s.clock}>
                <div
                    className={s.hour_hand}
                    style={hoursStyle}
                />
                <div
                    className={s.min_hand}
                    style={minutesStyle}
                />
                <div
                    className={s.sec_hand}
                    style={secondsStyle}
                />
                <span className={s.twelve}>12</span>
                <span className={s.one}>1</span>
                <span className={s.two}>2</span>
                <span className={s.three}>3</span>
                <span className={s.four}>4</span>
                <span className={s.five}>5</span>
                <span className={s.six}>6</span>
                <span className={s.seven}>7</span>
                <span className={s.eight}>8</span>
                <span className={s.nine}>9</span>
                <span className={s.ten}>10</span>
                <span className={s.eleven}>11</span>
            </div>
    )
}