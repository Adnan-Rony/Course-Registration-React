import React from 'react';

const Bookmark = ({selectedCourse,price,creditHour,remainingCreditHour}) => {
    return (
        <div className='bg-[#FFF] p-4 rounded-lg'>
            <h1 className='text-2xl font-bold text-blue-500'>Credit Hour Remaining :{remainingCreditHour} hr</h1>
            <hr className='my-4'/>
            <h1 className='my-5 text-3xl font-bold'>Course Name</h1>
            <hr />
            {
                selectedCourse.map((item,index)=>(
                    <li key={index} className='text-xl font-semibold list-decimal'>{item.title}</li>
                ))
            }
            <hr className='my-4 '/>
            <h1 className='text-3xl font-bold'>Total Credit Hour :{creditHour}</h1>
            <hr className='my-4' />
            <h1 className='text-3xl font-bold mt-10'>Total Price:{price} USD</h1>
            
        </div>
    );
};

export default Bookmark;