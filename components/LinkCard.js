import Image from 'next/image';

export default function LinkCard({ href, imgSrc, title, description, location }) {
    return (
        <a href={href} target="_blank">
            <div className="block transform transition duration-200 hover:scale-105">
                <div className="flex flex-col md:flex-row md:items-center bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="md:w-1/2">
                        <Image src={imgSrc} alt={title} width={500} height={300} objectFit="cover" />
                    </div>
                    <div className="p-4 md:w-1/2">
                        <h2 className="text-xl font-semibold mb-2">{title}</h2>
                        <p className="text-gray-700 mb-2">{description}</p>
                        <p className="text-gray-600 text-sm">{location}</p>
                    </div>
                </div>
            </div>
        </a>
    );
}
