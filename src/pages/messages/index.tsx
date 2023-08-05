import Button from '@/components/Button'
import Ico from '@/components/icon'
import User from '@/interfaces/user.interface'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect } from 'react'
import messageImage from '@/assets/img/message.png'
import messagesImage from '@/assets/img/messages.png'

const MessageProfile = ({ selectedContact, select, onClick }: any) => {
  const { verified, fullname, username, id } = selectedContact
  return (
    <div
      onClick={onClick}
      className={`p-[10px] flex gap-[10px] cursor-pointer hover:bg-[rgba(0,0,0,0.05)] border-main transition-colors duration-500 ${
        select.userId == id && 'border-r-[3px] border-main bg-silver'
      }`}
    >
      <div className="w-[50px] h-[50px] rounded-full bg-main" />
      <div className="flex">
        <p className="font-bold text-[14px] pr-[5px]">{fullname} </p>
        {verified && <Ico name="verified" size={20} />}
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
          {fullname} {verified && <Ico name="verified" className="ml-[10px]" />}
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
  const initialState: User = {
    avatar: '',
    createdAt: '',
    description: '',
    fullname: '',
    splashImage: '',
    userId: 0,
    username: '',
    verified: false,
  }
  const [selectedFriend, setSelectedFriend] = React.useState<User>(initialState)
  const [text, setText] = React.useState<string>('')

  useEffect(() => {
    setSelectedFriend(friendsList.length > 0 ? friendsList[0] : initialState)
  }, [])

  const chatRoomProps: any = friendsList
    .filter((friend: User) => friend.userId == selectedFriend.userId)
    .find((friend: User) => friend.userId == selectedFriend.userId)

  return (
    <div className="h-full flex overflow-hidden">
      <div className="border-r border-invisible h-full w-[40%] overflow-y-scroll scrollbar-hide">
        {friendsList.length > 0 ? (
          friendsList.map((friend: any, i: number) => (
            <MessageProfile
              onClick={() => setSelectedFriend(friend)}
              key={i}
              selectedContact={friend}
              select={selectedFriend}
            />
          ))
        ) : (
          <div className="p-[10px] flex flex-col items-center">
            <Image
              src={messagesImage}
              alt="message javobho"
              className="w-[250px]"
            />
            <h1 className="font-bold text-[30px] p-[10px] text-darkestIndigo">
              Welcome to your inbox!
            </h1>
            <p className="text-dGray p-[10px]">
              Chat, share posts and more with private conversations between you
              and your friends on Javobho.
            </p>
            <br />
            <Button
              bg="main"
              text="Write a message"
              color="white"
              name={'edit'}
              className="hover:bg-dGray text-[18px]"
            />
          </div>
        )}
      </div>
      <div className="h-full w-full flex flex-col overflow-y-scroll scrollbar-hide">
        {selectedFriend.username ? (
          <>
            <div className="h-[calc(100%_-_65px)] border-b border-invisible">
              <ChatRoom {...chatRoomProps} />
            </div>
            <div className="absolute bottom-0">
              <div className="flex items-center px-3 py-2 rounded-[30px] bg-silver w-[600px] mb-[5px] ml-[10px]">
                <button
                  type="button"
                  className="inline-flex justify-center p-2 text-main font-medium rounded-full cursor-pointer hover:bg-[#54cae785] duration-300"
                >
                  <Ico name="post" size={20} />
                  <span className="sr-only">Upload image</span>
                </button>
                <button
                  type="button"
                  className={`p-2 text-main rounded-full cursor-pointer hover:bg-[#54cae785]`}
                >
                  <Ico name="emoji" size={20} />
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
                  <Ico name="publish" size={30} />
                  <span className="sr-only">Send message</span>
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="h-full flex items-center justify-center">
            <div className="flex flex-col gap-[20px]">
              <Image
                src={messageImage}
                alt="message javobho"
                className="w-[300px]"
              />
              <h1 className="font-bold text-darkestIndigo text-[30px]">
                Select a message
              </h1>
              <p className="text-dGray w-[400px]">
                Choose from your existing conversations, start a new one, or
                just keep exploring.
              </p>
              <Button
                bg="main"
                color="white"
                text="New message"
                className="w-fit text-[20px] hover:bg-dGray"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Messages
