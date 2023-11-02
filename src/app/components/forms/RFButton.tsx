'use client'
import React from 'react';
import { RFComponentProps } from '@/app/types/system';

export default function RFButton({ children, style }: RFComponentProps) {
    return (
        <button type="submit" className={style}>{children}</button>
    )
}