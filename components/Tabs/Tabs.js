import React, { useState } from "react";
import TabContent from "./TabContent";
import styles from "./Tabs.module.css";
const Tabs = () => {
  const [currentTab, setCurrentTab] = useState("1");
  const tabs = [
    {
      id: 1,
      tabTitle: "Google",
      tabText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus lacus sed orci condimentum pulvinar. Curabitur metus neque, eleifend vitae dui quis, dapibus viverra libero. Donec lacinia ex non consequat tempus. Nam at turpis imperdiet, tincidunt nulla et, congue erat. Proin mollis sed felis eget pretium. Sed tempus nibh nec faucibus ornare. Vivamus id ex eu nulla iaculis interdum. Nulla a interdum odio. Maecenas vel dui lectus. Fusce ullamcorper malesuada eros sit amet posuere. Suspendisse posuere ligula at dui ultricies, sit amet malesuada justo tempor. Aliquam dictum orci vitae facilisis varius.",
      logoUrl: "/sponsor-logos/google.png",
    },
    {
      id: 2,
      tabTitle: "KGB",
    },
    {
      id: 3,
      tabTitle: "CIA",
    },
    {
      id: 4,
      tabTitle: "IDK",
    },
  ];

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.tabs}`}>
        {tabs.map((tab, i) => (
          <button
            key={i}
            id={tab.id}
            disabled={currentTab === `${tab.id}`}
            onClick={handleTabClick}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>
      <div className={`${styles.content}`}>
        {tabs.map((tab, i) => (
          <div key={i}>
            {currentTab === `${tab.id}` && (
              <TabContent
                title={tab.tabTitle}
                text={tab.tabText}
                url={tab.logoUrl}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
