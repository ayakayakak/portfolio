import React from 'react'
import { NextComponentType, NextPageContext } from 'next'
import styled, { ThemedStyledProps, DefaultTheme } from 'styled-components'

/* lib, types*/
import { mediaSp } from 'lib/media-query'
import { FlashMessageType } from 'types/myTypes'

type Props = {
  className?: string
  type: FlashMessageType
}

type StyleProps = {
  type: FlashMessageType
}

const getBackground = (props: ThemedStyledProps<StyleProps, DefaultTheme>): string => {
  switch (props.type) {
    case 'success':
      return `
        background: ${props.theme.success};
      `
    case 'fail':
      return `
        background: ${props.theme.error};
      `
    default:
      return `
        background: ${props.theme.success};
      `
  }
}

const Wrapper = styled.div<StyleProps>`
  width: 250px;
  height: 60px;
  padding: 0 20px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 80px;
  right: 30px;
  z-index: 1;
  animation: fadeIn 3s forwards;
  @keyframes fadeIn {
    0% {
      opacity: 0;
      right: -250px;
    }
    20% {
      opacity: 1;
      right: 30px;
    }
    80% {
      opacity: 1;
      right: 30px;
    }
    100% {
      opacity: 0;
      right: -250px;
    }
  }
  ${(props) => getBackground(props)}

  .icon-wrapper {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border: 1px solid ${(props) => props.theme.white};
    border-radius: 50%;
    position: relative;

    > img {
      width: 15px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      -webkit-transform: translateY(-50%) translateX(-50%);
    }
  }

  > p {
    color: ${(props) => props.theme.white};
    font-size: 14px;
  }

  ${mediaSp`
    width: 200px;
    height: 45px;
    padding: 0 15px;
    right: 10px;

    @keyframes fadeIn {
      0% {
        right: -200px;
      }
      20% {
        right: 10px;
      }
      80% {
        right: 10px;
      }
      100% {
        right: -200px;
      }
    }

    .icon-wrapper {
      width: 20px;
      height: 20px;

      >img {
        width: 10px;
      }
    }
  `}
`
export const FlashMessage: NextComponentType<NextPageContext, null, Props> = ({ className = '', type }) => {
  return (
    <Wrapper className={className} type={type}>
      {type === 'success' && (
        <>
          <div className="icon-wrapper">
            <img src="/icon/success.png" alt="success" />
          </div>
          <p>Success!</p>
        </>
      )}
      {type === 'fail' && (
        <>
          <div className="icon-wrapper">
            <img src="/icon/fail.png" alt="fail" />
          </div>
          <p>Failed!</p>
        </>
      )}
    </Wrapper>
  )
}
