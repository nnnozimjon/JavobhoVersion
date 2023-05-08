/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Nav from '../Nav/Nav'
import { ILayout } from './layout'
import NavLinks from '../Nav/NavLinks'
import { useRouter } from 'next/router'
import Ico from '../Icon'
import TrendsToFollow from '../trends'
import { useUser } from '@/store/contexts/UserContect'
import Link from 'next/link'

const SearchComponent = () => {
  const [search, setSearch] = React.useState<string>('')

  return (
    <div className="border-[2px] border-main p-[5px_20px] w-[280px] rounded-full flex items-center text-main">
      <Ico name="searchNormal" size={25} />
      <input
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
        placeholder="search Javobho"
        className="px-[10px] w-full h-full p-[5px] outline-none"
      />
      {search && (
        <Ico
          name="closeSquare"
          className="cursor-pointer"
          onClick={() => setSearch('')}
        />
      )}
    </div>
  )
}

const WhoToFollow = () => {
  return (
    <div className="w-full p-[20px] flex flex-col gap-[30px]">
      <div className="bg-silver rounded-lg h-[400px]">
        <p className="font-bold text-[25px] p-[15px]">Trends for you</p>
      </div>
      <div className="bg-silver rounded-lg h-[400px]">
        <p className="font-bold text-[25px] p-[15px]">Who To Follow</p>
        <TrendsToFollow
          id={4}
          verified={true}
          avatar={
            'http://localhost:8000/api/user/profile/img/avatar/default.png'
          }
          fullname={'Shamsulloev Nozimjon'}
          username={'nnnozimjon'}
        />
        <TrendsToFollow
          id={5}
          verified={false}
          avatar={
            'http://localhost:8000/api/user/profile/img/avatar/default.png'
          }
          fullname={'Bilol Sharipov'}
          username={'bilol'}
        />
        <TrendsToFollow
          id={6}
          verified={false}
          avatar={
            'http://localhost:8000/api/user/profile/img/avatar/default.png'
          }
          fullname={'Sh.I'}
          username={'ibragimjanee'}
        />
      </div>
    </div>
  )
}

const HomeAds = () => {
  return (
    <div className="p-[10px] flex flex-col items-center">
      <SearchComponent />
      <WhoToFollow />
    </div>
  )
}
const ExploreAds = () => {
  return (
    <div className="p-[10px] flex flex-col items-center">
      <SearchComponent />
      <WhoToFollow />
    </div>
  )
}
const NoteAds = () => {
  return (
    <div className="p-[10px] flex flex-col items-center">
      <SearchComponent />
      <WhoToFollow />
    </div>
  )
}
const ProfileAds = () => {
  return (
    <div className="p-[10px] flex flex-col items-center">
      <SearchComponent />
      <WhoToFollow />
    </div>
  )
}

const BookmarksAds = () => {
  return (
    <div className="p-[10px] flex flex-col items-center">
      <SearchComponent />
      <WhoToFollow />
    </div>
  )
}

const ListsAds = () => {
  return (
    <div className="p-[10px] flex flex-col items-center">
      <SearchComponent />
      <WhoToFollow />
    </div>
  )
}

const DesktopLayout = ({ children }: ILayout) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const { pathname, query } = useRouter()
  const { user } = useUser()
  const username = query.profile

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
    <div className="w-screen h-screen flex justify-between">
      <Nav />
      <div className="w-full">
        <div className="w-full h-[50px] sm:px-[20px] px-[5px] flex items-center border-b border-invisible">
          <div className="grid grid-cols-12 w-full sm:hidden">
            <div id="closeOptions">
              <button
                className="relative z-10 p-[10px] md:hidden w-[50px]"
                onClick={() => setIsOpen(!isOpen)}
              >
                <img
                  src={user.avatar}
                  alt="profile_image"
                  className="w-[25px] h-[25px] border rounded-full border-invisible cursor-pointer"
                />
              </button>
              <div
                className={`fixed z-10 border-r border-invisible top-0 left-0 w-64 bg-white h-screen overflow-auto transition-all duration-300 ${
                  isOpen ? 'ml-0' : '-ml-64'
                }`}
              >
                <nav className="w-full h-full p-[20px]">
                  <img
                    src={user.avatar}
                    alt="profile_image"
                    className="w-[40px] h-[40px]  border rounded-full border-invisible cursor-pointer"
                  />
                  <h1 className="pt-[15px] text-[14px] font-bold">
                    {user.fullname}
                  </h1>
                  <h1 className="text-[12px] font-normal text-dGray leading-[10px]">
                    @{user.username}
                  </h1>
                  <div className="border-t mt-[20px] border-invisible" />

                  <Link href={`/${user.username}`} className="flex gap-[10px] px-[20px] py-[10px] hover:bg-main hover:text-white rounded-full mt-[10px]">
                    <Ico name="profile" />
                    <p className="select-none">Profile</p>
                  </Link>
                  <Link href={`/bookmarks`} className="flex gap-[10px] px-[20px] py-[10px] hover:bg-main hover:text-white rounded-full mt-[10px]">
                    <Ico name="bookmarks" />
                    <p className="select-none">Bookmarks</p>
                  </Link>
                  <Link href={`/jobfinder`} className="flex gap-[10px] px-[20px] py-[10px] hover:bg-main hover:text-white rounded-full mt-[10px]">
                    <Ico name="jobfinder" />
                    <p className="select-none">Jobs</p>
                  </Link>
                  <Link href={`/topics`} className="flex gap-[10px] px-[20px] py-[10px] hover:bg-main hover:text-white rounded-full mt-[10px]">
                    <Ico name="topics" />
                    <p className="select-none">Topics</p>
                  </Link>
                  <Link href={`/courses`} className="flex gap-[10px] px-[20px] py-[10px] hover:bg-main hover:text-white rounded-full mt-[10px]">
                    <Ico name="courses" />
                    <p className="select-none">Courses</p>
                  </Link>
                  <Link href={`/bookshelf`} className="flex gap-[10px] px-[20px] py-[10px] hover:bg-main hover:text-white rounded-full mt-[10px]">
                    <Ico name="bookshelf" />
                    <p className="select-none">Bookshelf</p>
                  </Link>

                  <div className="flex gap-[10px] px-[20px] py-[10px] fixed bottom-[10px] rounded-full hover:bg-[#FC8181] hover:text-white">
                    <Ico name="logout" />
                    <p className="select-none">logout</p>
                  </div>
                </nav>
              </div>
            </div>
            <p className="text-[18px] col-start-6 pt-[10px] font-bold text-main">
              Javobho
            </p>
          </div>
          <h1 className="font-bold sm:block hidden">
            {NavLinks.filter(path => path.path == pathname)[0]?.label}
            {pathname === '/[profile]' && username}
          </h1>
        </div>
        <div className="sm:h-[calc(100vh_-_56px)] h-full sm:w-full sm:min-w-[600px]">
          {children}
        </div>
      </div>
      {pathname !== '/messages' && (
        <div className="w-[400px] min-w-[400px] border-l border-invisible h-full overflow-y-scroll scrollbar-hide sm:block hidden">
          {pathname == '/' && <HomeAds />}
          {pathname == '/explore' && <ExploreAds />}
          {pathname == '/notifications' && <NoteAds />}
          {pathname == '/bookmarks' && <BookmarksAds />}
          {pathname == '/lists' && <ListsAds />}
          {pathname == '/profile' && <ProfileAds />}
        </div>
      )}
    </div>
  )
}

export default DesktopLayout
