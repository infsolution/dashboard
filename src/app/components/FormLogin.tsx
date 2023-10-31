'use client'
import { FormEvent, useContext } from "react";
import { useUserContext } from "../contexts/users/user";

export default function FormLogin() {
    const { login } = useUserContext();

    const onSubmit = async (event: FormEvent) => {
        event.preventDefault();
        login({ username: 'cicero@email.com', password: '12345678' })
        console.log(event)
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