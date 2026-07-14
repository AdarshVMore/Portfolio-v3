import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

type ToastContextValue = {
  showToast: (message: string) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

const POP_TRANSITION =
  'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), filter 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)'

export function ToastProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string | null>(null)
  const [visible, setVisible] = useState(false)
  const [toastKey, setToastKey] = useState(0)

  const showToast = useCallback((nextMessage: string) => {
    setMessage(nextMessage)
    setVisible(false)
    setToastKey((key) => key + 1)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true))
    })
  }, [])

  useEffect(() => {
    if (!message) return

    const hideTimer = window.setTimeout(() => setVisible(false), 2000)
    const clearTimer = window.setTimeout(() => setMessage(null), 2600)

    return () => {
      window.clearTimeout(hideTimer)
      window.clearTimeout(clearTimer)
    }
  }, [message, toastKey])

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {message && (
        <div
          key={toastKey}
          className="toast-viewport"
          role="status"
          aria-live="polite"
          style={{
            opacity: visible ? 1 : 0,
            filter: visible ? 'blur(0px)' : 'blur(14px)',
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transition: POP_TRANSITION,
            willChange: 'opacity, filter, transform',
          }}
        >
          <span className="toast-pill">{message}</span>
        </div>
      )}
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within ToastProvider')
  }
  return context
}
