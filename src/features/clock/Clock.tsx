import { ClockWrapper } from './clock-wrapper/ClockWrapper'
import s from './Clock.module.css'
import { FC, ReactNode } from 'react'
import { useDispatch } from 'react-redux'
import { createClock } from './clockSlice'

type ClockType = {
  count?: number
}

/**
 *
 * @param count - count of clock elements
 */

export const Clock: FC<ClockType> = ({ count }) => {
  const dispatch = useDispatch()
  const clockCount = count ?? 1

  const createClock1 = () => {
    let clocks: ReactNode[] = []
    for (let i = 0; i < clockCount; i++) {
      clocks = [...clocks, <ClockWrapper id={i} />]
      dispatch(createClock({ id: i }))
    }
    return clocks
  }

  return <div className={s.clock}>{createClock1()}</div>
}
