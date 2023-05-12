import { useContext, useState } from 'react'
import { ToastContext } from './context/ToastProvider.jsx'

import { ALERT_TYPES, POS } from './propTypes/propTypes.jsx'
import { fnOneSetDeep, fnSet } from './utils/hookManager.js'

import { ListOfToasts } from './components/ListOfToasts.jsx'

export const App = () => {
  const defaultValues = {
    label: '',
    type: ALERT_TYPES.SUCCESS,
    position: {
      x: POS.X[1],
      y: POS.Y[1]
    }
  }

  const { addToast, toastArr } = useContext(ToastContext)
  const [toast, setToast] = useState(defaultValues)

  const { label, type, position } = toast
  const setVal = fnSet(setToast)
  const setPosition = fnOneSetDeep(setToast, 'position')

  const handlerOnChange = (e) => setVal('label', e.target.value)
  const onChangeType = (e) => setVal('type', e.target.value)
  const onChangePosX = (e) => setPosition('x', e.target.value)
  const onChangePosY = (e) => setPosition('y', e.target.value)

  const handlerSubmit = (e) => {
    e.preventDefault()
    addToast(label, type)

    // reseting form values
    setVal('label', '')
    setVal('type', ALERT_TYPES.SUCCESS)
  }

  return (
    <div className='flex flex-col items-center gap-16'>
      <form
        className='p-4 flex items-center gap-5 text-white border border-gray-400 rounded-md'
        onSubmit={handlerSubmit}
      >
        <div className='grid grid-cols-3 gap-3 items-center'>
          <input
            className='p-2 col-span-3 bg-zinc-700 rounded-md placeholder:text-gray-200 text-center'
            type='text'
            placeholder='Escribe algo...'
            value={label}
            onChange={handlerOnChange}
          />
          <select
            className='px-2 py-1 cursor-pointer bg-slate-200 text-slate-700 rounded-md'
            value={type}
            onChange={onChangeType}
          >
            {
              Object.values(ALERT_TYPES).map(type => {
                return (
                  <option
                    key={`option-${type}`}
                    value={type}
                  >
                    {type}
                  </option>
                )
              })
            }
          </select>
          <div>
            <span>X: </span>
            <select
              className='px-2 py-1 col-span-1 cursor-pointer bg-slate-200 text-slate-700 rounded-md'
              value={position.x}
              onChange={onChangePosX}
            >
              {
                POS.X.map(position => {
                  return (
                    <option
                      key={`option-${position}`}
                      value={position}
                    >
                      {position}
                    </option>
                  )
                })
              }
            </select>
          </div>
          <div>
            <span>Y: </span>
            <select
              className='px-2 py-1 col-span-1 cursor-pointer bg-slate-200 text-slate-700 rounded-md'
              value={position.y}
              onChange={onChangePosY}
            >
              {
                POS.Y.map(position => {
                  return (
                    <option
                      key={`option-${position}`}
                      value={position}
                    >
                      {position}
                    </option>
                  )
                })
              }
            </select>
          </div>
        </div>
        <button
          className='w-8 h-8 bg-green-500 text-xl font-extrabold rounded-md'
          type='submit'
        >
          +
        </button>
      </form>
      <ListOfToasts toastArr={toastArr} position={{ ...position }} />
    </div>
  )
}
