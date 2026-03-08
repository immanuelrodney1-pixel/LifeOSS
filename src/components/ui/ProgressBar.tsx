import { cn } from "@/lib/utils"

interface ProgressBarProps {
    value: number // 0 to 100
    className?: string
    color?: string
}

export function ProgressBar({ value, className, color = "bg-primary" }: ProgressBarProps) {
    return (
        <div className={cn("h-1.5 w-full bg-black/10 rounded-full overflow-hidden", className)}>
            <div
                className={cn("h-full transition-all duration-500 ease-out", color)}
                style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
            />
        </div>
    )
}
