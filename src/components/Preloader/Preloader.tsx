import React from 'react'
import cn from 'classnames'

import styles from './Preloader.module.scss'

type PreloaderProps = {
  width?: string
  height?: string
  circleWidth?: string
  color?: string
  className?: string
}

const Preloader: React.FC<PreloaderProps> = ({ width = '100px', height = '100px', circleWidth = '4px', color = '#4378ad', className }) => {
  const circleStyle = {
    width,
    height,
    boxShadow: `0 ${circleWidth} 0 0 ${color}`,
  }
  return (
    <div
      className={cn(className, styles.loadingioSpinnerEclipseCdqqoxufxk)}
      style={{
        width,
        height,
      }}
    >
      <div className={styles.ldioWbgn94bb3li}>
        <div style={circleStyle}></div>
      </div>
    </div>
  )
}

export default Preloader
