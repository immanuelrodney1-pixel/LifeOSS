"use client"

import * as React from "react"
import { Plus, Brain, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { Dialog } from "@/components/ui/Dialog"
import { Input } from "@/components/ui/Input"
import { Select } from "@/components/ui/Select"
import { Textarea } from "@/components/ui/Textarea"

export default function EmotionsPage() {
    const [isAddingReflection, setIsAddingReflection] = React.useState(false)
    const [selectedMood, setSelectedMood] = React.useState("focused")
    const [reflections, setReflections] = React.useState([
        { id: 1, mood: "Focused", emoji: "🎯", intensity: "8/10", time: "14:30", thought: "Need to finish this project architecture before the end of the day.", notes: "Architecture mapping is taking more time than expected but the clarity is increasing." },
        { id: 2, mood: "Calm", emoji: "🧘", intensity: "6/10", time: "09:00", thought: "Started meditation and feeling much more grounded.", notes: "The morning was hectic but the breathwork really helped." }
    ])

    const moods = [
        { label: "Focused", value: "focused", emoji: "🎯" },
        { label: "Calm", value: "calm", emoji: "🧘" },
        { label: "Grateful", value: "grateful", emoji: "🙏" },
        { label: "Joyful", value: "joyful", emoji: "😊" },
        { label: "Anxious", value: "anxious", emoji: "😰" },
        { label: "Overwhelmed", value: "overwhelmed", emoji: "🌊" },
    ]

    const handleSaveReflection = (e: React.FormEvent) => {
        e.preventDefault()
        const now = new Date()
        const timeStr = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`
        const moodObj = moods.find(m => m.value === selectedMood) || moods[0]

        const newReflection = {
            id: Date.now(),
            mood: moodObj.label,
            emoji: moodObj.emoji,
            intensity: "7/10", // Mocked for simplicity in this turn
            time: timeStr,
            thought: "New reflection logged",
            notes: "Manually entered reflection details."
        }

        setReflections([newReflection, ...reflections])
        setIsAddingReflection(false)
    }

    return (
        <div className="py-6 flex flex-col gap-8 pb-32">
            <header className="flex flex-col gap-1">
                <h1 className="text-3xl font-bold font-display tracking-tight">Emotion Journal</h1>
                <p className="text-accent font-medium">Log moods, thoughts, and personal reflections.</p>
            </header>

            {/* Stats section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-5 flex flex-col gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent leading-none mb-1">Entries</span>
                    <p className="text-2xl font-black">4 reflections</p>
                </Card>
                <Card className="p-5 flex flex-col gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent leading-none mb-1">Avg Intensity</span>
                    <p className="text-2xl font-black">7.2/10</p>
                </Card>
                <Card className="p-5 flex flex-col gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent leading-none mb-1">Common Mood</span>
                    <p className="text-2xl font-black">Focused 🎯</p>
                </Card>
            </section>

            <section className="flex items-center justify-between">
                <h2 className="text-xl font-bold font-display px-1">Today&apos;s Reflections</h2>
                <Button
                    className="flex items-center gap-2 rounded-full font-bold"
                    onClick={() => setIsAddingReflection(true)}
                >
                    <Plus size={18} />
                    <span>New Reflection</span>
                </Button>
            </section>

            <Dialog
                isOpen={isAddingReflection}
                onClose={() => setIsAddingReflection(false)}
                title="New Reflection"
            >
                <form className="flex flex-col gap-5" onSubmit={handleSaveReflection}>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold">How are you feeling?</label>
                        <Select options={moods} value={selectedMood} onChange={(val) => setSelectedMood(val)} />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold">Emotional Intensity (1-10)</label>
                        <Input type="range" min="1" max="10" step="1" className="h-2 cursor-pointer" />
                        <div className="flex justify-between text-[10px] text-accent uppercase font-bold">
                            <span>Mild</span>
                            <span>Intense</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold">Strongest Thought</label>
                        <Input placeholder="What's on your mind?" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold">Notes</label>
                        <Textarea placeholder="Any deeper context?" />
                    </div>

                    <Button type="submit" className="mt-4 py-6 text-lg font-black">Save Reflection</Button>
                </form>
            </Dialog>

            <div className="flex flex-col gap-4">
                {reflections.map((ref) => (
                    <Card key={ref.id} className="p-6 flex flex-col gap-4 border-black/10 shadow-sm">
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-xl">
                                    {ref.emoji}
                                </div>
                                <div>
                                    <h3 className="font-black text-lg text-black">{ref.mood}</h3>
                                    <p className="text-[10px] text-black/40 uppercase font-black tracking-widest">Intensity: {ref.intensity}</p>
                                </div>
                            </div>
                            <span className="text-xs font-black text-black/40">{ref.time}</span>
                        </div>

                        <div className="bg-black/5 p-4 rounded-xl border border-black/10 flex items-start gap-3">
                            <MessageSquare size={16} className="text-black/40 mt-0.5" />
                            <p className="text-sm font-bold leading-relaxed text-black">
                                {ref.thought}
                            </p>
                        </div>

                        <p className="text-sm text-black/60 px-1 font-bold">
                            {ref.notes}
                        </p>
                    </Card>
                ))}
            </div>
        </div>
    )
}
