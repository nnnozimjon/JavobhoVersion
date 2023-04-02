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

  useEffect(() => {
    setSelectedFriend(friendsList.length > 0 ? friendsList[0]?.id : 0)
  }, [])

  console.log(selectedFriend)
  return (
    <div className="h-full flex">
      <div className="border-r border-invisible h-full w-[40%]">
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
      <div className="h-full w-full"></div>
    </div>
  )
}

export default Messages
