import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import styled from 'styled-components'

/* components */
import { TagironNumberCard } from 'components/atoms'

/* types */
import { NumberCardType, CardColor } from 'types/myTypes'

/* const */
import { BLUE_NUMBER_CARDS, RED_NUMBER_CARDS } from 'const'

type Props = {
  className?: string
  disabledCards: (NumberCardType | undefined)[]
  onClick?: (card: NumberCardType) => void
}

const StyledTagironNumberCards = styled.div`
  .row {
    display: flex;
    justify-content: space-between;

    & + .row {
      margin-top: 1rem;
    }
  }
`

export const TagironNumberCards: NextComponentType<NextPageContext, null, Props> = ({ className = '', disabledCards, onClick }) => {
  const isDisabledCards = (card: NumberCardType, cardColor: CardColor): boolean => {
    if (card.number === 5) {
      // 5は同じ色で2枚あるので、青の中の5から順にdisabledにする
      const numberOf5Cards = disabledCards.filter((disabledCard) => disabledCard?.number === 5).length
      if (numberOf5Cards === 1 && cardColor === 'blue') return true
      if (numberOf5Cards === 2) return true
      return false
    }

    return disabledCards.some((disabledCard) => disabledCard?.color === card.color && disabledCard?.number === card.number)
  }

  return (
    <StyledTagironNumberCards className={className}>
      <div className="row">
        {BLUE_NUMBER_CARDS.map((card, index) => (
          <TagironNumberCard
            cardType={card}
            onClick={onClick}
            disabled={isDisabledCards(card, 'blue')}
            key={index}
            className="number-card"
          />
        ))}
      </div>
      <div className="row">
        {RED_NUMBER_CARDS.map((card, index) => (
          <TagironNumberCard
            cardType={card}
            onClick={onClick}
            disabled={isDisabledCards(card, 'red')}
            key={index}
            className="number-card"
          />
        ))}
      </div>
    </StyledTagironNumberCards>
  )
}
