'use client'
import { FormEvent } from "react";
import { cookies } from 'next/headers'

export default function Login() {

    async function onSubmit(event: FormEvent) {
        event.preventDefault()
        const url = 'http://localhost:3000/api/auth'
        const body = {
            username: 'cicero@email.com',
            password: '12345678'
        }
        try {
            const response = await fetch(url,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                }
            )
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            const token = await response.json()
            if (token) {
                //Tem que ser server componente
                cookies().set('user_token', token.access_token)
            }
        } catch (error) {
            console.log("ERRO GRAVE: " + error)
        }


    }
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <input type="text" name="username" placeholder="Usuario" />
                <input type="text" name="password" placeholder="Senha" />
                <button type="submit">Login</button>

            </form>
        </>
    )
}