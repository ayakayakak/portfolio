import React from 'react'
import styled from 'styled-components'
import { NextComponentType, NextPageContext } from 'next'

/* lib, types*/
import { mediaSp } from 'lib/media-query'

type Props = {
  className?: string
  name?: string
  value?: string
  maxLength?: number
  placeholder?: string
  error?: boolean
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const StyledTextarea = styled.textarea<Props>`
  width: 100%;
  height: auto;
  min-height: 94px;
  padding: 8px 15px;
  border-radius: 4px;
  background: ${(props): string => props.theme.white};
  color: ${(props): string => props.theme.black};
  font-size: 1.6rem;
  line-height: 1.75;
  border: 1px solid ${(props): string => (props.error ? props.theme.error : props.theme.borderGray)};
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
    min-height: 12.8rem;
    padding: 1.3rem;
    font-size: 1.4rem;
    line-height: 2.4rem;
  `}
`

export const Textarea: NextComponentType<NextPageContext, null, Props> = ({
  className = '',
  name = '',
  value = '',
  maxLength,
  placeholder = '',
  error = false,
  onChange = () => {},
}) => {
  return (
    <StyledTextarea
      className={className}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      maxLength={maxLength}
      error={error}
    />
  )
}
