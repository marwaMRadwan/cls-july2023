export interface User {
    _id?:string
    name:string
    email:string
    phone:string
    password:string
    gender:string
    age:number
    dOfBirth:string
    status?:boolean
    type?:string
    pImage?:string
    otp?:string
    tokens:[{ token:string}]
}
