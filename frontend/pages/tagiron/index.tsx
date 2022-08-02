import React, { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import smoothscroll from 'smoothscroll-polyfill'
import styled from 'styled-components'

/* components */
import { TagironNumberCards } from 'components/molecules'
import { TagironInputButtonsWithBallon } from 'components/organisms'

/* types */
import { NumberCardType } from 'types/myTypes'

const Wrapper = styled.div`
  padding: 3rem 1rem 10rem;

  .page-title {
    margin-bottom: 3rem;
    font-size: 3.2rem;
    font-weight: bold;
    text-align: center;
  }
`

const StyledSection = styled.div`
  & + & {
    margin-top: 4rem;
  }

  .section-title {
    margin-bottom: 2rem;
    font-size: 2.1rem;
    font-weight: bold;
  }

  .free-memo {
    width: 100%;
    min-height: 10rem;
    padding: 0.8rem;
    font-size: 1.2rem;
    border: 0.1rem solid ${(props): string => props.theme.borderGray};
    border-radius: 0.5rem;
  }

  .opponent-cards {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 0.1rem solid ${(props): string => props.theme.borderGray};
  }

  .card-set-wrapper {
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .card-set {
      .ballon {
        &.index0 {
          &:before {
            left: 3%;
          }
        }
        &.index1 {
          &:before {
            left: 21%;
          }
        }
        &.index2 {
          &:before {
            left: 40.5%;
          }
        }
        &.index3 {
          &:before {
            left: 59.5%;
          }
        }
        &.index4 {
          &:before {
            left: 78.5%;
          }
        }
      }
    }

    .delete {
      width: 3rem;
      height: 3rem;
    }
  }

  .add-set {
    width: 20rem;
    height: 4rem;
    margin: 0 auto;
    color: ${(props): string => props.theme.black};
    font-size: 1.4rem;
    border: 0.1rem solid ${(props): string => props.theme.black};
    border-radius: 2rem;
    display: block;
  }
`

const TagironMemo: NextPage = () => {
  const [myCards, setMyCards] = useState<(NumberCardType | undefined)[]>([undefined, undefined, undefined, undefined, undefined])
  const [possibleOpponentCardSets, setPossibleOpponentCardSets] = useState<(NumberCardType | undefined)[][]>([
    [undefined, undefined, undefined, undefined, undefined],
  ])
  const [freeMemo, setFreeMemo] = useState<string>('')

  const setCardsForSelf = (card: NumberCardType, index: number): void => {
    const newMyCards = [...myCards]
    newMyCards[index] = card
    setMyCards(newMyCards)
  }

  const setPossibleOpponentCards = (card: NumberCardType, setIndex: number, cardIndex: number): void => {
    const newPossibleOpponentCardSets = [...possibleOpponentCardSets]
    const newPossibleOpponentCards = newPossibleOpponentCardSets[setIndex]
    newPossibleOpponentCards[cardIndex] = card
    setPossibleOpponentCardSets(newPossibleOpponentCardSets)
  }

  const deleteSet = (setIndex: number): void => {
    const newPossibleOpponentCardSets = [...possibleOpponentCardSets]
    newPossibleOpponentCardSets.splice(setIndex, 1)
    setPossibleOpponentCardSets(newPossibleOpponentCardSets)
  }

  const addSet = (): void => {
    const newPossibleOpponentCardSets = [...possibleOpponentCardSets]
    newPossibleOpponentCardSets.push([undefined, undefined, undefined, undefined, undefined])
    setPossibleOpponentCardSets(newPossibleOpponentCardSets)
  }

  useEffect(() => {
    smoothscroll.polyfill()
  }, [])

  return (
    <Wrapper>
      <h1 className="page-title">TAGIRON</h1>

      <StyledSection>
        <h2 className="section-title">自分のカード</h2>
        <TagironInputButtonsWithBallon inputs={myCards} disabledCards={myCards} onClickNumberCard={setCardsForSelf} />
      </StyledSection>

      <StyledSection>
        <h2 className="section-title">フリーメモ</h2>
        <textarea
          placeholder="フリーメモ"
          value={freeMemo}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
            setFreeMemo(event.target.value)
          }}
          className="free-memo"
        />
      </StyledSection>

      <StyledSection>
        <h2 className="section-title">相手のカード候補</h2>
        <TagironNumberCards disabledCards={myCards} className="opponent-cards" />
        {possibleOpponentCardSets.map((set, index) => (
          <div className="card-set-wrapper" key={index}>
            <TagironInputButtonsWithBallon
              inputs={set}
              disabledCards={[...myCards, ...possibleOpponentCardSets[index]]}
              onClickNumberCard={(card: NumberCardType, cardIndex: number) => {
                setPossibleOpponentCards(card, index, cardIndex)
              }}
              className="card-set"
            />
            {
              <button
                onClick={() => {
                  deleteSet(index)
                }}
                className="delete"
              >
                <img src="/icon/delete.svg" alt="delete" />
              </button>
            }
          </div>
        ))}
        <button onClick={addSet} className="add-set">
          ＋ 追加する
        </button>
      </StyledSection>
    </Wrapper>
  )
}

export default TagironMemo
