import { createContext, useState } from 'react'
import { generateUniqueId } from '../utils/generateUniqueId.js'

export const ToastContext = createContext()

export const ToastProvider = ({ children }) => {
  const [toastArr, setToastArr] = useState([])
  const toastIds = []

  const removeToast = (toastId) => {
    setToastArr(prev => prev.filter(toast => toast.id !== toastId))
  }

  const addToast = (label, type, autoClose) => {
    const id = generateUniqueId(toastIds)

    const toast = {
      id,
      label,
      type,
      autoClose: autoClose ?? true,
      fnClose: () => removeToast(id)
    }
    setToastArr(prev => ([...prev, toast]))
  }

  return (
    <ToastContext.Provider value={{ toastArr, addToast }}>
      {children}
    </ToastContext.Provider>
  )
}
