import React from 'react';
import { Input } from 'antd';

const InputField: React.FC<{placeholder: string, type: React.HTMLInputTypeAttribute,styles:React.CSSProperties,onChange?:React.ChangeEventHandler<HTMLInputElement>}> = ({placeholder, type,styles,onChange}) => <Input required placeholder={placeholder} type={type} style={styles} onChange={onChange} />;






export default InputField;