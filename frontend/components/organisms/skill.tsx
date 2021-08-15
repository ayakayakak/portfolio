import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import styled from 'styled-components'

/* components */
import {SkillItem  } from 'components/molecules'

type Props = {
  className?: string
}

const Wrapper = styled.div`
  >div {
    width: 100%;
    padding-left: 20px;
    border-bottom: 1px solid ${(props): string => (props.theme.borderGray)};
    display: flex;
    flex-wrap: wrap;

    &:last-child {
      border-bottom: none;
    }
  }
  
  .skill-item {
    margin-bottom: 20px;
  }
`

export const Skill: NextComponentType<NextPageContext, null, Props> = ({ className = '' }) => {
  return (
    <Wrapper className={className}>
      <div>
      <SkillItem iconSrc="/icon/html5.svg" title="HTML5" level={5} className="skill-item"/>
      <SkillItem iconSrc="/icon/css3.svg" title="CSS3" level={5} className="skill-item"/>
      <SkillItem iconSrc="/icon/javascript.svg" title="JavaScript" level={5} className="skill-item"/>
      <SkillItem iconSrc="/icon/react.svg" title="React" level={5} className="skill-item"/>
      <SkillItem iconSrc="/icon/nextjs.svg" title="Next.js" level={5} className="skill-item"/>
      <SkillItem iconSrc="/icon/vue.svg" title="Vue.js" level={4} className="skill-item"/>
      <SkillItem iconSrc="/icon/nuxt.svg" title="Nuxt.js" level={4} className="skill-item"/>
      </div>
      <div>
      <SkillItem iconSrc="/icon/laravel.svg" title="Laravel" level={2} className="skill-item"/>
      <SkillItem iconSrc="/icon/graphql.svg" title="GraphQL" level={2} className="skill-item"/>
      </div>
      <div>
      <SkillItem iconSrc="/icon/docker.svg" title="Docker" level={2} className="skill-item"/>
      <SkillItem iconSrc="/icon/aws.svg" title="AWS" level={2} className="skill-item"/>
      </div>
    </Wrapper>
  )
}
