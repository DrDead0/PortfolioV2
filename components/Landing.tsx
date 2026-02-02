import { motion } from "framer-motion";
import { FiCopy, FiMapPin, FiDatabase } from "react-icons/fi";

export default function Landing() {
    return (
        <section className="relative h-screen w-full bg-black text-[#E0E0E0] overflow-hidden flex flex-col justify-center items-center">
            {/* Top Left Logo/Text */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute top-10 left-10 md:top-16 md:left-16 flex items-center gap-4"
            >
                <div className="text-xl font-bold tracking-tighter">AS</div>
                <div className="flex flex-col text-[0.65rem] uppercase tracking-widest leading-relaxed opacity-80">
                    <span>Creative Engineer</span>
                    <span className="text-green-400 font-bold">Building the future</span>
                </div>
            </motion.div>

            {/* Top Right Buttons (Optional placeholder based on screenshot) */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="absolute top-10 right-10 md:top-16 md:right-16 hidden md:flex items-center gap-6 text-sm font-medium"
            >
                <button className="px-5 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors">Book a Call</button>
            </motion.div>

            {/* Center Content */}
            <div className="text-center z-10 font-sans">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[12vw] md:text-[150px] font-black tracking-tight leading-none text-white select-none"
                >
                    ASHISH
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="mt-8 space-y-2"
                >
                    <p className="text-sm md:text-lg tracking-[0.2em] uppercase text-gray-400">
                        I design and build products that
                    </p>
                    <p className="font-playfair text-4xl md:text-6xl italic text-white/90">
                        deliver real impact.
                    </p>
                </motion.div>
            </div>

            {/* Bottom Left - Location */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="absolute bottom-32 left-10 md:bottom-16 md:left-16 flex flex-col gap-2 items-center text-center"
            >
                <div className="text-green-400 mb-2">
                    <FiMapPin size={20} />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider">
                    Based in Uttar Pradesh, <br />
                    <span className="text-gray-400 font-normal">India</span>
                </div>
            </motion.div>

            {/* Bottom Right - Role */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="absolute bottom-32 right-10 md:bottom-16 md:right-16 flex flex-col gap-2 items-center text-center"
            >
                <div className="text-blue-400 mb-2">
                    <FiDatabase size={20} />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider">
                    Game & Backend Dev, <br />
                    <span className="text-gray-400 font-normal">& Designer</span>
                </div>
            </motion.div>


        </section>
    );
}
