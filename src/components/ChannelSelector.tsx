
import React from "react";
import { Channel } from "./ChannelDropdown";
import { cn } from "@/lib/utils";

interface ChannelSelectorProps {
  channels: Channel[];
  selectedChannel: Channel | null;
  onSelect: (channel: Channel) => void;
}

const ChannelSelector: React.FC<ChannelSelectorProps> = ({
  channels,
  selectedChannel,
  onSelect,
}) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {channels.map((channel) => (
        <button
          key={channel.id}
          onClick={() => onSelect(channel)}
          className={cn(
            "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md border border-gray-200",
            selectedChannel?.id === channel.id
              ? "border-blue-500 bg-blue-50"
              : "bg-white"
          )}
        >
          <span className="text-lg font-medium">{channel.icon}</span>
        </button>
      ))}
    </div>
  );
};

export default ChannelSelector;
