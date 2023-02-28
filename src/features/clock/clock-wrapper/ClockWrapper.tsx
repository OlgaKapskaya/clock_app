import { FC, memo } from 'react'
import { AnalogClock } from './analog-clock/AnalogClock'
import { DigitalClock } from './digital-clock/DigitalClock'
import { Timezones } from './timezones/Timezones'

import s from './ClockWrapper.module.css'
import { useTime } from './hooks/useTime'

type ClockWrapperType = {
  id: number
}

export const ClockWrapper: FC<ClockWrapperType> = memo(({ id }) => {
  const { datetime, timezone, currentTimezone, onChangeTimezone } = useTime(id)

  return (
    <div className={s.clock_wrapper}>
      <span className={s.timezone}>{currentTimezone}</span>
      <AnalogClock date={datetime} />
      <DigitalClock date={datetime} />
      <Timezones timezone={timezone} onChange={onChangeTimezone} />
    </div>
  )
})
