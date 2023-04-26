import { createContext, useContext, useState } from 'react'
import { generateUniqueId } from '../utils/generateUniqueId.js'
import { Toast } from '../components/Toast.jsx'

export const ToastContext = createContext()

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([])
  const toastIds = []
  const toastTypes = [
    {
      message: 'Correcto',
      value: 'success',
      color: 'green-500'
    },
    {
      message: 'Error',
      value: 'error',
      color: 'red-500'
    }
  ]

  const addToast = (message, type) => {
    const objType = toastTypes.filter(toastType => toastType.value === type)
    const { color } = objType[0]

    const toast = {
      id: generateUniqueId(toastIds),
      message,
      color
    }

    setToasts(prev => [...prev, toast])
  }

  const removeToast = (id) => setToasts(prev => prev.filter(toast => toast.id !== id))

  return (
    <ToastContext.Provider value={{ toasts, toastTypes, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  )
}

export const ToastConsumer = () => {
  const { toasts, removeToast } = useContext(ToastContext)

  return (
    <div className='max-h-40 overflow-auto toast_scroll flex flex-col gap-2'>
      {
        toasts.length > 0 && (
          toasts.map((toast) => {
            return (
              <Toast
                key={`toast-${toast.id}`}
                colorType={toast.color}
                message={toast.message}
                onClose={() => removeToast(toast.id)}
              />
            )
          })
        )
      }
    </div>
  )
}
