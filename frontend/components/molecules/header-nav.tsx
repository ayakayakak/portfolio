import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import styled from 'styled-components'

/* components */
import { HeaderNavItem } from 'components/atoms'

type Props = {
  className?: string
  onClick: () => void
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
  const sectionList = [
    {label: "WORKS", value: "WORKS"},
    {label: "ABOUT", value: "ABOUT"},
    {label: "CONTACT", value: "CONTACT"}]

  return (
    <Wrapper className={className}>
      <ul>
        {sectionList.map((section) => (
          <HeaderNavItem text={section.label} onClick={onClick} className="nav-item" key={section.value}/>
        ))}
      </ul>
    </Wrapper>
  )
}
