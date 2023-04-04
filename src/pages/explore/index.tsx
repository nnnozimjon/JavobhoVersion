import { BannerView } from '@/components/explore'
import HashTag from '@/components/explore/viewTypes/HashTags'
import React from 'react'

const Explore = () => {
  const tags = [
    { id: 1, hash: '#coding', category: 'IT Technologies', size: [{}, {}] },
    { id: 2, hash: '#finance', category: 'Business', size: [] },
    { id: 3, hash: '#education', category: 'Education', size: [{}] },
    { id: 4, hash: '#health', category: 'Health', size: [{}] },
    { id: 5, hash: '#business', category: 'Business', size: [{}, {}, {}] },
  ]
  return (
    <div>
      <BannerView />
      {tags.map((hash: any, i: number) => (
        <HashTag
          key={i}
          size={hash.size.length}
          hash={hash.hash}
          category={hash.category}
        />
      ))}
    </div>
  )
}

export default Explore
