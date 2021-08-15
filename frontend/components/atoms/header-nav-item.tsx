import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import styled from 'styled-components'

type Props = {
  className?: string
  text: string
  onClick: () => void
}

const Wrapper = styled.li`
  padding: 5px 0;
  font-size: 1.3rem;
  font-weight: bold;
  letter-spacing: 0.05em;
  position: relative;
  cursor: pointer;
  
  &::after {
    width: 0;
    height: 3px;
    background: ${(props): string => (props.theme.black)};
    content: "";
    bottom: 0;
    left: 50%;
    position: absolute;
    transition: 0.3s all;
  }
  
  &:hover {
    &::after {
      width: 100%;
      left: 0;
    }
  }
`

export const HeaderNavItem: NextComponentType<NextPageContext, null, Props> = ({ className = '',text, onClick }) => {
  return (
    <Wrapper className={className}>
      {text}
    </Wrapper>
  )
}
