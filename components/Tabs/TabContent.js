import React from "react";

export default function TabContent({ title, text, url }) {
  return (
    <div className="tab-content-container">
      <div>{text}</div>
      <div>
        <div
          style={{
            backgroundColor: "rgba(114,2,64,0.1)",
            backgroundImage: `url(${url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            overflow: "auto",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          className="rounded mx-12 h-96 w-96 school_link drop-shadow-2xl shadow-lg"
        ></div>
      </div>
    </div>
  );
}
