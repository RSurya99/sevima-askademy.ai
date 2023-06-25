import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: 'Roadmap | Askademy.ai',
}

const Roadmap = () => {
  return (
    <div>
      <section className='max-w-screen-xl mx-auto py-20'>
        <div className='space-y-2 mb-24 flex items-center justify-between'>
          <h3 className='text-4xl font-bold text-secondary leading-tight tracking-wide'>Roadmap Pembelajaran Saya</h3>
          <Link href='/roadmap/create' className='px-4 py-2 bg-primary font-semibold text-white rounded-md'>Tambah Roadmap</Link>
        </div>
        <div className="space-y-12">
          {new Array(5).fill(0).map((_, i) => (
            <div key={i} className='w-full flex space-x-8 px-10 py-8 space-y-5 shadow-lg rounded-md transition duration-300'>
              <div className="w-fit h-fit p-5 rounded bg-primary/10">
                <Image src='/images/roadmap/yoimiya-1.webp' width={150} height={150} alt='' />
              </div>
              <div className='flex flex-col justify-between'>
                <div className="space-y-3">
                  <h4 className='text-2xl font-bold text-secondary'>Bahasa Inggris Kelas 11 Semester II</h4>
                  <hr className="w-12 h-1 bg-primary" />
                  <div className='px-2 py-1 rounded-full border border-primary text-primary font-medium w-fit text-sm'>In Progress</div>
                </div>
                <Link href='/roadmap/1' className='w-fit px-4 py-2 bg-primary hover:bg-primary/90 text-white font-semibold rounded-md'>Lihat Detail</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Roadmap