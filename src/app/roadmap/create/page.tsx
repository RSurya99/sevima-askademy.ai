"use client";
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { MdMenuBook } from 'react-icons/md'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { useRouter } from 'next/navigation';

const RoadmapCreate = () => {
  const router = useRouter()
  const [educationLevel, setEducationLevel] = useState('')
  const [semester, setSemester] = useState(0)
  const [subject, setSubject] = useState('')
  const [loading, setLoading] = useState(false)
  const subjects = [ 'Matematika', 'Bahasa Indonesia', 'Bahasa Inggris', 'Sejarah', 'Pendidikan Kewarganegaraan', 'Pendidikan Agama dan Budi Pekerti', 'Seni Budaya', 'Olahraga', 'Pendidikan Lingkungan Hidup' ]

  // function dummy fetch with wait 5s
  const fetchDummy = async () => {
    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 3000))
    setLoading(false)
    router.push('/roadmap/1')
  }

  useEffect(() => {
    if(educationLevel !== '' && semester !== 0 && subject !== ''){
      fetchDummy()
    }
  })

  return (
    <>
      {loading && (
        <section className='max-w-screen-xl h-[90vh] mx-auto py-20 flex flex-col items-center justify-center space-y-3'>
          <AiOutlineLoading3Quarters size={64} className='animate-spin text-secondary' />
          <h2 className='text-5xl font-bold text-primary leading-tight tracking-wide'>Harap tunggu...</h2>
          <p className='text-paragraph tracking-wide leading-relaxed'>AI kami sedang membuatkan roadmap pembelajaran untuk kamu.</p>
        </section>
      )}
    {educationLevel === '' && (
      <section className='max-w-screen-xl mx-auto py-20'>
        <div className='space-y-2 mb-24 text-center'>
          <span className='font-semibold text-primary'>Education Level</span>
          <h2 className='text-5xl font-bold text-secondary leading-tight tracking-wide'>Pilih Jenjang Pendidikan</h2>
          <p className='text-paragraph tracking-wide leading-relaxed'>Pilih jenjang pendidikan yang saat ini kamu tempuh.</p>
        </div>
        <div className="grid grid-cols-3 gap-x-8">
          <button onClick={() => setEducationLevel('SD')} className='py-10 flex flex-col items-center justify-center gap-y-5 shadow-lg rounded-md group hover:bg-primary transition duration-300'>
            <div className="p-5 rounded bg-primary/10 group-hover:bg-white">
              <Image src='/images/education-level-color/sd.svg' width={48} height={48} alt='' />
            </div>
            <h4 className='text-2xl font-bold text-secondary group-hover:text-white'>SD</h4>
            <hr className="w-12 h-1 bg-primary group-hover:bg-white" />
          </button>
          <button onClick={() => setEducationLevel('SMP')} className='py-10 flex flex-col items-center justify-center gap-y-5 shadow-lg rounded-md group hover:bg-primary transition duration-300'>
            <div className="p-5 rounded bg-primary/10 group-hover:bg-white">
              <Image src='/images/education-level-color/smp.svg' width={48} height={48} alt='' />
            </div>
            <h4 className='text-2xl font-bold text-secondary group-hover:text-white'>SMP</h4>
            <hr className="w-12 h-1 bg-primary group-hover:bg-white" />
          </button>
          <button onClick={() => setEducationLevel('SMA')} className='py-10 flex flex-col items-center justify-center gap-y-5 shadow-lg rounded-md group hover:bg-primary transition duration-300'>
            <div className="p-5 rounded bg-primary/10 group-hover:bg-white">
              <Image src='/images/education-level-color/sma.svg' width={48} height={48} alt='' />
            </div>
            <h4 className='text-2xl font-bold text-secondary group-hover:text-white'>SMA</h4>
            <hr className="w-12 h-1 bg-primary group-hover:bg-white" />
          </button>
        </div>
      </section>
      )}
      {educationLevel !== '' && semester === 0 && (
        <section className='max-w-screen-xl mx-auto py-20'>
          <div className='space-y-2 mb-24 text-center'>
            <span className='font-semibold text-primary'>Semester</span>
            <h2 className='text-5xl font-bold text-secondary leading-tight tracking-wide'>Pilih Semester</h2>
            <p className='text-paragraph tracking-wide leading-relaxed'>Pilih semester yang saat ini kamu tempuh</p>
          </div>
          <div className="mx-64 grid grid-cols-2 gap-x-8">
            <button onClick={() => setSemester(1)} className='py-10 flex flex-col items-center justify-center gap-y-5 shadow-lg rounded-md group hover:bg-primary transition duration-300'>
              <div className="py-5 px-8 rounded bg-primary/10 group-hover:bg-white text-2xl font-bold text-center text-secondary">
                I
              </div>
              <h4 className='text-2xl font-bold text-secondary group-hover:text-white'>Semester I</h4>
              <hr className="w-12 h-1 bg-primary group-hover:bg-white" />
            </button>
            <button onClick={() => setSemester(2)} className='py-10 flex flex-col items-center justify-center gap-y-5 shadow-lg rounded-md group hover:bg-primary transition duration-300'>
              <div className="py-5 px-8 rounded bg-primary/10 group-hover:bg-white text-2xl font-bold text-center text-secondary">
                II
              </div>
              <h4 className='text-2xl font-bold text-secondary group-hover:text-white'>Semester II</h4>
              <hr className="w-12 h-1 bg-primary group-hover:bg-white" />
            </button>
          </div>
        </section>
      )}
      {educationLevel !== '' && semester !== 0 && subject === '' && (
        <section className='max-w-screen-xl mx-auto py-20'>
          <div className='space-y-2 mb-16 text-center'>
            <span className='font-semibold text-primary'>Subjects</span>
            <h2 className='text-5xl font-bold text-secondary leading-tight tracking-wide'>Pilih Mata Pelajaran</h2>
            <p className='text-paragraph tracking-wide leading-relaxed'>Pilih mata pelajaran yang ingin kamu buatkan roadmap pembelajarannya.</p>
          </div>
          <div className="mb-16 mx-auto group focus-within:ring-1 focus-within:ring-offset-2 focus-within:ring-secondary w-fit rounded-md overflow-hidden">
            <input type="text" className='px-5 py-4 w-[596px] bg-gray-100 text-paragraph rounded-l-md outline-none border-none ring-0 hover:outline-none' placeholder='Masukkan Mata Pelajaran...' />
            <button className='px-8 py-4 bg-primary hover:bg-primary/90 rounded-r-md text-white font-semibold'>Cari</button>
          </div>
          <div className="grid grid-cols-3 gap-x-8 gap-y-16">
            {subjects.map(el => (
              <div key={el} className='py-10 flex flex-col items-center justify-center gap-y-5 shadow-lg rounded-md group transition duration-300'>
                <div className="p-5 rounded-full bg-primary text-white">
                  <MdMenuBook size={32} />
                </div>
                <h4 className='text-2xl font-bold text-secondary text-center'>{el}</h4>
                <button onClick={() => setSubject(el)} className='px-6 py-2 bg-primary hover:bg-primary/90 text-white font-semibold rounded'>Pilih Mata Pelajaran</button>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  )
}

export default RoadmapCreate