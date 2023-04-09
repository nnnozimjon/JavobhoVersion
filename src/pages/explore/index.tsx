/* eslint-disable no-extra-semi */
import { ApiExplore } from '@/api/explore'
import { BannerView } from '@/components/explore'
import HashTag from '@/components/explore/viewTypes/HashTags'
import IExplore from '@/interfaces/tags.interface'
import { Loading } from '@/components/loading'
import { parseCookies } from 'nookies'

const Explore = ({ hashTags, loading }: any) => {
  return (
    <div>
      <BannerView />
      {loading ? (
        <Loading />
      ) : (
        hashTags[0]?.map((hash: IExplore.tags, i: number) => (
          <HashTag
            key={i}
            size={hash.postCount}
            hash={hash.name}
            category={hash.category}
          />
        ))
      )}
    </div>
  )
}

export const getServerSideProps = async (context: any) => {
  const cookies = parseCookies(context)
  const token = cookies.access_token

  const hashTags: any = await Promise.all([
    ApiExplore.getAllTags(token).then(res => {
      return res.payload
    }),
  ])

  const loading = !hashTags

  return {
    props: {
      hashTags,
      loading,
    },
  }
}

export default Explore
