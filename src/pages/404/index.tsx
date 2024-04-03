import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <>
      <div className='text-3xl font-bold'>404</div>
      <Link href='/'>
        <span className=' hover:text-red-500'>Back</span>
      </Link>
    </>
  )
}
