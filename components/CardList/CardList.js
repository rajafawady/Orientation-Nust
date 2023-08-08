import { useRef } from "react";
import MeetOurTeam from "../EC/MeetOurTeam";
import Title from "../Title";
import List from "./List";

const CardList = ({ schools, lifeAtNUST }) => {
  const schoolRef = useRef(null);
  const lifeAtNUSTRef = useRef(null);
  return (
    <div id="cardList">
      <div className="school__div w-full">
        <h1 className="header-1" ref={schoolRef}>
          Schools
        </h1>
      </div>
      <div className="list">
        <div className="school__container  lg:px-8 px-3 py-2">
          <List list={schools} container={schoolRef} type="School" />
        </div>
      </div>

      <div
        className="school__div bg-black"
        style={{
          padding: "1rem",
          marginBlock: "30px",
        }}
      >
        <h1 className="header-1" ref={lifeAtNUSTRef}>
          Life At Nust
        </h1>
      </div>
      <div className="list">
        <div className="school__container lg:px-8 px-3 py-2">
          <List
            list={lifeAtNUST}
            container={lifeAtNUSTRef}
            type="Life at NUST"
          />
        </div>
      </div>
      <div className="py-6"></div>
    </div>
  );
};

export default CardList;
