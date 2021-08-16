import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import styled from 'styled-components'

/* components */
import { HeaderNav } from 'components/molecules'

/* types */
import { SectionList } from 'types/myTypes'

type Props = {
  className?: string
}

const Wrapper = styled.header`
  .inner {
    width: 100%;
    height: 65px;
    padding: 20px 40px;
    background: ${(props): string => props.theme.white};
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 1;
    position: fixed;
    top: 0;
    box-shadow: 0 5px 10px -6px rgb(0 0 0 / 10%);
  }
`

export const Header: NextComponentType<NextPageContext, null, Props> = ({ className = '' }) => {
  const onClickNavItem = (text: SectionList): void => {
    const targetY = document.getElementById(text.toLowerCase())?.getBoundingClientRect().top ?? 0
    const HEADER_HEIGHT = 65
    const BUFFER = 80
    window.scrollTo({ top: window.pageYOffset + targetY - HEADER_HEIGHT - BUFFER, behavior: 'smooth' })
  }

  return (
    <Wrapper className={className}>
      <div className="inner">
        <HeaderNav onClick={onClickNavItem} />
      </div>
    </Wrapper>
  )
}
