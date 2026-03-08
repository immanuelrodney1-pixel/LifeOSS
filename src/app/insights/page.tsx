"use client"

import * as React from "react"
import { Sparkles, Brain, Lightbulb, ArrowUpRight, Zap } from "lucide-react"
import { Card } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"

export default function InsightsPage() {
    return (
        <div className="py-6 flex flex-col gap-8 pb-32">
            <header className="flex flex-col gap-1">
                <h1 className="text-3xl font-bold font-display tracking-tight">Insights</h1>
                <p className="text-accent text-sm font-bold">Automated pattern recognition and behavioral analysis.</p>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-6 bg-surface border-primary/10 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-primary">
                            <Lightbulb size={18} />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Key Observation</span>
                        </div>
                        <Badge variant="secondary" className="font-bold">HIGH SIGNAL</Badge>
                    </div>
                    <p className="text-xl font-black leading-relaxed">
                        Your emotional intensity is <span className="bg-primary text-secondary px-1.5 py-0.5 rounded ml-1 italic">24% higher</span> during &quot;Deep Work&quot; sessions.
                    </p>
                    <div className="flex items-center gap-1 text-[10px] font-bold text-accent uppercase tracking-widest">
                        <ArrowUpRight size={14} />
                        <span>Correlated with &quot;Focused&quot; mood entries.</span>
                    </div>
                </Card>

                <Card className="p-6 bg-surface border-primary/10 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-primary">
                            <Brain size={18} />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Recurring Thought</span>
                        </div>
                        <Badge variant="secondary" className="font-bold">3X THIS WEEK</Badge>
                    </div>
                    <p className="text-xl font-black leading-relaxed italic text-primary">
                        &quot;Need to refine the project architecture specs.&quot;
                    </p>
                    <p className="text-[10px] font-bold text-accent uppercase tracking-widest">Last captured yesterday at 14:30</p>
                </Card>
            </section>

            <section className="flex flex-col gap-4">
                <h2 className="text-xl font-bold font-display px-1">Behavioral Distribution</h2>
                <div className="space-y-6 bg-accent/5 p-8 rounded-card border border-accent/10">
                    <div className="space-y-2">
                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                            <span>Time Mastery</span>
                            <span className="text-primary">Polished</span>
                        </div>
                        <div className="h-2 w-full bg-accent/10 rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-[85%]" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                            <span>Emotional Awareness</span>
                            <span className="text-primary">Emerging</span>
                        </div>
                        <div className="h-2 w-full bg-accent/10 rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-[40%]" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                            <span>Reflection Consistency</span>
                            <span className="text-primary">Strong</span>
                        </div>
                        <div className="h-2 w-full bg-accent/10 rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-[65%]" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-4">
                <Card className="p-8 border-dashed border-2 border-accent/20 bg-transparent flex flex-col items-center text-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-secondary">
                        <Sparkles size={24} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="font-black text-xl">Roadmap to Intelligence</h3>
                        <p className="text-sm text-accent font-bold max-w-xs mx-auto">AI features currently in training to transform your logs into wisdom.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 w-full max-w-md mt-4">
                        <div className="p-4 bg-primary text-secondary rounded-xl border border-accent/5 text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2">
                            <Zap size={14} className="fill-current text-white" />
                            <span>AI Summaries</span>
                        </div>
                        <div className="p-4 bg-primary text-secondary rounded-xl border border-accent/5 text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2">
                            <Zap size={14} className="fill-current text-white" />
                            <span>Correlations</span>
                        </div>
                        <div className="p-4 bg-primary text-secondary rounded-xl border border-accent/5 text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2">
                            <Zap size={14} className="fill-current text-white" />
                            <span>Triggers</span>
                        </div>
                        <div className="p-4 bg-primary text-secondary rounded-xl border border-accent/5 text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2">
                            <Zap size={14} className="fill-current text-white" />
                            <span>Blueprints</span>
                        </div>
                    </div>
                </Card>
            </section>
        </div>
    )
}
