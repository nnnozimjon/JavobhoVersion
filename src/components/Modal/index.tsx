import React from 'react'
import HandleModal from './Handler'
import IModal from './modal.interface'
// import ViewModal from './ViewModal'

const Modal: React.FC<IModal.props> = ({
  type = 'handle',
  view,
  handle,
}: IModal.props) => {
  return (
    <div className="w-screen h-screen absolute bg-[#000000a1] flex justify-center items-center">
      {type == 'handle' ? (
        <HandleModal onClick={handle?.onClick} onClose />
      ) : (
        <>{view?.children}</>
      )}
    </div>
  )
}

export default Modal
