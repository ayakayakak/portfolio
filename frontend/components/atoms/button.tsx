import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import styled from 'styled-components'

type Props = {
  className?: string
  disabled?: boolean
  value?: number
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  children?: React.ReactNode
}

const StyledButton = styled.button<Props>`
  width: 100%;
  height: auto;
  font-size: 14px;
  border: 1px solid ${(props): string => props.theme.black};
  border-radius: 2rem;
  color: ${(props): string => props.theme.black};
  text-align: center;
  line-height: 40px;
  transition: 0.3s all;
  display: block;

  &:hover {
    opacity: 0.8;
  }
`

export const Button: NextComponentType<NextPageContext, null, Props> = ({ className = '', value, children, onClick }) => {
  return (
    <StyledButton value={value} onClick={onClick} className={className}>
      {children}
    </StyledButton>
  )
}
