import { useState } from 'react'

const fnSet = (setHook) => {
  return (keyName, val) => setHook(prev => ({ ...prev, [keyName]: val }))
}

export const Toastify = ({ message }) => {
  const [hover, setHover] = useState({ height: false, width: false, scroll: false })
  const { height, width, scroll } = hover
  const setVal = fnSet(setHover)

  const handlerMouseEnter = () => {
    // 83
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
        cursor-pointer flex items-center bg-gray-800 rounded-sm
        transition-all duration-500
      `}
      onMouseEnter={handlerMouseEnter}
      onMouseLeave={handlerMouseLeave}
    >
      <div className='w-4 h-full bg-green-500' />
      <div
        className='
          p-3 w-full h-full overflow-hidden flex items-center justify-between gap-3
        '
      >
        <span
          className={`
            h-full w-11/12 text-white font-semibold ${height ? 'flex' : 'truncate'}
            ${scroll ? 'pe-3 overflow-y-auto scroll' : 'items-center'}
          `}
        >
          {message}
        </span>
        <div className='w-1/12 text-red-500 font-bold flex justify-center'>
          x
        </div>
      </div>
    </div>
  )
}
