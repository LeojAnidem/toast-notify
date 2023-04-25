import { createContext, useContext, useState } from 'react'
import { Toast } from '../components/Toast.jsx'
import { generateUniqueId } from '../utils/generateUniqueId.js'

export const ToastContext = createContext()

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([])
  const toastIds = []

  const addToast = (message, type) => {
    const toast = {
      id: generateUniqueId(toastIds),
      message,
      type
    }

    setToasts(prev => [...prev, toast])
  }

  const removeToast = (id) => setToasts(prev => prev.filter(toast => toast.id !== id))

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
          toasts.map((toast) => {
            return (
              <Toast
                key={`toast-${toast.id}`}
                type={toast.type}
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
