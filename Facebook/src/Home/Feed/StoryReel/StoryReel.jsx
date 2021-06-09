import React from "react";
import Story from "./Story/Story";
import "./StoryReel.css";
import prof from "../../Sidebar/Formal_Image.jpg";
import background from "./background.jpg"
function StoryReel() {
  return (

    <div className="storyReel">
      <Story title="Ahmed" image={background} profileSrc={prof}/>
      <Story title="Ahmed" image={background} profileSrc={prof}/>
      <Story title="Ahmed" image={background} profileSrc={prof}/>
      <Story title="Ahmed" image={background} profileSrc={prof}/>
   </div>
    )
}

export default StoryReel;
