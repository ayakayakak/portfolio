import React, { useState, useContext } from 'react'
import { NextComponentType, NextPageContext } from 'next'
import Link from 'next/link'
import styled from 'styled-components'

/* components */
import { HeaderNav } from 'components/molecules'

type Props = {
  className?: string
  onClick: () => void
}

const Wrapper = styled.header`
  .inner {
    width: 100%;
    height: 65px;
    padding: 20px 40px;
    background: ${(props): string => (props.theme.white)};
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    position: fixed;
    top: 0;
    box-shadow: 0 5px 10px -6px rgb(0 0 0 / 10%);

    .to-top {
      font-size: 20px;
      font-weight: bold;
      line-height: 1.2;
      letter-spacing: 0.05em;
      cursor: pointer;
    }
  }
`

export const Header: NextComponentType<NextPageContext, null, Props> = ({ className = '', onClick }) => {
  return (
    <Wrapper className={className}>
      <div className="inner">
      <Link href={'/'}>
   <span className="to-top">Ayaka Taniguchi</span></Link>
        <HeaderNav onClick={onClick}/>
      </div>
    </Wrapper>
  )
}
