import React, { useState } from 'react';
import TabContent from './TabContent';
import styles from './Tabs.module.css'
const Tabs = () => {

    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Tab 1',
        },
        {
            id: 2,
            tabTitle: 'Tab 2',

        },
        {
            id: 3,
            tabTitle: 'Tab 3',
        },
        {
            id: 4,
            tabTitle: 'Tab 4',
        }
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.tabs}`}>
                {tabs.map((tab, i) =>
                    <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                )}
            </div>
            <div className={`${styles.content}`}>
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` && <TabContent title={tab.tabTitle}/>}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Tabs;