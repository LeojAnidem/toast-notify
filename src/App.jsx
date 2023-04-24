import { useState } from 'react'
import { Toast } from './Toastify.jsx'

const Toasts = ({ toasts, removeToast }) => {
  return (
    <div className='max-h-64 overflow-auto toast_scroll flex flex-col gap-5'>
      {
        toasts.length > 0 && (
          toasts.map((toast, index) => {
            return (
              <Toast
                key={`toasty-${index}`}
                type={toast.type}
                message={toast.message}
                onClose={() => removeToast(index)}
              />
            )
          })
        )
      }
    </div>
  )
}

const App = () => {
  const [toasts, setToasts] = useState([])
  const [message, setMessage] = useState('')
  const handlerOnChange = (e) => setMessage(e.target.value)

  const addToast = (message, type) => setToasts(prev => [...prev, { message, type }])

  const removeToast = (index) => {
    setToasts(prev => {
      const updateToasts = [...prev]
      updateToasts.splice(index, 1)
      return [...updateToasts]
    })
  }

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
      <Toasts toasts={toasts} removeToast={removeToast} />
    </div>
  )
}

export default App
