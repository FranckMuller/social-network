import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import cn from 'classnames'
import { yupResolver } from '@hookform/resolvers/yup'
import { addPost } from '../../../../redux/profile/actions'
import { postFromValidationSchema } from '../../../../utils/formValidators'

import styles from './PostForm.module.scss'

type PostData = {
  postText: string
}

export const PostForm = () => {
  const [isEditMode, setIsEditMode] = useState(false)
  const [textareaValue, setTextareaValue] = useState('')
  const buttonRef = useRef(null)
  const { register, handleSubmit, errors, clearErrors } = useForm<PostData>({
    resolver: yupResolver(postFromValidationSchema),
  })
  const dispatch = useDispatch()
  const onSubmit = (postData: PostData) => {
    console.log(postData)
    dispatch(addPost())
  }

  const onTextareaFocus = () => {
    setIsEditMode(true)
  }

  const onTextareaBlur = (e: React.FocusEvent) => {
    if (e.relatedTarget !== buttonRef.current && !textareaValue) {
      setIsEditMode(false)
      if (errors) {
        clearErrors('postText')
      }
    }
  }

  const onTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(e.target.value)
  }

  return (
    <div onBlur={onTextareaBlur} className={styles.postForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          onChange={onTextareaChange}
          onFocus={onTextareaFocus}
          ref={register({ required: true })}
          className={cn(styles.formTextarea, { 'has-error': errors.postText })}
          placeholder="Что у Вас нового?"
          name="postText"
        />
        {errors.postText && <span className={cn('form-error-message', styles.error)}>{errors.postText.message}</span>}
        {isEditMode && (
          <button ref={buttonRef} className="btn-primary btn">
            Опубликовать
          </button>
        )}
      </form>
    </div>
  )
}
