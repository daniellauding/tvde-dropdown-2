
import React, { useState } from "react";
import MobileDropdown from "./MobileDropdown";

interface DateItem {
  id: string;
  label: string;
  value: string;
}

const dates: DateItem[] = [
  { id: "2025-04-03", label: "Today", value: "2025-04-03" },
  { id: "2025-04-04", label: "Tomorrow", value: "2025-04-04" },
  { id: "2025-04-05", label: "6 Nisan Pazar", value: "2025-04-05" },
  { id: "2025-04-06", label: "7 Nisan Pazartesi", value: "2025-04-06" },
  { id: "2025-04-07", label: "8 Nisan Salı", value: "2025-04-07" },
  { id: "2025-04-08", label: "9 Nisan Çarşamba", value: "2025-04-08" },
  { id: "2025-04-09", label: "10 Nisan Perşembe", value: "2025-04-09" },
];

interface DateDropdownProps {
  onChange?: (date: DateItem) => void;
  className?: string;
}

const DateDropdown: React.FC<DateDropdownProps> = ({ onChange, className }) => {
  const [selectedDate, setSelectedDate] = useState<DateItem>(dates[0]);

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
    if (onChange) {
      onChange(date);
    }
  };

  const items = dates.map(date => ({
    id: date.id,
    label: date.label,
  }));

  return (
    <MobileDropdown
      label="Select Date"
      items={items}
      selectedItem={items.find(item => item.id === selectedDate.id) || items[0]}
      onChange={handleDateChange}
      className={className}
    />
  );
};

export default DateDropdown;
