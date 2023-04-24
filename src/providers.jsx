import { ToastProvider } from './context/ToastProvider.jsx'
import { App } from './App.jsx'

export const Providers = () => {
  return (
    <ToastProvider>
      <App />
    </ToastProvider>
  )
}
