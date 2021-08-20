import React from 'react'
import styled from 'styled-components'

type Props = {
  className?: string
}

const StyledLoading = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 30;
  img {
    width: 70px;
    height: 70px;
  }
`

export const Loading: React.FC<Props> = ({ className = '' }) => {
  return (
    <StyledLoading className={className}>
      <img src="/loading.gif" alt="loading" />
    </StyledLoading>
  )
}
