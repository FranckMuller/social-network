import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import cn from 'classnames'
import { yupResolver } from '@hookform/resolvers/yup'
import { fetchAddPost } from '../../../../redux/profile/actions'
import { postFromValidationSchema } from '../../../../utils/formValidators'

import styles from './PostForm.module.scss'
import { selectPostProcessing } from '../../../../redux/profile/selectors'
import Preloader from '../../../Preloader/Preloader'

type PostData = {
  postText: string
}

export const PostForm = () => {
  const [isEditMode, setIsEditMode] = useState(false)
  const [textareaValue, setTextareaValue] = useState('')
  const addPostProcessing = useSelector(selectPostProcessing)
  const buttonRef = useRef(null)
  const { register, handleSubmit, errors, clearErrors } = useForm<PostData>({
    resolver: yupResolver(postFromValidationSchema),
  })
  const dispatch = useDispatch()
  const onSubmit = async (postData: PostData) => {
    await dispatch(fetchAddPost(postData.postText))
    setIsEditMode(false)
    setTextareaValue('')
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
    <div className={styles.postForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          value={textareaValue}
          onBlur={onTextareaBlur}
          onChange={onTextareaChange}
          onFocus={onTextareaFocus}
          ref={register({ required: true })}
          className={cn(styles.formTextarea, { 'has-error': errors.postText })}
          placeholder="Что у Вас нового?"
          name="postText"
        />
        {errors.postText && <span className={cn('form-error-message', styles.error)}>{errors.postText.message}</span>}
        {isEditMode && (
          <button disabled={addPostProcessing} ref={buttonRef} className="btn-primary btn">
            Опубликовать
            {addPostProcessing && <Preloader className={styles.preloader} color="#ffffff" width="15px" height="15px" circleWidth="1px" />}
          </button>
        )}
      </form>
    </div>
  )
}
