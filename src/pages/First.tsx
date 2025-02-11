import { FC, useEffect, useState } from 'react'
import { NavigateFunction, useNavigate } from 'react-router'

export const First: FC = () => {
  const navigate: NavigateFunction = useNavigate()
  const [count, setCount] = useState(0)

  useEffect(() => {
    gtag('event', 'rendering_first')
  },[])

  const handleCickButtonFirst = () => {
    gtag('event', 'click_button_first')
    navigate('/second')
  }

  const handleClickButtonCountUp = () => {
    setCount((prev) => prev + 1)
  }

  return(
    <>
      <p>First</p>
      <button onClick={handleCickButtonFirst}>ボタン1</button>

      <span>{count}</span>
      <br />
      <button onClick={handleClickButtonCountUp}>カウントアップ</button>
    </>
  )
}