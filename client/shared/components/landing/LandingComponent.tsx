import React from "react";
import { StadisticsBoard } from "./StadisticsBoard/StadisticsBoard";
import Table from "./table/table";

const LandingComponent: React.FunctionComponent<{}> = (props) => {
  return (
    <div className="flex flex-col items-center">
      <StadisticsBoard></StadisticsBoard>
      <div className="w-full text-center">
        <Table />
      </div>
    </div>
  );
};

export default LandingComponent;