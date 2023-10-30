import { NextRequest, NextResponse } from "next/server";
import { config } from "../config";


export const API_URL = config.url.API_URL;

export async function POST(request: NextRequest) {

    const body = await request.json();
    const url = API_URL + "login"

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            username: body.username,
            password: body.password
        })
    }

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        const data = await response.json()
        return NextResponse.json(data)

    } catch (error) {
        return NextResponse.json(error)
    }
}