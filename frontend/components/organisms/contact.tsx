import React, { useState } from 'react'
import { NextComponentType, NextPageContext } from 'next'
import styled from 'styled-components'

/* components */
import { Button, ErrorText, SnsIcon, TextInput, Textarea } from 'components/atoms'

/* lib*/
import { mediaTablet } from 'lib/media-query'
import { validateEmail, validateRequired } from 'lib/validate'

type Props = {
  className?: string
  onClickSubmit: () => void
}

const Wrapper = styled.div`
  width: 100%;

  > p {
    margin-bottom: 30px;
    font-size: 17px;
    text-align: center;
  }

  .sns-icon-wrapper {
    width: 100px;
    margin: 0 auto 30px;
    display: flex;
    justify-content: space-between;
  }

  .send {
    width: 320px;
    margin: 0 auto;
  }

  ${mediaTablet`
    .send {
      width: 100%;
    }
  `}
`

const FormItemWrapper = styled.div`
  width: 700px;
  margin: 0 auto 17px;

  &:last-of-type {
    margin-bottom: 40px;
  }

  ${mediaTablet`
    width: 100%;
  `}
`

export const Contact: NextComponentType<NextPageContext, null, Props> = ({ className = '', onClickSubmit }) => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [body, setBody] = useState<string>('')
  const [nameError, setNameError] = useState<string | null>(null)
  const [emailError, setEmailError] = useState<string | null>(null)
  const [bodyError, setBodyError] = useState<string | null>(null)

  const onClickTwitter = (): void => {
    window.open('https://twitter.com/ayakayakayakak')
  }

  const onClickGithub = (): void => {
    window.open('https://github.com/ayakayakak')
  }

  const validate = (): boolean => {
    const nameError = validateRequired(name)
    const emailError = validateEmail(email)
    const bodyError = validateRequired(body)
    setNameError(nameError)
    setEmailError(emailError)
    setBodyError(bodyError)

    if (nameError || emailError || bodyError) return false

    return true
  }

  const submit = (): void => {
    onClickSubmit()
    if (validate()) {
    }
  }

  return (
    <Wrapper className={className}>
      <p>
        お仕事のご相談・ご質問等は
        <br className="sp" />
        フォーム/SNSよりお気軽にお問合せ下さい。
      </p>
      <div className="sns-icon-wrapper">
        <SnsIcon src="/icon/twitter.png" alt="twitter" onClick={onClickTwitter} />
        <SnsIcon src="/icon/github.png" alt="github" onClick={onClickGithub} />
      </div>
      <FormItemWrapper>
        <TextInput
          name="name"
          value={name}
          placeholder="Name"
          error={!!nameError}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        {!!nameError && <ErrorText text={nameError} />}
      </FormItemWrapper>
      <FormItemWrapper>
        <TextInput
          name="email"
          type="email"
          value={email}
          placeholder="Email"
          error={!!emailError}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        {!!emailError && <ErrorText text={emailError} />}
      </FormItemWrapper>
      <FormItemWrapper>
        <Textarea
          name="body"
          value={body}
          placeholder="Message"
          error={!!bodyError}
          onChange={(e) => {
            setBody(e.target.value)
          }}
        />
        {!!bodyError && <ErrorText text={bodyError} />}
      </FormItemWrapper>
      <Button onClick={submit} className="send">
        Send Message
      </Button>
    </Wrapper>
  )
}
