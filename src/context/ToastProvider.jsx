import { createContext, useContext, useState } from 'react'
import { Toast } from '../components/Toast.jsx'

export const ToastContext = createContext()

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([])

  const addToast = (message, type) => setToasts(prev => [...prev, { message, type }])

  const removeToast = (index) => {
    setToasts(prev => {
      const updateToasts = [...prev]
      updateToasts.splice(index, 1)
      return [...updateToasts]
    })
  }

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  )
}

export const ToastConsumer = () => {
  const { toasts, removeToast } = useContext(ToastContext)

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
