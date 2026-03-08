"use client"

import * as React from "react"
import { Calendar, ChevronLeft, ChevronRight, TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"

export default function WeekPage() {
    const days = [
        { name: "Mon", date: "Mar 3", hours: "7.5h", top: "Deep Work", mood: "Focused", intensity: 8 },
        { name: "Tue", date: "Mar 4", hours: "6.0h", top: "Meetings", mood: "Social", intensity: 7 },
        { name: "Wed", date: "Mar 5", hours: "8.2h", top: "Deep Work", mood: "Focused", intensity: 9 },
        { name: "Thu", date: "Mar 6", hours: "5.5h", top: "Learning", mood: "Curious", intensity: 7 },
        { name: "Fri", date: "Mar 7", hours: "7.0h", top: "Deep Work", mood: "Exhausted", intensity: 5 },
        { name: "Sat", date: "Mar 8", hours: "2.5h", top: "Leisure", mood: "Relaxed", intensity: 8 },
        { name: "Sun", date: "Mar 9", hours: "4.5h", top: "Social", mood: "Joyful", intensity: 9 },
    ]

    return (
        <div className="py-6 flex flex-col gap-8 pb-32">
            <header className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                    <h1 className="text-3xl font-bold font-display tracking-tight">7 Day Review</h1>
                    <p className="text-accent text-sm font-bold">Review your patterns and distribution.</p>
                </div>
                <div className="flex items-center gap-2 bg-secondary/50 p-1 rounded-full border border-accent/10">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full"><ChevronLeft size={16} /></Button>
                    <span className="text-[10px] font-black px-2 uppercase tracking-widest">Mar 3 – 9</span>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full"><ChevronRight size={16} /></Button>
                </div>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 bg-primary text-secondary flex flex-col gap-4 border-none shadow-xl">
                    <div className="flex items-center gap-2 opacity-80">
                        <TrendingUp size={18} />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Weekly Focus</span>
                    </div>
                    <p className="text-4xl font-black">Deep Work</p>
                    <div className="flex flex-col gap-2 mt-2">
                        <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest opacity-80 mb-1">
                            <span>22.5 hours total</span>
                            <span>42% of total</span>
                        </div>
                        <div className="h-2 w-full bg-secondary/20 rounded-full overflow-hidden">
                            <div className="h-full bg-secondary w-[42%]" />
                        </div>
                    </div>
                </Card>

                <div className="grid grid-cols-2 gap-4">
                    <Card className="p-5 flex flex-col gap-1 border-none bg-accent/5">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-accent">Avg Tracked</span>
                        <p className="text-2xl font-black">5.8h / day</p>
                    </Card>
                    <Card className="p-5 flex flex-col gap-1 border-none bg-accent/5">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-accent">High Point</span>
                        <p className="text-2xl font-black text-green-600">9/10 Intensity</p>
                    </Card>
                </div>
            </section>

            <section className="flex flex-col gap-4">
                <h2 className="text-xl font-bold font-display px-1">Daily Breakdown</h2>
                <div className="flex flex-col gap-3">
                    {days.map((day) => (
                        <Card key={day.name} className="p-4 flex items-center justify-between hover:border-primary/20 transition-all cursor-pointer group">
                            <div className="flex items-center gap-4">
                                <div className="flex flex-col items-center justify-center w-12 py-2 rounded-xl bg-accent/5 border border-accent/10 group-hover:bg-primary group-hover:text-secondary transition-colors">
                                    <span className="text-xs font-black uppercase tracking-tighter">{day.name}</span>
                                    <span className="text-[10px] font-bold opacity-60">{day.date.split(' ')[1]}</span>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <p className="font-black text-lg">{day.hours} logged</p>
                                        <Badge variant="secondary" className="text-[10px] h-4 leading-none font-bold uppercase tracking-tighter">{day.top}</Badge>
                                    </div>
                                    <p className="text-xs text-accent mt-0.5 font-bold uppercase tracking-tight">Primary State: {day.mood} ({day.intensity}/10)</p>
                                </div>
                            </div>
                            < ChevronRight size={18} className="text-accent/30 group-hover:text-primary transition-colors" />
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    )
}
