import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import styled from 'styled-components'

/* components */
import { TagironNumberCard } from 'components/atoms'

/* types */
import { NumberCardType } from 'types/myTypes'

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
  const isDisabledCards = (card: NumberCardType): boolean => {
    if (card.number === 5) {
      // 5は同じ色で2枚あるので、disabledCardsから被りを消去してlengthが減るかでdisabled判定
      const disabledCardsWithoutUndefined = disabledCards.filter((card) => card !== undefined)
      const disabledCardsWithoutDuplicationAndUndefined = Array.from(new Set(disabledCardsWithoutUndefined))
      return disabledCardsWithoutUndefined.length !== disabledCardsWithoutDuplicationAndUndefined.length
    }

    return disabledCards.some((disabledCard) => disabledCard?.color === card.color && disabledCard?.number === card.number)
  }

  return (
    <StyledTagironNumberCards className={className}>
      <div className="row">
        {BLUE_NUMBER_CARDS.map((card, index) => (
          <TagironNumberCard cardType={card} onClick={onClick} disabled={isDisabledCards(card)} key={index} className="number-card" />
        ))}
      </div>
      <div className="row">
        {RED_NUMBER_CARDS.map((card, index) => (
          <TagironNumberCard cardType={card} onClick={onClick} disabled={isDisabledCards(card)} key={index} className="number-card" />
        ))}
      </div>
    </StyledTagironNumberCards>
  )
}
