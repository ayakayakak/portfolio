import React, {useState} from 'react'
import { NextComponentType, NextPageContext } from 'next'
import styled from 'styled-components'

/* components */
import { Button, ErrorText, SnsIcon } from 'components/atoms'
import { TextInputWithLabel, TextAreaWithLabel  } from 'components/molecules'

type Props = {
  className?: string
}

const Wrapper = styled.div`
  width: 100%;

  >p {
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
`

const FormItemWrapper = styled.div`
  width: 700px;
  margin: 0 auto 1.7rem;

  &:last-of-type {
    margin-bottom: 4rem;
  }
`

export const Contact: NextComponentType<NextPageContext, null, Props> = ({ className = '' }) => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [body, setBody] = useState<string>('')
  const [isNameEmpty, setIsNameEmpty] = useState<boolean>(false)
  const [isEmailEmpty, setIsEmailEmpty] = useState<boolean>(false)
  const [isBodyEmpty, setIsBodyEmpty] = useState<boolean>(false)

  const onClickTwitter = () => {
    window.open('https://twitter.com/ayakayakayakak')
  }

  const onClickGithub = () => {
    window.open('https://github.com/ayakayakak')
  }

  const validation = () => {
    if(!name) {
      setIsNameEmpty(true)
    }
    if(!email) {
      setIsEmailEmpty(true)
    }
    if(!body) {
      setIsBodyEmpty(true)
    }
  }

  const onSubmit = () => {
    validation()
    console.log("submit")
  }

  return (
    <Wrapper className={className}>
      <p>お仕事のご相談・ご質問等はフォーム/SNSよりお気軽にお問合せ下さい。</p>
      <div className="sns-icon-wrapper">
        <SnsIcon src="/icon/twitter.png" alt="twitter" onClick={onClickTwitter}/>
        <SnsIcon src="/icon/github.png" alt="github" onClick={onClickGithub}/>
      </div>
      <FormItemWrapper>
        <TextInputWithLabel
          label="Name"
          name="name"
          value={name}
          placeholder="山田太郎"
          error={isNameEmpty}
          onChange={(e)=>{setName(e.target.value)}}
        />
        {isNameEmpty && <ErrorText text="お名前が入力されていません" />}
      </FormItemWrapper>
      <FormItemWrapper>
        <TextInputWithLabel
          label="Email"
          name="email"
          value={email}
          placeholder="example@gmail.com"
          error={isEmailEmpty}
          onChange={(e)=>{setEmail(e.target.value)}}
        />
        {isEmailEmpty && <ErrorText text="メールアドレスが入力されていません" />}
      </FormItemWrapper>
      <FormItemWrapper>
        <TextAreaWithLabel
          label="Message"
          name="body"
          value={body}
          placeholder="お問い合わせ"
          error={isBodyEmpty}
          onChange={(e)=>{setBody(e.target.value)}}
        />
        {isBodyEmpty && <ErrorText text="お問い合わせ内容が入力されていません" />}
      </FormItemWrapper>
      <Button onClick={onSubmit} className="send">
        Send Message
      </Button>
    </Wrapper>
  )
}
