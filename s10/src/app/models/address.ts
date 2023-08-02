export interface Address {
        "id": string
        "user_id": string
        "zone_id": string
        "is_default": string
        "address"?: string | null
        "location": string | null
        "governorate": string
        "neighbourHood": string
        "street": string
        "building": string
        "floor": string
        "apartment": string
        "addressNieckName": string
        "address_book_id": string
        "flag": string
        "gov_id": string
        "longitude": string
        "latitude": string
        "additionalAddressInfo"?: string|null
        "address_additional_info"?: string | null
        "gov_name": string|null
        "zone_name": string|null
}
