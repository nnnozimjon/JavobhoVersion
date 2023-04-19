import React from 'react'
import Image from 'next/image'
import logo from '@/assets/img/circleLogo.png'
import notificationsImage from '@/assets/img/notifications.png'
import Icon from '@/components/Icon'
import IIcon from '@/components/icon/IIcon'

interface Props {
  options: Option[]
  placeholder?: string
  selectedOpts?: string
}
interface Option {
  id: number
  name?: IIcon.name
  label: string
}

export const CustomSelect: React.FC<Props> = ({
  options,
  placeholder,
  selectedOpts,
}: Props) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [selected, setSelected] = React.useState('')

  React.useEffect(() => {
    selectedOpts && setSelected(selectedOpts)
  }, [])

  function toggleOptions() {
    setIsOpen(!isOpen)
  }

  function selectOption(option: any) {
    setIsOpen(false)
    setSelected(option)
  }

  return (
    <div className="relative inline-block min-w-[100px] w-[252px] z-10">
      <div onClick={toggleOptions}>
        <div className="flex items-center min-w-[100px] w-[252px] h-[48px] px-[16px] py-[14px] text-start m-[10px] cursor-pointer select-none rounded-[6px] hover:bg-[#3C87DF] hover:text-white duration-500 select-header">
          <Icon name="moreHorizontalScale" />
          <span className="pl-[13px] text-[14px] font-medium">
            {selectedOpts ? selected : selected ? selected : placeholder}
          </span>
        </div>
        {isOpen && (
          <div className="absolute min-w-[100px] w-[252px] rounded-b select-lis bg-white text-dGray border-none shadow-2xl z-[10] ">
            {options?.map((option: Option) => (
              <div
                key={option.id}
                className="select-item px-4 py-2 h-[48px] cursor-pointer hover:bg-[#3C87DF] flex flex-col justify-center hover:text-white font-medium text-[14px]"
                onClick={() => selectOption(option.label)}
              >
                <div className="flex items-center text-start m-[10px] ">
                  {option.name && <Icon name={option.name} />}
                  <span className="pl-[13px] text-[14px] font-medium">
                    {option.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
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
