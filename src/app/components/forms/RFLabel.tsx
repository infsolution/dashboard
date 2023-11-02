'use client'
import { RFComponentProps } from '@/app/types/system';

export default function RFLabel({ children, style, name }: RFComponentProps) {

    return (
        <label htmlFor={name} className={style} >{children}</label>
    )
}