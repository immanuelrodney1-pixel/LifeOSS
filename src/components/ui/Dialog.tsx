"use client"

import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "./Button"

interface DialogProps {
    isOpen: boolean
    onClose: () => void
    title: string
    children: React.ReactNode
}

export function Dialog({ isOpen, onClose, title, children }: DialogProps) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-primary/20 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal */}
            <div className={cn(
                "relative w-full md:max-w-lg bg-surface md:rounded-card shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in slide-in-from-bottom duration-300 md:animate-in md:zoom-in-95",
                "rounded-t-card" // mobile bottom sheet feel
            )}>
                <div className="flex items-center justify-between p-6 border-b border-accent/5">
                    <h2 className="text-xl font-bold font-display tracking-tight">{title}</h2>
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-accent/10 transition-colors">
                        <X size={20} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6">
                    {children}
                </div>
            </div>
        </div>
    )
}
