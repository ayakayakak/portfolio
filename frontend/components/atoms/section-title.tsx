import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import styled from 'styled-components'

type Props = {
  className?: string
  title: string
}

const Wrapper = styled.h1`
  font-size: 34px;
  font-weight: bold;
  letter-spacing: 0.1em;
`

export const SectionTitle: NextComponentType<NextPageContext, null, Props> = ({ className = '',title }) => {
  return (
    <Wrapper className={className}>
      {title}
    </Wrapper>
  )
}
