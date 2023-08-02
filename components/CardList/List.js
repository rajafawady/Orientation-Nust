import Card from "./Card";
import { useEffect, useState, useRef } from "react";

const List = ({ list = [], type }) => {
  const length = list.length;
  const partLength = Math.ceil(length / 3);
  const result = [];

  const ref = useRef(null);
  const ref2 = useRef(null);
  useEffect(() => {
    const scrollFunc = () => {
      const y = window.scrollY;
      ref.current.style.transform = `translateY(-${y / 40}px)`;
      ref2.current.style.transform = `translateY(-${y / 40}px)`;
    };

    window.addEventListener("scroll", scrollFunc);
    return () => {
      window.removeEventListener("scroll", scrollFunc);
    };
  }, []);

  for (let i = 0; i < 3; i++) {
    result.push(list.slice(i * partLength, (i + 1) * partLength));
  }
  console.log(result);
  return (
    <>
      {
        <div className="schools-grid-1">
          <div className="col2" ref={ref}>
            {result[0].map((data) => (
              <Card
                type={type}
                content={data.content}
                id={data.id}
                key={data.id}
                image={data.image}
              >
                {data.name}
              </Card>
            ))}
          </div>
          <div className="col1">
            {result[1].map((data) => (
              <Card
                type={type}
                content={data.content}
                id={data.id}
                key={data.id}
                image={data.image}
              >
                {data.name}
              </Card>
            ))}
          </div>
          <div className="col2" ref={ref2}>
            {result[2].map((data) => (
              <Card
                type={type}
                content={data.content}
                id={data.id}
                key={data.id}
                image={data.image}
              >
                {data.name}
              </Card>
            ))}
          </div>
        </div>
      }
    </>
  );
};

export default List;

/* 
{list.map((data) => (
  <Card
    type={type}
    content={data.content}
    id={data.id}
    key={data.id}
    image={data.image}
  >
    {data.name}
  </Card>
))}
 */
