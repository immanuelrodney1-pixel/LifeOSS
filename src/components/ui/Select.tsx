"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: { label: string; value: string; emoji?: string }[]
}

export function Select({ options, className, ...props }: SelectProps) {
    return (
        <select
            className={cn(
                "flex h-12 w-full rounded-input border border-accent/20 bg-background px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all appearance-none cursor-pointer",
                className
            )}
            {...props}
        >
            {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                    {opt.emoji ? `${opt.emoji} ${opt.label}` : opt.label}
                </option>
            ))}
        </select>
    )
}
