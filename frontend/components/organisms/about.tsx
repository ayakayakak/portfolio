import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import styled from 'styled-components'

type Props = {
  className?: string
}

const Wrapper = styled.div`
  max-width: 830px;
  width: 830px;
  margin: 0 auto;
  display: flex;

  .image-wrapper {
    width: 200px;
    height: 200px;
    margin-right: 35px;
    border-radius: 50%;
    overflow: hidden;

    >img {
      width: 100%;
      height: 100%;
    }
  }

  .profile {
    font-size: 17px;
  }
`

export const About: NextComponentType<NextPageContext, null, Props> = ({ className = '' }) => {
  return (
    <Wrapper className={className}>
      <div className="image-wrapper">
      <img src="/profile.jpg" alt="profile"/>

      </div>
      <p className="profile">
        ■略歴<br/>
        東京大学卒業後、大学事務職に就く。<br/>
        その後プログラミングに興味を持ち、独学での勉強を経て現在の会社に転職。<br/>
        主にフロントエンドの開発に従事している。<br/>
        <br/>
        ■実績<br/>
        Nuxt.jsを用いたシステム開発・運用(3年)<br/>
        React Nativeを用いたiOS/Androidアプリ開発・運用(3年)<br/>
        React.jsを用いたシステム開発・運用(2年)<br/>
        Next.jsを用いたシステム開発・運用(1年)<br/>
        <br/>
        ■保有資格<br/>
        LPIC1<br/>
        OracleBronze<br/>
        JavaSilver
      </p>
    </Wrapper>
  )
}
