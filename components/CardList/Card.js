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
          }}
          className={` p-6 h-96 rounded-2xl  overflow-hidden`}
        >
          <p className="uppercase text-sm text-white">{type}</p>
          <h2 className="font-bold text-4xl text-white">{children}</h2>
          <div className="school_link_textMain">
            <p>{content}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
