import { useState } from 'react'

const fnSet = (setHook) => {
  return (keyName, val) => setHook(prev => ({ ...prev, [keyName]: val }))
}

export const Toastify = ({ message }) => {
  const [hover, setHover] = useState({ height: false, width: false, scroll: false })
  const { height, width, scroll } = hover
  const setVal = fnSet(setHover)

  const handlerMouseEnter = () => {
    console.log(message.length)
    if (message.length > 24) setVal('height', true)
    if (message.length > 60) setVal('width', true)
    if (message.length > 76) setVal('scroll', true)
  }

  const handlerMouseLeave = () => {
    setVal('height', false)
    setVal('width', false)
    setVal('scroll', false)
  }

  return (
    <div
      className={`
        ${width ? 'w-72' : 'w-64'} ${height ? 'h-24' : 'h-12'}
        toast-bg
      `}
      onMouseEnter={handlerMouseEnter}
      onMouseLeave={handlerMouseLeave}
    >
      <div className={`w-4 h-full ${'bg-green-500'}`} />
      <div className='toast_text-bg'>
        <span
          className={`
            toast_text
            ${height ? 'flex' : 'truncate'}
            ${scroll ? 'toast_scroll' : 'items-center'}
          `}
        >
          {message}
        </span>
        <div className='toast_close'>x</div>
      </div>
    </div>
  )
}
