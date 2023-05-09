import React from 'react'
import { ReactNode } from 'react'
import Ico from '../icon'

type ModalProps = {
  isOpen: boolean
  closeModal: () => void
  children: ReactNode
  title?: string
}

const Modal = ({ isOpen, closeModal, children, title }: ModalProps) => {
  return isOpen ? (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] text-black flex justify-center items-center">
      <div className="p-[10px_10px] w-[500px] bg-white rounded-[15px] shadow-lg ">
        <div className="relative p-[5px] flex items-center justify-between">
          <p className="font-semibold">{title}</p>
          <Ico
            name="closeSquare"
            onClick={closeModal}
            className="cursor-pointer text-lighterIndigo hover:text-darkestIndigo"
          />
        </div>
        <div className="modal-content px-[10px]">{children}</div>
      </div>
    </div>
  ) : null
}

export default Modal
