import React from 'react';
import { Input } from 'antd';

const InputField: React.FC<{placeholder: string, type: React.HTMLInputTypeAttribute}> = ({placeholder, type}) => <Input required placeholder={placeholder} type={type} />;




export default InputField;