import Icon from '@/components/Icon'
import React, { useEffect } from 'react'

const MessageProfile = ({ selectedContact, select, onClick }: any) => {
  const { verified, name, username, id } = selectedContact
  return (
    <div
      onClick={onClick}
      className={`p-[10px] flex gap-[10px] cursor-pointer hover:bg-[rgba(0,0,0,0.05)] border-main transition-colors duration-500 ${
        select == id && 'border-r-[3px] border-main bg-silver'
      }`}
    >
      <div className="w-[50px] h-[50px] rounded-full bg-main" />
      <div className="flex">
        <p className="font-bold text-[14px] pr-[5px]">{name} </p>
        {verified && <Icon name="verified" size={20} />}
        <p className="text-[14px] pl-[3px]">@{username}</p>
      </div>
    </div>
  )
}

const friendsList = [
  {
    id: 1,
    name: 'Qosimjon Rahimov',
    username: 'qosimjon',
    avatar: '/static/images/avatars/avatar_1.png',
    verified: true,
    selectedContact: false,
  },
  {
    id: 2,
    name: 'Shamsulloev Nozimjon',
    username: 'nnnozimjon',
    avatar: '/static/images/avatars/avatar_1.png',
    verified: false,
    selectedContact: true,
  },
]

const Messages = () => {
  const [selectedFriend, setSelectedFriend] = React.useState<number>(0)
  const [text, setText] = React.useState<string>('')

  useEffect(() => {
    setSelectedFriend(friendsList.length > 0 ? friendsList[0]?.id : 0)
  }, [])

  console.log(selectedFriend)
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
        <div className="h-[calc(100%_-_65px)] border-b border-invisible"></div>
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
