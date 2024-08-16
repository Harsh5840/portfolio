'use client'
import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const PageTransition = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const pathname = usePathname();
  return (
    <AnimatePresence>
        <div key={pathname}>
            <motion.div
            initial =  {{opacity: 1}}
            animate = {{
                opacity: 0,
                transition: {
                    delay: 1,
                    duration: 0.4,
                    ease: "easeInOut",
                },
            }} className="h-screen w-screen fixed top-0 bg-primary pointer-events-none" /> 
        {children}
        </div>
       
    </AnimatePresence>
  )
}

export default PageTransition