import React from 'react'
import { FiArrowUp } from 'react-icons/fi'

const BackToTop = () => {
  return (
    <div className='BackToTop duration-300 fixed bg-teal-600 text-white shadow-lg border w-12 h-12 flexCenter rounded-full bottom-8 right-4 '>
      <a href="#navbar"><FiArrowUp className='text-2xl'/></a>
    </div>
  )
}

export default BackToTop