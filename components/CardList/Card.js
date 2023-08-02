import Link from "next/link";

const Card = ({ children, image, type, id, content }) => {
  return (
    <Link href={`/gallery/${type.toLowerCase().replace(/\s/g, "-")}/${id}`}>
      <a className="school_link">
        <div
          style={{
            backgroundColor: "rgba(114,2,64,0.1)",
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            display: "flex",
            overflow: "auto",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          className={`h-96 rounded-2xl scrolllock`}
        >
          {/*           <div className="school_link_textTop">
            <div className="px-6 py-3 pb-3 font-bold text-4xl text-white">
              {children}
            </div>
          </div> */}

          <div className=""></div>
          <div className="px-6 py-3 school_link_textMain">
            <p className=" font-bold text-white">{children}</p>
            <p>
              {content.split("", 99).join("") + "..."}
              (Click To Learn More)
              {/* <button className="school__button">Learn More</button> */}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

/*     return (
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
 */
export default Card;
