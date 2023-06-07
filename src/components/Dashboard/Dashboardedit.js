import React, { useState } from "react";
import Editprofile from "../Profile/EditProfile";
import Sidebar from "../Sidebar/Sidebar";
//import IUDashboard from "./IUDashboard";

function Dashboardedit(props) {
  return (
    <div>
      <Sidebar />

      <Editprofile />
    </div>
  );
}
export default Dashboardedit;
