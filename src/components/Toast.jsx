import { forwardRef, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { fnSet } from '../utils/hookManager'

export const Toast = forwardRef(({ message, color, onClose, onMouseEnter }, ref) => {
  const duration = 5
  const timerIntervalRef = useRef(null)
  const [config, setConfig] = useState({
    moreHeight: false,
    moreWidth: false,
    moreScroll: false,
    isClose: false,
    timeLeft: duration,
    progressWidth: 100,
    animationClose: false
  })

  const setVal = fnSet(setConfig)
  const {
    moreHeight, moreWidth, moreScroll, isClose,
    timeLeft, progressWidth, animationClose
  } = config

  const clearTimer = () => clearInterval(timerIntervalRef.current)

  const timer = () => {
    if (timeLeft < 0) {
      setVal('isClose', true)
      clearTimer()
      return
    }

    timerIntervalRef.current = setInterval(() => {
      setVal('timeLeft', timeLeft - 1)
      setVal('progressWidth', progressWidth - (100 / duration))

      if (timeLeft <= 1) setVal('animationClose', true)
    }, 1000)
  }

  useEffect(() => {
    !isClose ? timer() : clearTimer()
    return () => clearTimer()
  }, [duration, timeLeft, isClose])

  const handlerMouseEnter = () => {
    if (timeLeft >= 1) {
      clearTimer()
      if (message.length > 24) setVal('moreHeight', true)
      if (message.length > 60) setVal('moreWidth', true)
      if (message.length > 68) setVal('moreScroll', true)
      onMouseEnter()
    }
  }

  const handlerMouseLeave = () => {
    setVal('moreHeight', false)
    setVal('moreWidth', false)
    setVal('moreScroll', false)
    timer()
  }

  const handlerClose = () => {
    setVal('animationClose', true)
    setTimeout(() => {
      setVal('isClose', true)
      clearTimer()
      onClose()
    }, 1000)
  }

  return (
    !isClose && (
      <div
        ref={ref}
        className={`
          ${moreWidth ? 'w-72' : 'w-64'} ${moreHeight ? 'h-24' : 'h-12'}
          ${animationClose ? 'animate-fade-out' : ''}
          toast-bg relative shadow-custom mb-2
        `}
        onMouseEnter={handlerMouseEnter}
        onMouseLeave={handlerMouseLeave}
      >
        <div
          className='w-4 h-full'
          style={{ backgroundColor: `${color}` }}
        />
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
        <div
          className='absolute h-1 bottom-0 bg-slate-600 ease-in-out'
          style={{ width: `${progressWidth}%`, transition: 'width 1s linear' }}
        />
      </div>
    )
  )
})

Toast.propTypes = {
  message: PropTypes.string,
  color: PropTypes.string,
  onClose: PropTypes.func,
  onMouseEnter: PropTypes.func
}

Toast.defaultProps = {
  message: 'Message y Tal!',
  color: '#7f7f'
}
