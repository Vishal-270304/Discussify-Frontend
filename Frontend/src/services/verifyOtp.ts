import axios from "axios";
import { OtpInterface } from "../types/auth";

const verifyOtp = async (verifyOtp: OtpInterface) => {

    try {
        const response = await axios.post("http://localhost:3000/api/verify-otp", verifyOtp);
        return response.data;
        
    } catch (error) {
        return error
    }

};

export default verifyOtp;
