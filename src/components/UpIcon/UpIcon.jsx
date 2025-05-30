import React from 'react';
import { CiCircleChevUp } from "react-icons/ci";

const UpIcon = () => {
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <button className=' rounded-full size-16 bg-[#803a12] flex justify-center items-center fixed bottom-4 right-4 text-[#fff1e5] cursor-pointer z-50' 
        onClick={scrollTop}>
            <CiCircleChevUp size={48} />
        </button>
    );
};

export default UpIcon;