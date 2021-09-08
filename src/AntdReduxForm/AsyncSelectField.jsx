import React from 'react';
import { SingleSelectWrapper } from 'components/common/Select';

const AsyncSelectField = ({ innerComponent, onChangeWithData, ...rest }) => {
  const { mode = 'multiple', value, onChange } = rest;
  const Component = innerComponent;

  if (mode === 'multiple') {
    return (
      <Component
        {...rest}
        selectedIds={value}
        clearSelections={false}
        onChange={onChange}
        onChangeWithData={onChangeWithData}
      />
    );
  }
  return (
    <SingleSelectWrapper
      {...rest}
      allowClear
      component={Component}
      selectedIds={value}
      clearSelections={false}
      onClear={() => onChange('')}
      onChange={onChange}
      onChangeWithData={onChangeWithData}
    />
  );
};

export default AsyncSelectField;
