/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Nav from '../Nav/Nav'
import { ILayout } from './layout'
import NavLinks from '../Nav/NavLinks'
import { useRouter } from 'next/router'
import Icon from '../icon/Icon'
import TrendsToFollow from '../trends'

const SearchComponent = () => {
  const [search, setSearch] = React.useState<string>('')

  return (
    <div className="border-[2px] border-main p-[5px_20px] w-[280px] rounded-full flex items-center text-main">
      <Icon name="searchNormal" size={25} />
      <input
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearch(e.target.value)
        }
        placeholder="search Javobho"
        className="px-[10px] w-full h-full p-[5px] outline-none"
      />
      {search && (
        <Icon
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
          verified={true}
          avatar={
            'http://localhost:8000/api/user/profile/img/avatar/default.png'
          }
          fullname={'Shamsulloev Nozimjon'}
          username={'nnnozimjon'}
        />
        <TrendsToFollow
          verified={false}
          avatar={
            'http://localhost:8000/api/user/profile/img/avatar/default.png'
          }
          fullname={'Bilol Sharipov'}
          username={'bilol'}
        />
        <TrendsToFollow
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
  const { pathname } = useRouter()

  return (
    <div className="w-screen h-screen flex justify-between invisible lg:visible xl:visible">
      <div className="w-[300px] min-w-[300px]">
        <Nav />
      </div>
      <div className="w-full">
        <div className="w-full h-14 px-[20px] flex items-center border-b border-invisible">
          <h1 className="font-bold">
            {NavLinks.filter(path => path.path == pathname)[0]?.label}
          </h1>
        </div>
        <div className="h-[calc(100vh_-_56px)] w-full min-w-[600px]">
          {children}
        </div>
      </div>
      {pathname !== '/messages' && (
        <div className="w-[400px] min-w-[400px] border-l border-invisible h-full overflow-y-scroll scrollbar-hide">
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
