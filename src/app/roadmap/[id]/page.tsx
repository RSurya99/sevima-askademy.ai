import React from 'react'
import Image from 'next/image'

export const metadata = {
  title: 'Roadmap Detail | Askademy.ai',
}

const RoadmapDetail = () => {
  return (
    <div>
      <section className='max-w-screen-xl mx-auto py-20'>
        <div className='space-y-2 mb-24 text-center'>
          <span className='font-semibold text-primary'>Roadmap</span>
          <h2 className='text-5xl font-bold text-secondary leading-tight tracking-wide px-56'>Roadmap Pembelajaran Matematika Kelas 11 Semester II</h2>
          <p className='text-paragraph tracking-wide leading-relaxed px-80'>Berikut ini adalah Roadmap Pembelajaran Matematika untuk Kelas 11 SMA Semester II sesuai dengan Kurikulum 2013 (Kurtilas).</p>
        </div>
        <div className="relative flex gap-x-8 w-full">
          <div className='h-90vh w-1 bg-gray-400 rounded-full overflow-hidden mx-40'></div>
          <div className="absolute top-[15%] left-[138px] rounded-full w-12 h-12 bg-primary border-2 border-white shadow-lg"></div>
          <div className="absolute top-[50%] left-[138px] rounded-full w-12 h-12 bg-primary border-2 border-white shadow-lg"></div>
          <div className="absolute top-[85%] left-[138px] rounded-full w-12 h-12 bg-primary border-2 border-white shadow-lg"></div>
          <div className='space-y-12'>
            <div className='min-w-full max-w-3xl px-10 py-8 space-y-5 shadow-lg rounded-md transition duration-300'>
              <div className="w-fit p-5 rounded bg-primary/10">
                <Image src='/images/roadmap/yoimiya-1.webp' width={128} height={128} alt='' />
              </div>
              <h4 className='text-2xl font-bold text-secondary'>Bab 1 : Petualangan Kalkulus Diferensial</h4>
              <hr className="w-12 h-1 bg-primary" />
              <div className='mb-6'>
                <div className="flex items-center gap-x-2">
                  <input id="misi-1" name="misi-1" type="checkbox" checked className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                  <p className='text-paragraph tracking-wide leading-relaxed'>Misi 1: Menjelajahi Konsep Dasar Kalkulus Diferensial</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <input id="misi-2" name="misi-2" type="checkbox" checked className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                  <p className='text-paragraph tracking-wide leading-relaxed'>Misi 2: Mengaplikasikan Kalkulus Diferensial dalam Pemecahan Masalah</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <input id="misi-3" name="misi-3" type="checkbox" checked className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                  <p className='text-paragraph tracking-wide leading-relaxed'>Misi 3: Memahami Turunan Parsial dan Aplikasinya</p>
                </div>
              </div>
              <div className="w-full bg-primary/10 text-primary px-6 py-3 font-semibold rounded-md">Bab 1 telah berhasil diselesaikan</div>
            </div>
            <div className='min-w-full max-w-3xl px-10 py-8 space-y-5 shadow-lg rounded-md transition duration-300'>
              <div className="w-fit p-5 rounded bg-primary/10">
                <Image src='/images/roadmap/yoimiya-2.webp' width={128} height={128} alt='' />
              </div>
              <h4 className='text-2xl font-bold text-secondary'>Bab 2: Petualangan Matriks dan Transformasi Linear</h4>
              <hr className="w-12 h-1 bg-primary" />
              <div className='mb-6'>
                <div className="flex items-center gap-x-2">
                  <input id="misi-1" name="misi-1" type="checkbox" checked className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                  <p className='text-paragraph tracking-wide leading-relaxed'>Misi 1: Melakukan Eksplorasi Matriks dan Operasinya</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <input id="misi-2" name="misi-2" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                  <p className='text-paragraph tracking-wide leading-relaxed'>Misi 2: Memahami Transformasi Linear dan Aplikasinya</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <input id="misi-3" name="misi-3" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                  <p className='text-paragraph tracking-wide leading-relaxed'>Misi 3: Menjelajahi Sistem Persamaan Linear</p>
                </div>
              </div>
              {/* <div className="w-full bg-primary/10 text-primary px-6 py-3 font-semibold rounded-md">Bab 1 telah berhasil diselesaikan</div> */}
            </div>
            <div className='min-w-full max-w-3xl px-10 py-8 space-y-5 shadow-lg rounded-md transition duration-300'>
              <div className="w-fit p-5 rounded bg-primary/10">
                <Image src='/images/roadmap/yoimiya-5.webp' width={128} height={128} alt='' />
              </div>
              <h4 className='text-2xl font-bold text-secondary'>Bab 3: Eksplorasi Peluang dan Statistika</h4>
              <hr className="w-12 h-1 bg-primary" />
              <div className='mb-6'>
                <div className="flex items-center gap-x-2">
                  <input id="misi-1" name="misi-1" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                  <p className='text-paragraph tracking-wide leading-relaxed'>Misi 1: Melakukan Eksplorasi Peluang dengan Tantangan</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <input id="misi-2" name="misi-2" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                  <p className='text-paragraph tracking-wide leading-relaxed'>Misi 2: Menjelajahi Distribusi Peluang dan Aplikasinya</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <input id="misi-3" name="misi-3" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                  <p className='text-paragraph tracking-wide leading-relaxed'>Misi 3: Menganalisis Data Statistik dan Menarik Kesimpulan</p>
                </div>
              </div>
              {/* <div className="w-full bg-primary/10 text-primary px-6 py-3 font-semibold rounded-md">Bab 1 telah berhasil diselesaikan</div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RoadmapDetail