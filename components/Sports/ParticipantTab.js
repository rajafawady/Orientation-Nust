import React from "react";
import CategoryCard from "./CategoryCard";

const ParticipantTab = ({ fixtures }) => {
  return (
    <div className="px-2 md:px-8 lg:w-11/12 xl:w-9/12 mx-auto mt-4 mb-10 pt-1">
      <div>
        {fixtures.map((category, index) => {
          return (
            <CategoryCard
              category={category}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ParticipantTab;
