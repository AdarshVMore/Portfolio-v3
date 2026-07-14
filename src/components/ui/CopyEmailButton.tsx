import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { profile } from '@/data/profile'
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard'
import { useToast } from '@/components/ui/ToastProvider'

type CopyEmailButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'type'> & {
  children: ReactNode
}

export function CopyEmailButton({
  children,
  className,
  'aria-label': ariaLabel = 'Copy email',
  ...props
}: CopyEmailButtonProps) {
  const { copy } = useCopyToClipboard()
  const { showToast } = useToast()

  const handleClick = async () => {
    await copy(profile.email)
    showToast('Copied')
  }

  return (
    <button
      type="button"
      onClick={() => void handleClick()}
      className={className}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  )
}
