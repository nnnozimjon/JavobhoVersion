import React from 'react'

declare namespace IModal {
  interface props {
    type: 'handle' | 'view'
    view?: view
    handle?: handle
  }

  interface view {
    children?: React.ReactNode
  }

  interface handle {
    onClick: () => void
    onClose: () => void
  }

  type props = props
}

export default IModal
