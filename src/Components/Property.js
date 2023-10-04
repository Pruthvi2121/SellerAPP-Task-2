import React from "react";
import { useParams } from "react-router-dom";
import { Card } from "./Card";
import { useLocation } from "react-router-dom";

export const Property = () => {
  const state = useLocation();
  const { item } = state.state;
  const { id } = useParams();

  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center">
        <h1 className="text-black">Property Page ..{id}</h1>
        
        <Card data={item} />
      </div>
    </>
  );
};
