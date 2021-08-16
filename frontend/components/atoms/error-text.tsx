import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import styled from 'styled-components'

/* lib */
import { mediaSp } from 'lib/media-query'

type Props = {
  className?: string
  text: string | null
}

const StyledErrorText = styled.p`
  height: 18px;
  color: ${(props): string => props.theme.error};
  font-size: 12px;
  text-align: left;

  ${mediaSp`
    font-size: 1.2rem;
  `}
`

export const ErrorText: NextComponentType<NextPageContext, null, Props> = ({ className = '', text = '' }) => {
  return <StyledErrorText className={className}>{text}</StyledErrorText>
}
