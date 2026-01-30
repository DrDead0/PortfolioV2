'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

const words = [
    "Hello",
    "Bonjour",
    "Ciao",
    "Olà",
    "やあ",
    "Hallå",
    "Guten tag",
    "Hallo",
    "Welcome"
];

export default function Preloader({ onComplete }: { onComplete: () => void }) {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    useEffect(() => {
        if (index === words.length - 1) return;
        const timeout = setTimeout(() => {
            setIndex(index + 1);
        }, index === 0 ? 1000 : 150);
        return () => clearTimeout(timeout);
    }, [index]);

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;

    const curve = {
        initial: {
            d: initialPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }
        }
    }

    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className="fixed inset-0 z-50 flex items-center justify-center bg-[#141516]" onAnimationComplete={onComplete}>
            {dimension.width > 0 &&
                <>
                    <motion.p variants={opacity} initial="initial" animate="enter" className="flex text-white text-5xl font-bold items-center absolute z-10">
                        <span className="block w-3 h-3 bg-white rounded-full mr-3"></span>
                        {words[index]}
                    </motion.p>
                    <svg className="absolute top-0 w-full h-[calc(100%+300px)] pointer-events-none fill-[#141516]">
                        <motion.path variants={curve} initial="initial"></motion.path>
                    </svg>
                </>
            }
        </motion.div>
    )
}

const opacity = {
    initial: { opacity: 0 },
    enter: { opacity: 0.75, transition: { duration: 1, delay: 0.2 } },
}

const slideUp = {
    initial: { top: 0 },
    exit: { top: "calc(-100vh - 300px)", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number], delay: 0.2 } }
}
