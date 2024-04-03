import React from 'react'
import { Post } from '@/types/post'

export default function Blog({ posts }: { posts: Post[] }) {
  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('../../mock')
  const posts = res.json()
  return {
    props: {
      posts,
    },
  }
}
