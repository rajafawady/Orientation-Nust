import MeetOurTeam from "../EC/MeetOurTeam";
import Title from "../Title";
import List from "./List";

const CardList = ({ schools, lifeAtNUST }) => {
  return (
    <div id="cardList">
      <div className="school__div w-full">
        <h1 class="header-1">Schools</h1>
      </div>
      <div className="list">
        <div className="school__container  lg:px-8 px-3 py-2">
          <List list={schools} type="School" />
        </div>
      </div>

      <div className="school__div bg-black">
        <h1 class="header-1">Life At Nust</h1>
      </div>
      <div className="list">
        <div className="school__container lg:px-8 px-3 py-2">
          <List list={lifeAtNUST} gap={true} type="Life at NUST" />
        </div>
      </div>
      <div className="py-6"></div>
    </div>
  );
};

export default CardList;
