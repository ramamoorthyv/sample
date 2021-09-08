import React from 'react';
import FroalaEditor from 'components/common/Editor/Froala';

const TextEditor = (props) => {
  const { value, onChange, config = {} } = props;
  return <FroalaEditor value={value} config={config} onChange={onChange} />;
};

export default TextEditor;
