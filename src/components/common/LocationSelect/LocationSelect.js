import React from 'react';
import { Select } from 'antd';

const LocationSelect = ({
  mainItem,
  depentedItem,
  mainItems,
  dependentItems,
  onChangeMainItem,
  onChangeDependetItem,
  className,
}) => {
  return (
    <div className={className}>
      <Select
        defaultValue={mainItem}
        value={mainItem}
        onChange={onChangeMainItem}
      >
        {mainItems.map((item, idx) => (
          <Select.Option value={item.value} key={item.name}>
            {item.value}
          </Select.Option>
        ))}
      </Select>
      <Select
        defaultValue={depentedItem}
        value={depentedItem}
        onChange={onChangeDependetItem}
      >
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
