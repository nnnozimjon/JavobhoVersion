/* eslint-disable no-extra-semi */
import { ApiExplore } from '@/api/explore'
import { BannerView } from '@/components/explore'
import HashTag from '@/components/explore/viewTypes/HashTags'
import IExplore from '@/interfaces/tags.interface'
import { parseCookies } from 'nookies'
import Spinner from '@/components/Spinner'

const Explore = ({ hashTags, loading }: any) => {
  if (loading) {
    return <Spinner />
  }

  return (
    <div>
      <BannerView />
      {hashTags?.map((hash: IExplore.tags, i: number) => (
        <HashTag
          key={i}
          size={hash.postCount}
          hash={hash.name}
          category={hash.category}
        />
      ))}
      <div className="h-[45px]" />
    </div>
  )
}

export const getServerSideProps = async (context: any) => {
  const cookies = parseCookies(context)
  const token = cookies.access_token

  let hashTags
  let loading = true // set the initial loading state to true

  try {
    hashTags = await ApiExplore.getAllTags(token).then(res => {
      return res.payload
    })

    loading = false // set the loading state to false after the data is loaded
  } catch (error) {
    return []
  }

  return {
    props: {
      hashTags,
      loading,
    },
  }
}

export default Explore
