import React, { useState } from 'react'
import assets from '../assets/assets.js'
import { motion } from 'motion/react'

const Hero = () => {
  const [active, setActive] = useState('front')

  return (
    <div
      id="hero"
      className="relative flex flex-col lg:flex-row items-center justify-center gap-20 py-24 px-4 sm:px-12 lg:px-24 xl:px-40 w-full overflow-hidden text-gray-700 dark:text-white"
    >
      {/* 🌫️ Background glow */}
      <div className="absolute -z-20 top-1/2 right-0 w-[400px] h-[400px] bg-[#C9AD8F]/30 blur-[120px] rounded-full" />

      {/* ================= LEFT CONTENT ================= */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 max-w-xl z-10">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px]"
        >
          Achak of the Sequoia Tribe

          <span className="block mt-3 text-2xl sm:text-3xl md:text-4xl xl:text-5xl italic font-normal bg-gradient-to-r from-[#E3D2BE] to-[#C9AD8F] bg-clip-text text-transparent">
            Into the Spirit I
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75"
        >
          A young hunter’s journey becomes a spiritual awakening as war, prophecy, and ancestral forces reshape his destiny.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 space-y-2"
        >
          <p>• Spirit-guided coming-of-age epic</p>
          <p>• Tribal warfare and cultural survival</p>
          <p>• Mythic animal guardians and visions</p>
        </motion.div>
      </div>

      {/* ================= RIGHT CONTENT (BOOK VISUAL) ================= */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative flex-shrink-0 z-0"
>

  {/* 🌫️ glow */}
  <div className="absolute -z-20 top-1/2 right-1/2 translate-x-1/2 w-[320px] h-[320px] bg-[#C9AD8F]/30 blur-[120px] rounded-full" />

  {/* ================= FRONT BOOK ================= */}
  <motion.img
    src={assets.AOTST_EBOOK_Front}
    alt="Front Book"
    onClick={() => setActive('front')}
    className="w-64 sm:w-80 md:w-96 drop-shadow-2xl relative cursor-pointer"
    animate={{
      y: [0, -10, 0], // floating
      scale: active === 'front' ? 1.08 : 1,
      zIndex: active === 'front' ? 30 : 10,
      filter: active === 'front' ? 'blur(0px)' : 'blur(1px)',
    }}
    transition={{
      y: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      },
      scale: { duration: 0.4 },
      filter: { duration: 0.4 }
    }}
  />

  {/* ================= BACK BOOK ================= */}
  <motion.img
    src={assets.AOTST_EBOOK_Back}
    alt="Back Book"
    onClick={() => setActive('back')}
    className="absolute -top-16 -right-16 sm:-top-28 sm:-right-28 w-64 sm:w-80 md:w-96 opacity-90 cursor-pointer"
    animate={{
      y: [0, 12, 0], // slightly different float speed
      x: active === 'back' ? 0 : 5,
      scale: active === 'back' ? 1.08 : 1,
      zIndex: active === 'back' ? 30 : 10,
      filter: active === 'back' ? 'blur(0px)' : 'blur(1.5px)',
    }}
    transition={{
      y: {
        duration: 6.5,
        repeat: Infinity,
        ease: "easeInOut"
      },
      scale: { duration: 0.4 },
      filter: { duration: 0.4 }
    }}
  />

</motion.div>
    </div>
  )
}

export default Hero