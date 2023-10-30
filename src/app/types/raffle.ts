export type Raffle = {
    id: number;
    title: string;
    description: string;
    drawn_date: Date | null;
    drawn_time: Date | null;
    value_point: number;
    format: string;
    drawn: boolean;
    user_id: number;
    created_at: Date;
    updated_at: Date;
}