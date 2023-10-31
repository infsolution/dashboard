
import { GET_RAFFLES } from "@/app/api/raffles"
import { Raffle } from "@/app/types/raffle"

export default async function Raffle() {

    async function getRaffles(): Promise<Raffle[] | undefined> {
        try {
            const { url, options } = GET_RAFFLES()
            const response = await fetch(url, options)
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json();

        } catch (error) {
            console.log(error)
        }
    }


    const raffles = await getRaffles()
    return (
        <>
            <h1>Rifas a doidado</h1>
            <ul>
                {
                    raffles && raffles.map((raffle) => {
                        return (
                            <li key={raffle.id}>
                                {raffle.title}

                            </li>
                        )
                    }
                    )
                }
            </ul>
        </>
    )
}