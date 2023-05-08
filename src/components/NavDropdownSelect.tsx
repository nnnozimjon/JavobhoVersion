import React from 'react'
import Ico from './Icon'
import IIcon from './Icon/IIcon'

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

const NavDropdownSelect: React.FC<Props> = ({
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

  React.useEffect(() => {
    const handleCloseToggle = (e: any) => {
      if (!e.target.closest('#closeOptions')) {
        setIsOpen(false)
      }
    }
    window.addEventListener('click', handleCloseToggle)
    return () => window.removeEventListener('click', handleCloseToggle)
  }, [])

  return (
    <div
      className="relative inline-block min-w-[100px] w-[252px] z-10"
      id="closeOptions"
    >
      <div onClick={toggleOptions}>
        <div className="flex items-center min-w-[100px] w-[252px] h-[48px] px-[16px] py-[14px] text-start m-[10px] cursor-pointer select-none rounded-[6px] hover:bg-[#3C87DF] hover:text-white duration-500 select-header">
          <Ico name="moreHorizontalScale" />
          <span className="pl-[13px] text-[14px] font-medium">
            {selected ? selected : placeholder}
          </span>
        </div>
        {isOpen && (
          <div className="absolute min-w-[100px] w-[252px] rounded-b select-lis bg-white text-dGray border-none shadow-2xl z-[10] ">
            {options?.map((option: Option) => (
              <div
                key={option.id}
                className="select-item px-4 py-2 h-[48px] cursor-pointer hover:bg-[#3C87DF] flex flex-col justify-center hover:text-white font-medium text-[14px]"
              >
                <div className="flex items-center text-start m-[10px] ">
                  {option.name && <Ico name={option.name} />}
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

export default NavDropdownSelect
