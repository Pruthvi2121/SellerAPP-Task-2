import React from "react";

import {FiArrowLeft, FiArrowRight} from "react-icons/fi";

export const  Pagination = () =>{
    return <>
        <div className=" my-2 h-14 w-full text-sm flex bg-[#F1F5FC] rounded-2xl text-gray-600 ">
            <div className="flex items-center mx-2 my-3 justify-between w-full ">
              <h1 className="mx-2 font-semibold">6 from 129</h1>  
              <div className="flex gap-x-2 font-semibold">
                <span className="bg-white px-3 py-1 rounded-xl  flex items-center"><FiArrowLeft /></span>
                <span className="bg-white px-3 py-1 rounded-xl ">1</span>
                <span className="bg-white px-3 py-1 rounded-xl ">2</span>
                <span className="bg-white px-3 py-1 rounded-xl ">3</span>
                <span className="bg-white px-3 py-1 rounded-xl ">4</span>
                <span className="bg-white px-3 py-1 rounded-xl flex items-center"><FiArrowRight /></span>
              </div>
            </div>

            
        </div>
    </>
}