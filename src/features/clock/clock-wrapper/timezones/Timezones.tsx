import TimezoneSelect, { ITimezone, ITimezoneOption } from 'react-timezone-select'
import { FC, memo } from 'react'
import s from './Timezones.module.css'

type TimezonesType = {
  timezone: ITimezone
  onChange: (timezone: ITimezoneOption) => void
}

export const Timezones: FC<TimezonesType> = memo(({ timezone, onChange }) => {
  return (
    <div className={s.select}>
      <TimezoneSelect value={timezone} onChange={onChange} />
    </div>
  )
})
