import { cn } from "@/lib/utils"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "secondary" | "outline"
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
    const variants = {
        default: "bg-primary text-secondary",
        secondary: "bg-accent/10 text-primary",
        outline: "bg-transparent border border-accent/20 text-accent",
    }

    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors cursor-default",
                variants[variant],
                className
            )}
            {...props}
        />
    )
}
