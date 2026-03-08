"use client"

import * as React from "react"
import { Plus, Clock, Brain, Star } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { ProgressBar } from "@/components/ui/ProgressBar"
import { Dialog } from "@/components/ui/Dialog"
import { Input } from "@/components/ui/Input"
import { Select } from "@/components/ui/Select"
import { Textarea } from "@/components/ui/Textarea"

export default function TodayPage() {
    const [currentTime, setCurrentTime] = React.useState(new Date())
    const [isAddingActivity, setIsAddingActivity] = React.useState(false)
    const [dominantThought, setDominantThought] = React.useState("")

    React.useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 60000)
        return () => clearInterval(timer)
    }, [])

    const handleSaveActivity = (e: React.FormEvent) => {
        e.preventDefault()
        // Here we would normally save to Supabase
        setIsAddingActivity(false)
    }

    const hours = Array.from({ length: 24 }, (_, i) => i)

    return (
        <div className="py-6 flex flex-col gap-8 pb-32">
            {/* Header Info */}
            <header className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold font-display tracking-tight text-black">Today</h1>
                    <Button variant="outline" size="sm" className="rounded-full font-bold border-black text-black">
                        {currentTime.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </Button>
                </div>

                {/* Dominant Thought Widget */}
                <Card className="p-5 bg-black text-white border-none shadow-xl">
                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/60">Current Dominant Thought</span>
                        <input
                            type="text"
                            placeholder="Capture your focus..."
                            className="bg-transparent border-none p-0 text-2xl font-black placeholder:text-white/20 focus:ring-0 outline-none"
                            value={dominantThought}
                            onChange={(e) => setDominantThought(e.target.value)}
                        />
                    </div>
                </Card>
            </header>

            {/* Summary Cards */}
            <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="p-5 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-black">
                        <Clock size={16} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Tracked</span>
                    </div>
                    <p className="text-3xl font-black text-black">4.5h</p>
                    <ProgressBar value={30} className="mt-1" />
                </Card>

                <Card className="p-5 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-black">
                        <Star size={16} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Top Category</span>
                    </div>
                    <p className="text-3xl font-black truncate text-black">Deep Work</p>
                    <Badge variant="secondary" className="w-fit font-black bg-black text-white">🧠 180m</Badge>
                </Card>

                <Card className="p-5 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-black">
                        <Brain size={16} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Mood</span>
                    </div>
                    <p className="text-3xl font-black text-black">Focused</p>
                    <Badge variant="secondary" className="w-fit font-black bg-black text-white">8/10 Intensity</Badge>
                </Card>

                <Card className="p-5 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-black">
                        <Star size={16} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Entries</span>
                    </div>
                    <p className="text-3xl font-black text-black">12</p>
                    <p className="text-[10px] text-black font-black uppercase tracking-tight">Activities today</p>
                </Card>
            </section>

            {/* Timeline Window Header */}
            <section className="flex items-center justify-between">
                <h2 className="text-xl font-bold font-display tracking-tight text-black">Timeline Window</h2>
                <Button
                    className="rounded-full shadow-lg h-10 w-10 p-0 bg-black text-white hover:bg-black/90"
                    onClick={() => setIsAddingActivity(true)}
                >
                    <Plus size={24} />
                </Button>
            </section>

            {/* 24h Timeline Window Pane */}
            <section className="relative h-[400px] border border-accent/10 rounded-card overflow-hidden bg-accent/5">
                <div className="absolute inset-0 overflow-y-auto px-4 py-6 scroll-smooth">
                    {hours.map((hour) => (
                        <div key={hour} className="relative h-20 border-t border-accent/10 first:border-none">
                            <span className="absolute -top-3 left-0 text-[10px] font-bold text-accent uppercase tracking-tighter">
                                {hour === 0 ? "12 AM" : hour < 12 ? `${hour} AM` : hour === 12 ? "12 PM" : `${hour - 12} PM`}
                            </span>

                            {/* Example Activity Blocks */}
                            {hour === 8 && (
                                <div className="absolute top-2 left-12 right-0 bottom-2 bg-white rounded-xl shadow-sm border border-accent/5 p-3 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-lg">🧠</div>
                                        <div>
                                            <p className="text-sm font-black leading-none">Deep Work</p>
                                            <p className="text-[10px] font-bold text-accent">08:00 – 09:30</p>
                                        </div>
                                    </div>
                                    <Badge variant="outline" className="text-[10px]">90m</Badge>
                                </div>
                            )}

                            {hour === 12 && (
                                <div className="absolute top-2 left-12 right-0 bottom-2 bg-white rounded-xl shadow-sm border border-accent/5 p-3 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-lg">🍽️</div>
                                        <div>
                                            <p className="text-sm font-black leading-none">Lunch</p>
                                            <p className="text-[10px] font-bold text-accent">12:15 – 13:00</p>
                                        </div>
                                    </div>
                                    <Badge variant="outline" className="text-[10px]">45m</Badge>
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Current Time Indicator Overlay */}
                    <div className="absolute left-0 right-0 border-b-2 border-red-500 z-10 opacity-50 pointer-events-none" style={{ top: `${(currentTime.getHours() * 80) + (currentTime.getMinutes() * (80 / 60)) + 24}px` }}>
                        <div className="absolute right-0 -top-2 bg-red-500 text-white text-[8px] px-1 rounded font-bold uppercase tracking-widest">Live</div>
                    </div>
                </div>
            </section>

            {/* Add Activity Dialog */}
            <Dialog
                isOpen={isAddingActivity}
                onClose={() => setIsAddingActivity(false)}
                title="Log Activity"
            >
                <form className="flex flex-col gap-5" onSubmit={handleSaveActivity}>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold">Activity Title</label>
                        <Input placeholder="What are you doing?" required />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold">Category</label>
                        <Select
                            options={[
                                { label: "Deep Work", value: "deep-work", emoji: "🧠" },
                                { label: "Shallow Work", value: "shallow-work", emoji: "🖱️" },
                                { label: "Fitness", value: "fitness", emoji: "🏃" },
                                { label: "Walking", value: "walking", emoji: "👟" },
                                { label: "Chores", value: "chores", emoji: "🧹" },
                                { label: "Leisure", value: "leisure", emoji: "🎮" },
                                { label: "Wellness", value: "wellness", emoji: "🧘" },
                            ]}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold">Start Time</label>
                            <Input type="time" step="300" required defaultValue="08:00" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold">End Time</label>
                            <Input type="time" step="300" required defaultValue="08:45" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold">Notes (Optional)</label>
                        <Textarea placeholder="Add some details..." />
                    </div>

                    <Button type="submit" className="mt-4 py-6 text-lg font-black">Save Activity</Button>
                </form>
            </Dialog>
        </div>
    )
}
