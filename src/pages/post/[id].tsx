import wait from '@sharyn/util.wait'

import Nav from '../../components/Nav'
import { useRouter } from 'next/router'

const PostPage = ({ post, random }) => {
  const { isFallback } = useRouter()

  if (isFallback) return 'Loading...'

  return (
    <div>
      <Nav />I am post {post?.id}, random: {random}
    </div>
  )
}

// fallback: 'blocking' => Most SEO / opengraph friendly
// fallback: true => Most user-friendly
export const getStaticPaths = () => ({ paths: [], fallback: 'blocking' })

export const getStaticProps = async ({ params }) => {
  const { id } = params
  console.log('Start waiting')
  await wait(3000)
  console.log('Stop waiting')
  return {
    props: { post: { id }, random: Math.floor(Math.random() * 100) },
    revalidate: 4,
  }
}

export default PostPage
