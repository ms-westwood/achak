import React from 'react'
import assets from '../assets/assets.js'
import { motion } from 'motion/react'

const Services = () => {
  return (
    <section
      id="AboutTheAuthor"
      className="relative py-24 px-6 sm:px-12 lg:px-24 text-gray-700 dark:text-white overflow-hidden"
    >
      {/* Soft Background Accent */}
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-20 -left-20 w-[500px] opacity-10 -z-10 dark:hidden"
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >

          {/* Author Image */}
          <div className="flex justify-center">
            <img
              src={assets.authorImage} // <-- add author image in assets
              alt="Alex Coppin"
              className="w-72 sm:w-80 md:w-full max-w-sm rounded-2xl shadow-2xl object-cover"
            />
          </div>

          {/* Author Text */}
          <div className="bg-white/60 dark:bg-white/5 backdrop-blur-md p-8 sm:p-10 rounded-2xl shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
              About the Author
            </h2>

            <div className="space-y-5 text-base sm:text-lg leading-relaxed text-gray-700 dark:text-white/80">
              <p>
                Alex Coppin is the author of <span className="font-semibold">
                Achak of the Sequoia Tribe</span>, a story rooted in Native American
                heritage and respect for the natural world.
              </p>

              <p>
                Inspired by his own family history and written especially for his
                grandson Noah, the book reflects his desire to pass on timeless
                lessons about courage, responsibility, and adulthood.
              </p>

              <p>
                Before focusing on writing, Coppin spent forty years at Lawrence
                Livermore National Laboratory. Today, he devotes his time to
                storytelling, history, and cultural exploration through fiction.
              </p>

              <p className="italic">
                He is currently working on Into the Spirit Series II, continuing
                the journey of Achak and the Sequoia Tribe.
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default Services