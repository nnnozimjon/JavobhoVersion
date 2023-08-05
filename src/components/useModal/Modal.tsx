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
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] text-black flex justify-center items-center z-50">
      <div className=" w-[500px] bg-white sm:rounded-[15px] rounded-none shadow-lg h-full sm:h-fit">
        <div className="relative p-[10px] flex items-center justify-between">
          <Ico
            name="arrowback"
            onClick={closeModal}
            className="cursor-pointer text-lighterIndigo hover:text-darkestIndigo"
          />
          <p className="font-semibold">{title}</p>
        </div>
        <div className="border-t pb-[5px] border-invisible" />
        <div className="overflow-scroll scrollbar-hide">{children}</div>
      </div>
    </div>
  ) : null
}

export default Modal
