import React from 'react'
import Image from 'next/image'
import image from '@/assets/img/burj.jpg'
import Button from '@/components/Button'

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
          onClick={() => setSelected('experts')}
          className={`p-[8px] border-darkblue font-medium hover:text-black transition-colors duration-300 select-none cursor-pointer ${
            selected === 'experts' ? 'border-b-[3px] text-black' : 'text-gray'
          }`}
        >
          comments
        </button>
      </div>
    </div>
  )
}

export default BannerView
