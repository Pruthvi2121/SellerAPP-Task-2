import React from "react";
import { useParams } from "react-router-dom";
import { Card } from "./Card";

export const Property = ()=>{
    const { id } = useParams();
    return <>
    <div className="flex h-screen justify-center items-center">
     <h1 className="text-black">Propterty Page ..{id}</h1>
     
    </div>

    </>
}