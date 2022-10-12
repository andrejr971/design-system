import * as ToastRadix from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import { Text } from '../Text'
import {
  ToastClose,
  ToastContainer,
  ToastHeader,
  ToastProvider,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description?: string
  duration?: number
}

export function Toast({
  title,
  description,
  duration = 5000,
  ...props
}: ToastProps) {
  return (
    <ToastProvider
      duration={duration}
      swipeThreshold={48}
      swipeDirection="down"
      {...props}
    >
      <ToastContainer>
        <ToastHeader>
          <ToastRadix.Title>{title}</ToastRadix.Title>
          <ToastClose>
            <X size={24} />
          </ToastClose>
        </ToastHeader>

        {!!description && (
          <ToastRadix.Description>
            <Text
              size="sm"
              css={{
                color: '$gray400',
              }}
            >
              {description}
            </Text>
          </ToastRadix.Description>
        )}
      </ToastContainer>

      <ToastRadix.Viewport />
    </ToastProvider>
  )
}
