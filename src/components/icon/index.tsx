/* eslint-disable react/display-name */
/* eslint-disable no-undef */
import React from 'react'
import IIcon from '@/components/Icon/IIcon'
import list from '@/components/Icon/svg-list'

const Ico: React.FC<IIcon.props> = ({
  size = 24,
  name,
  className,
  onClick,
}: IIcon.props) => {
  return (
    <>
      <svg
        viewBox="0 0 24 24"
        style={{ width: size + 'px', height: size + 'px' }}
        fill="currentColor"
        className={className}
        onClick={onClick}
      >
        {list[name]}
      </svg>
    </>
  )
}

export default Ico
