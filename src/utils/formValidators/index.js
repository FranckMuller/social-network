import * as yup from 'yup'

export const loginFormValidationSchema = yup.object().shape({
  email: yup.string().required('Заполните поле').email('Неверный формат электронной почты'),
  password: yup.string().required('Заполните поле'),
})

export const postFromValidationSchema = yup.object().shape({
  postText: yup.string().required('Вы не можете отправить пуcтой пост')
})
