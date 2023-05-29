import React, { useState } from "react";



export default function Tipscategory() {

  return (
    <div className="bg-orange py-[100px]">
      <h5 className="lg:text-5xl md:text-4xl font-semibold tracking-tight text-3xl text-white py-5 text-center mb-24">Tips that can save energy and money
      </h5>
      <div className="flex justify-center items-center">
        <button type="button" className="rounded-full px-4 mr-2 bg-green text-white p-2 leading-none flex items-center lg:hidden md:block">
          Step 2
        </button>
      </div>

      {/* Vertical text */}
      <div class="justify-center items-center absolute -right-44 -bottom-[3070px] lg:block md:hidden hidden">
        <h1 className='transform -rotate-90 text-[#e8f4f8] w-[500px] text-[150px] font-bold uppercase vertical2'>Step 3</h1>
      </div>

      <details className="group [&_summary::-webkit-details-marker]:hidden border-[3px] bg-white border-brown my-10 lg:mx-36 md:mx-20 mx-10">

        <div className="bg-indigo">
          <ul className="list-disc not-italic font-normal text-2xl border-[3px] border-indigo leading-10 text-white ml-5 p-2">
            <li className="p-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
            <li className="p-5">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
            <li className="p-5">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </li>
            <li className="p-5">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
          </ul>

        </div>
        <summary
          className="flex cursor-pointer items-center justify-between rounded-lg"
        >
          <h3 className="w-[1303px] h-[162px] not-italic font-semibold text-2xl leading-10 pt-[60px] ml-[50px] text-indigo underline">Category 1:</h3>

          <span className="block group-open:hidden mr-3">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <details className="group [&_summary::-webkit-details-marker]:hidden border-[3px] bg-white border-brown my-10 lg:mx-36 md:mx-20 mx-10">

        <div className="bg-indigo">
          <ul className="list-disc not-italic font-normal text-2xl border-[3px] border-indigo leading-10 text-white ml-5 p-2">
            <li className="p-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
            <li className="p-5">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
            <li className="p-5">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </li>
            <li className="p-5">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
          </ul>

        </div>
        <summary
          className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 text-gray-900"
        >
          <h3 className=" w-[1303px] h-[162px] not-italic font-semibold text-2xl leading-10 pt-[60px] ml-[50px] text-indigo underline">Category 2:</h3>

          <span className="block group-open:hidden mr-3">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <details className="group [&_summary::-webkit-details-marker]:hidden border-[3px] bg-white border-brown my-10 lg:mx-36 md:mx-20 mx-10">

        <div className="bg-indigo">
          <ul className="list-disc not-italic font-normal text-2xl border-[3px] border-indigo leading-10 text-white ml-5 p-2">
            <li className="p-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
            <li className="p-5">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
            <li className="p-5">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </li>
            <li className="p-5">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
          </ul>

        </div>
        <summary
          className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 text-gray-900"
        >
          <h3 className="w-[1303px] h-[162px] not-italic font-semibold text-2xl leading-10 pt-[60px] ml-[50px] text-indigo underline">Category 3:</h3>
          <span className="block group-open:hidden mr-3">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <details className="group [&_summary::-webkit-details-marker]:hidden border-[3px] bg-white border-brown my-10 lg:mx-36 md:mx-20 mx-10">

        <div className="bg-indigo">
          <ul className="list-disc not-italic font-normal text-2xl border-[3px] border-indigo leading-10 text-white ml-5 p-2">
            <li className="p-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
            <li className="p-5">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
            <li className="p-5">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </li>
            <li className="p-5">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
          </ul>

        </div>
        <summary
          className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 text-gray-900"
        >
          <h3 className="w-[1303px] h-[162px] not-italic font-semibold text-2xl leading-10 pt-[60px] ml-[50px] text-indigo underline">Category 4:</h3>

          <span className="block group-open:hidden mr-3">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
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