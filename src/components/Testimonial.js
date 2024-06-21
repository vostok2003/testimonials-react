 import { useState } from 'react';
import Card from './Card';
 import { SlArrowRight,SlArrowLeft } from 'react-icons/sl'
function Testimonial(props){
    let reviews = props.reviews;
    const [index,setindex]=useState(0);

    function leftShiftHandler(){
        if(index-1<0){
            setindex(reviews.length-1);
        }
        else{
            setindex(index-1);
        }
    }
    function rightShiftHandler(){
        if(index+1>=reviews.length){
            setindex(0);
        }
        else{
            setindex(index+1);
        }
    }
    function supriseHandler(){
        setindex(Math.floor(Math.random() * reviews.length));
    }
    return( 
        <div className='bg-white rounded-md w-[85vw] md:w-[700px] flex flex-wrap flex-col justify-center items-center
                        mt-10 p-10 transition-all duration-700 hover:shadow-xl'>
            <Card review={reviews[index]}/>
            <div className='text-center flex justify-center items-center text-3xl mt-5 gap-3 text-violet-400 font-bold'>
                <button 
                onClick={leftShiftHandler}
                className='cursor-pointer hover:text-violet-500'>
                    <SlArrowLeft/></button>
                <button 
                onClick={rightShiftHandler}
                className='cursor-pointer hover:text-violet-500'>
                    <SlArrowRight/></button>
            </div>
            <div>
                <button 
                onClick={supriseHandler}
                className='bg-violet-400 hover:bg-violet-500 transition-all
                                    duration-200 cursor-pointer px-10 py-2 rounded-md font-bold
                                      text-white text-lg mt-5 mb-2'>
                    Suprise Me</button>
            </div>
        </div>)
}
export default Testimonial;