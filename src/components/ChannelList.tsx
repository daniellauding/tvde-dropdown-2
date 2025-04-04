
import React from "react";
import { Channel } from "./ChannelDropdown";
import ChannelProgram from "./ChannelProgram";

interface ChannelListProps {
  channels: Channel[];
}

const ChannelList: React.FC<ChannelListProps> = ({ channels }) => {
  return (
    <div className="space-y-4">
      {channels.map((channel) => (
        <ChannelProgram key={channel.id} channel={channel} />
      ))}
    </div>
  );
};

export default ChannelList;
