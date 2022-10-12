import { ComponentProps, ReactNode } from 'react'
import * as TooltipRadix from '@radix-ui/react-tooltip'
import {
  Arrow,
  TooltipContainer,
  TooltipContent,
  TooltipTrigger,
} from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
  children: ReactNode
  title: string
}

export function Tooltip({ children, title }: TooltipProps) {
  return (
    <TooltipRadix.Provider>
      <TooltipContainer>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipRadix.Portal>
          <TooltipContent side="top" align="center">
            {title}
            <Arrow />
          </TooltipContent>
        </TooltipRadix.Portal>
      </TooltipContainer>
    </TooltipRadix.Provider>
  )
}
