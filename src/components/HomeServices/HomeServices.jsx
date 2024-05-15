import React from "react";
import video1 from "../../video/chat-conversation.mp4";
export default function HomeServices() {
  return (
    <div className="HomeServices container">
      <video src={video1} autoPlay loop width={'auto'} />
    </div>
  );
}
