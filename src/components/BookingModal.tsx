import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import {
    CheckCircle2, Clock, ChevronRight, ChevronLeft,
    User, Mail, Globe, Sparkles, CalendarDays
} from "lucide-react";
import { cn } from "@/lib/utils";

type Step = "date" | "time" | "details" | "success";

const STEPS: Step[] = ["date", "time", "details", "success"];

const stepMeta: Record<Step, { label: string; subtitle: string; index: number }> = {
    date: { label: "Pick a Date", subtitle: "Choose when you'd like your audit", index: 0 },
    time: { label: "Pick a Time", subtitle: "Select a slot that fits your schedule", index: 1 },
    details: { label: "Your Details", subtitle: "Tell us about your business", index: 2 },
    success: { label: "You're Booked!", subtitle: "We'll send a confirmation shortly", index: 3 },
};

const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM",
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
];

const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -40 }),
};

export function BookingModal({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState<Step>("date");
    const [direction, setDirection] = useState(1);
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [time, setTime] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", website: "" });

    const currentIndex = stepMeta[step].index;
    const progressSteps = STEPS.slice(0, 3); // exclude success from progress dots

    const go = (next: Step) => {
        setDirection(stepMeta[next].index > currentIndex ? 1 : -1);
        setStep(next);
    };

    const handleBooking = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.website) {
            toast.error("Please fill in all fields");
            return;
        }
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setDirection(1);
            setStep("success");
            toast.success("SEO Audit Booked!");
        }, 1200);
    };

    const reset = () => {
        setStep("date");
        setDirection(1);
        setDate(undefined);
        setTime(null);
        setFormData({ name: "", email: "", website: "" });
    };

    return (
        <Dialog open={isOpen} onOpenChange={(open) => { setIsOpen(open); if (!open) reset(); }}>
            <DialogTrigger asChild>{children}</DialogTrigger>

            <DialogContent className="p-0 overflow-hidden border-0 shadow-2xl sm:max-w-[480px] rounded-2xl">
                {/* Header */}
                <div className="relative bg-primary px-7 pt-7 pb-6 overflow-hidden">
                    {/* Subtle grid texture */}
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                            backgroundSize: "24px 24px",
                        }}
                    />
                    {/* Glow blob */}
                    <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

                    <div className="relative">
                        <div className="flex items-center gap-2 mb-1">
                            <Sparkles size={15} className="text-primary-foreground/70" />
                            <span className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/70">
                                Free SEO Audit
                            </span>
                        </div>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={step + "-header"}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.25 }}
                            >
                                <h2 className="text-2xl font-bold text-primary-foreground leading-tight">
                                    {stepMeta[step].label}
                                </h2>
                                <p className="text-sm text-primary-foreground/70 mt-1">
                                    {stepMeta[step].subtitle}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        {/* Progress dots — only shown for steps 0-2 */}
                        {step !== "success" && (
                            <div className="flex items-center gap-2 mt-5">
                                {progressSteps.map((s, i) => (
                                    <div key={s} className="flex items-center gap-2">
                                        <div
                                            className={cn(
                                                "h-1.5 rounded-full transition-all duration-500",
                                                i < currentIndex
                                                    ? "w-6 bg-primary-foreground"
                                                    : i === currentIndex
                                                        ? "w-8 bg-primary-foreground"
                                                        : "w-4 bg-primary-foreground/30"
                                            )}
                                        />
                                    </div>
                                ))}
                                <span className="ml-1 text-xs text-primary-foreground/50">
                                    Step {currentIndex + 1} of 3
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Body */}
                <div className="px-7 py-6 bg-background min-h-[340px] flex flex-col">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={step}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.28, ease: "easeInOut" }}
                            className="flex-1"
                        >
                            {/* ── STEP: DATE ── */}
                            {step === "date" && (
                                <div className="space-y-5">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        className="rounded-xl border border-border/60 shadow-sm mx-auto"
                                        disabled={(d) => d < new Date() || d.getDay() === 0 || d.getDay() === 6}
                                    />
                                    <Button
                                        className="w-full h-11 font-semibold gap-2"
                                        onClick={() => go("time")}
                                        disabled={!date}
                                    >
                                        Continue <ChevronRight size={16} />
                                    </Button>
                                </div>
                            )}

                            {/* ── STEP: TIME ── */}
                            {step === "time" && (
                                <div className="space-y-5">
                                    <div className="grid grid-cols-2 gap-2.5">
                                        {timeSlots.map((slot) => (
                                            <button
                                                key={slot}
                                                onClick={() => setTime(slot)}
                                                className={cn(
                                                    "flex items-center gap-2.5 h-11 px-4 rounded-xl border text-sm font-medium transition-all duration-150",
                                                    time === slot
                                                        ? "border-primary bg-primary text-primary-foreground shadow-md scale-[1.02]"
                                                        : "border-border/60 bg-background text-foreground hover:border-primary/40 hover:bg-primary/5"
                                                )}
                                            >
                                                <Clock size={14} className={time === slot ? "text-primary-foreground/70" : "text-muted-foreground"} />
                                                {slot}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="flex gap-3">
                                        <Button variant="outline" className="h-11 px-4" onClick={() => go("date")}>
                                            <ChevronLeft size={16} />
                                        </Button>
                                        <Button
                                            className="flex-1 h-11 font-semibold gap-2"
                                            onClick={() => go("details")}
                                            disabled={!time}
                                        >
                                            Continue <ChevronRight size={16} />
                                        </Button>
                                    </div>
                                </div>
                            )}

                            {/* ── STEP: DETAILS ── */}
                            {step === "details" && (
                                <form onSubmit={handleBooking} className="space-y-4">
                                    {[
                                        { id: "name", label: "Full Name", type: "text", placeholder: "Jane Smith", icon: User, field: "name" as const },
                                        { id: "email", label: "Work Email", type: "email", placeholder: "jane@company.com", icon: Mail, field: "email" as const },
                                        { id: "website", label: "Website URL", type: "text", placeholder: "www.yourcompany.com", icon: Globe, field: "website" as const },
                                    ].map(({ id, label, type, placeholder, icon: Icon, field }) => (
                                        <div key={id} className="space-y-1.5">
                                            <Label htmlFor={id} className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                                                {label}
                                            </Label>
                                            <div className="relative">
                                                <Icon size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/60" />
                                                <Input
                                                    id={id}
                                                    type={type}
                                                    placeholder={placeholder}
                                                    value={formData[field]}
                                                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                                                    className="h-11 pl-9 border-border/60 focus:border-primary/50 bg-background"
                                                />
                                            </div>
                                        </div>
                                    ))}

                                    {/* Selected summary pill */}
                                    {date && time && (
                                        <div className="flex items-center gap-2 rounded-lg bg-primary/8 border border-primary/15 px-3.5 py-2.5 text-xs text-primary font-medium">
                                            <CalendarDays size={13} />
                                            {date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}
                                            <span className="text-primary/40 mx-0.5">·</span>
                                            <Clock size={12} />
                                            {time}
                                        </div>
                                    )}

                                    <div className="flex gap-3 pt-1">
                                        <Button variant="outline" type="button" className="h-11 px-4" onClick={() => go("time")}>
                                            <ChevronLeft size={16} />
                                        </Button>
                                        <Button
                                            type="submit"
                                            className="flex-1 h-11 font-semibold gap-2"
                                            disabled={loading}
                                        >
                                            {loading ? (
                                                <>
                                                    <span className="h-4 w-4 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground animate-spin" />
                                                    Booking…
                                                </>
                                            ) : (
                                                <>Confirm Booking <ChevronRight size={16} /></>
                                            )}
                                        </Button>
                                    </div>
                                </form>
                            )}

                            {/* ── STEP: SUCCESS ── */}
                            {step === "success" && (
                                <div className="py-4 flex flex-col items-center text-center gap-5">
                                    <div className="relative">
                                        <div className="absolute inset-0 rounded-full bg-emerald-400/20 blur-xl scale-150" />
                                        <motion.div
                                            initial={{ scale: 0.5, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
                                            className="relative h-20 w-20 rounded-full bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center"
                                        >
                                            <CheckCircle2 size={40} className="text-emerald-500" />
                                        </motion.div>
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.25 }}
                                        className="space-y-1.5"
                                    >
                                        <p className="text-xl font-bold text-foreground">Booking Confirmed!</p>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            Your free SEO audit is scheduled for
                                        </p>
                                        <p className="font-semibold text-foreground">
                                            {date?.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
                                            {" at "}
                                            {time}
                                        </p>
                                        <p className="text-xs text-muted-foreground mt-1">
                                            Check your inbox for a calendar invite.
                                        </p>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                        className="w-full"
                                    >
                                        <Button className="w-full h-11 font-semibold" onClick={() => setIsOpen(false)}>
                                            Done
                                        </Button>
                                    </motion.div>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </DialogContent>
        </Dialog>
    );
}