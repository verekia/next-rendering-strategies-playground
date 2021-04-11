import Link from 'next/link'

const Nav = () => (
  <ul>
    <li>
      <Link href="/">
        <a>Home</a>
      </Link>
    </li>
    <li>
      <Link href="/about">
        <a>About</a>
      </Link>
    </li>
    <li>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
    </li>
    <li>
      <Link href="/post/1">
        <a>Post 1</a>
      </Link>
    </li>
  </ul>
)

export default Nav
