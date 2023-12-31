import { createContext, useContext } from "react";
import { cookies } from 'next/headers'

import { UserState } from "@/app/types/context";
import { RFLogin } from "@/app/types/system";
const UserContext = createContext({})

export const UserProvider = ({ children }: { children: React.ReactNode }) => {

    const login = async ({ username, password }: RFLogin) => {
        const url = 'http://localhost:3000/api/auth'
        const body = {
            username,
            password
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
                return true
            }
            return false
        } catch (error) {
            console.log(error)
            return false
        }
    }

    return <UserContext.Provider value={{ login }}>{children}</UserContext.Provider>
}

export const useUserContext = (): UserState | any => useContext(UserContext)