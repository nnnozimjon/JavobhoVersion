import React from 'react'
import Input from '../Input/Input'
import Button from '../Button'

const EditProfileModal: React.FC<any> = () => {
  return (
    <>
      <div className="flex flex-col gap-[15px] my-[30px]">
        <Input
          type="text"
          placeholder="Username"
          onChange={() => {}}
          value="shamsulloev"
        />
        <Input
          type="text"
          placeholder="Fullname"
          onChange={() => {}}
          value="Shamsulloev Nozimjon"
        />
        <textarea
          placeholder="Fullname"
          onChange={() => {}}
          value="Description"
          className="border"
        />

        <Button bg="main" text="Submit" color="white" />
      </div>
    </>
  )
}

export default EditProfileModal
