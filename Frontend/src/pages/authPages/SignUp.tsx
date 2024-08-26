import {Form} from "antd"
import {useState} from "react"
import InputField from "../../components/inputFields/InputField"
import PasswordField from "../../components/inputFields/passwordField"
import CheckBox from "../../components/inputFields/Checkbox"
import SubmitButton from "../../components/buttons/SubmitButton"
import SecondaryHeading from "../../components/headers/SecondaryHeading"
import SmallText from "../../components/paragraphs/paragraph"
import FillOtp from "./otp"

const SignUp : React.FC = () => {

const [isFormSubmitted, setIsFormSubmitted] = useState(false)

const handleSubmit : React.FormEventHandler<HTMLFormElement> = () =>{
  setIsFormSubmitted(true)
}

  return (
    <>
    {isFormSubmitted ? (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
      <div style={{border:"1px solid #ccc",padding:"20px",borderRadius:"10px"}}>
      <FillOtp/>
      </div>
    </div>
    ) :(
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"}}>
    <Form onSubmitCapture={handleSubmit} style={{display:"flex",flexDirection:"column",gap:"15px",width:"300px",border:"1px solid #ccc",padding:"20px",borderRadius:"10px"}}>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px"}}>
      <SecondaryHeading text="Sign Up"/>
      </div>
      {/* <h1 style={{textAlign:"center"}}>Sign Up</h1> */}
    <InputField type="text" placeholder="Enter Username" />
    <PasswordField placeholder="Enter Password" />
    <InputField type="email" placeholder="Enter Email" />
    <CheckBox />
    <div style={{fontSize:"15px",fontWeight:"bold"}}>
    <SmallText text="Already have an account?" link="/login" linkText="Sign In" />
    </div>
    <SubmitButton text="Sign Up" />
    </Form>
    </div>
    )}
    </>
  )
}

export default SignUp