import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Notification.css";
import SendIcon from "@mui/icons-material/Send";

function Notification() {
  return (
    <div>
      <div>
        <Sidebar />
      </div>

      <div className="notify">
        <h5>Notifications</h5>
        <div className="messages">
          <h6>
            <SendIcon sx={{ fontSize: 20 }} />
            You have a message
          </h6>
          <h6>
            <SendIcon sx={{ fontSize: 20 }} />
            you have a friend request
          </h6>

          <h6>
            <SendIcon sx={{ fontSize: 20 }} />
            You have a message
          </h6>
          <h6>
            <SendIcon sx={{ fontSize: 20 }} />
            Hello world
          </h6>

          <h6>
            <SendIcon sx={{ fontSize: 20 }} />
            You have a message
          </h6>
          <h6>
            <SendIcon sx={{ fontSize: 20 }} />I learn coding
          </h6>
          <h6>
            <SendIcon sx={{ fontSize: 20 }} />
            we finished task
          </h6>
          <h6>
            <SendIcon sx={{ fontSize: 20 }} />
            we have gone
          </h6>
          <h6>
            <SendIcon sx={{ fontSize: 20 }} />I am ready
          </h6>
        </div>
      </div>
    </div>
  );
}
export default Notification;
