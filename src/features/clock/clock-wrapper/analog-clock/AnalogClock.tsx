import s from './AnalogClock.module.css'
import { FC } from 'react'
import { Moment } from 'moment-timezone'

export type ClockType = {
  date: Moment
}

const dial = [
  { style: s.twelve, value: 12 },
  { style: s.one, value: 1 },
  { style: s.two, value: 2 },
  { style: s.three, value: 3 },
  { style: s.four, value: 4 },
  { style: s.five, value: 5 },
  { style: s.six, value: 6 },
  { style: s.seven, value: 7 },
  { style: s.eight, value: 8 },
  { style: s.nine, value: 9 },
  { style: s.ten, value: 10 },
  { style: s.eleven, value: 11 },
]

export const AnalogClock: FC<ClockType> = ({ date }) => {
  const secondsStyle = {
    transform: `rotateZ(${date.seconds() * 6}deg)`,
  }
  const minutesStyle = {
    transform: `rotateZ(${date.minutes() * 6}deg)`,
  }
  const hoursStyle = {
    transform: `rotateZ(${date.hours() * 30}deg)`,
  }

  return (
    <div className={s.clock}>
      <div className={s.hour_hand} style={hoursStyle} />
      <div className={s.min_hand} style={minutesStyle} />
      <div className={s.sec_hand} style={secondsStyle} />

      {dial.map((elem, index) => (
        <span key={index} className={elem.style}>
          {elem.value}
        </span>
      ))}
    </div>
  )
}
