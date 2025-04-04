
import React, { useState } from "react";
import MobileDropdown from "./MobileDropdown";

interface Provider {
  id: string;
  label: string;
}

const providers: Provider[] = [
  { id: "providerOne", label: "Provider #1" },
  { id: "providerTwo", label: "Provider #2" },
  { id: "providerThree", label: "Provider #3" },
  { id: "providerFour", label: "Provider #4" },
  { id: "providerFive", label: "Provider #5" },
  { id: "providerSix", label: "Provider #6" },
  { id: "providerSeven", label: "Provider #7" },
];

interface ProviderDropdownProps {
  onChange?: (provider: Provider) => void;
  className?: string;
}

const ProviderDropdown: React.FC<ProviderDropdownProps> = ({ onChange, className }) => {
  const [selectedProvider, setSelectedProvider] = useState<Provider>(providers[0]);

  const handleProviderChange = (provider: Provider) => {
    setSelectedProvider(provider);
    if (onChange) {
      onChange(provider);
    }
  };

  const items = providers.map(provider => ({
    id: provider.id,
    label: provider.label,
  }));

  return (
    <MobileDropdown
      label="Select Provider"
      items={items}
      selectedItem={items.find(item => item.id === selectedProvider.id) || items[0]}
      onChange={handleProviderChange}
      className={className}
    />
  );
};

export default ProviderDropdown;
