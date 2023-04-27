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

  const toastDirection = [
    {
      message: 'Centro',
      value: 'center',
      direction: ''
    },
    {
      message: 'Arriba Centro',
      value: 'top',
      direction: 'absolute top-2'
    },
    {
      message: 'Arriba Izquierda',
      value: 'top-left',
      direction: 'absolute top-2 left-2'
    },
    {
      message: 'Arriba Derecha',
      value: 'top-right',
      direction: 'absolute top-2 right-2'
    },
    {
      message: 'Abajo Centro',
      value: 'bottom',
      direction: 'absolute bottom-2'
    },
    {
      message: 'Abajo Izquierda',
      value: 'bottom-left',
      direction: 'absolute bottom-2 left-2'
    },
    {
      message: 'Abajo Derecha',
      value: 'bottom-right',
      direction: 'absolute bottom-2 right-2'
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
    <ToastContext.Provider value={{ toasts, toastTypes, toastDirection, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  )
}

export const ToastConsumer = ({ direction }) => {
  const { toasts, removeToast } = useContext(ToastContext)

  const focusChildren = (id) => {

  }

  return (
    <div
      className={`
        max-h-28 overflow-auto toast_scroll flex flex-col gap-2
        ${direction}
      `}
    >
      {
        toasts.length > 0 && (
          toasts.map((toast) => {
            return (
              <Toast
                key={`toast-${toast.id}`}
                colorType={toast.color}
                message={toast.message}
                onClose={() => removeToast(toast.id)}
                onMouseEnter={() => focusChildren(toast.id)}
              />
            )
          })
        )
      }
    </div>
  )
}
