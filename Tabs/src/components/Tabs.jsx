import { useState } from "react";
import "./Tabs.css";

function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs">
      <div className="tabs-header">
        {tabs.map((tab, index) => {
          return (
            <div
              className="tab-title"
              style={{
                borderBottom: activeTab == index ? "2px solid black" : "",
              }}
              onClick={() => {
                setActiveTab(index);
              }}
            >
              {tab.title}
            </div>
          );
        })}
      </div>
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
}

export default Tabs;
