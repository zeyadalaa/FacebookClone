import { Avatar } from "@material-ui/core";
import React from "react";
import './SidebarRow.css';

// here i pass a component as a prop, and it should be capitalized
function SidebarRow({ src, Icon, title }) {
      return (
    <div className="sidebarRow">
      {src && <Avatar src={src}/>}
      {Icon && <Icon/>}
      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
