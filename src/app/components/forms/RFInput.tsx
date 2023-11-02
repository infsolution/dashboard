'use client'
import React from 'react';
import { RFComponentProps } from '@/app/types/system';

export default function RFInput({ children, style, name }: RFComponentProps) {
    return (
        <input type="text" name={name} className={style} />
    )
}
