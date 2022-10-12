import type { Meta, StoryObj } from '@storybook/react'
import { Button, Tooltip, TooltipProps } from '@andrejr-dev/react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  args: {
    title: '21 de Outubro - Indisponível',
    children: (
      <Button variant="primary" size="sm">
        Tooltip
      </Button>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
