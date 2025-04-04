import React, { useState } from "react";
import ProviderDropdown from "@/components/ProviderDropdown";
import ChannelDropdown, { Channel, channels } from "@/components/ChannelDropdown";
import DateDropdown from "@/components/DateDropdown";
import ChannelSelector from "@/components/ChannelSelector";
import ChannelList from "@/components/ChannelList";
import ChannelProgram from "@/components/ChannelProgram";
import { Search, Clock, Moon } from "lucide-react";
const Index = () => {
  const [selectedChannel, setSelectedChannel] = useState<Channel | null>(null);
  const handleChannelSelect = (channel: Channel) => {
    setSelectedChannel(channel);
  };
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white shadow">
        <div className="container-fluid px-4 gap-4 flex items-center justify-between p-4">
          <button className="text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>

          <div className="flex items-start w-full gap-2">
            <img
              src="https://tv-guide-frontend.netlify.app/src/logo.png"
              alt="TV Guide Logo"
              className="h-10"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="text-gray-500">
              <Search size={20} />
            </button>
            <button className="text-gray-500">
              <Clock size={20} />
            </button>
            <button className="text-gray-500">
              <Moon size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Filter Bar */}
      <div className="sticky top-16 z-10 bg-white py-3 shadow-sm">
        <div className="container-fluid px-4 flex flex-row gap-3 md:items-center md:gap-4">
          <div className="flex-1">
            <ProviderDropdown />
          </div>
          <div className="flex-1">
            <ChannelDropdown onChange={channel => setSelectedChannel(channel)} />
          </div>
          <div className="flex-1">
            <DateDropdown />
          </div>
        </div>
      </div>

      {/* Channel List */}
    </div>
  );
};
export default Index;