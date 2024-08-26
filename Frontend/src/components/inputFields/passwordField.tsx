import React from 'react';
import { Input, Space } from 'antd';


const PasswordField: React.FC<{placeholder:string}> = ({placeholder}) => {
    return (
      <Space direction="vertical">
        <Input.Password required placeholder={placeholder} />
      </Space>
    );
  };

export default PasswordField;