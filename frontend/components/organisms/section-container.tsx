import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import styled from 'styled-components'

/* components */
import { SectionTitle } from 'components/atoms'

/* lib */
import { sectionList } from 'lib/section-list'
import { mediaTablet, mediaSp } from 'lib/media-query'

type Props = {
  className?: string
  children: React.ReactNode
}

type StyleProps = {
  index: number
}

const Wrapper = styled.div<StyleProps>`
  width: 100%;
  padding: 90px 60px;
  background: ${(props): string => (props.index % 2 === 0 ? props.theme.white : props.theme.backgroundGray)};

  .title {
    margin-bottom: 40px;
    text-align: center;
  }

  ${mediaSp`
    padding: 50px 20px;

    .title {
      margin-bottom: 3rem;
    }
  `
  }
`

export const SectionContainer: NextComponentType<NextPageContext, null, Props & StyleProps> = ({ className = '', children, index }) => {
  return (
    <Wrapper className={className} index={index}>
      <SectionTitle title={sectionList[index].label} className="title" />
      {children}
    </Wrapper>
  )
}
