import MeetOurTeam from "../EC/MeetOurTeam";
import Title from "../Title";
import List from "./List";

const CardList = ({ schools, lifeAtNUST }) => {
  return (
    <div id="cardList">
      <div className="school__div">
        <h2 className="school__h2"> Schools </h2>
      </div>

      <div className="list">
        <div className="school__container ">
          <List list={schools} type="School" />
        </div>
      </div>

      <div className="school__div">
        <h2 className="school__h2"> Life At Nust </h2>
      </div>
      <div className="list">
        <div className="school__container ">
          <List list={lifeAtNUST} type="Life at NUST" />
        </div>
      </div>
    </div>
  );
};


export default CardList;
