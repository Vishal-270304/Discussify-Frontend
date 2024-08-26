import React from 'react';
import { Input, Space } from 'antd';


const PasswordField: React.FC<{placeholder:string,styles:React.CSSProperties,onChange:React.ChangeEventHandler<HTMLInputElement>}> = ({placeholder,styles,onChange}) => {

    return (
      <Space direction="vertical">
        <Input.Password required placeholder={placeholder} style={styles} />
      </Space>
    );
  };

export default PasswordField;