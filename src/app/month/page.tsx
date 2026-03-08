"use client"

import * as React from "react"
import { Calendar, ChevronLeft, ChevronRight, TrendingUp, Filter } from "lucide-react"
import { Card } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"

export default function MonthPage() {
    const [view, setView] = React.useState<"list" | "heatmap">("heatmap")

    // Mock heatmap data for the month
    const daysInMonth = Array.from({ length: 31 }, (_, i) => ({
        day: i + 1,
        intensity: Math.floor(Math.random() * 10),
        hours: (Math.random() * 8 + 2).toFixed(1)
    }))

    return (
        <div className="py-6 flex flex-col gap-8 pb-32">
            <header className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                    <h1 className="text-3xl font-bold font-display tracking-tight text-black">March Review</h1>
                    <p className="text-accent text-sm font-bold">Deep historical analysis for last 30 days.</p>
                </div>
                <div className="flex items-center gap-2 bg-white p-1 rounded-full border border-black/10 shadow-sm">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full"><ChevronLeft size={16} /></Button>
                    <span className="text-[10px] font-black px-2 uppercase tracking-widest">March 2026</span>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full"><ChevronRight size={16} /></Button>
                </div>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-5 bg-black text-white border-none shadow-xl flex flex-col gap-2">
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Insight of the Month</span>
                    <p className="text-lg font-black leading-tight italic">"You are 24% more productive when your morning starts with 'Walking'."</p>
                </Card>
                <Card className="p-5 flex flex-col gap-1 bg-white border border-black/10">
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/40">Total Deep Work</span>
                    <p className="text-2xl font-black text-black">84.5 hours</p>
                    <span className="text-[10px] font-bold text-green-600">+12% vs Feb</span>
                </Card>
                <Card className="p-5 flex flex-col gap-1 bg-white border border-black/10">
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/40">Thought of the Month</span>
                    <p className="text-xl font-black text-black truncate">Project Architecture</p>
                    <span className="text-[10px] font-bold text-black/40">Appeared 42 times</span>
                </Card>
            </section>

            <section className="flex flex-col gap-4">
                <div className="flex items-center justify-between px-1">
                    <h2 className="text-xl font-bold font-display text-black">Consistency Heatmap</h2>
                    <div className="flex bg-black/5 p-1 rounded-lg">
                        <button
                            onClick={() => setView("heatmap")}
                            className={`px-3 py-1 rounded-md text-[10px] font-black uppercase transition-all ${view === 'heatmap' ? 'bg-white text-black shadow-sm' : 'text-black/40'}`}
                        >
                            Heatmap
                        </button>
                        <button
                            onClick={() => setView("list")}
                            className={`px-3 py-1 rounded-md text-[10px] font-black uppercase transition-all ${view === 'list' ? 'bg-white text-black shadow-sm' : 'text-black/40'}`}
                        >
                            Summary
                        </button>
                    </div>
                </div>

                <Card className="p-8 bg-white border border-black/10 shadow-sm">
                    <div className="grid grid-cols-7 gap-2">
                        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
                            <div key={d} className="text-center text-[10px] font-black text-black/30 mb-2">{d}</div>
                        ))}
                        {/* Offset for start of month - mock */}
                        <div className="h-10 invisible" />
                        {daysInMonth.map((d) => (
                            <div
                                key={d.day}
                                className={`h-10 rounded-lg flex items-center justify-center text-[10px] font-bold border border-black/5 transition-all hover:scale-110 cursor-pointer
                                    ${d.intensity > 7 ? 'bg-black text-white' : d.intensity > 4 ? 'bg-black/60 text-white' : d.intensity > 2 ? 'bg-black/20 text-black' : 'bg-black/5 text-black/40'}`}
                                title={`${d.hours}h tracked`}
                            >
                                {d.day}
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 flex items-center justify-center gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-black/5 rounded" />
                            <span className="text-[8px] font-black uppercase text-black/40">Low</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-black rounded" />
                            <span className="text-[8px] font-black uppercase text-black/40">High Intensity</span>
                        </div>
                    </div>
                </Card>
            </section>
        </div>
    )
}
