import { SelectList } from "react-native-dropdown-select-list";
import { View } from 'react-native';
import React from 'react';

export default function Dropdown({ data, selectedValue, setSelectedValue, handleSelect }) {
  return (
    <View>
      <SelectList 
                  boxStyles={{
                    borderBottomWidth: 1,
                    borderBottomColor: '#ccc',
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                    fontSize: 16,
                    borderWidth: 0,
                  }}
        setSelected={(label) => {
          setSelectedValue(label); // Update selected values
        }}
        data={data.map(item => ({ value: item.key, label: item.value }))}
        save="value"
        onSelect={() => handleSelect(selectedValue)} // Log selected values
      />
    </View>
  );
}
