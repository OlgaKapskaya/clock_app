import { useAppSelector } from '../../../../common/hooks/useAppSelector'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ITimezone } from 'react-timezone-select'
import { setTime, setTimezone } from '../../clockSlice'
import moment from 'moment-timezone'

export const useTime = (id: number) => {
  const clockArray = useAppSelector((state) => state.clock.clock)
  const currentClock = clockArray.filter((elem) => elem.id === id)[0]

  const timezone = currentClock.currentTimezone
  const datetime = currentClock.datetime

  const [currentTime, setCurrentTime] = useState(datetime)

  const dispatch = useDispatch()

  const onChangeTimezone = useCallback((timezone: ITimezone) => {
    dispatch(setTimezone({ id, timezone }))
  }, [])

  //@ts-ignore
  const currentTimezone = timezone.value ?? timezone

  useEffect(() => {
    dispatch(setTime({ id, datetime: moment.tz(currentTimezone) }))
    setCurrentTime(moment.tz(currentTimezone))
  }, [currentTimezone, currentTime])

  useEffect(() => {
    const timerID = setInterval(() => {
      dispatch(setTime({ id, datetime: moment.tz(currentTimezone) }))
    }, 1000)
    return () => {
      clearInterval(timerID)
    }
  }, [currentTimezone])


  return {datetime, timezone, currentTimezone, onChangeTimezone}
}