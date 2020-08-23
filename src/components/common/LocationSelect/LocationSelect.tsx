import React from 'react';
import { Select } from 'antd';

type LocationSelectProps = {
  mainItem: string;
  depentedItem: string;
  mainItems: Array<any>;
  dependentItems: Array<string>;
  onChangeMainItem: (value: string) => void;
  onChangeDependetItem: (value: string) => void;
  className?: string;
};

const LocationSelect: React.FC<LocationSelectProps> = ({
  mainItem,
  depentedItem,
  mainItems,
  dependentItems,
  onChangeMainItem,
  onChangeDependetItem,
  className = '',
}) => {
  return (
    <div className={className}>
      <Select defaultValue={mainItem} value={mainItem} onChange={onChangeMainItem}>
        {mainItems.map((item, idx) => (
          <Select.Option value={item.value} key={item.name}>
            {item.value}
          </Select.Option>
        ))}
      </Select>
      <Select defaultValue={depentedItem} value={depentedItem} onChange={onChangeDependetItem}>
        {dependentItems.map((item, idx) => (
          <Select.Option value={item} key={idx}>
            {item}
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};

export default LocationSelect;
