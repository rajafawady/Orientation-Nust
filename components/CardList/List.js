import Card from "./Card";

const List = ({ list = [], type }) => {
  const length = list.length;
  const partLength = Math.ceil(length / 3);
  const result = [];
  for (let i = 0; i < 3; i++) {
    result.push(list.slice(i * partLength, (i + 1) * partLength));
  }
  console.log(result);
  return (
    <>
      {
        <div className="schools-grid-1">
          <div className="col2">
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
          <div className="col2">
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
