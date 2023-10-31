import { RFLogin } from "./system"

export type UserState = {
    (login?: RFLogin): void
}