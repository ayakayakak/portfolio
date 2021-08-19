import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import styled from 'styled-components'

/* lib, types */
import { mediaSp } from 'lib/media-query'

type Props = {
  className?: string
}

const Wrapper = styled.footer`
  width: 100%;
  height: 65px;
  margin-top: 45px;
  background: ${(props): string => props.theme.footerBackground};
  position: relative;

  .go-to-top {
    width: 100px;
    height: 100px;
    background: ${(props): string => props.theme.footerBackground};
    border-radius: 50%;
    position: absolute;
    top: -45px;
    left: calc(50% - 50px);
    cursor: pointer;

    .arrow {
      width: 35px;
      height: 35px;
      border-top: 4px solid ${(props): string => props.theme.white};
      border-left: 4px solid ${(props): string => props.theme.white};
      transform: rotate(45deg);
      position: relative;
      top: 35px;
      left: calc(50% - 17px);
      z-index: 2;
    }
  }

  .copyright {
    color: ${(props): string => props.theme.white};
    font-size: 11px;
    text-align: center;
    line-height: 65px;
    position: relative;
    z-index: 1;
  }

  ${mediaSp`
    .inner {
      padding: 20px;
    }
  `}
`

export const Footer: NextComponentType<NextPageContext, null, Props> = ({ className = '' }) => {
  const goToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
  return (
    <Wrapper className={className}>
      <div className="go-to-top" onClick={goToTop}>
        <div className="arrow" />
      </div>
      <p className="copyright">&copy; Ayaka Taniguchi  All rights reserved.</p>
    </Wrapper>
  )
}
