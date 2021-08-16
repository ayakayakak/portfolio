import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import styled from 'styled-components'

/* components */
import { SkillItem } from 'components/molecules'

type Props = {
  className?: string
}

const Wrapper = styled.div`
  > div {
    width: 100%;
    padding-left: 20px;
    border-bottom: 1px solid ${(props): string => props.theme.borderGray};
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
        <SkillItem iconSrc="/icon/html5.svg" iconAlt="HTML5" title="HTML5" level={5} className="skill-item" />
        <SkillItem iconSrc="/icon/css3.svg" iconAlt="CSS3" title="CSS3" level={5} className="skill-item" />
        <SkillItem iconSrc="/icon/javascript.svg" iconAlt="JavaScript" title="JavaScript" level={5} className="skill-item" />
        <SkillItem iconSrc="/icon/react.svg" iconAlt="React" title="React" level={5} className="skill-item" />
        <SkillItem iconSrc="/icon/nextjs.svg" iconAlt="Next.js" title="Next.js" level={5} className="skill-item" />
        <SkillItem iconSrc="/icon/vue.svg" iconAlt="Vue.js" title="Vue.js" level={4} className="skill-item" />
        <SkillItem iconSrc="/icon/nuxt.svg" iconAlt="Nuxt.js" title="Nuxt.js" level={4} className="skill-item" />
      </div>
      <div>
        <SkillItem iconSrc="/icon/laravel.svg" iconAlt="Laravel" title="Laravel" level={2} className="skill-item" />
        <SkillItem iconSrc="/icon/graphql.svg" iconAlt="GraphQL" title="GraphQL" level={2} className="skill-item" />
      </div>
      <div>
        <SkillItem iconSrc="/icon/docker.svg" iconAlt="Docker" title="Docker" level={2} className="skill-item" />
        <SkillItem iconSrc="/icon/aws.svg" iconAlt="AWS" title="AWS" level={2} className="skill-item" />
      </div>
    </Wrapper>
  )
}
