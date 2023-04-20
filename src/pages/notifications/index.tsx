import React from 'react'
import Image from 'next/image'
import logo from '@/assets/img/circleLogo.png'
import notificationsImage from '@/assets/img/notifications.png'

const Notifications = () => {
  const [notificationsState, setNotificationsState] = React.useState<any[]>([])

  React.useEffect(() => {
    setNotificationsState(notificationsState)
  }, [])

  return (
    <div className="w-full h-full">
      {notificationsState.length ? (
        <div className="border-b border-invisible p-[10px] pl-[20px] flex gap-[20px]">
          <Image src={logo} alt="javobho logo" className="w-[50px] h-[50px]" />
          <p className="font-medium text-[16px]">
            There was a login to your account @{'Username'} from a new device on
            {' Date() '}. <br />
            Review it now.
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center pt-[80px]">
          <>
            <Image src={notificationsImage} alt="" className="w-[250px]" />
            <h1 className="font-bold text-[24px] w-[350px] text-darkerIndigo">
              Stay up-to-date
            </h1>
            <p className="w-[350px] font-normal text-dGray">
              Get notified when something important happens, so you can stay
              informed and take action quickly.
            </p>
          </>
        </div>
      )}
    </div>
  )
}

export default Notifications
