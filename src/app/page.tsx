import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdFacebook, MdWhatsapp, MdStar, MdStarBorder, MdAccessTimeFilled, MdOutlineArrowForward, MdPlayArrow, MdChevronRight } from "react-icons/md";
import { BsGithub } from 'react-icons/bs';

export const metadata = {
  title: 'Home | Askademy.ai',
}

const Home = () => {
  return (
    <>
      <main>
        <div className='h-screen bg-secondary'>
          <nav className='max-w-screen-xl mx-auto p-4 flex items-center justify-between'>
            <div className="flex items-center gap-x-12">
              <Link href='/' className='flex items-center gap-x-2 text-2xl font-bold text-white leading-tight'>
                <Image src='/logo.png' className='w-8 h-8' width={32} height={32} alt='Logo' />
                <span>Askademy.ai</span>
              </Link>
              <ul className="flex gap-x-6">
                <li><Link href='/' className='font-semibold text-white hover:text-white/90 tracking-wide'>Home</Link></li>
                <li><Link href='/roadmap' className='font-semibold text-white hover:text-white/90 tracking-wide'>Roadmap</Link></li>
                <li><Link href='/about' className='font-semibold text-white hover:text-white/90 tracking-wide'>About</Link></li>
                <li><Link href='/contact' className='font-semibold text-white hover:text-white/90 tracking-wide'>Contact</Link></li>
              </ul>
            </div>
            <div className="flex gap-x-6">
              <Link href='/login' className='px-6 py-4 rounded-md font-semibold text-white hover:text-white/90 tracking-wide'>Login</Link>
              <Link href='/register' className='px-6 py-4 rounded-md bg-primary hover:bg-primary/90 font-semibold text-white tracking-wide flex items-center gap-x-2 transition duration-300'>
                <span>Join Us</span>
                <MdOutlineArrowForward size={20} />
              </Link>
            </div>
          </nav>
          {/* Landing Section */}
          <section className='max-w-screen-xl mx-auto px-4 py-24 grid grid-cols-2 gap-x-8'>
            <div className='space-y-8'>
              <span className='font-semibold text-primary'>ASKADEMY.AI</span>
              <h1 className='text-6xl font-bold text-white leading-tight pr-24'>Buat perjalanan belajarmu menjadi lebih menyenangkan</h1>
              <p className='text-xl text-white tracking-wide leading-relaxed'>Askademy.ai dapat membantumu mengubah pembelajaran sekolah yang membosankan menjadi lebih menyenangkan.</p>
              <div className="flex gap-x-4">
                <Link href='/register' className='px-10 py-4 rounded-md bg-primary hover:bg-primary/90 font-semibold text-white tracking-wide flex items-center gap-x-2 transition duration-300'>Coba Sekarang</Link>
                <Link href='/register' className='px-10 py-4 rounded-md hover:bg-primary border border-primary font-semibold text-primary hover:text-white tracking-wide flex items-center gap-x-2 transition duration-300'>Pelajari Lebih Lanjut</Link>
              </div>
            </div>
            <div className='relative'>
              <Image src='/images/hero-3.png' width={425} height={517} className='relative z-10' alt='' />
              <Image src='/images/hero-2.png' width={460} height={450} className='absolute top-0 -right-24 z-0' alt='' />
            </div>
          </section>
        </div>
        {/* About Section */}
        <section className="max-w-screen-xl mx-auto px-4 py-40 grid grid-cols-2 gap-x-12 items-center">
          <div>
            <div className='relative w-[508px] h-[363px] rounded-2xl overflow-hidden'>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent"></div>
              <Image src='/images/video.png' width={508} height={363} className='' alt='' />
              <button className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 p-6 hover:scale-110 transition duration-500 rounded-full bg-primary text-white'>
                <MdPlayArrow size={36} />
              </button>
            </div>
          </div>
          <div className='pr-32 space-y-8'>
            <hr className="w-24 h-2 bg-primary" />
            <h2 className='text-5xl font-bold text-secondary leading-tight tracking-wide'>Apa itu Askademy.ai?</h2>
            <p className='text-paragraph tracking-wide leading-relaxed'>Askademy.ai adalah sebuah AI yang dapat kamu gunakan untuk membuat roadmap pembelajaran yang terstruktur dan efektif sesuai dengan kurikulum yang berlaku.</p>
            <Link href='/about' className='w-fit flex items-center gap-x-2 font-semibold text-primary border-b border-transparent hover:border-primary'>
              <span>Learn More</span>
              <MdChevronRight size={24} />
            </Link>
          </div>
        </section>
        {/* Stats Section */}
        <section className='max-w-screen-xl mx-auto px-4 py-20 flex items-center justify-center gap-x-8'>
          <div className='px-8 py-4 text-center'>
            <h1 className='text-6xl font-bold text-primary'>15K</h1>
            <span className='font-bold text-secondary'>Pelanggan</span>
          </div>
          <div className='px-8 py-4 text-center'>
            <h1 className='text-6xl font-bold text-primary'>150K</h1>
            <span className='font-bold text-secondary'>Pengunjung Bulanan</span>
          </div>
          <div className='px-8 py-4 text-center'>
            <h1 className='text-6xl font-bold text-primary'>200+</h1>
            <span className='font-bold text-secondary'>Mata Pelajaran</span>
          </div>
          <div className='px-8 py-4 text-center'>
            <h1 className='text-6xl font-bold text-primary'>100+</h1>
            <span className='font-bold text-secondary'>Mitra Sekolah</span>
          </div>
        </section>
        {/* Education Level Section */}
        <section className="max-w-screen-xl mx-auto px-4 py-40 items-center">
          <div className='space-y-2 mb-16'>
            <span className='font-semibold text-primary'>Education Level</span>
            <h2 className='text-5xl font-bold text-secondary leading-tight tracking-wide pr-52'>Tersedia untuk berbagai jenjang pendidikan</h2>
            <p className='text-paragraph tracking-wide leading-relaxed'>AI kami dapat digunakan untuk berbagai jenjang pendidikan mulai dari SD sampai dengan SMA/SMK.</p>
          </div>
          <div className="grid grid-cols-4 gap-x-10">
            <div className="px-12 py-10 space-y-5 shadow-lg rounded-md group hover:bg-primary transition duration-500">
              <div className="p-5 bg-primary/10 group-hover:bg-white w-fit rounded">
                <Image src='/images/education-level/sd.svg' width={32} height={32} alt='' />
              </div>
              <h5 className='font-bold text-secondary group-hover:text-white'>SD</h5>
              <hr className="w-12 h-1 bg-primary" />
              <p className='text-sm text-paragraph group-hover:text-white/90 tracking-wide leading-relaxed'>50+ Mata pelajaran termasuk dengan bahasa daerah!</p>
            </div>
            <div className="px-12 py-10 space-y-5 shadow-lg rounded-md group hover:bg-primary transition duration-500 translate-y-8">
              <div className="p-5 bg-primary/10 group-hover:bg-white w-fit rounded">
                <Image src='/images/education-level/smp.svg' width={32} height={32} alt='' />
              </div>
              <h5 className='font-bold text-secondary group-hover:text-white'>SMP</h5>
              <hr className="w-12 h-1 bg-primary" />
              <p className='text-sm text-paragraph group-hover:text-white/90 tracking-wide leading-relaxed'>75+ Mata pelajaran termasuk dengan bahasa daerah!</p>
            </div>
            <div className="px-12 py-10 space-y-5 shadow-lg rounded-md group hover:bg-primary transition duration-500">
              <div className="p-5 bg-primary/10 group-hover:bg-white w-fit rounded">
                <Image src='/images/education-level/sma.svg' width={32} height={32} alt='' />
              </div>
              <h5 className='font-bold text-secondary group-hover:text-white'>SMA</h5>
              <hr className="w-12 h-1 bg-primary" />
              <p className='text-sm text-paragraph group-hover:text-white/90 tracking-wide leading-relaxed'>75+ Mata pelajaran termasuk dengan bahasa daerah!</p>
            </div>
            <div className="px-12 py-10 space-y-5 shadow-lg rounded-md group hover:bg-primary transition duration-500 translate-y-8">
              <div className="p-5 bg-primary/10 group-hover:bg-white w-fit rounded">
                <Image src='/images/education-level/smk.svg' width={32} height={32} alt='' />
              </div>
              <h5 className='font-bold text-secondary group-hover:text-white'>SMK</h5>
              <hr className="w-12 h-1 bg-primary" />
              <p className='text-sm text-paragraph group-hover:text-white/90 tracking-wide leading-relaxed'>100+ Mata pelajaran termasuk dengan bahasa daerah!</p>
            </div>
          </div>
        </section>
        {/* Blog Section */}
        <div className="bg-secondary">
          <section className="max-w-screen-xl mx-auto px-4 py-40 items-center">
            <div className='space-y-2 mb-16'>
              <span className='font-semibold text-primary'>Blog</span>
              <h2 className='text-5xl font-bold text-white leading-tight tracking-wide pr-52'>Artikel Terbaru</h2>
              <p className='text-white/90 tracking-wide leading-relaxed'>Dapatkan informasi terkini dan artikel-artikel menarik seputar dunia pendidikan, teknologi, dan pembelajaran di Askademy.ai.</p>
            </div>
            <div className="grid grid-cols-3 gap-x-10">
              <div className="shadow-lg rounded-md overflow-hidden group hover:bg-primary transition duration-500">
                <Image src='/images/post-1.png' width={328} height={300} className='w-full aspect-square object-cover object-center' alt='' />
                <div className="p-6 pb-8 space-y-3 bg-white">
                  <span className='font-bold text-primary'>Productivity</span>
                  <h4 className='text-xl font-bold text-secondary'>Tips Supaya Kamu Tidak Mudah Terdistraksi</h4>
                  <p className='text-sm text-paragraph tracking-wide leading-relaxed'>Cara Supaya kamu bisa tetap produktif dalam jangka waktu yang lama.</p>
                  <div className="flex items-center gap-x-2 text-paragraph">
                    <MdAccessTimeFilled />
                    <span>4 menit</span>
                  </div>
                  <Link href='/' className='flex items-center gap-x-2 px-5 py-2.5 rounded-full border border-primary text-primary font-semibold hover:bg-primary/10 w-fit'>
                    <span>Baca Artikel</span>
                    <MdChevronRight />
                  </Link>
                </div>
              </div>
              <div className="shadow-lg rounded-md overflow-hidden group hover:bg-primary transition duration-500">
                <Image src='/images/post-2.png' width={328} height={300} className='w-full aspect-square object-cover object-center' alt='' />
                <div className="p-6 pb-8 space-y-3 bg-white">
                  <span className='font-bold text-primary'>Productivity</span>
                  <h4 className='text-xl font-bold text-secondary'>Tips Supaya Kamu Tidak Mudah Terdistraksi</h4>
                  <p className='text-sm text-paragraph tracking-wide leading-relaxed'>Cara Supaya kamu bisa tetap produktif dalam jangka waktu yang lama.</p>
                  <div className="flex items-center gap-x-2 text-paragraph">
                    <MdAccessTimeFilled />
                    <span>4 menit</span>
                  </div>
                  <Link href='/' className='flex items-center gap-x-2 px-5 py-2.5 rounded-full border border-primary text-primary font-semibold hover:bg-primary/10 w-fit'>
                    <span>Baca Artikel</span>
                    <MdChevronRight />
                  </Link>
                </div>
              </div>
              <div className="shadow-lg rounded-md overflow-hidden group hover:bg-primary transition duration-500">
                <Image src='/images/post-3.png' width={328} height={300} className='w-full aspect-square object-cover object-center' alt='' />
                <div className="p-6 pb-8 space-y-3 bg-white">
                  <span className='font-bold text-primary'>Productivity</span>
                  <h4 className='text-xl font-bold text-secondary'>Tips Supaya Kamu Tidak Mudah Terdistraksi</h4>
                  <p className='text-sm text-paragraph tracking-wide leading-relaxed'>Cara Supaya kamu bisa tetap produktif dalam jangka waktu yang lama.</p>
                  <div className="flex items-center gap-x-2 text-paragraph">
                    <MdAccessTimeFilled />
                    <span>4 menit</span>
                  </div>
                  <Link href='/' className='flex items-center gap-x-2 px-5 py-2.5 rounded-full border border-primary text-primary font-semibold hover:bg-primary/10 w-fit'>
                    <span>Baca Artikel</span>
                    <MdChevronRight />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* Testimonial Section */}
        <section className="max-w-screen-xl mx-auto px-4 py-40 items-center">
          <div className='space-y-2 mb-24'>
            <span className='font-semibold text-primary'>Testimonials</span>
            <h2 className='text-5xl font-bold text-secondary leading-tight tracking-wide pr-52'>Apa Kata Mereka Tentang Askademy.ai?</h2>
            <p className='text-secondary/90 tracking-wide leading-relaxed'>Testimoni dari para pengguna Askademy.ai untuk kamu yang masih bingung.</p>
          </div>
          <div className="grid grid-cols-2 gap-x-10">
            <div className="flex flex-col items-center text-center gap-y-4">
              <Image src='/images/avatar-1.png' width={128} height={128} className='rounded-full aspect-square object-cover object-center' alt='' />
              <p className='text-sm text-paragraph tracking-wide leading-relaxed mx-32'>Saya sebelumnya malas belajar karena monoton, tapi setelah menggunakan Askademy.ai saya semakin malas belajar, terima kasih bapak piring.</p>
              <div className="flex items-center gap-x-1 text-yellow-500">
                <MdStar size={20} />
                <MdStar size={20} />
                <MdStar size={20} />
                <MdStar size={20} />
                <MdStarBorder size={20} />
              </div>
              <h4 className='text font-bold text-secondary'>Asep Knalpot</h4>
              <span className='text-sm font-bold text-secondary/80'>Siswa SMAN 1 Bandung</span>
            </div>
            <div className="flex flex-col items-center text-center gap-y-4">
              <Image src='/images/avatar-2.png' width={128} height={128} className='rounded-full aspect-square object-cover object-center' alt='' />
              <p className='text-sm text-paragraph tracking-wide leading-relaxed mx-32'>Askademy.ai membantu saya dalam membuat roadmap belajar, sekarang saya tidak perlu pusing mau belajar apa ketika jam kosong di sekolah.</p>
              <div className="flex items-center gap-x-1 text-yellow-500">
                <MdStar size={20} />
                <MdStar size={20} />
                <MdStar size={20} />
                <MdStar size={20} />
                <MdStarBorder size={20} />
              </div>
              <h4 className='text font-bold text-secondary'>Roger Sumatra</h4>
              <span className='text-sm font-bold text-secondary/80'>Siswa SMPN 12 Bekasi</span>
            </div>
          </div>
        </section>
        {/* Newsletter Section */}
        <section className="mx-auto px-4 py-40 items-center bg-secondary">
          <div className='space-y-2 mb-20 text-center'>
            <span className='font-semibold text-primary'>Newsletter</span>
            <h2 className='text-5xl font-bold text-white leading-tight tracking-wide'>Berlangganan newsletter kami</h2>
            <p className='text-white/90 tracking-wide leading-relaxed'>Dapatkan info menarik seputar Askademy.ai dengan cara berlangganan di newsletter kami.</p>
          </div>
          <div className="mx-auto group focus-within:ring-1 focus-within:ring-offset-2 focus-within:ring-white w-fit rounded-md overflow-hidden">
            <input type="text" className='px-5 py-4 w-[596px] rounded-l-md outline-none border-none ring-0 hover:outline-none' placeholder='Masukkan Email' />
            <button className='px-5 py-4 bg-primary hover:bg-primary/90 rounded-r-md text-white font-semibold'>Subscribe</button>
          </div>
        </section>
      </main>
      <footer className='max-w-screen-xl mx-auto px-4 py-6 flex items-center justify-between'>
        <h5 className='font-semibold text-paragraph'>Copyright &copy; All Right Reserved @RSurya99 2023</h5>
        <div className="flex gap-x-3 text-primary">
          <MdFacebook size={24} />
          <MdWhatsapp size={24} />
          <BsGithub size={24} />
        </div>
      </footer>
    </>
  )
}

export default Home