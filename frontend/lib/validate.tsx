export const validateRequired = (input: string): string | null  => {
  let message = null

  if (!input) {
    message = '入力してください'
  }
  return message
}

export const validateEmail = (email: string): string | null => {
  const re = /^[A-Za-z0-9]{1}[A-Za-z0-9_.+-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/
  let message = null

  if (!email) {
    message = '入力してください'
  } else if (!re.test(email)) {
    message = 'メールアドレスの形式ではありません'
  }
  return message
}