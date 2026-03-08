import { cn } from "@/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    isGlass?: boolean
}

export function Card({ className, isGlass = false, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "rounded-card bg-surface shadow-sm border border-accent/10 overflow-hidden",
                isGlass && "glass",
                className
            )}
            {...props}
        />
    )
}
