import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import styled from 'styled-components'

/* lib, types*/
import { mediaSp } from 'lib/media-query'

type Props = {
  className?: string
  label: string
}

const StyledLabel = styled.label`
  color: ${(props): string => props.theme.black};
  font-size: 16px;

  ${mediaSp`
    font-size: 1.4rem;
  `}
`

export const Label: NextComponentType<NextPageContext, null, Props> = ({ className = '', label }) => {
  return <StyledLabel className={className}>{label}</StyledLabel>
}
