import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CircleCheck, Sparkles, X, PhoneCall, Phone, Bot, User, Mic, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Ripple } from "@/components/ui/shadcn-io/ripple"

export default function Page() {
    const PROBLEMS = [
        "Website visitors don’t convert fast enough.",
        "Too much time is wasted on unqualified calls.",
        "Follow-ups fall through the cracks.",
        "Admin tasks steal time from high-value work.",
        "Expensive sales teams or 24/7 staff.",
    ]
    const SOLUTIONS = [
        "Smart Qualification",
        "Seamless Booking",
        "Customer Profiling",
        "Intent Signals",
        "Automated Nurture",
        "Sales Support",
        "Sentiment Analysis",
        "Works 24/7",
    ]
    return (
        <main className="min-h-screen w-full">
            {/* Top Nav */}
            <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4">
                    <Link href="/" aria-label="Home" className="flex items-center gap-2">
                        <Sparkles className="h-5 w-5" aria-hidden="true" />
                        <span className="text-sm font-semibold tracking-tight">FrontDesk</span>
                    </Link>
                </div>
            </header>

            {/* Hero */}
            <section className="relative border-b overflow-hidden">
                <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-black/5 via-transparent to-black/10" />
                <Ripple />
                <div className="relative mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 md:grid-cols-2 md:gap-12 md:py-16">
                    <div className="flex flex-col gap-4">
                        <div className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                            <span className="rounded border border-black/15 bg-black/5 px-2 py-0.5">Always Online</span>
                            <span className="hidden md:inline">Works 24/7</span>
                        </div>
                        <h1 className="text-balance text-3xl font-semibold leading-tight md:text-4xl">
                            <span className="font-mono">Conversational AI Agent</span>{" "}for Your Business
                        </h1>
                        <p className="text-pretty text-sm text-muted-foreground md:text-base">
                        FrontDesk captures and qualifies leads, then routes them directly into your CRM or sales workflow. Saving your business time and accelerating conversions.
                        </p>
                        <div className="flex flex-wrap items-center gap-2">
                            <Button asChild size="sm" variant="ghost">
                                <Link href="#problem" className="inline-flex items-center gap-1">
                                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                                    The problem
                                </Link>
                            </Button>
                            <Button asChild size="sm" variant="ghost">
                                <Link href="#solution" className="inline-flex items-center gap-1">
                                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                                    Our solution
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Marquee: Problems (top) */}
            <div className="relative overflow-hidden py-2 border-b">
                <div className="flex min-w-max items-center gap-3 [animation:var(--animate-marquee)]">
                    {[...Array(2)].map((_, dup) => (
                        <div key={dup} className="flex items-center gap-3">
                            {PROBLEMS.map((item) => (
                                <span key={`${dup}-${item}`} className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
                                    <X className="h-3.5 w-3.5" aria-hidden="true" />
                                    {item}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Problem */}
            <section id="problem" className="border-b">
                <div className="mx-auto w-full max-w-6xl px-4 py-10 md:py-16">

                    <div className="mb-4 inline-flex items-center gap-2 rounded border border-black/15 bg-black/5 px-2 py-1 text-xs uppercase tracking-wider">🚀 The Problem</div>
                    <h3 className="text-2xl font-semibold">Businesses are leaking revenue every month</h3>
                    <p className="mt-2 max-w-3xl text-sm text-muted-foreground">Small and mid-sized service businesses lose thousands monthly because:</p>
                    <div className="mt-6 grid gap-3 md:grid-cols-2">
                        {PROBLEMS.map((item) => (
                            <div key={item} className="inline-flex items-start gap-2 rounded border bg-background p-3 text-sm">
                                <X className="mt-0.5 h-4 w-4" aria-hidden="true" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            {/* Marquee: Solutions (bottom) */}
            <div className="relative overflow-hidden py-3 border-b">
                <div className="flex min-w-max items-center gap-3 [animation:var(--animate-marquee)] [animation-direction:reverse]">
                    {[...Array(2)].map((_, dup) => (
                        <div key={dup} className="flex items-center gap-3">
                            {SOLUTIONS.map((item) => (
                                <span key={`${dup}-${item}`} className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
                                    <CircleCheck className="h-3.5 w-3.5" aria-hidden="true" />
                                    {item}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* Solution: AI Growth Agent Suite - Tier 1 */}
            <section id="solution" className="border-b">
                <div className="mx-auto w-full max-w-6xl px-4 py-10 md:py-16">
                    <div className="mb-4 inline-flex items-center gap-2 rounded border border-black/15 bg-black/5 px-2 py-1 text-xs uppercase tracking-wider">🤖 The Solution — Conversational AI Agents</div>
                    <Card className="border-none shadow-none">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base">Never sleeps, never forgets, never drops a lead.</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm">
                            <p className="text-muted-foreground">Your always-on AI sales rep that turns website visitors into paying clients.</p>
                            <ul className="mt-4 space-y-2">
                                {[
                                    "📅 Seamless Booking: Syncs with existing booking systems.",
                                    "🧠 Customer Profiling: Profiles leads based on their responses.",
                                    "⚡ Intent Signals: Analyzes leads' intentions.",
                                    "📊 Sentiment Analysis: Understands leads' sentiment based on their responses.",
                                    "🔍 Highlights leads' pain points and needs.",
                                ].map((li) => (
                                    <li key={li} className="flex items-start gap-2">
                                        <span>{li}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Demo section: Chat and Call */}
            <section id="demo">
                <div className="mx-auto w-full max-w-6xl px-4 py-10 md:py-16">
                <div className="mb-4 inline-flex items-center gap-2 rounded border border-black/15 bg-black/5 px-2 py-1 text-xs uppercase tracking-wider">🚀 See our agents in action</div>
                    <p className="mt-2 max-w-3xl text-sm text-muted-foreground">Try a chat conversation and preview a call flow with our AI agents.</p>

                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        {/* Chat demo */}
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-base inline-flex items-center gap-2"><MessageSquare className="h-4 w-4" /> Chat demo</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div aria-live="polite" className="flex max-h-72 flex-col gap-3 overflow-hidden rounded-md bg-background p-3">
                                    {/* Agent message */}
                                    <div className="flex items-start gap-2">
                                        <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full border bg-background">
                                            <Bot className="h-3.5 w-3.5" aria-hidden="true" />
                                        </div>
                                        <div className="max-w-[85%] rounded-md border border-black/15 bg-background p-2 text-sm">
                                            Hi, I’m Sally. How can I help today?
                                        </div>
                                    </div>
                                    {/* User message */}
                                    <div className="ml-auto flex items-start gap-2">
                                        <div className="max-w-[85%] rounded-md border border-black/15 bg-background p-2 text-sm">
                                            Can you book a consultation for tomorrow afternoon?
                                        </div>
                                        <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full border bg-background">
                                            <User className="h-3.5 w-3.5" aria-hidden="true" />
                                        </div>
                                    </div>
                                    {/* Agent message */}
                                    <div className="flex items-start gap-2">
                                        <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full border bg-background">
                                            <Bot className="h-3.5 w-3.5" aria-hidden="true" />
                                        </div>
                                        <div className="max-w-[85%] rounded-md border border-black/15 bg-background p-2 text-sm">
                                            Absolutely. I see availability at 2:30 PM and 4:00 PM. Which works?
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3 flex items-center gap-2">
                                    <input
                                        aria-label="Type a message"
                                        placeholder="Type a message…"
                                        className="flex-1 rounded-md border border-black/15 bg-background px-3 py-2 text-sm outline-hidden focus-visible:ring-2 focus-visible:ring-black/40"
                                    />
                                    <Button size="sm" type="button" aria-label="Send message">Send</Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Call demo */}
                        <Card>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-base inline-flex items-center gap-2"><PhoneCall className="h-4 w-4" /> Call our agent</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="relative flex flex-col items-center justify-center gap-3 rounded-md bg-background p-6">
                                    <div className="inline-flex items-center gap-2 rounded-full border border-black/15 px-3 py-1 text-xs">
                                        <Mic className="h-3.5 w-3.5" aria-hidden="true" /> Ready to take your call
                                    </div>
                                    <div className="mt-4 text-center text-sm text-muted-foreground">
                                        FrontDesk is always ready to take your call and help you with your questions.
                                    </div>
                                    <div className="mt-4">
                                        <Button asChild size="sm" aria-label="Place call to our AI agent">
                                            <a href="#" className="inline-flex items-center gap-2">
                                                <Phone className="h-4 w-4" aria-hidden="true" /> Place call
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Powered by (logos only) */}
            <section>
                <div className="mx-auto w-full max-w-6xl px-4 py-10 md:py-16 text-center">
                    <h2 className="uppercase tracking-wide font-semibold text-[14px] mb-4">Powered by</h2>
                    <div className="flex items-center justify-center">
                        <Image src="/elevenlabs-logo-black.svg" alt="ElevenLabs" width={180} height={40} priority />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full">
                <Separator />
                <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-xs text-muted-foreground md:flex-row">
                    <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4" aria-hidden="true" />
                        <span>© {new Date().getFullYear()} FrontDesk - <Link href="/" className="underline underline-offset-4">Agent & Sons</Link></span>
                    </div>
                    <nav aria-label="Footer">
                        <ul className="flex flex-wrap items-center gap-4">
                            <li><Link href="mailto:founders@agentandsons.com" className="hover:text-foreground underline underline-offset-4">Email</Link></li>
                            <li><Link href="https://x.com/agentandsons" target="_blank" rel="noopener noreferrer" className="hover:text-foreground underline underline-offset-4">X</Link></li>
                            <li><Link href="https://www.linkedin.com/company/agent-and-sons" target="_blank" rel="noopener noreferrer" className="hover:text-foreground underline underline-offset-4">LinkedIn</Link></li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </main>
    )
}


