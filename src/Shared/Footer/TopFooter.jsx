import React from "react";
import { TopFooterData } from "../../utilities/DemoData";
import TopFooterCard from "../TopFooterCard";

const TopFooter = () => {
  return (
    <div style={{ borderTop: "1px solid #EDEDED" }} className="px-10 my-5 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {TopFooterData.map((d) => (
          <TopFooterCard key={d.name} data={d} />
        ))}
      </div>
    </div>
  );
};

export default TopFooter;
