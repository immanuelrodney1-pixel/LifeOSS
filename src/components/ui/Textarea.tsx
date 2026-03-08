import { cn } from "@/lib/utils"

export function Textarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
    return (
        <textarea
            className={cn(
                "flex min-h-[100px] w-full rounded-input border border-accent/20 bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 transition-all",
                className
            )}
            {...props}
        />
    )
}
