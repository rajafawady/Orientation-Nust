import Card from "./Card";

const List = ({list = [], type}) => {

    return (
        <>
            {new Array(list.length).fill(0)
                .map((_, i) => i).filter(elem => elem % 2 === 0)
                .map(elem => [list[elem], list[elem+1]])
                .map((elem, i) => (
                    <div key={i} className={i%2 === 0 ? 'schools-grid-1' : 'schools-grid-2'}>
                        {elem.map((data, i) => (
                            <Card
                                type={type}
                                id={data.id}
                                className={`item-${(i % 4) + 1}`}
                                key={data.id} image={data.image}>
                                {data.name}
                            </Card>
                        ))}
                    </div>
                ))
            }
        </>
    )
}

export default List;