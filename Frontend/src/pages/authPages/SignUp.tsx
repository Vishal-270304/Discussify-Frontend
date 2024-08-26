import { Form } from "antd";
import { useState } from "react";
import InputField from "../../components/inputFields/InputField";
import PasswordField from "../../components/inputFields/passwordField";
import CheckBox from "../../components/inputFields/Checkbox";
import SubmitButton from "../../components/buttons/SubmitButton";
import SecondaryHeading from "../../components/headers/SecondaryHeading";
import SmallText from "../../components/paragraphs/paragraph";
import FillOtp from "./otp";
import BackgroundImage from "../../assets/image-2.jpg";
import { sendUserInfo } from "../../services/sendUserInfo";
import { SignUpInterface } from "../../types/auth";
const SignUp: React.FC = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = () => {
    const userInfo: SignUpInterface = {
      username,
      email,
      password,
      rememberMe: false,
      gender: "",
    };
    sendUserInfo(userInfo)
      .then(() => {
        setIsFormSubmitted(true);
        // localStorage.setItem("userInfo", JSON.stringify(userInfo.email));
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        setIsFormSubmitted(false);
      });
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // const handleRememberMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setRememberMe(e.target.checked);
  // };

  return (
    <>
      {isFormSubmitted ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${BackgroundImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "100vh",
          }}
        >
          <div
            style={{
              border: "1px solid #fff",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <FillOtp />
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundImage: `url(${BackgroundImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Form
            onSubmitCapture={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              width: "300px",
              border: "1px solid #fff",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "20px",
              }}
            >
              <SecondaryHeading
                styles={{ color: "#fff", fontWeight: "bold" }}
                text="Sign Up"
              />
            </div>
            {/* <h1 style={{textAlign:"center"}}>Sign Up</h1> */}
            <InputField
              onChange={handleUsernameChange}
              styles={{
                borderRadius: "10px",
                backgroundColor: "transparent",
                color: "#fff",
                fontSize: "15px",
                fontWeight: "bold",
              }}
              type="text"
              placeholder="Enter Username"
            />
            <PasswordField
              onChange={handlePasswordChange}
              styles={{
                borderRadius: "10px",
                backgroundColor: "transparent",
                color: "#fff",
                fontSize: "15px",
                fontWeight: "bold",
              }}
              placeholder="Enter Password"
            />
            <InputField
              onChange={handleEmailChange}
              styles={{
                borderRadius: "10px",
                backgroundColor: "transparent",
                color: "#fff",
                fontSize: "15px",
                fontWeight: "bold",
              }}
              type="email"
              placeholder="Enter Email"
            />
            <CheckBox />   
              <div style={{ fontSize: "15px", fontWeight: "bold" }}>
              <SmallText
                text="Already have an account?"
                link="/login"
                linkText="Sign In"
              />
            </div>
            <SubmitButton text="Sign Up" />
          </Form>
        </div>
      )}
    </>
  );
};

export default SignUp;
