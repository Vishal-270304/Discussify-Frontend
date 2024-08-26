import {Form} from "antd"
import InputField from "../../components/inputFields/InputField"
import PasswordField from "../../components/inputFields/passwordField"
import SubmitButton from "../../components/buttons/SubmitButton"
import SecondaryHeading from "../../components/headers/SecondaryHeading"
import SmallText from "../../components/paragraphs/paragraph"
import LoginBackground from "../../assets/image.avif"
import CheckBox from "../../components/inputFields/Checkbox"

const SignIn : React.FC = () => {
  return (
    <>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundImage : `url(${LoginBackground})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover'}}>
    <Form style={{display:"flex",flexDirection:"column",gap:"15px",width:"300px",border:"1px solid #ccc",padding:"20px",borderRadius:"10px"}}>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px"}}>
      <SecondaryHeading styles={{color:"#fff",fontWeight:"bold"}} text="Sign In"/>
      </div>
      {/* <h1 style={{textAlign:"center"}}>Sign Up</h1> */}
    <InputField styles={{borderRadius:"10px",backgroundColor:"transparent",color:"#fff"}} type="text" placeholder="Enter Username" />
    <PasswordField styles={{borderRadius:"10px",backgroundColor:"transparent",color:"#fff"}} placeholder="Enter Password" />
    <CheckBox />
    <div style={{fontSize:"15px",fontWeight:"bold"}}>
    <SmallText text="Create new Account?" link="/signup" linkText="Sign Up" />
    </div>
    <SubmitButton text="Sign In" />
    </Form>
    </div>

    </>
  )
}

export default SignIn
