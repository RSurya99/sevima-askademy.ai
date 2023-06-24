import '@/app/globals.css'

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
        <nav>Roadmap Nav</nav>
        <main>{children}</main>
      </body>
    </html>
  )
}
