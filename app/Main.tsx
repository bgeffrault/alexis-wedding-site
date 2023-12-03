import Head from 'next/head'
import Image from 'next/image'
import img from './images/mariage.webp'
import castleImg from './images/castle.jpeg'
import MapCard from '@/components/MapCard'
import LinkCard from '@/components/LinkCard'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Our Wedding</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="my-10 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Mariage Alexis & Liso
        </h1>

        <p className="text-xl mb-6">
          02/06/2024
        </p>
        <div className='flex gap-6 flex-col'   >
          <LinkCard
            href="https://maps.app.goo.gl/K8aA5pyaiLWb6sQ97"
            description=""
            location="La Jeannière, 85150 Sainte-Foy"
            title="Domaine de l'Etablière"
            imgSrc={castleImg} />


          <Link href="accomodations" >

            <div className="block transform transition duration-200 hover:scale-105">
              <div className="flex flex-col md:flex-row md:items-center bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-4 md:w-1/2">
                  <h2 className="text-xl font-semibold mb-2"><strong >Hébergements partenaires 👀</strong></h2>
                </div>
              </div>
            </div>

          </Link>
        </div>
      </main>
    </div>
  )
}
