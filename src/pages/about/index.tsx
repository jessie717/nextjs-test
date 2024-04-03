import Link from 'next/link'
import React from 'react'

export default function about() {
  return (
    <>
      <div className='flex flex-col items-center'>
        <div className='font-bold text-3xl'>about</div>
        <Link href='/'>
          <span className='underline hover:text-blue-500'>Back</span>
        </Link>
      </div>
    </>
  )
}
