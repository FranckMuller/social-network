import React from 'react';
import { MessagesContainer } from './Messages/MessagesContainer';
import { DialogsListContainer } from './DialogsList/DialogsListContainer';
import { DialogsFormContainer } from './DialogsForm/DialogsFormContainer';
import withMappedRouterProps from '../hoc/WithMappedRouterProps';

import styles from './Dialogs.module.scss';

const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <DialogsListContainer />
      <div className={styles.wrap}>
        <MessagesContainer />
        <DialogsFormContainer />
      </div>
    </div>
  );
};

export default withMappedRouterProps()(Dialogs);
