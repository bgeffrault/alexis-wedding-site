import Head from 'next/head'
import ibisImg from '../images/ibis.jpeg'
import campingEtangImg from '../images/campingEtang.jpeg'
import hotelThalassoImg from '../images/hotelThalasso.jpeg'
import LinkCard from '@/components/LinkCard'
import Link from 'next/link'

const DestinationTime = ({ timeCar, distance, description }) => {
    return (
        <>
            <div>{description}</div>
            <div className='flex gap-2 w-full justify-center'>
                <span>🚗 <strong>{timeCar} min</strong></span> /
                <span>🚶<strong>{distance} km</strong></span>
            </div>
        </>
    )
}

export default function Page() {
    return (
        <div className="container mx-auto px-4">
            <Head>
                <title>Our Wedding</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="my-10 text-center">
                <div className="text-4xl font-bold mb-4 flex items-center w-full">
                    <Link href="/">⏎</Link>
                    <h1 className='grow' >Hébergements partenaires</h1>
                </div>
                <div className='my-10'>
                    <p>
                        Avantages partenaires jusqu'à -15%
                    </p>
                </div>
                <div className='flex gap-6 flex-col'>

                    <LinkCard
                        href="https://maps.app.goo.gl/K8aA5pyaiLWb6sQ97"
                        location={
                            <span>
                                48 rue Eric Tabarly, Olonne sur Mer
                                <br />
                                85340 LES SABLES D OLONNE
                            </span>
                        }
                        title="Ibis budget Les Sables-d'Olonne"
                        description={<DestinationTime timeCar="10" distance="9" />}
                        imgSrc={ibisImg} />
                    <LinkCard
                        href="https://maps.app.goo.gl/z3qTGGn9pYPqgiFx9"
                        location={
                            <span>
                                L'Elemière
                                <br />
                                85150 Sainte-Foy
                            </span>
                        }
                        title="Camping Au Pré de l'Étang"
                        description={<DestinationTime timeCar="10" distance="3,1-3,8" />} description="Camping 3 étoiles"
                        imgSrc={campingEtangImg} />
                    <LinkCard
                        href="https://maps.app.goo.gl/Zscco4pByG1UdnHs9"
                        location={
                            <span>
                                Rte du Tour de France
                                <br />
                                85100 Les Sables-d'Olonne
                            </span>
                        }
                        title="Côte Ouest Thalasso & Spa Les Sables-d'Olonne - MGallery"
                        description={<DestinationTime timeCar="15" distance="10" />} description="Hôtel de tourisme 4 étoiles"
                        imgSrc={hotelThalassoImg} />
                </div>
            </main>
        </div >
    )
}
