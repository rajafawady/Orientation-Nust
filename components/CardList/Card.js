import Link from "next/link";

const Card = ({className, children, image, type, id}) => {

    return (
        <Link href={`/gallery/${type.toLowerCase().replace(/\s/g, '-')}/${id}`}><a>
            <div
                style={{
                    background: `linear-gradient(to top, rgba(114,2,64,0.1), rgba(114,2,64,0.1)), url(${image}) no-repeat top center`,
                    backgroundSize: 'cover'
                }}
                className={`cursor-pointer p-6 w-full h-96 rounded-2xl bg-cover relative overflow-hidden ${className} transition duration-300 ease-in-out`}>
                <p className='uppercase text-sm text-white'>{type}</p>
                <h2 className='font-bold text-4xl text-white'>{children}</h2>
            </div>
        </a></Link>
    )
}

export default Card;