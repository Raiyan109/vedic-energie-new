import React, { useState } from "react";
import { Category1 } from "../constants";
import { Category2 } from "../constants";


export default function Tipscategory() {

  return (
    <div className="bg-orange py-[100px] relative">
      <h5 className="lg:text-6xl md:text-4xl font-semibold tracking-tight text-3xl text-white text-center mb-24 capitalize">Tips that can save energy and money
      </h5>
      <div className="flex justify-center items-center">
        <button type="button" className="rounded-full px-4 mr-2 bg-blue text-white p-2 leading-none flex items-center lg:hidden md:block">
          Step 3
        </button>
      </div>

      {/* Vertical text */}
      <div class="justify-center items-center absolute -right-44 top-[270px] lg:block md:hidden hidden">
        <h1 className='transform -rotate-90 text-[#e8f4f8] w-[500px] text-[150px] font-bold uppercase vertical2'>Step 3</h1>
      </div>

      <details className="group [&_summary::-webkit-details-marker]:hidden border-[3px] bg-white border-brown my-10 lg:mx-80 md:mx-20 mx-10">

        <div className="bg-indigo">
          <ul className="list-disc not-italic font-normal text-2xl border-[3px] border-indigo leading-10 text-white ml-5 p-2 space-y-3">
            {
              Category1.map(category => (
                <li>{category.item}</li>
              ))
            }
          </ul>

        </div>
        <summary
          className="flex cursor-pointer items-center justify-between rounded-lg"
        >
          <div className="flex flex-col">
            <h3 className="w-full h-[162px] not-italic font-semibold text-2xl leading-10 pt-3 ml-[50px] -mb-20 text-indigo underline">Category 1:</h3>
            <div className="max-w-4xl pl-12 mb-2 pr-12">
              <span className="text-xs text-gray">This category can directly impact users' energy consumption if they follow it, irrespective of their current state. These are the most cost effective tips to achieve energy efficiency.</span>
            </div>
          </div>

          <span className="block group-open:hidden mr-3">
            <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.4114 49.7031V0.555394H30.562V49.7031H19.4114ZM0.41282 30.7045V19.554H49.5605V30.7045H0.41282Z" fill="#2F45B7" />
            </svg>
          </span>
          <span className="hidden group-open:block mr-3">
            <svg width="33" height="11" viewBox="0 0 33 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32.8752 0.417613V11H0.133701V0.417613H32.8752Z" fill="#2F45B7" />
            </svg>
          </span>
        </summary>
      </details>
      <details className="group [&_summary::-webkit-details-marker]:hidden border-[3px] bg-white border-brown my-10 lg:mx-80 md:mx-20 mx-10">

        <div className="bg-indigo">
          <ul className="list-disc not-italic font-normal text-2xl border-[3px] border-indigo leading-10 text-white ml-5 p-2 space-y-5">
            {Category2.map(category => (
              <div key={category.id}>
                <li>{category.item}</li>
                {category.img && <img src={category.img} alt="" />}
                {category.text && <p className="p-3">{category.text}</p>}
                {category.img2 && <img src={category.img2} alt="" />}
                {category.text2 && <p className="p-3">{category.text2}</p>}
              </div>
            ))}
          </ul>

        </div>
        <summary
          className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 text-gray-900"
        >
          <div className="flex flex-col">
            <h3 className="w-full h-[162px] not-italic font-semibold text-2xl leading-10 pt-3 ml-[50px] -mb-20 text-indigo underline">Category 2:</h3>
            <div className="max-w-4xl pl-12 mb-2 pr-12">
              <span className="text-xs text-gray">This category requires a little more effort and money from users to make them energy efficient.</span>
            </div>
          </div>

          <span className="block group-open:hidden mr-3">
            <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.4114 49.7031V0.555394H30.562V49.7031H19.4114ZM0.41282 30.7045V19.554H49.5605V30.7045H0.41282Z" fill="#2F45B7" />
            </svg>
          </span>
          <span className="hidden group-open:block mr-3">
            <svg width="33" height="11" viewBox="0 0 33 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32.8752 0.417613V11H0.133701V0.417613H32.8752Z" fill="#2F45B7" />
            </svg>
          </span>
        </summary>
      </details>
    </div>
  )
}