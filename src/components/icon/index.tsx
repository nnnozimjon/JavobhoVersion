/* eslint-disable react/display-name */
/* eslint-disable no-undef */
import React from 'react'
import IIcon from './icon'
import list from './svg-list'

const Icon: React.FC<IIcon.props> = React.memo(
  ({ size = 24, name }): JSX.Element => (
    <svg
      viewBox="0 0 24 24"
      style={{ width: size + 'px', height: size + 'px' }}
      fill="currentColor"
    >
      {list[name]}
    </svg>
  ),
  (prevProps, nextProps) =>
    prevProps.name === nextProps.name && prevProps.size === nextProps.size
)

export default Icon
