/* eslint-disable no-undef */
import React from 'react'

const If: React.FC<any> = ({
  condition,
  children,
  anotherChildren,
}): JSX.Element => {
  return condition ? children : anotherChildren
}
export default If
