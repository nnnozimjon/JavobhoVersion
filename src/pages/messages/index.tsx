import Icon from '@/components/icon/Icon'
import User from '@/interfaces/user.interface'
import Link from 'next/link'
import React, { useEffect } from 'react'

const MessageProfile = ({ selectedContact, select, onClick }: any) => {
  const { verified, fullname, username, id } = selectedContact
  return (
    <div
      onClick={onClick}
      className={`p-[10px] flex gap-[10px] cursor-pointer hover:bg-[rgba(0,0,0,0.05)] border-main transition-colors duration-500 ${
        select == id && 'border-r-[3px] border-main bg-silver'
      }`}
    >
      <div className="w-[50px] h-[50px] rounded-full bg-main" />
      <div className="flex">
        <p className="font-bold text-[14px] pr-[5px]">{fullname} </p>
        {verified && <Icon name="verified" size={20} />}
        <p className="text-[14px] pl-[3px]">@{username}</p>
      </div>
    </div>
  )
}

const ChatRoom: React.FC<User> = ({ verified, username, fullname }: User) => {
  return (
    <div>
      <Link
        href={`/${username}`}
        className="hover:bg-silver duration-500 h-[300px] p-[20px] flex flex-col items-center"
      >
        <div className="w-[80px] h-[80px] bg-main rounded-full" />
        <h1 className="flex font-bold">
          {fullname}{' '}
          {verified && <Icon name="verified" className="ml-[10px]" />}
        </h1>
        <p className="font-medium text-dGray"> @{username}</p>
      </Link>
      <div>messages</div>
    </div>
  )
}

const friendsList: User[] = [
  {
    userId: 1,
    fullname: 'Qosimjon Rahimov',
    username: 'qosimjon',
    avatar: '/static/images/avatars/avatar_1.png',
    verified: true,
    description: '',
    createdAt: '',
    splashImage: '',
  },
  {
    userId: 2,
    fullname: 'Shamsulloev Nozimjon',
    username: 'nnnozimjon',
    avatar: '/static/images/avatars/avatar_1.png',
    verified: false,
    description: '',
    createdAt: '',
    splashImage: '',
  },
]

const Messages = () => {
  const [selectedFriend, setSelectedFriend] = React.useState<number>(0)
  const [text, setText] = React.useState<string>('')

  useEffect(() => {
    setSelectedFriend(friendsList.length > 0 ? friendsList[0]?.userId : 0)
  }, [])

  const chatRoomProps: any = friendsList
    .filter((friend: User) => friend.userId == selectedFriend)
    .find((friend: User) => friend.userId == selectedFriend)

  return (
    <div className="h-full flex overflow-hidden">
      <div className="border-r border-invisible h-full w-[40%] overflow-y-scroll scrollbar-hide">
        {friendsList.length > 0 ? (
          friendsList.map((friend: any, i: number) => (
            <MessageProfile
              onClick={() => setSelectedFriend(friend?.id)}
              key={i}
              selectedContact={friend}
              select={selectedFriend}
            />
          ))
        ) : (
          <h1>Welcome to Inbox</h1>
        )}
      </div>
      <div className="h-full w-full flex flex-col overflow-y-scroll scrollbar-hide">
        <div className="h-[calc(100%_-_65px)] border-b border-invisible">
          <ChatRoom
            avatar={chatRoomProps?.avatar}
            description={chatRoomProps?.description}
            userId={chatRoomProps?.userId}
            createdAt={chatRoomProps?.createdAt}
            fullname={chatRoomProps?.fullname}
            username={chatRoomProps?.username}
            verified={chatRoomProps?.verified}
          />
        </div>
        <div className="absolute bottom-0">
          <div className="flex items-center px-3 py-2 rounded-[30px] bg-silver w-[600px] mb-[5px] ml-[10px]">
            <button
              type="button"
              className="inline-flex justify-center p-2 text-main font-medium rounded-full cursor-pointer hover:bg-[#54cae785] duration-300"
            >
              <Icon name="post" size={20} />
              <span className="sr-only">Upload image</span>
            </button>
            <button
              type="button"
              className={`p-2 text-main rounded-full cursor-pointer hover:bg-[#54cae785]`}
            >
              <Icon name="emoji" size={20} />
              <span className="sr-only">Add emoji</span>
            </button>
            <textarea
              onChange={e => setText(e.target.value)}
              id="chat"
              rows={1}
              className={`block mx-4 p-[5px] w-full text-sm text-main font-medium outline-none placeholder:font-normal bg-transparent resize-none`}
              placeholder="Start a new message..."
            />
            <button
              type="submit"
              className={`inline-flex justify-center ${
                text.length > 0 ? 'text-main' : 'text-invisible'
              } rounded-full ${
                text.length > 0 ? 'cursor-pointer' : 'cursor-default'
              }`}
            >
              <Icon name="publish" size={30} />
              <span className="sr-only">Send message</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages
