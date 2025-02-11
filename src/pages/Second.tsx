import { FC, useEffect } from 'react'
import { NavigateFunction, useNavigate } from 'react-router'

export const Second: FC = () => {
  useEffect(() => {
    gtag('event', 'rendering_second')
  },[])

  const navigate: NavigateFunction = useNavigate()
  const handleCickButtonSecond = () => {
    gtag('event', 'click_button_second')
    navigate('/third')
  }

  return(
    <>
      <p>Second</p>
      <button onClick={handleCickButtonSecond}>ボタン2</button>
    </>
  )
}