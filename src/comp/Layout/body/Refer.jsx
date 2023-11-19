import React from "react";
import refer from "../../../img/refer.png";

const Refer = () => {
  return (
    <div className="refer">
      <div className="refer-control">
        <h2>Refer & Earn 3%  On Everything</h2>

        <button>APPLY NOW</button>
      </div>

      <div className="refer-pic">
        <img src={refer} alt="" />
      </div>
    </div>
  );
};
export default Refer;
