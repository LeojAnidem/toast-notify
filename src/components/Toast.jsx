import { useState } from 'react'
import { fnSet } from '../utils/hookManager'

export const Toast = ({ message, colorType, onClose }) => {
  const [config, setConfig] = useState({
    moreHeight: false,
    moreWidth: false,
    moreScroll: false,
    isClose: false
  })
  const { moreHeight, moreWidth, moreScroll, isClose } = config
  const setVal = fnSet(setConfig)

  const handlerMouseEnter = () => {
    if (message.length > 24) setVal('moreHeight', true)
    if (message.length > 60) setVal('moreWidth', true)
    if (message.length > 68) setVal('moreScroll', true)
  }

  const handlerMouseLeave = () => {
    setVal('moreHeight', false)
    setVal('moreWidth', false)
    setVal('moreScroll', false)
  }

  const handlerClose = () => {
    setVal('isClose', true)
    onClose()
  }

  return (
    !isClose && (
      <div
        className={`
          ${moreWidth ? 'w-72' : 'w-64'} ${moreHeight ? 'h-24' : 'h-12'}
          toast-bg
        `}
        onMouseEnter={handlerMouseEnter}
        onMouseLeave={handlerMouseLeave}
      >
        <div className={`w-4 h-full bg-${colorType}`} />
        <div className='toast_text-bg'>
          <span
            className={`
              toast_text
              ${moreHeight ? 'flex' : 'truncate'}
              ${moreScroll ? 'toast_scroll' : 'items-center'}
            `}
          >
            {message}
          </span>
          <button
            className='toast_close'
            onClick={handlerClose}
          >
            x
          </button>
        </div>
      </div>
    )
  )
}
