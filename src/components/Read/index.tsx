import React from 'react'
import IRead from './IRead.interface'

const Read: React.FC<IRead> = ({ text = '', className }: IRead) => {
  const [showMore, setShowMore] = React.useState<boolean>(false)

  return (
    <p className={className}>
      {showMore ? text : text.slice(0, 150)}
      <strong
        className="text-invisible cursor-pointer select-none font-medium"
        onClick={() => setShowMore(!showMore)}
      >
        {text.length > 150 && `... ${!showMore ? 'read more' : 'show less'}`}
      </strong>
    </p>
  )
}

export default Read
