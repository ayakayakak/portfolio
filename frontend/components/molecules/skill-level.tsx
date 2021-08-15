import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import styled from 'styled-components'

type Props = {
  className?: string
  level: number
}

const Wrapper = styled.div`
  width: 190px;
  margin: 0 auto;
  display: flex;

  img{
    width: 30px;
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }
`

export const SkillLevel: NextComponentType<NextPageContext, null, Props> = ({ className = '',level }) => {
  return (
    <Wrapper className={className}>
      {
        [...Array(level)].map((_,index) => (
          <img src="/icon/star-on.png" key={index}/>
        ))
      }
      {
      [...Array(5-level)].map((_,index) => (
        <img src="/icon/star-off.png" key={index}/>
      ))
      }
    </Wrapper>
  )
}
