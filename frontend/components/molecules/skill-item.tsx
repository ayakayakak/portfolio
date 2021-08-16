import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import styled from 'styled-components'

/* components */
import {SkillLevel  } from 'components/molecules'

type Props = {
  className?: string
  iconSrc: string
  title: string
  level: number
}

const Wrapper = styled.div`
  width: 25%;
  min-width: 230px;
  
  .inner {
    width: 230px;
    height: 100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .left-column {
    width: 80px;
    height: 100%;
    position: relative;

    .icon {
      width: 50px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      -webkit-transform: translateY(-50%) translateX(-50%);
    }
  }

  .right-column {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .skill-name {
      font-size: 20px;
      margin-bottom: 10px;
      padding-left: 10px;
    }
  }

`

export const SkillItem: NextComponentType<NextPageContext, null, Props> = ({ className = '',iconSrc,title, level }) => {
  return (
    <Wrapper className={className}>
      <div className="inner">

      <div className="left-column">
      <img src={iconSrc} className="icon"/>

      </div>
      <div className="right-column">
      <p className="skill-name">{title}</p>
        <SkillLevel level={level}/>

      </div>
      </div>
    </Wrapper>
  )
}
