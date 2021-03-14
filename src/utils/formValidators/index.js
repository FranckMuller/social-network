import * as yup from 'yup'

export const requiredFiledCreator = (message) => {
  return (value) => {
    if (!value) return message
    return undefined
  }
}

export const isEmail = (value) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  console.log(re.test(String(value).toLowerCase()))
  if (re.test(String(value).toLowerCase())) return true
  return 'Неверный формат электронной почты'
}

export const loginFormValidationSchema = yup.object().shape({
  email: yup.string().required('Заполните поле').email('Неверный формат электронной почты'),
  password: yup.string().required('Заполните поле'),
})
