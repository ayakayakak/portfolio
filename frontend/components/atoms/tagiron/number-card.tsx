import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import styled from 'styled-components'

/* types */
import { NumberCardType } from 'types/myTypes'

type Props = {
  className?: string
  cardType: NumberCardType
  disabled?: boolean
  onClick?: (card: NumberCardType) => void
}

const StyledTagironNumberCard = styled.button<{ color: NumberCardType['color'] }>`
  width: 8vw;
  height: 10vw;
  color: ${(props): string => (props.color === 'yellow' ? props.theme.black : props.theme.white)};
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 10vw;
  border-radius: 0.5rem;
  background: ${(props): string => props.color};

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    color: ${(props): string => props.theme.disabledTextGray};
    background: ${(props): string => props.theme.disabledBackgroundGray};
  }
`

export const TagironNumberCard: NextComponentType<NextPageContext, null, Props> = ({ className = '', cardType, disabled, onClick }) => {
  return (
    <StyledTagironNumberCard
      color={cardType.color}
      disabled={disabled}
      onClick={
        onClick
          ? () => {
              onClick(cardType)
            }
          : undefined
      }
      className={className}
    >
      {cardType.number}
    </StyledTagironNumberCard>
  )
}
