import { FC, useEffect } from 'react'

export const First: FC = () => {
  useEffect(() => {
    gtag('event', 'rendering_first')
  },[])
  const handleCickButtonFirst = () => {
    gtag('event', 'click_button_first')
  }
  return(
    <>
      <p>First</p>
      <button onClick={handleCickButtonFirst}>ボタン1</button>
    </>
  )
}