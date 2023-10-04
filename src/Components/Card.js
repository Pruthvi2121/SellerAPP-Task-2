import React from "react";

import { AiOutlineHeart } from "react-icons/ai";
import { SlCursorMove } from "react-icons/sl";
import { LiaBedSolid , LiaBathSolid} from "react-icons/lia";
import { MdOutlineLocationOn} from "react-icons/md";
import { BiBuildings } from "react-icons/bi";

export const Card = ({data}) => {
  return (
    <>
      <div className="bg-white relative  aspect-[4/5] border rounded-xl shadow-md text-gray-600">
        <div className="flex flex-col">
          <div className="mx-2 my-2 relative ">
            <img
              src="logo192.png"
              className=" w-full object-contain rounded-xl  bg-slate-400 "
              alt=""
            />
            { data.popular?(
             <div className="absolute  h-8 w-1/3 bg-[#3639E3] bottom-[-14px] left-[-16px] rounded-t rounded-r">
                  <h1 className="text-white text-center text-sm font-semibold mt-1">Popular</h1>
                  <div className="absolute bg-[#181950] h-2 w-2 bottom-[-8px] rounded-bl-full">

                  </div>
              </div>
            ):""

            }
            
           
          </div>

          <div className="absolute bg-white top-5 left-4 rounded-full px-2 py-1 flex items-center">
            <span className="text-violet-700 text-sm font-semibold ">
              {data.property_for}
            </span>
          </div>

      

          <div className="absolute bg-white top-5 right-4 rounded-full px-2 py-2">
            <span className="text-violet-700">
              {" "}
              <AiOutlineHeart />
            </span>
          </div>
          <div className="mx-4">
            <div className="flex items-center mt-4  font-semibold text-xs gap-1 ">
               <MdOutlineLocationOn className="text-gray-600" />
              <p className="">{data.location}</p>
            </div>

            <h1 className="font-bold ">{data.title}</h1>

            <div className="flex justify-between m-2 font-semibold text-sm text-gray-800">
                <div className="flex flex-col ">
                  <BiBuildings className="text-sm " />
                  <span>{data.room}</span>
                </div>
                <div className="flex flex-col ">
                  <LiaBedSolid />
                  <span>{data.bed}</span>
                </div>
                <div className="flex flex-col ">
                  <LiaBathSolid />
                  <span>{data.bath}</span>
                </div>
                <div className="flex flex-col ">
                  <SlCursorMove/>
                  <span>{data.size}</span>
                </div>
            </div>

          

            <div className="flex justify-between mx-4 items-center my-4">
              <h1 className="font-bold ">
                <span className="text-lg text-[#3639E3]">{data.rent}</span>/ month
              </h1>
              <div className="flex items-center">
              
                <button className="border border-[#3639E3] text-[#3639E3]  rounded-full font-bold e px-4 py-2">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
