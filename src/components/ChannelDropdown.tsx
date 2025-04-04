
import React, { useState } from "react";
import MobileDropdown from "./MobileDropdown";

export interface Channel {
  id: string;
  label: string;
  icon: string;
  programs: Program[];
}

interface Program {
  time: string;
  title: string;
  isLive?: boolean;
  progress?: number;
}

const channels: Channel[] = [
  {
    id: "show",
    label: "Show TV",
    icon: "S",
    programs: [
      { time: "08:00", title: "Show Ana Haber", isLive: true, progress: 50 },
      { time: "10:00", title: "Sabahın Sultanı" },
      { time: "13:00", title: "Bir Zamanlar Çukurova" },
      { time: "15:00", title: "Didem Arslan" },
    ],
  },
  {
    id: "atv",
    label: "ATV",
    icon: "A",
    programs: [
      { time: "09:00", title: "Müge Anlı", isLive: true, progress: 50 },
      { time: "13:00", title: "ATV Gün Ortası" },
      { time: "14:00", title: "Kardeşlerim" },
      { time: "16:00", title: "Yaprak Dökümü" },
    ],
  },
  {
    id: "fox",
    label: "FOX TV",
    icon: "F",
    programs: [
      { time: "10:00", title: "Yasak Elma", isLive: true, progress: 50 },
      { time: "13:00", title: "Evlilik Hakkında Her Şey" },
      { time: "15:00", title: "Fulya ile Umudun Olsun" },
      { time: "17:00", title: "Fox Akşam Haberleri" },
    ],
  },
  {
    id: "star",
    label: "Star TV",
    icon: "S",
    programs: [
      { time: "10:00", title: "Aramızda Kalmasın", isLive: true, progress: 50 },
      { time: "14:00", title: "Yerli Dizi" },
      { time: "16:00", title: "Zuhal Topal" },
      { time: "18:00", title: "Star Ana Haber" },
    ],
  },
  {
    id: "trt1",
    label: "TRT 1",
    icon: "T",
    programs: [
      { time: "09:00", title: "Uzun Hikaye", isLive: true, progress: 50 },
      { time: "12:00", title: "Ana Haber" },
      { time: "13:00", title: "Masallarla Biz" },
      { time: "13:30", title: "Belgesel" },
    ],
  },
  {
    id: "kanal7",
    label: "Kanal 7",
    icon: "K",
    programs: [
      { time: "09:00", title: "Mutfak Bahane", isLive: true, progress: 50 },
      { time: "13:00", title: "Kanal 7 Haber" },
      { time: "14:00", title: "Yemin" },
      { time: "16:00", title: "Emanet" },
    ],
  },
  {
    id: "teve2",
    label: "Teve2",
    icon: "T",
    programs: [
      { time: "09:00", title: "2. Sayfa", isLive: true, progress: 50 },
      { time: "13:00", title: "Öğlen Haberleri" },
      { time: "14:00", title: "Yerli Dizi" },
      { time: "16:00", title: "Magazin" },
    ],
  },
  {
    id: "beyaztv",
    label: "Beyaz TV",
    icon: "B",
    programs: [
      { time: "08:00", title: "Sabah Haberleri", isLive: true, progress: 50 },
      { time: "13:00", title: "Öğle Haberleri" },
      { time: "14:00", title: "Söylemezsem Olmaz" },
      { time: "17:00", title: "Beyaz Ana Haber" },
    ],
  },
];

interface ChannelDropdownProps {
  onChange?: (channel: Channel) => void;
  className?: string;
}

const ChannelDropdown: React.FC<ChannelDropdownProps> = ({ onChange, className }) => {
  const [selectedChannel, setSelectedChannel] = useState<Channel>(channels[0]);

  const handleChannelChange = (channel: any) => {
    const selectedChannel = channels.find(c => c.id === channel.id) || channels[0];
    setSelectedChannel(selectedChannel);
    if (onChange) {
      onChange(selectedChannel);
    }
  };

  const items = channels.map(channel => ({
    id: channel.id,
    label: channel.label,
    icon: channel.icon,
  }));

  return (
    <MobileDropdown
      label="Select Channel"
      items={items}
      selectedItem={items.find(item => item.id === selectedChannel.id) || items[0]}
      onChange={handleChannelChange}
      className={className}
      showIcon={true}
    />
  );
};

export default ChannelDropdown;
export { channels };
