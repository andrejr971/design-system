import { keyframes, styled } from '../../styles'
import * as Toast from '@radix-ui/react-toast'

const VIEWPORT_PADDING = 24

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const ToastProvider = styled(Toast.Provider, {})

export const ToastContainer = styled(Toast.Root, {
  backgroundColor: '$gray800',
  display: 'flex',
  padding: '$4',
  borderRadius: '4px',
  border: '1px solid $gray600',
  maxWidth: '280px',
  color: '$white',
  fontFamily: '$default',
  flexDirection: 'column',
  gap: '$2',

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`,
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`,
    },
  },
})

export const ToastHeader = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontWeight: '$bold',
  fontSize: '$lg',
})

export const ToastClose = styled(Toast.Close, {
  width: '24px',
  height: '24px',
  color: '$gray200',
  background: 'transparent',
  border: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  svg: {
    fontSize: '$lg',
  },
})
