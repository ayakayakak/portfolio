import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import styled from 'styled-components'

/* lib */
import { mediaTablet } from 'lib/media-query'

type Props = {
  className?: string
}

const Wrapper = styled.div`
  max-width: 100%;
  width: 830px;
  margin: 0 auto;
  display: flex;

  .image-wrapper {
    width: 200px;
    height: 200px;
    margin-right: 35px;
    border-radius: 50%;
    overflow: hidden;

    > img {
      width: 100%;
      height: 100%;
    }
  }
  .profile-wrapper {
    max-width: calc(100% - 235px);

    .profile {
      font-size: 17px;
      word-break: break-all;
    }
  }

  ${mediaTablet`
    display: block;

    .image-wrapper {
      width: 10rem;
      height: 10rem;
      margin: 0 auto 2rem;
    }

    .profile-wrapper{
      max-width: 100%;
      text-align: center;
      
      .profile {
        display: inline-block;
        text-align: left;
      }
    }
  `}
`

export const About: NextComponentType<NextPageContext, null, Props> = ({ className = '' }) => {
  return (
    <Wrapper className={className}>
      <div className="image-wrapper">
        <img src="/profile.jpg" alt="profile" />
      </div>
      <div className="profile-wrapper">
        <p className="profile">
          ■略歴
          <br />
          東京大学卒業後、大学事務職に就く。
          <br />
          その後プログラミングに興味を持ち、独学での勉強を経て現在の会社に転職。
          <br />
          主にフロントエンドの開発に従事している。
          <br />
          <br />
          ■実績
          <br />
          Nuxt.jsを用いたシステム開発・運用(2年)
          <br />
          React Native + Expoを用いたiOS/Androidアプリ開発・運用(2年)
          <br />
          React.jsを用いたシステム開発・運用(3年)
          <br />
          Next.jsを用いたシステム開発・運用(2年)
          <br />
          <br />
          ■保有資格
          <br />
          Linux Professional Institute LPIC-1
          <br />
          ORACLE MASTER Bronze
          <br />
          Oracle Java Silver
        </p>
      </div>
    </Wrapper>
  )
}
