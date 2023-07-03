import React from "react";
import BoatInfo, { BoatInfoType } from "../components/BoatInfo";
import { useParams } from "react-router-dom";

const Return = () => {
  let { boatId } = useParams();
  return (
    <div>
      <BoatInfo id={boatId} type={BoatInfoType.Return} />
    </div>
  );
};

export default Return;
