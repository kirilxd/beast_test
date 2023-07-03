import React from "react";
import BoatInfo, { BoatInfoType } from '../components/BoatInfo';
import { useParams } from "react-router-dom";

const Rent = () => {
  let { boatId } = useParams();
  return (
    <div>
      <BoatInfo id={boatId} type={BoatInfoType.Rent} />
    </div>
  );
};

export default Rent;
