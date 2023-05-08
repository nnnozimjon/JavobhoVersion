/* eslint-disable no-undef */
import React from 'react'
import Image from 'next/image'
// import NavLinks from './NavLinks'
// import INav from './interface'
import Logo from '@/assets/img/svg-logo.png'
import Icon from '../Icon'
import Link from 'next/link'
import { useRouter } from 'next/router'
import NavButton from './components/NavButton'
import Cookies from 'js-cookie'
// import NavDropdownSelect from '../NavDropdownSelect'
import { useUser } from '@/store/contexts/UserContect'
// import NavDropdownSelect from '../NavDropdownSelect'

const Nav = () => {
  const router = useRouter().pathname
  const { user } = useUser()
  const profilePath = '/[profile]'

  const handleLogout = async () => {
    Cookies.remove('access_token')
    window.location.replace('/login')
  }

  return (
    <div className="sm:w-[300px] sm:min-w-[300px] sm:flex grid sm:h-screen sm:justify-between sm:flex-col sm:border-r-[1px] sm:border-invisible">
      <div className="w-full h-[150px] sm:flex hidden items-center pt-[20px] pl-[40px]">
        <Image src={Logo} alt="Javobho logo" className="w-[50px]" />
        <h1 className="font-bold text-[20px] text-[#1D9BF0] pl-[20px]">
          Javobho
        </h1>
      </div>
      <div className="w-full bg-white sm:bg-white sm:h-full h-fit p-0 sm:pl-[30px] sm:px-[20px] sm:block grid grid-cols-4 gap-4 sm:relative sm:border-none fixed bottom-0 border-t border-invisible">
        <Link href={`/`} className="flex items-center justify-center">
          <NavButton
            className={`${router === '/' && 'sm:text-white text-main'} ${
              router === '/' && 'sm:bg-[#3C87DF]'
            } `}
            icon={router === '/' ? 'homeFilled' : 'home'}
            label={'Home'}
          />
        </Link>
        <Link href={`/explore`} className="flex items-center justify-center">
          <NavButton
            className={`${router === '/explore' && 'sm:text-white text-main'} ${
              router === '/explore' && 'sm:bg-[#3C87DF]'
            } `}
            icon={router === '/explore' ? 'exploreFilled' : 'explore'}
            label={'Explore'}
          />
        </Link>
        <Link
          href={`/notifications`}
          className="flex items-center justify-center"
        >
          <NavButton
            className={`${
              router === '/notifications' && 'sm:text-white text-main'
            } ${router === '/notifications' && 'sm:bg-[#3C87DF]'} `}
            icon={router === '/notifications' ? 'noteFilled' : 'note'}
            label={'Notifications'}
          />
        </Link>
        <Link href={`/messages`} className="flex items-center justify-center">
          <NavButton
            className={`${
              router === '/messages' && 'sm:text-white text-main'
            } ${router === '/messages' && 'sm:bg-[#3C87DF]'} `}
            icon={router === '/messages' ? 'messageFilled' : 'message'}
            label={'Messages'}
          />
        </Link>
        <Link
          href={`/${user.username}`}
          className="sm:flex hidden items-center justify-center"
        >
          <NavButton
            className={`${
              router === profilePath && 'sm:text-white text-main'
            } ${router === profilePath && 'sm:bg-[#3C87DF]'} `}
            icon={router === profilePath ? 'profileFilled' : 'profile'}
            label={'Profile'}
          />
        </Link>
        {/* 
        <NavDropdownSelect
          placeholder="More"
          options={[
            { id: 1, name: 'bookshelf', label: 'Bookshelf' },
            { id: 1, name: 'courses', label: 'Courses' },
            { id: 1, name: 'topics', label: 'Topics' },
            { id: 1, name: 'jobfinder', label: 'Jobs' },
          ]}
        /> */}
      </div>
      <div className="w-full h-[100px] sm:flex hidden justify-center items-center border-t border-invisible ">
        <div
          onClick={() => handleLogout()}
          className="flex p-[10px_20px] rounded-[6px] w-[252px] hover:bg-[#FC8181] hover:text-white duration-500 select-none cursor-pointer"
        >
          <Icon name="logout" />
          <button className="pl-[20px] font-medium">Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Nav
