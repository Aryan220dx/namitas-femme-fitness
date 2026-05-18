"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { ChatWindow } from "./ChatWindow";

export function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ChatWindow open={open} onClose={() => setOpen(false)} />
      <motion.button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-gold-light/40 bg-black text-gold-light shadow-hover transition-colors hover:bg-gold-light hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-light"
        aria-label={open ? "Close wellness chatbot" : "Open wellness chatbot"}
        aria-expanded={open}
        whileTap={{ scale: 0.94 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "close" : "open"}
            initial={{ opacity: 0, rotate: -15, scale: 0.85 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 15, scale: 0.85 }}
            transition={{ duration: 0.18 }}
          >
            {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </>
  );
}
