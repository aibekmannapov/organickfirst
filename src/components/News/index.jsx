import React from "react";
import imgNews from "../../assets/imgNews.png";
function News() {
  return (
    <div
      style={{
        background: `url(${imgNews}) no-repeat center`,
        minHeight: "55vh",
        marginTop: "115px",
      }}
    >
      <div className="container"></div>
    </div>
  );
}

export default News;
