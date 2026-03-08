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
        setIsAddingReflection(false)
    }

    return (
        <div className="py-6 flex flex-col gap-8 pb-32">
            <header className="flex flex-col gap-1">
                <h1 className="text-3xl font-bold font-display tracking-tight">Emotion Journal</h1>
                <p className="text-accent">Log moods, thoughts, and personal reflections.</p>
            </header>

            {/* Stats section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-5 flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent leading-none mb-1">Entries</span>
                    <p className="text-2xl font-bold">4 reflections</p>
                </Card>
                <Card className="p-5 flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent leading-none mb-1">Avg Intensity</span>
                    <p className="text-2xl font-bold">7.2/10</p>
                </Card>
                <Card className="p-5 flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent leading-none mb-1">Common Mood</span>
                    <p className="text-2xl font-bold">Focused 🎯</p>
                </Card>
            </section>

            <section className="flex items-center justify-between">
                <h2 className="text-xl font-bold font-display px-1">Today&apos;s Reflections</h2>
                <Button
                    className="flex items-center gap-2 rounded-full"
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
                        <label className="text-sm font-medium">How are you feeling?</label>
                        <Select options={moods} />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Emotional Intensity (1-10)</label>
                        <Input type="range" min="1" max="10" step="1" className="h-2 cursor-pointer" />
                        <div className="flex justify-between text-[10px] text-accent uppercase font-semibold">
                            <span>Mild</span>
                            <span>Intense</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Strongest Thought</label>
                        <Input placeholder="What's on your mind?" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">Notes</label>
                        <Textarea placeholder="Any deeper context?" />
                    </div>

                    <Button type="submit" className="mt-4 py-6 text-lg">Save Reflection</Button>
                </form>
            </Dialog>

            <div className="flex flex-col gap-4">
                {[1, 2].map((i) => (
                    <Card key={i} className="p-6 flex flex-col gap-4">
                        <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-xl">
                                    {i === 1 ? '🎯' : '🧘'}
                                </div>
                                <div>
                                    <h3 className="font-bold">{i === 1 ? 'Focused' : 'Calm'}</h3>
                                    <p className="text-xs text-accent uppercase font-semibold tracking-tighter">Intensity: {i === 1 ? '8/10' : '6/10'}</p>
                                </div>
                            </div>
                            <span className="text-xs text-accent">14:30</span>
                        </div>

                        <div className="bg-accent/5 p-4 rounded-xl border border-accent/10 flex items-start gap-3">
                            <MessageSquare size={16} className="text-accent mt-0.5" />
                            <p className="text-sm font-medium leading-relaxed">
                                {i === 1 ? "Need to finish this project architecture before the end of the day." : "Started meditation and feeling much more grounded."}
                            </p>
                        </div>

                        <p className="text-sm text-accent px-1">
                            {i === 1 ? "Architecture mapping is taking more time than expected but the clarity is increasing." : "The morning was hectic but the breathwork really helped."}
                        </p>
                    </Card>
                ))}
            </div>
        </div>
    )
}
