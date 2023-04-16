import React from 'react'
import Image from 'next/image'
import logo from '@/assets/img/circleLogo.png'

const Notifications = () => {
  return (
    <div>
      <div className="border-b border-invisible p-[10px] pl-[20px] flex gap-[20px]">
        <Image src={logo} alt="javobho logo" className="w-[50px] h-[50px]" />
        <p className="font-medium text-[16px]">
          There was a login to your account @{'Username'} from a new device on
          {' Date() '}. <br />
          Review it now.
        </p>
      </div>
    </div>
  )
}

export default Notifications
