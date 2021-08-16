import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import styled from 'styled-components'

/* components */
import { Label, Textarea } from 'components/atoms'

/* lib, types*/
import { mediaSp } from 'lib/media-query'

type Props = {
  className?: string
  label: string
  name?: string
  value?: string
  placeholder?: string
  error?: boolean
  maxLength?: number
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const Wrapper = styled.div`
  width: 100%;

  .label {
    margin-bottom: 10px;
    display: block;
  }

  ${mediaSp`
    .label {
      margin-bottom: 0.6rem;
    }
  `}
`

export const TextAreaWithLabel: NextComponentType<NextPageContext, null, Props> = ({
  className = '',
  label,
  name,
  value,
  placeholder,
  error,
  maxLength,
  onChange,
}) => {
  return (
    <Wrapper className={className}>
      <Label label={label} className="label" />
      <Textarea name={name} placeholder={placeholder} value={value} error={error} maxLength={maxLength} onChange={onChange} />
    </Wrapper>
  )
}
