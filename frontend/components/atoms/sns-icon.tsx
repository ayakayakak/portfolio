import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import styled from 'styled-components'

type Props = {
  className?: string
  src: string
  alt: string
  onClick: () => void
}

const StyledButton = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  cursor: pointer;
  transition: 0.3s all;

  > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    -webkit-transform: translateY(-50%) translateX(-50%);
  }

  &:hover {
    opacity: 0.6;
  }
`

export const SnsIcon: NextComponentType<NextPageContext, null, Props> = ({ className = '', src, alt, onClick }) => {
  return (
    <StyledButton onClick={onClick} className={className}>
      <img src={src} alt={alt} />
    </StyledButton>
  )
}
