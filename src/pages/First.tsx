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
  const handleCickButtonFirst_e = () => {
    gtag('event', 'click_button_first', {
      'user_group': 'east'
    })
    navigate('/second')
  }
  const handleCickButtonFirst_w = () => {
    gtag('event', 'click_button_first', {
      'user_group': 'west'
    })
    navigate('/second')
  }
  const handleCickButtonFirst_n = () => {
    gtag('event', 'click_button_first', {
      'user_group': 'north'
    })
    navigate('/second')
  }
  const handleCickButtonFirst_s = () => {
    gtag('event', 'click_button_first', {
      'user_group': 'south'
    })
    navigate('/second')
  }

  const handleClickButtonCountUp = () => {
    setCount((prev) => prev + 1)
  }

  return(
    <>
      <p>First</p>
      <button onClick={handleCickButtonFirst}>ボタン1</button>
      <button onClick={handleCickButtonFirst_e}>ボタン_e</button>
      <button onClick={handleCickButtonFirst_w}>ボタン_w</button>
      <button onClick={handleCickButtonFirst_n}>ボタン_n</button>
      <button onClick={handleCickButtonFirst_s}>ボタン_s</button>

      <span>{count}</span>
      <br />
      <button onClick={handleClickButtonCountUp}>カウントアップ</button>
    </>
  )
}