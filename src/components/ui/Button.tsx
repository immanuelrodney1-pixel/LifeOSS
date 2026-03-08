import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost"
    size?: "sm" | "md" | "lg"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        const variants = {
            primary: "bg-primary text-secondary hover:opacity-90",
            secondary: "bg-secondary text-primary hover:bg-accent/10 border border-accent/20",
            outline: "bg-transparent border border-accent/40 text-primary hover:bg-accent/5",
            ghost: "bg-transparent text-primary hover:bg-accent/10",
        }

        const sizes = {
            sm: "px-3 py-1.5 text-xs",
            md: "px-5 py-2.5 text-sm",
            lg: "px-8 py-4 text-base",
        }

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-button font-medium transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"
