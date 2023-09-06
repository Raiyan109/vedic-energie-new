import React from 'react'

const AddOtherApplButton = ({handleClick}) => {
  return (
    <div>
         
            <button
                onClick={handleClick}
                className='w-[140px] h-[50px] bg-orange rounded-md lg:text-[15px] md:text-sm sm:text-[18px] hover:bg-yellow hover:transition-all'>Other Appliances</button>
        
    </div>
  )
}

export default AddOtherApplButton