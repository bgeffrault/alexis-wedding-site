import Link from 'next/link'

export default function MapCard({ title, description, address, mapSrc }) {
    return (
        <Link href={mapSrc} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
                <div className="p-8">
                    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                    <p className="mt-2 text-gray-600">{description}</p>
                </div>
                <div className="md:flex-shrink-0">
                    {address}
                </div>
            </div>
        </Link>
    );
}
