import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import styled from 'styled-components'

/* lib, types */
import { SectionList } from 'types/myTypes'
import { mediaTablet, mediaPc } from 'lib/media-query'

type Props = {
  className?: string
  text: SectionList
  onClick: (text: SectionList) => void
}

const Wrapper = styled.li`
  padding: 5px 0;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.05em;
  position: relative;
  cursor: pointer;

  &::after {
    width: 0;
    height: 3px;
    background: ${(props): string => props.theme.black};
    content: '';
    bottom: 0;
    left: 50%;
    position: absolute;
    transition: 0.3s all;
  }

  ${mediaPc`
    &:hover {
      &::after {
        width: 100%;
        left: 0;
      }
    }
  `}

  ${mediaTablet`
    font-size: 14px;
  `}
`

export const HeaderNavItem: NextComponentType<NextPageContext, null, Props> = ({ className = '', text, onClick }) => {
  return (
    <Wrapper className={className} onClick={() => onClick(text)}>
      {text}
    </Wrapper>
  )
}
