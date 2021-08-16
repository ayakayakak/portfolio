import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import styled from 'styled-components'

/* components */
import { Label, TextInput } from 'components/atoms'

/* lib, types*/
import { mediaSp } from 'lib/media-query'

type Props = {
  className?: string
  label: string
  type?: string
  name?: string
  value?: string | null
  placeholder?: string
  readOnly?: boolean
  error?: boolean
  maxLength?: number
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
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

export const TextInputWithLabel: NextComponentType<NextPageContext, null, Props> = ({
  className = '',
  label,
  type,
  name,
  value,
  placeholder,
  readOnly,
  error,
  maxLength,
  onChange,
}) => {
  return (
    <Wrapper className={className}>
      <Label label={label} className="label" />
      <TextInput
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        readOnly={readOnly}
        error={error}
        maxLength={maxLength}
        onChange={onChange}
      />
    </Wrapper>
  )
}
