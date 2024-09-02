export interface SignUpInterface{
    username:string;
    password:string;
    rememberMe:boolean;
    email:string;
    gender:string;
}

export interface OtpInterface{
    email:string;
    enteredOtp:string;
}

export interface LoginInterface{
    username:string;
    password:string;
}