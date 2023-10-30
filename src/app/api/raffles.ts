import { config } from "./config"

export const API_URL = config.url.API_URL;

export function GET_RAFFLES() {
    return (
        {
            url: API_URL + "raffles",
            options: {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                //body:JSON.stringify(body)
            }
        }
    )
}

