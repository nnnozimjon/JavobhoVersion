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
