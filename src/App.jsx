import { useState } from 'react'
import { Toastify } from './Toastify.jsx'

const App = () => {
  const [message, setMessage] = useState('')
  const handlerOnChange = (e) => setMessage(e.target.value)

  return (
    <div className='flex flex-col items-center gap-16'>
      <input
        className='py-2 px-4 w-96 bg-zinc-700 rounded-sm text-white placeholder:text-gray-200 text-center'
        type='text'
        placeholder='Escribe algo...'
        value={message}
        onChange={handlerOnChange}
      />
      <Toastify message={message} />
    </div>
  )
}

export default App
