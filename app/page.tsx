'use client';
import { useRef } from 'react';
import Preloader from '@/components/preloader';
import Landing from '@/components/Landing';
import Description from '@/components/Description';
import Projects from '@/components/Projects';
import SlidingImages from '@/components/SlidingImages';
import Contact from '@/components/Contact';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = 'default'
      window.scrollTo(0, 0);
    }, 2000)
  }, [])

  return (
    <main >
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      <Landing />
      <Description />
      <Projects />
      <SlidingImages />
      <Contact />
    </main>
  )
}
