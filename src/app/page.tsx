import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className='flex flex-col items-center'>
        <div className='font-bold text-3xl'>nextjs</div>
        <Link href='/about'>
          <span className='underline hover:text-orange-500'>about</span>
        </Link>
        <Link href='/404'>
          <span className='underline hover:text-orange-500'>404</span>
        </Link>
        <Link href='/posts/1'>
          <span className='underline hover:text-orange-500'>posts</span>
        </Link>
      </div>
    </>
  )
}
