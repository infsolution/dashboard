'use client'
import { FormEvent, useContext, useState } from "react";
import { useUserContext } from "../contexts/users/user";
import { useRouter } from 'next/navigation'
import RFLabel from '../components/forms/RFLabel'
import RFInput from "./forms/RFInput";
import RFButton from "./forms/RFButton";
export default function FormLogin() {
    const { login } = useUserContext();
    const [error, setError] = useState('');
    const router = useRouter()

    const onSubmit = async (event: FormEvent) => {

        event.preventDefault();
        const loged = await login({ username: 'cicero@email.com', password: '12345678' })
        if (loged) {
            router.push('/dashboard')
        } else {
            setError('Ta errado')
        }
    }

    return (
        <div>
            <h1 className={"m-[1rem] font-extrabold text-[1.5rem]"}>Login</h1>
            <form onSubmit={onSubmit} className={"flex flex-col gap-2 w-[100%] max-w-[100%]"}>
                <div className={"flex flex-col gap-2"}>
                    <RFLabel name="email" style="">{"Email"}</RFLabel>
                    <RFInput style="p-[0.4rem] bg-slate-500 outline-0 rounded text-gray-50 font-medium"
                        children="Username"
                        name="usename" />
                </div>
                <div className={"flex flex-col gap-2"}>
                    <RFLabel name="password" style="">{"Senha"}</RFLabel>
                    <RFInput style="p-[0.4rem] bg-slate-500 outline-0 rounded text-gray-50 font-medium"
                        children="Senha"
                        name="password" />
                </div>
                <div>
                    <p>Não tem conta? <span>Cadastre-se</span> </p>
                </div>
                <RFButton style="p-[0.4rem] bg-green-500 text-gray-50 font-medium rounded">Entrar</RFButton>
            </form>
        </div>
    )
}