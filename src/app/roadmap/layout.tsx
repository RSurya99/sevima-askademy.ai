import '@/app/globals.css'
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineArrowForward, MdFacebook, MdWhatsapp } from 'react-icons/md'
import { BsGithub } from 'react-icons/bs'

export const metadata = {
  title: 'Askademy.ai',
  description: 'Askademy.ai adalah platform untuk mencari roadmap pembelajaran yang tepat untukmu.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-montserrat antialiased'>
          <nav className='max-w-screen-xl mx-auto p-4 flex items-center justify-between'>
            <div className="flex items-center gap-x-12">
              <Link href='/' className='flex items-center gap-x-2 text-2xl font-bold text-secondary leading-tight'>
                <Image src='/logo.png' className='w-8 h-8' width={32} height={32} alt='Logo' />
                <span>Askademy.ai</span>
              </Link>
              <ul className="flex gap-x-6">
                <li><Link href='/' className='font-semibold text-secondary hover:text-secondary/90 tracking-wide'>Home</Link></li>
                <li><Link href='/roadmap' className='font-semibold text-secondary hover:text-secondary/90 tracking-wide'>Roadmap</Link></li>
                <li><Link href='/about' className='font-semibold text-secondary hover:text-secondary/90 tracking-wide'>About</Link></li>
                <li><Link href='/contact' className='font-semibold text-secondary hover:text-secondary/90 tracking-wide'>Contact</Link></li>
              </ul>
            </div>
            <div className="flex gap-x-6">
              <Link href='/login' className='px-6 py-4 rounded-md font-semibold text-secondary hover:text-secondary/90 tracking-wide'>Login</Link>
              <Link href='/register' className='px-6 py-4 rounded-md bg-primary hover:bg-primary/90 font-semibold text-white tracking-wide flex items-center gap-x-2 transition duration-300'>
                <span>Join Us</span>
                <MdOutlineArrowForward size={20} />
              </Link>
            </div>
          </nav>
        <main>{children}</main>
        <footer className='max-w-screen-xl mx-auto px-4 py-6 flex items-center justify-between'>
          <h5 className='font-semibold text-paragraph'>Copyright &copy; All Right Reserved @RSurya99 2023</h5>
          <div className="flex gap-x-3 text-primary">
            <MdFacebook size={24} />
            <MdWhatsapp size={24} />
            <BsGithub size={24} />
          </div>
        </footer>
      </body>
    </html>
  )
}
