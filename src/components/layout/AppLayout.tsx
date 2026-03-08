"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Clock, Calendar, Brain, Sparkles, Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItemProps {
    href: string
    icon: React.ElementType
    label: string
    isActive: boolean
}

function NavItem({ href, icon: Icon, label, isActive }: NavItemProps) {
    return (
        <Link
            href={href}
            className={cn(
                "flex flex-col items-center justify-center flex-1 py-2 px-1 transition-all",
                isActive ? "text-primary" : "text-accent/60 hover:text-accent"
            )}
        >
            <Icon size={20} className={cn("mb-1", isActive && "stroke-[2.5px]")} />
            <span className="text-[10px] font-medium">{label}</span>
            {isActive && (
                <span className="absolute bottom-1 w-1 h-1 rounded-full bg-primary" />
            )}
        </Link>
    )
}

export function AppLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const [isDarkMode, setIsDarkMode] = React.useState(false)

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
        document.documentElement.classList.toggle("dark")
    }

    const navItems = [
        { href: "/today", icon: Clock, label: "Today" },
        { href: "/week", icon: Calendar, label: "Week" },
        { href: "/month", icon: Calendar, label: "Month" },
        { href: "/emotions", icon: Brain, label: "Emotions" },
        { href: "/insights", icon: Sparkles, label: "Insights" },
    ]

    return (
        <div className={cn("min-h-screen flex flex-col bg-background text-foreground pb-20 md:pb-0 md:pl-64")}>
            {/* Desktop Sidebar */}
            <aside className="hidden md:flex flex-col fixed left-0 top-0 bottom-0 w-64 border-r border-black/10 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-xl font-black font-display tracking-tight text-black">LifeOS</h1>
                    <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-black/5 transition-colors text-black">
                        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                </div>

                <nav className="flex flex-col gap-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-button transition-all",
                                pathname === item.href
                                    ? "bg-black text-white shadow-md scale-[1.02]"
                                    : "text-black/70 hover:bg-black/5 hover:text-black font-bold"
                            )}
                        >
                            <item.icon size={20} className={cn(pathname === item.href ? "stroke-[3px]" : "stroke-[2px]")} />
                            <span className="font-bold">{item.label}</span>
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* Mobile Header */}
            <header className="md:hidden flex items-center justify-between px-6 py-4 fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-lg z-20 border-b border-accent/5">
                <h1 className="text-lg font-bold font-display tracking-tight">LifeOS</h1>
                <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-accent/10 transition-colors">
                    {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
            </header>

            {/* Main Content */}
            <main className="flex-1 w-full max-w-4xl mx-auto px-6 pt-20 md:pt-12 md:px-12">
                {children}
            </main>

            {/* Mobile Bottom Nav */}
            <nav className="md:hidden flex items-center justify-around fixed bottom-0 left-0 right-0 bg-surface/80 backdrop-blur-xl border-t border-accent/10 z-20 px-4 safe-area-inset-bottom">
                {navItems.map((item) => (
                    <NavItem
                        key={item.href}
                        href={item.href}
                        icon={item.icon}
                        label={item.label}
                        isActive={pathname === item.href}
                    />
                ))}
            </nav>
        </div>
    )
}
