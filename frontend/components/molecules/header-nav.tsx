import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import styled from 'styled-components'

/* components */
import { HeaderNavItem } from 'components/atoms'

/* lib, types */
import { sectionList } from 'lib/section-list'
import { SectionList } from 'types/myTypes'

type Props = {
  className?: string
  onClick: (text: SectionList) => void
}

const Wrapper = styled.nav`
  ul {
    display: flex;

    .nav-item {
      margin-right: 20px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`

export const HeaderNav: NextComponentType<NextPageContext, null, Props> = ({ className = '', onClick }) => {
  return (
    <Wrapper className={className}>
      <ul>
        {sectionList.map((section) => (
          <HeaderNavItem text={section.label} onClick={onClick} className="nav-item" key={section.value} />
        ))}
      </ul>
    </Wrapper>
  )
}
