import MeetOurTeam from "../EC/MeetOurTeam";
import Title from "../Title";
import List from "./List";

const CardList = ({ schools, lifeAtNUST }) => {
  return (
    <div id="cardList">
      <div className="school__div">
        {/*         <img
          src="vic_border_black_top.png"
          alt="vic_border"
          width="400px"
        ></img>
 */}{" "}
        <h2 className="school__h2"> Schools </h2>
        {/*         <img
          src="vic_border_black_bot.png"
          alt="vic_border"
          width="400px"
        ></img>
 */}{" "}
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
