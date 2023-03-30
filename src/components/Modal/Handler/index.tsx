import React from 'react'

const HandleModal: React.FC<any> = ({ onClick, onClose }) => {
  return (
    <div className="bg-white p-[20px] shadow-lg rounded w-[400px]">
      <h1 className="font-medium text-center">
        Do you really want to log out?
      </h1>
      <div className="py-[20px] flex justify-between items-center">
        <button
          onClick={onClick}
          className="w-[150px] border p-[10px] rounded text-[white] bg-main hover:bg-[#3C87DF] text-center duration-500"
        >
          YES
        </button>
        <button
          onClick={onClose}
          className="w-[150px] border p-[10px] rounded text-[white] bg-[#8e1c1cdb] hover:bg-[#FC8181] text-center duration-500"
        >
          NO
        </button>
      </div>
    </div>
  )
}

export default HandleModal
