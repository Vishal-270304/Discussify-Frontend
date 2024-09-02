import React ,{useState} from 'react';
import { Flex, Input , Button,message} from 'antd';
import type { GetProps } from 'antd';
import SecondaryHeading from '../../components/headers/SecondaryHeading';
import verifyOtp from '../../services/verifyOtp';
import { OtpInterface } from '../../types/auth';
import { useNavigate } from 'react-router-dom';
type OTPProps = GetProps<typeof Input.OTP>;



const FillOtp: React.FC<{email:string}> = ({email}) => {

  const [otp, setOtp] = useState<string>("");
  const navigate = useNavigate();

  const onChange: OTPProps['onChange'] = (text) => {
    console.log('onChange:', text);
    setOtp(text)
  };

  const handleChange = (value:string) =>{
    setOtp(value)
  }

  const handleClick = async () =>{
    const otpData:OtpInterface = {
      email,
      enteredOtp:otp
    }

    try {
      const response = await verifyOtp(otpData)
      localStorage.setItem("token",response.token)
      console.log(response)
      message.success("OTP verified successfully")
      navigate("/home")
    } catch (error) {
      message.error("OTP verification failed")
    }

  }

  const sharedProps: OTPProps = {
    onChange,
  };


 

  return (
    <Flex gap="middle"  vertical>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px"}}>
        <SecondaryHeading styles={{color:"#fff",fontWeight:"bold"}} text="Enter OTP"/>
      </div>
      <Input.OTP onChange={handleChange} formatter={(str) => str.toUpperCase()} {...sharedProps} />
      <Button onClick={handleClick}>Verify</Button>
    </Flex>
  );
};

export default FillOtp;