import { ChangeEvent, FC, useState } from 'react'
import s from './Header.module.css'

type HeaderType = {
  value: number,
  onChange: (value: number) => void
}
export const Header:FC<HeaderType> = ({value, onChange}) => {
  const [error, setError] = useState<boolean>(false)

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (+event.currentTarget.value >= 0 && +event.currentTarget.value <= 24) {
      onChange(+event.currentTarget.value)
      setError(false)
    }
    else setError(true)
  }

  return (
    <header className={s.header}>
      <label>Enter count of clock:</label>
      <input type='number'
             value={value}
             onChange={onChangeHandler}
             min={0}
             max={24}
             className={s.input}/>
      {error && <label className={s.error}>Error! Number must be at 0 - 24 </label>}
    </header>
  )
}