import * as TooltipRadix from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContainer = styled(TooltipRadix.Root, {})

export const TooltipTrigger = styled(TooltipRadix.Trigger, {
  backgroundColor: 'transparent',
  border: '0',
  padding: 0,
})

export const TooltipContent = styled(TooltipRadix.Content, {
  backgroundColor: '$gray900',
  color: '$gray200',
  padding: '$2 $4',
  fontSize: 'small',
  fontFamily: '$default',
  borderRadius: '$sm',
})

export const Arrow = styled(TooltipRadix.Arrow, { borderColor: '$gray900' })
