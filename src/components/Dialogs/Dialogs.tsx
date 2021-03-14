import React from 'react'
import { MessagesContainer } from './Messages/MessagesContainer'
import { DialogsListContainer } from './DialogsList/DialogsListContainer'
import { DialogsFormContainer } from './DialogsForm/DialogsFormContainer'

import styles from './Dialogs.module.scss'

const Dialogs: React.FC = () => {
  return (
    <div className={styles.dialogs}>
      <DialogsListContainer />
      <div className={styles.wrap}>
        <MessagesContainer />
        <DialogsFormContainer />
      </div>
    </div>
  )
}

export default Dialogs
