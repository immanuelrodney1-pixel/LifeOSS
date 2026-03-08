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

    React.useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 60000)
        return () => clearInterval(timer)
    }, [])

    const handleSaveActivity = (e: React.FormEvent) => {
        e.preventDefault()
        // Here we would normally save to Supabase
        setIsAddingActivity(false)
    }

    return (
        <div className="py-6 flex flex-col gap-8 pb-32">
            {/* Header Info */}
            <header className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold font-display tracking-tight">Today</h1>
                    <Button variant="outline" size="sm" className="rounded-full">
                        {currentTime.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </Button>
                </div>
                <p className="text-accent">Log activities and track your state.</p>
            </header>

            {/* Summary Cards */}
            <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="p-4 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-accent">
                        <Clock size={16} />
                        <span className="text-xs font-semibold uppercase tracking-wider">Tracked</span>
                    </div>
                    <p className="text-2xl font-bold">4.5h</p>
                    <ProgressBar value={30} className="mt-1" />
                </Card>

                <Card className="p-4 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-accent">
                        <Star size={16} />
                        <span className="text-xs font-semibold uppercase tracking-wider">Top Category</span>
                    </div>
                    <p className="text-2xl font-bold truncate">Deep Work</p>
                    <Badge variant="secondary" className="w-fit">🧠 180m</Badge>
                </Card>

                <Card className="p-4 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-accent">
                        <Brain size={16} />
                        <span className="text-xs font-semibold uppercase tracking-wider">Mood</span>
                    </div>
                    <p className="text-2xl font-bold">Focused</p>
                    <Badge variant="secondary" className="w-fit">8/10 Intensity</Badge>
                </Card>

                <Card className="p-4 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-accent">
                        <Star size={16} />
                        <span className="text-xs font-semibold uppercase tracking-wider">Entries</span>
                    </div>
                    <p className="text-2xl font-bold">12</p>
                    <p className="text-xs text-accent">Activities today</p>
                </Card>
            </section>

            {/* Activity Timeline Section Header */}
            <section className="flex items-center justify-between">
                <h2 className="text-xl font-bold font-display tracking-tight">Timeline</h2>
                <Button
                    className="rounded-full shadow-lg h-10 w-10 p-0"
                    onClick={() => setIsAddingActivity(true)}
                >
                    <Plus size={24} />
                </Button>
            </section>

            {/* Add Activity Dialog */}
            <Dialog
                isOpen={isAddingActivity}
                onClose={() => setIsAddingActivity(false)}
                title="Add Activity"
            >
                <form className="flex flex-col gap-5" onSubmit={handleSaveActivity}>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Activity Title</label>
                        <Input placeholder="What are you doing?" required />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Category</label>
                        <Select
                            options={[
                                { label: "Deep Work", value: "deep-work", emoji: "🧠" },
                                { label: "Admin", value: "admin", emoji: "📋" },
                                { label: "Exercise", value: "exercise", emoji: "🏃" },
                                { label: "Meals", value: "meals", emoji: "🍽️" },
                                { label: "Social", value: "social", emoji: "🫶" },
                                { label: "Sleep", value: "sleep", emoji: "😴" },
                            ]}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium">Start Time</label>
                            <Input type="time" step="300" required defaultValue="08:00" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium">End Time</label>
                            <Input type="time" step="300" required defaultValue="08:45" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Notes (Optional)</label>
                        <Textarea placeholder="Add some details..." />
                    </div>

                    <Button type="submit" className="mt-4 py-6 text-lg">Save Activity</Button>
                </form>
            </Dialog>

            {/* Activity List Placeholder */}
            <section className="flex flex-col gap-4">
                {[1, 2, 3].map((i) => (
                    <Card key={i} className="p-5 flex items-start justify-between group">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-2xl">
                                {i === 1 ? '🧠' : i === 2 ? '🍽️' : '🏃'}
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center gap-2">
                                    <span className="font-bold text-lg">
                                        {i === 1 ? 'Deep Work' : i === 2 ? 'Lunch Break' : 'Evening Run'}
                                    </span>
                                    <Badge variant="outline">Manual</Badge>
                                </div>
                                <p className="text-accent text-sm">08:00 – 09:30 • 90m</p>
                                {i === 1 && <p className="text-sm mt-2 text-accent italic">Working on project architecture specs.</p>}
                            </div>
                        </div>
                    </Card>
                ))}

                <div className="p-8 text-center border-2 border-dashed border-accent/10 rounded-card opacity-50 flex flex-col items-center gap-2">
                    <p className="text-sm">End of day reached</p>
                    <Button variant="ghost" size="sm" onClick={() => setIsAddingActivity(true)}>Add more activities</Button>
                </div>
            </section>
        </div>
    )
}
