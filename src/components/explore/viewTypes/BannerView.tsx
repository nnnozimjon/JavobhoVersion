import React from 'react'
import Image from 'next/image'
import image from '@/assets/img/burj.jpg'
import Button from '@/components/Button'
import Ico from '@/components/icon'
import BannerComment from '../components/comment'

export const SwitchView: React.FC<any> = ({ view }: any): any => {
  const comments = [
    {
      createdAt: '2 weeks ago',
      name: 'Qosimjon Rahimov',
      text: 'Hey, what are you doing?',
      username: 'qosimjon',
      verified: false,
      avatar: '',
      fullname: '',
      liked: true,
      likes: 25,
    },
  ]
  switch (view) {
    case 'questions':
      return <h1>questions</h1>
    case 'answers':
      return <h1>answers</h1>
    case 'comments':
      return comments.map((comment: any, i) => (
        <BannerComment
          key={i}
          createdAt={comment.createdAt}
          text={comment.text}
          username={comment.username}
          verified={comment.verified}
          liked={true}
          likes={1}
          avatar={comment.avatar}
          fullname={comment.fullname}
        />
      ))
    default:
      return (
        <h1
          className="text-[20px] font-bold text-main
      "
        >
          404 NO CONTENT
        </h1>
      )
  }
}

const BannerView: React.FC<any> = () => {
  const [selected, setSelected] = React.useState<string>('questions')

  return (
    <div>
      <div className="w-full h-[300px] relative flex items-end">
        <Image
          src={image}
          alt="question Banner"
          className="w-full h-full object-cover absolute -z-[10]"
        />
        <div className="flex flex-col">
          <h1 className="p-[20px] font-semibold text-[30px] text-white absolute top-0">
            How fast does the earth spins around the orbit of the sun in our
            solar system?
          </h1>
          <div className="flex gap-[30px] p-[10px] w-fit">
            <p className="font-bold text-white flex flex-col items-center">
              178
              <span className="text-[12px] font-medium text-darkestIndigo">
                questions
              </span>
            </p>
            <p className="font-bold text-white flex flex-col items-center">
              205{' '}
              <span className="text-[12px] font-medium text-darkestIndigo">
                answers
              </span>
            </p>
            <p className="font-bold text-white flex flex-col items-center">
              90K{' '}
              <span className="text-[12px] font-medium text-darkestIndigo">
                views
              </span>
            </p>
          </div>
          <div className="flex gap-[20px] p-[10px]">
            <Button name="ask" text="Ask a question" color="white" bg="main" />
            <Button
              name="answer"
              text="reply"
              color="darkestCoral"
              bg="white"
            />
            <Button
              text="Subscribe"
              color="darkestCoral"
              bg="white"
              count={300}
            />
          </div>
        </div>
      </div>

      <div className="p-[10px] flex items-center gap-[20px] shadow-lg">
        <button
          onClick={() => setSelected('answers')}
          className={`p-[8px] border-darkblue font-medium hover:text-black transition-colors duration-300 select-none cursor-pointer ${
            selected === 'answers' ? 'border-b-[3px] text-black' : 'text-gray'
          }`}
        >
          Answers
        </button>
        <button
          onClick={() => setSelected('questions')}
          className={`p-[8px] border-darkblue font-medium hover:text-black transition-colors duration-300 select-none cursor-pointer ${
            selected === 'questions' ? 'border-b-[3px] text-black' : 'text-gray'
          }`}
        >
          Questions
        </button>
        <button
          onClick={() => setSelected('comments')}
          className={`p-[8px] border-darkblue font-medium hover:text-black transition-colors duration-300 select-none cursor-pointer ${
            selected === 'comments' ? 'border-b-[3px] text-black' : 'text-gray'
          }`}
        >
          comments
        </button>
      </div>
      <div className="flex flex-col items-center justify-end">
        <div className="w-full">
          <SwitchView view={selected} />
        </div>
        <Ico
          name="arrowBottom"
          className="rounded-full hover:cursor-pointer"
        />
      </div>
    </div>
  )
}

export default BannerView
