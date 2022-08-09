import MeetOurTeam from "../EC/MeetOurTeam";
import Title from "../Title";
import List from "./List";

const CardList = ({schools, lifeAtNUST}) => {
    return (
        <div id='cardList'>
            <div className="text-center lg:text-7xl md:text-6xl text-5xl my-8 font-montserrat font-bold md:mb-20 md:mt-20 text-tyrian-purple dark:text-pale-pink">
          <MeetOurTeam placeholderText={[{ type: "heading1", text: "Schools" },]}/>
        </div>
            
            <List list={schools} type='School'/>
            <div className="text-center lg:text-7xl md:text-6xl text-5xl my-8 font-montserrat font-bold md:mb-20 md:mt-20 text-tyrian-purple dark:text-pale-pink">
          <MeetOurTeam placeholderText={[{ type: "heading1", text: "Life At NUST" },]}/>
        </div>
            <List list={lifeAtNUST} type='Life at NUST'/>
        </div>
    )
}

export default CardList;