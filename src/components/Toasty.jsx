import { useEffect, useRef, useState } from 'react'
import { fnSet } from '../utils/hookManager'
import { colorValueType, toastyDefaultProps, toastyPropTypes } from '../propTypes/propTypes'

export const Toasty = ({ label, type, autoClose, fnClose }) => {
  const selectType = colorValueType(type)

  // hover Settings
  const [hoverConfig, setHoverConfig] = useState({
    needSize: false,
    needScroll: false
  })

  const setValHover = fnSet(setHoverConfig)
  const { needSize, needScroll } = hoverConfig
  // -----------------------------------------

  // Configuration for automatic closing
  const timerIntervalRef = useRef(null)

  const DURATION = 5
  const [closeConfig, setCloseConfig] = useState({
    timeLeft: DURATION,
    isClose: false,
    runClosedTransition: false,
    loadingWidth: 100
  })
  const { timeLeft, isClose, runClosedTransition, loadingWidth } = closeConfig
  const setValCloseCfg = fnSet(setCloseConfig)

  const clearTimer = () => clearInterval(timerIntervalRef.current)
  const timer = () => {
    if (timeLeft < 0) {
      setValCloseCfg('isClose', true)
      clearTimer()
    } else {
      timerIntervalRef.current = setInterval(() => {
        setValCloseCfg('timeLeft', timeLeft - 1)
        setValCloseCfg('loadingWidth', loadingWidth - (100 / DURATION))
        if (timeLeft <= 1) setValCloseCfg('runClosedTransition', true)
      }, 1000)
    }
  }

  useEffect(() => {
    (autoClose && !isClose) ? timer() : fnClose()
    return () => clearTimer()
  }, [timeLeft, isClose])
  // -----------------------------------------

  const handlerClose = () => {
    setValCloseCfg('runClosedTransition', true)
    setTimeout(() => {
      clearTimer()
      setValCloseCfg('isClose', true)
      fnClose()
    }, 1000)
  }

  const handlerMouseEnter = () => {
    if (timeLeft > 0) {
      clearTimer()
      if (label.length > 23) setValHover('needSize', true)
      if (label.length > 68 && !needScroll) setValHover('needScroll', true)
    }
  }

  const handlerMouseLeave = () => {
    setValHover('needSize', false)
    setValHover('needScroll', false)
    timer()
  }

  const Component = (
    <div
      className={`
        toast-bg ${needSize ? 'w-72 h-24' : 'w-64 h-12 '}
        ${runClosedTransition ? 'animate-fade-out' : ''}
      `}
      onMouseEnter={handlerMouseEnter}
      onMouseLeave={handlerMouseLeave}
    >
      <div className={`w-4 h-full ${selectType}`} />
      <div className='toast_text-bg'>
        <span
          className={`
            toast_text ${needSize ? 'flex' : 'truncate'}
            ${needScroll ? 'toast_scroll' : 'items-center'}
          `}
        >
          {label}
        </span>
        <button
          className='toast_close'
          onClick={handlerClose}
        >
          x
        </button>
      </div>
      {autoClose && (
        <div
          className='toast_loading'
          style={{
            width: `${loadingWidth}%`,
            transition: 'width 1s linear'
          }}
        />
      )}
    </div>
  )

  return (
    !isClose && Component
  )
}

Toasty.propTypes = toastyPropTypes
Toasty.defaultProps = toastyDefaultProps
