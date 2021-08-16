import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import styled from 'styled-components'

type Props = {
  className?: string
}

const Wrapper = styled.div`
  width: 100%;
  height: 85vh;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    color: ${(props): string => props.theme.white};
    font-size: 70px;
    font-weight: bold;
    font-family: 'Lobster', cursive, 'Roboto', 'Noto Sans JP', Hiragino Sans, 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', 'メイリオ',
      Meiryo, Osaka, sans-serif;
    font-style: italic;
    line-height: 1.2;
    letter-spacing: 0.1em;
    position: absolute;
    bottom: 50px;
    left: 40px;
  }
`

export const Top: NextComponentType<NextPageContext, null, Props> = ({ className = '' }) => {
  return (
    <Wrapper className={className}>
      <img src="/top.jpg" alt="top" />
      <p>Ayaka Taniguchi</p>
    </Wrapper>
  )
}
