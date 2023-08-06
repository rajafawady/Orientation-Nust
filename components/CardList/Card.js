import Link from "next/link";

const Card = ({ children, image, type, id, content }) => {
  return (
    <Link href={`/gallery/${type.toLowerCase().replace(/\s/g, "-")}/${id}`}>
      <a className="school_link drop-shadow-2xl shadow-lg">
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
          className={`rounded h-96`}
        >
          <div className=""></div>
          <div className="px-6 py-3 school_link_textMain h-full">
            <p className="text-2xl font-bold text-white">{children}</p>
            <p>
              {content.split("", 99).join("") + "..."}
              {/* (Explore) */}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};
export default Card;
