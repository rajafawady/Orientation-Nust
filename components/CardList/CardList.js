import MeetOurTeam from "../EC/MeetOurTeam";
import Title from "../Title";
import List from "./List";

const CardList = ({ schools, lifeAtNUST }) => {
  return (
    <div id="cardList">
      <div className="school__div w-full">
        <h2 className="school__h2"> Schools </h2>
      </div>
      <div className="list">
        <div className="school__container  lg:px-8 px-3 py-2">
          <List list={schools} type="School" />
        </div>
      </div>

      <div className="school__div bg-black">
        <h2 className="school__h2"> Life At Nust </h2>
      </div>
      <div className="list">
        <div className="school__container lg:px-8 px-3 py-2">
          <List list={lifeAtNUST} gap={true} type="Life at NUST" />
        </div>
      </div>
    </div>
  );
};


export default CardList;
