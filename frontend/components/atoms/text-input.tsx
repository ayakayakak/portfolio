import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import styled from 'styled-components'

/* lib, types*/
import { mediaSp } from 'lib/media-query'

type Props = {
  className?: string
  type?: string
  name?: string
  value?: string | null
  placeholder?: string
  readOnly?: boolean
  error?: boolean
  maxLength?: number
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const StyledInput = styled.input<Props>`
  width: 100%;
  padding: 0 17px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 1px solid ${(props): string => (props.error ? props.theme.error : props.theme.borderGray)};
  border-radius: 4px;
  background: ${(props): string => props.theme.white};
  color: ${(props): string => props.theme.black};
  font-size: 16px;
  line-height: 44px;
  transition: 0.3s all;
  box-sizing: border-box;

  &:focus {
    outline: 0;
    border: 1px solid ${(props): string => (props.error ? props.theme.error : props.theme.black)};
  }

  &::placeholder {
    color: ${(props): string => props.theme.placeholderGray};
  }

  ${mediaSp`
    font-size: 1.4rem;
  `}
`

export const TextInput: NextComponentType<NextPageContext, null, Props> = ({
  className = '',
  type = 'text',
  name = '',
  placeholder = '',
  value = '',
  readOnly = false,
  error = false,
  maxLength,
  onChange = () => {},
}) => {
  return (
    <StyledInput
      className={className}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value || ''}
      readOnly={readOnly}
      error={error}
      maxLength={maxLength}
      onChange={onChange}
    />
  )
}
