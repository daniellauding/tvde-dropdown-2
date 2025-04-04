
import React from "react";
import { Channel } from "./ChannelDropdown";

interface ChannelProgramProps {
  channel: Channel;
}

const ChannelProgram: React.FC<ChannelProgramProps> = ({ channel }) => {
  return (
    <div className="mb-6 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="border-b border-gray-200 bg-gray-50 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-lg font-bold">
            {channel.icon}
          </div>
          <h2 className="text-lg font-medium">{channel.label}</h2>
        </div>
      </div>
      <div className="divide-y divide-gray-100">
        {channel.programs.map((program, index) => (
          <div 
            key={index} 
            className={`px-4 py-3 ${program.isLive ? "bg-blue-50" : ""}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-sm font-medium text-gray-500">
                  {program.time}
                </div>
                <div className="font-medium">{program.title}</div>
              </div>
              {program.isLive && (
                <div className="flex items-center gap-1 rounded-full bg-red-500 px-2 py-0.5 text-xs font-medium text-white">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-white"></span>
                  <span>CANLI</span>
                </div>
              )}
            </div>
            {program.isLive && program.progress !== undefined && (
              <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-gray-200">
                <div 
                  className="h-full bg-blue-500" 
                  style={{ width: `${program.progress}%` }}
                ></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChannelProgram;
