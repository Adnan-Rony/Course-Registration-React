/* eslint-disable react/display-name */
/* eslint-disable no-undef */
    import React, { useEffect, useState } from 'react';
    import Bookmark from '../Bookmark/Bookmark';
    import Swal from 'sweetalert2';
    import { FaBook } from 'react-icons/fa';
   
   

    const Home = () => {

    const [course,setcourse]=useState([]);
    const [selectedCourse,setselectedCourse]=useState([]);
    const [price,setprice]=useState(0);
    const [creditHour,setcreditHour]=useState(0);
    const [remainingCreditHour,setremainingCreditHour]=useState(20)

        useEffect(()=>{

            fetch("course.json")
            .then(res=>res.json())
            .then(data=>setcourse(data))
        },[])
        
    const handleButton=(blog)=>{

        const isExist=selectedCourse.find((search)=>search.id==blog.id)

        let count=blog.price;
        let hourCount=blog.credit;
       

     

        if(isExist)
        {
             
        Swal.fire({
        icon: 'error',
        title: 'You Already selected ',
        text: '',
   
  })
  
        }
        else
        {
            // if(hourCount > 20)
            // {
            //     Swal.fire({
            //         icon: 'error',
            //         title: 'Your credit hour is over ',
            //         text: '',
               
            //   })
            // }
            // console.log(hourCount);

          



            selectedCourse.forEach((item)=>{
                count=count+item.price;
                

            })
            // console.log(count);

           

            // if(hourCount > 20)
            // {
            //     return (
            //         Swal.fire({
            //     icon: 'error',
            //     title: 'Oops...',
            //     text: 'Your credit hour is out of Range ',
               
            //     }) 
            // )
            // }


            selectedCourse.forEach((item)=>{
                hourCount=hourCount +item.credit;
            })

            const remaining=20-hourCount;

               if(hourCount > 20)
            {
                return(
                    Swal.fire({
                        icon: 'error',
                        title: 'Your credit hour is over ',
                        text: '',
                   
                  })
                )
                
            }



                console.log(hourCount);

                console.log(remaining);


                setcreditHour(hourCount);

                setremainingCreditHour(remaining)


            setprice(count)

            setselectedCourse([...selectedCourse,blog])
        }



        

    }
 console.log(selectedCourse);







    return (
        <div className='bg-[#F3F3F3]'>
                <div className='container mx-auto '>
                    <h1 className='text-4xl font-bold text-center mt-4'>Course Registration</h1>
                    <div className='flex lg:flex-row flex-col justify-center gap-5 mt-10 '>

                        <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                          {
                            course.map((card,index)=><div key={index}>

                            <div className='border-2 gap-3  w-[312px] h-full  space-y-3 p-3 rounded-xl'>
                                <img className='w-full' src={card.image} alt="" />
                                <h1 className='font-semibold text-[18px]'>{card.title}</h1>
                                <h1>{card.description}</h1>
                                <div className='flex justify-between gap-2'>
                                    <p>$  Price: {card.price}</p>
                                   
                                    <div className='flex gap-1 items-center'>
                                    <FaBook />
                                    <p>credit:{card.credit}hr</p>
                                    </div>

                                </div>
                                <button onClick={()=>handleButton(card)} className='bg-[blue] p-3 text-white rounded-lg w-full '>Select</button>

                            </div>




                            </div>)}
                          


                        </div>

                        <div >
                            <Bookmark selectedCourse={selectedCourse}
                            price={price}
                            creditHour={creditHour}
                            remainingCreditHour={remainingCreditHour}
                            >

                            </Bookmark>
                        </div>



                    </div>
                    

                </div>
        </div>
    );
};

export default Home;