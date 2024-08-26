import axios from "axios";
import { SignUpInterface } from "../types/auth";

export const sendUserInfo = async (userInfo: SignUpInterface) => {

    try {
        const response = await axios.post("http://localhost:3000/api/signup", userInfo);
        return response.data;
        
    } catch (error) {
        return error
    }

};

