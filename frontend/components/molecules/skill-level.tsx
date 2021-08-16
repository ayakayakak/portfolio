import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import styled from 'styled-components'

type Props = {
  className?: string
  level: number
}

const Wrapper = styled.div`
  width: 140px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  img {
    width: 20px;

    &:last-child {
      margin-right: 0;
    }
  }
`

export const SkillLevel: NextComponentType<NextPageContext, null, Props> = ({ className = '', level }) => {
  return (
    <Wrapper className={className}>
      {[...Array(level)].map((_, index) => (
        <img src="/icon/star-on.png" alt="star-on" key={index} />
      ))}
      {[...Array(5 - level)].map((_, index) => (
        <img src="/icon/star-off.png" alt="star-off" key={index} />
      ))}
    </Wrapper>
  )
}
