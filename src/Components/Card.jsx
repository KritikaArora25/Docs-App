import React from 'react'
import { FaRegFileLines } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { motion } from "motion/react"

const Card = ({data, reference}) => {
  return (
   
     <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} dragElastic={0.1} dragTransition={{bounceStiffness: 100, bounceDamping: 30}} className='relative flex-shrink-0 w-45 h-53 rounded-[35px] bg-zinc-900/90 text-white px-5 py-10 overflow-hidden'>
        <FaRegFileLines/>
        <p className='text-xs leading-tighter mt-4 font-normal'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0 '>
            <div className='flex items-center justify-between py-1 px-6 mb-2 '>
                <h5 className='text-xs'>{data.filesize}</h5>
                <span className='w-5 h-5 bg-zinc-600 rounded-full flex items-center justify-center'>
                    {data.close? <IoIosClose /> : <LuDownload size="0.7em" color='#fff'/>}        
                </span>
            </div>
            {
                data.tag.isOpen && (
                    <div className={`tag w-full h-8 py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                        <h3 className='text-xs font-medium'>{data.tag.Tagtitle}</h3>
                    </div>
                ) 
            }
            
        </div>
        
     </motion.div>
     
     
  )
}

export default Card