"use client"

import * as React from "react"
import { Sparkles, Brain, Lightbulb, ArrowUpRight, Zap, TrendingUp } from "lucide-react"
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
                <Card className="p-6 bg-black text-white border-none shadow-2xl flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-white/60">
                            <Zap size={18} />
                            <span className="text-[10px] font-black uppercase tracking-widest">Efficiency Score</span>
                        </div>
                        <Badge variant="secondary" className="font-black bg-white text-black text-[10px]">84/100</Badge>
                    </div>
                    <p className="text-3xl font-black leading-none">High Output</p>
                    <p className="text-xs text-white/60 font-medium">Your Deep Work vs Shallow Work ratio is 14% better than last week.</p>
                </Card>

                <Card className="p-6 bg-white border border-black/10 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-black">
                            <TrendingUp size={18} />
                            <span className="text-[10px] font-black uppercase tracking-widest">State Correlation</span>
                        </div>
                        <Badge variant="secondary" className="font-black text-[10px]">PEAK MOOD</Badge>
                    </div>
                    <p className="text-xl font-black leading-tight text-black">
                        You are <span className="underline decoration-4">happiest</span> on days when you track <span className="italic">Fitness</span> before 09:00 AM.
                    </p>
                    <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest">Correlated from 14 entries.</p>
                </Card>
            </section>

            <section className="flex flex-col gap-4">
                <h2 className="text-xl font-bold font-display px-1 text-black">Thought Density (Month-to-Date)</h2>
                <div className="space-y-6 bg-white p-8 rounded-card border border-black/10 shadow-sm">
                    {[
                        { topic: "Project Architecture", weight: 85 },
                        { topic: "Self Improvement", weight: 60 },
                        { topic: "Financial Planning", weight: 45 },
                        { topic: "Vacation Ideas", weight: 30 },
                    ].map((t) => (
                        <div key={t.topic} className="space-y-2">
                            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-black">
                                <span>{t.topic}</span>
                                <span className="text-black/40">{t.weight}% Density</span>
                            </div>
                            <div className="h-2 w-full bg-black/5 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-black transition-all duration-1000"
                                    style={{ width: `${t.weight}%` }}
                                />
                            </div>
                        </div>
                    ))}
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
