
import React, { useState } from "react";
import ProviderDropdown from "@/components/ProviderDropdown";
import ChannelDropdown, { Channel, channels } from "@/components/ChannelDropdown";
import DateDropdown from "@/components/DateDropdown";
import ChannelSelector from "@/components/ChannelSelector";
import ChannelList from "@/components/ChannelList";
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
        <div className="container mx-auto flex items-center justify-between p-4">
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
          
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/02a1db7b-815e-4fb7-b1aa-cbdfd411c42b.png" 
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
        <div className="container mx-auto flex flex-col gap-3 px-4 md:flex-row md:items-center md:gap-4">
          <div className="flex-1 md:max-w-xs">
            <ProviderDropdown />
          </div>
          <div className="flex-1 md:max-w-xs">
            <ChannelDropdown 
              onChange={(channel) => setSelectedChannel(channel)} 
            />
          </div>
          <div className="flex-1 md:max-w-xs">
            <DateDropdown />
          </div>
        </div>
      </div>

      {/* Channel Quick Access */}
      <div className="container mx-auto px-4 py-4">
        <ChannelSelector
          channels={channels}
          selectedChannel={selectedChannel}
          onSelect={handleChannelSelect}
        />
      </div>

      {/* Channel List */}
      <div className="container mx-auto px-4 py-4">
        {selectedChannel ? (
          <ChannelProgram channel={selectedChannel} />
        ) : (
          <ChannelList channels={channels} />
        )}
      </div>
    </div>
  );
};

export default Index;
