"use client";


import { motion } from "motion/react";
import { sendMessage } from "@/lib/action";
import { useActionState } from "react";

export const ContactForm = () => {
    const [state, formAction, isPending] = useActionState(sendMessage, null);
    return (
        <div className="w-full max-w-2xl mx-auto p-8 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-neutral-200 dark:border-white/10 shadow-2xl">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">Send me a message</h2>
            <form action={formAction} className="space-y-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-neutral-600 dark:text-white/70">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-neutral-100 dark:bg-white/10 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                        placeholder="Your name"
                    />
                    {state?.errors?.name && <p className="text-red-500 text-sm mt-1">{state.errors.name[0]}</p>}
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-neutral-600 dark:text-white/70">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-neutral-100 dark:bg-white/10 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                        placeholder="your@email.com"
                    />
                    {state?.errors?.email && <p className="text-red-500 text-sm mt-1">{state.errors.email[0]}</p>}
                </div>
                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-neutral-600 dark:text-white/70">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-100 dark:bg-white/10 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                        placeholder="Type your message here..."
                    ></textarea>
                     {state?.errors?.message && <p className="text-red-500 text-sm mt-1">{state.errors.message[0]}</p>}
                </div>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isPending}
                    className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg shadow-lg shadow-indigo-500/20 transition-all disabled:opacity-50"
                >
                    {isPending ? "Sending..." : "Send Message"}
                </motion.button>
                
                {state?.message && !state?.errors && (
                    <p className={`text-center font-medium mt-4 ${state.message.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>
                        {state.message}
                    </p>
                )}
            </form>
        </div>
    );
};
