import React from 'react'
import Title from './Title.jsx'
import assets from '../assets/assets.js'
import toast from 'react-hot-toast'
import { useState } from 'react'
import {motion} from 'motion/react'

const ContactUs = () => {
    const [result, setResult] = useState("");

    const onSubmit = async  (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    //formData.append("access_key", import.meta.env.VITE_API_KEY);
    formData.append("access_key", "aed53cdc-9a01-45c5-8071-0e19c8c88ef6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    try {
            const data = await response.json();
            setResult(data.success ? "Success!" : "Error");
            if (data.success) {
                toast.success("Message sent successfully!");
            }
 
    } catch (error) {
        toast.error("Failed to send message. Please try again.");
    }
 };

  return (
    <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{once: true}}
    transition={{staggerChildren: 0.2}}
    id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      
      <Title 
        title='Reach out to us' 
        desc='Be the first to hear about upcoming releases, new website content and exclusive news.' 
      />

      <motion.form 
      initial={{opacity: 0, y: 30}}
      whileInView={{opacity: 1, y:0}}
      transition={{duration: 0.5, delay: 0.4}}
      viewport={{once: true}}
      onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>
        
        {/* Name */}
        <div>
          <p className='mb-2 text-sm font-medium'>Your Name</p>
          <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
            <img src={assets.person_icon} alt='' />
            <input 
              type='text' 
              placeholder='Enter your name' 
              className='w-full p-3 text-sm outline-none' 
              name='name'
              required 
            />
          </div>
        </div>   {/* ✅ FIXED: missing closing div */}

        {/* Email */}
        <div>
          <p className='mb-2 text-sm font-medium'>Email id</p>
          <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
            <img src={assets.email_icon} alt='' />
            <input 
              type='email' 
              placeholder='Enter your email' 
              className='w-full p-3 text-sm outline-none' 
              name='email'
              required 
            />
          </div>
        </div>

        {/* Message */}
        <div className='sm:col-span-2'>
          <p className='mb-2 text-sm font-medium'>Message</p>
          <textarea 
            rows={8} 
            placeholder='Enter your message' 
            className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600' 
            name='message'
            required
          />
        </div>

        {/* Button */}
        <button 
          type='submit' 
          className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-105 transition-all'
        >
          Submit <img src={assets.arrow_icon} alt='' className='w-4' />
        </button>

      </motion.form>
    </motion.div>
  )
}

export default ContactUs