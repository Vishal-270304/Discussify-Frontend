import React from 'react';
import { Flex, Input } from 'antd';
import type { GetProps } from 'antd';
import SecondaryHeading from '../../components/headers/SecondaryHeading';

type OTPProps = GetProps<typeof Input.OTP>;



const FillOtp: React.FC = () => {
  const onChange: OTPProps['onChange'] = (text) => {
    console.log('onChange:', text);
  };

  const sharedProps: OTPProps = {
    onChange,
  };

  return (
    <Flex gap="middle"  vertical>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px"}}>
        <SecondaryHeading text="Enter OTP"/>
      </div>
      <Input.OTP formatter={(str) => str.toUpperCase()} {...sharedProps} />
    </Flex>
  );
};

export default FillOtp;