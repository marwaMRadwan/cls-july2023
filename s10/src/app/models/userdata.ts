import { Address } from "./address"

export interface Userdata {
    "access_token": string
    "country": string
    "language": string
    "viewSettings": string
    "defaultAddress": Address | null
    "has_branch": boolean
    "branch_id": string 
    "token_type": string
    "referral_code":string
    "referral_code_points": number
    "default_address_completed": number
    "app_version": string
}