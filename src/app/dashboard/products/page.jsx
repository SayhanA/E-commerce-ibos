import Card from "@/Components/atoms/Card";
import Pagination from "@/Components/atoms/Pagination";
import React from "react";

const page = () => {
  return (
    <div className="container mx-auto">
      <div className=" my-20 flex">
        <div className="min-w-[250px] border-0 border-e pe-[32px] h-full">
          <ul className="flex flex-col gap-5 mt-5">
            <li className="bg-black text-white w-full px-4 py-3 rounded-[6px]">
              Roking chair
            </li>
            <li className="bg-black text-white w-full px-4 py-3 rounded-[6px]">
              Side chair
            </li>
            <li className="bg-black text-white w-full px-4 py-3 rounded-[6px]">
              Lounge chair
            </li>
          </ul>
        </div>
        <div className="px-[32px] flex flex-wrap gap-5 justify-center">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <Pagination totalPages={10} currentPage={1} className="mb-20"/>
    </div>
  );
};

export default page;
