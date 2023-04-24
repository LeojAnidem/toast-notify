import { useContext, useState } from 'react'
import { ToastContext, ToastConsumer } from './context/ToastProvider.jsx'

export const App = () => {
  const { addToast } = useContext(ToastContext)
  const [message, setMessage] = useState('')
  const handlerOnChange = (e) => setMessage(e.target.value)

  return (
    <div className='flex flex-col items-center gap-16'>
      <div className='flex items-center gap-5 text-white'>
        <input
          className='p-3 w-80 bg-zinc-700 rounded-md placeholder:text-gray-200 text-center'
          type='text'
          placeholder='Escribe algo...'
          value={message}
          onChange={handlerOnChange}
        />
        <button
          className='w-8 h-8 bg-green-500 text-xl font-extrabold rounded-md'
          onClick={() => addToast(message, 'success')}
        >
          +
        </button>
      </div>
      <ToastConsumer />
    </div>
  )
}
