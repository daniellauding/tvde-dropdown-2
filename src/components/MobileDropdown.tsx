import React, { useState, useRef, useEffect } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface DropdownItem {
  id: string;
  label: string;
  icon?: string | React.ReactNode;
  isActive?: boolean;
}

interface MobileDropdownProps {
  label: string;
  items: DropdownItem[];
  selectedItem: DropdownItem;
  onChange: (item: DropdownItem) => void;
  className?: string;
  buttonClassName?: string;
  showIcon?: boolean;
}

const MobileDropdown: React.FC<MobileDropdownProps> = ({
  label,
  items,
  selectedItem,
  onChange,
  className = '',
  buttonClassName = '',
  showIcon = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (item: DropdownItem) => {
    onChange(item);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={cn('relative', className)} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex w-full items-center justify-between rounded-md border border-gray-200 bg-white px-3 py-2 text-left text-sm focus:outline-none focus:ring-2 focus:ring-[#eab308]',
          buttonClassName
        )}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2">
          {showIcon && selectedItem.icon && (
            <div className="flex-shrink-0">
              {typeof selectedItem.icon === 'string' ? (
                <div className="h-6 w-6 rounded-full bg-gray-200 text-center leading-6">
                  {selectedItem.icon}
                </div>
              ) : (
                selectedItem.icon
              )}
            </div>
          )}
          <span>{selectedItem.label}</span>
        </div>
        <ChevronDown className={cn('h-4 w-4 transition-transform', isOpen && 'rotate-180')} />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5">
          <div className="max-h-[50vh] overflow-y-auto">
            {items.map(item => (
              <button
                key={item.id}
                className={cn(
                  'flex w-full items-center justify-between px-4 py-2 text-left hover:bg-gray-100',
                  item.id === selectedItem.id && 'bg-[#fff0cb]'
                )}
                onClick={() => handleSelect(item)}
              >
                <div className="flex items-center gap-3">
                  {showIcon && item.icon && (
                    <div className="flex-shrink-0">
                      {typeof item.icon === 'string' ? (
                        <div className="h-6 w-6 rounded-full bg-gray-200 text-center leading-6">
                          {item.icon}
                        </div>
                      ) : (
                        item.icon
                      )}
                    </div>
                  )}
                  <span>{item.label}</span>
                </div>
                {item.id === selectedItem.id && <Check className="h-4 w-4 text-[#eab308]" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileDropdown;
