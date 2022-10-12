import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@andrejr-dev/react'

export default {
  title: 'Alerts/Toast',
  component: Toast,
  args: {
    title: 'Title',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}

export const WithDescription: StoryObj<ToastProps> = {
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
}
