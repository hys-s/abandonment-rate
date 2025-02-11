import { FC, useEffect } from 'react'
import { NavigateFunction, useNavigate } from 'react-router'

export const Third: FC = () => {
  useEffect(() => {
    gtag('event', 'rendering_third')
  },[])

  const navigate: NavigateFunction = useNavigate()
  const handleCickButtonThird = () => {
    gtag('event', 'click_button_third')
    navigate('/first')
  }

  return(
    <>
      <p>Third</p>
      <button onClick={handleCickButtonThird}>ボタン3</button>
    </>
  )
}