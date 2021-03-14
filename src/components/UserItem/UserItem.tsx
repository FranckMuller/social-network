import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'
import { User } from '../../redux/users/types'

import defaultMiniature from '../../assets/images/user-miniature.svg'
import styles from './UserItem.module.scss'

type UserItemProps = {
  user: User
  isFetchingFollowing: boolean
  onFollowUser: (userId: string) => void
  onUnFollowUser: (userId: string) => void
}

const UserItem: React.FC<UserItemProps> = ({ user, onFollowUser, onUnFollowUser, isFetchingFollowing }: any) => {
  const stylesBtn = { fontWeight: 500, fontSize: '12.5px' }

  return (
    <div className={styles.userItem} key={user._id}>
      <div className={styles.avatar}>
        <NavLink to={`/profile/${user._id}`}>
          <img src={user.photos.small ? user.photos.small : defaultMiniature} alt={user.name} />
        </NavLink>
      </div>

      <div className={styles.userInfo}>
        <div className={styles.name}>
          {user.name} {user.surname}
        </div>
        {user.status ? <div className={styles.status}>{user.status}</div> : null}
        <div className={styles.location}>
          {user.location.country} {user.location.city}
        </div>

        <div className={styles.btnWrap}>
          {user.isFollowed ? (
            <Button
              text="Отменить заявку"
              isDisabled={isFetchingFollowing}
              onClickHandler={() => onUnFollowUser(user._id)}
              styles={stylesBtn}
              classNames={["btn-primary"]}
            />
          ) : (
            <Button
              text="Отправить заявку"
              isDisabled={isFetchingFollowing}
              onClickHandler={() => onFollowUser(user._id)}
              styles={stylesBtn}
              classNames={["btn-primary"]}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default UserItem
