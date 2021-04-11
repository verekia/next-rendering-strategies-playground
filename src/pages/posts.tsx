import wait from '@sharyn/util.wait'
import Link from 'next/link'

import Nav from '../components/Nav'

const PostsPage = ({ posts, random }) => (
  <div>
    <Nav />
    <ul>
      {posts.map(p => (
        <li key={p.id}>
          <Link href={`/post/${p.id}`}>
            <a>Post {p.id}</a>
          </Link>
        </li>
      ))}
    </ul>
    Random: {random}
  </div>
)

export const getStaticProps = async () => {
  const posts = [{ id: 1 }]
  console.log('Start waiting')
  await wait(3000)
  console.log('Stop waiting')
  return {
    props: { posts, random: Math.floor(Math.random() * 100) },
    revalidate: 10,
  }
}

export default PostsPage
