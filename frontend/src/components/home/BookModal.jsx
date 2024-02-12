/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { AiOutlineClose } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { FaRegClock } from "react-icons/fa";
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineAddBox } from "react-icons/md";

const BookModal = ({ book, onClose }) => {
  return (
    <div 
        className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
        onClick={onClose}
    >
        <div
            onClick={(e) => e.stopPropagation()}
            className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
        >
            <AiOutlineClose  
                className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer' 
                onClick={onClose}
            />
            <h2 className='w-fit px-4 py-1 bg-red-300 rounded-lg'>
                {book.publishYear}
            </h2>
            <h4 className='my2 text-gray-500'>
                {book._id}
            </h4>
            <div className='flex justify-start items-center gap-x-2 py-1'>
                <PiBookOpenTextLight className='text-red-300 text-2xl' />
                <h2 className='my-1'>{book.title}</h2>
            </div>
            <div className='flex justify-start items-center gap-x-2 py-1'>
                <BiUserCircle className='text-red-300 text-2xl' />
                <h2 className='mx-1'>{book.author}</h2>
            </div>
            <div className='flex justify-start items-center gap-x-2 py-1'>
                <FaRegClock className='text-sky-800 text-2xl' />
                <MdOutlineAddBox className='text-sky-800 text-2xl' />
                <h2 className='mx-1'>{new Date(book.createdAt).toString()}</h2>
            </div>
            <div className='flex justify-start items-center gap-x-2 py-1'>
                <FaRegClock className='text-sky-800 text-2xl' />
                <AiOutlineEdit className='text-sky-800 text-2xl' />
                <h2 className='mx-1'>{new Date(book.updatedAt).toString()}</h2>
            </div>
        </div>
      
    </div>
  )
}

export default BookModal
