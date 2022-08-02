import React, { useState } from 'react'
import { NextComponentType, NextPageContext } from 'next'
import styled from 'styled-components'

/* components */
import { TagironInputButton, TagironNumberCard } from 'components/atoms'
import { TagironNumberCards } from 'components/molecules'

/* types */
import { NumberCardType } from 'types/myTypes'

type Props = {
  className?: string
  inputs: (NumberCardType | undefined)[]
  disabledCards: (NumberCardType | undefined)[]
  onClickNumberCard: (card: NumberCardType, index: number) => void
}

const StyledTagironInputButtonsWithBallon = styled.div`
  width: 100%;
  position: relative;

  .inputs {
    display: flex;
    justify-content: space-between;
  }

  .ballon {
    width: 95vw;
    padding: 1rem;
    background: ${(props): string => props.theme.lightPink};
    border-radius: 0.8rem;
    position: absolute;
    top: calc(15vw + 2rem + 0.3rem);
    left: 0;
    z-index: 2;

    &:before {
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 1.5rem 2rem 1.5rem;
      border-color: transparent transparent ${(props): string => props.theme.lightPink} transparent;
      position: absolute;
      top: -2rem;

      left: 0;
    }

    &.index0 {
      &:before {
        left: 3%;
      }
    }
    &.index1 {
      &:before {
        left: 24%;
      }
    }
    &.index2 {
      &:before {
        left: 46%;
      }
    }
    &.index3 {
      &:before {
        left: 67%;
      }
    }
    &.index4 {
      &:before {
        left: 89%;
      }
    }

    .number-card {
      width: 7vw;
    }
  }
`

export const TagironInputButtonsWithBallon: NextComponentType<NextPageContext, null, Props> = ({
  className = '',
  inputs,
  disabledCards,
  onClickNumberCard,
}) => {
  const [isOpenNumberCardsBallon, setIsOpenNumberCardsBallon] = useState<boolean>(false)
  const [openingInputIndex, setOpeningInputIndex] = useState<number>(0)

  const toggleNumberCardsBallon = (index: number): void => {
    setIsOpenNumberCardsBallon(!isOpenNumberCardsBallon)
    setOpeningInputIndex(index)
  }

  const onClickNumberCardAndCloseBallon = (card: NumberCardType): void => {
    onClickNumberCard(card, openingInputIndex)
    setIsOpenNumberCardsBallon(false)
  }

  return (
    <StyledTagironInputButtonsWithBallon className={className}>
      <div className="inputs">
        {inputs.map((input, index) => (
          <TagironInputButton
            onClick={() => {
              toggleNumberCardsBallon(index)
            }}
            key={index}
          >
            {input ? <TagironNumberCard cardType={input} /> : undefined}
          </TagironInputButton>
        ))}
      </div>
      {isOpenNumberCardsBallon && (
        <TagironNumberCards
          disabledCards={disabledCards}
          onClick={onClickNumberCardAndCloseBallon}
          className={`ballon index${openingInputIndex}`}
        />
      )}
    </StyledTagironInputButtonsWithBallon>
  )
}
