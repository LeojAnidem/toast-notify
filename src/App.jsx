import { useContext, useState } from 'react'
import { ToastContext, ToastConsumer } from './context/ToastProvider.jsx'
import { fnSet } from './utils/hookManager.js'

export const App = () => {
  const { addToast, toastTypes } = useContext(ToastContext)
  const [toast, setToast] = useState({
    message: '',
    type: toastTypes[0].value
  })

  const { message, type } = toast
  const setVal = fnSet(setToast)

  const handlerOnChange = (e) => setVal('message', e.target.value)
  const handlerSelect = (e) => setVal('type', e.target.value)

  const handlerSubmit = (e) => {
    e.preventDefault()
    addToast(message, type)
    setToast(() => ({
      message: '',
      type: toastTypes[0].value
    }))
  }

  return (
    <div className='flex flex-col items-center gap-16'>
      <form
        className='flex items-center gap-5 text-white'
        onSubmit={handlerSubmit}
      >
        <div className='grid grid-cols-3 gap-3 items-center'>
          <input
            className='p-2 col-span-2 bg-zinc-700 rounded-md placeholder:text-gray-200 text-center'
            type='text'
            placeholder='Escribe algo...'
            value={message}
            onChange={handlerOnChange}
          />
          <select
            className='px-2 py-1 cursor-pointer bg-slate-200 text-slate-700 rounded-md'
            value={type}
            onChange={handlerSelect}
          >
            {
              toastTypes.map(type => {
                return (
                  <option
                    key={`option-${type.value}`}
                    value={type.value}
                  >
                    {type.message}
                  </option>
                )
              })
            }
          </select>
        </div>
        <button
          className='w-8 h-8 bg-green-500 text-xl font-extrabold rounded-md'
          type='submit'
        >
          +
        </button>
      </form>
      <ToastConsumer />
    </div>
  )
}
