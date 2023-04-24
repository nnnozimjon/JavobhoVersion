import React from 'react'
import IRead from './IRead.interface'

const HashtagText: React.FC<any> = ({ text }) => {
  const hashtagRegex = /#(\w+)/g
  const usernameRegex = /@(\w+)/g

  const coloredText = text
    .trim() // Remove leading/trailing spaces
    .replace(/\n/g, '<br />') // Replace newline with <br />
    .replace(
      hashtagRegex,
      `<span class="text-darkblue"><a href="/explore/tags?tag=$1">#$1</a></span>`
    )
    .replace(
      usernameRegex,
      `<span class="text-darkblue"><a href="/$1">@$1</a></span>`
    )

  return <p dangerouslySetInnerHTML={{ __html: coloredText }} />
}

const Read: React.FC<IRead> = ({ text = '', className }: IRead) => {
  const [showMore, setShowMore] = React.useState<boolean>(false)

  return (
    <div className={className}>
      <HashtagText text={showMore ? text : text.slice(0, 150)} />
      <strong
        className="text-invisible cursor-pointer select-none font-medium"
        onClick={() => setShowMore(!showMore)}
      >
        {text.length > 150 && `... ${!showMore ? 'read more' : 'show less'}`}
      </strong>
    </div>
  )
}

export default Read
