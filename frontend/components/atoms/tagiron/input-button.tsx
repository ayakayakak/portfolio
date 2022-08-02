import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import styled from 'styled-components'

type Props = {
  className?: string
  children?: React.ReactNode
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const StyledButton = styled.button`
  width: 13vw;
  height: 15vw;
  border: 0.1rem solid ${(props): string => props.theme.borderGray};
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TagironInputButton: NextComponentType<NextPageContext, null, Props> = ({ className = '', children, onClick }) => {
  return (
    <StyledButton onClick={onClick} className={className}>
      {children}
    </StyledButton>
  )
}
