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
          <div className="school_link_textTop">
            <div className="px-6 pt-3 uppercase text-sm text-white">{type}</div>
            <div className="px-6 pb-3 font-bold text-4xl text-white">
              {children}
            </div>
          </div>
          <div className="px-6 py-3 school_link_textMain">
            <p>{content.split("", 200).join("") + "..."} </p>
            <button className="school__button">Learn More</button>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
