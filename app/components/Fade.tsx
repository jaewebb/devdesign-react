'use client'

import { usePathname } from 'next/navigation'

import { motion } from 'framer-motion'

export default function Fade(
  { children, fadeOnce, }: {children: React.ReactNode, fadeOnce: boolean}
) {
  const pathName = usePathname()
  return (
    <motion.div
      key={fadeOnce ? 'once' : pathName}
      initial={{ opacity: 0, }}
      animate={{ opacity: 1, }}
      transition={{ duration: 0.5, }}
    >
      {children}
    </motion.div>
  )
}
