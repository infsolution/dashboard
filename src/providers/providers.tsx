'use client'

import { UserProvider } from "@/app/contexts/users/user";

export const Providers = ({ children }: { children: React.ReactNode }) => {

    return (
        <UserProvider>{children}</UserProvider>
    )
}