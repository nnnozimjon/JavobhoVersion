import React from 'react'

interface Props {
  text: string
}

const HashtagText: React.FC<Props> = ({ text }) => {
  const coloredText = text.replace(
    /#(\w+)/g,
    '<span class="text-blue-500">$&</span>'
  )

  return <div dangerouslySetInnerHTML={{ __html: coloredText }} />
}

export default HashtagText
