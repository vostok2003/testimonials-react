
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'
function Card(props){
    let review =props.review;
    return(
        <div className='flex flex-col md:relative '>
            <div className=' absolute top-[-7rem] z-10 mx-auto'>
                <img 
                className='aspect-square rounded-full w-[140px] h-[140px] z-20'
                src={review.image}/>
            <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute 
                            top-[-6px] z-[-10] left-[10px] '></div>    
            </div>
            <div className='text-center mt-7'>
                <p className='font-bold text-2xl capitalize'>{review.name}</p>
            </div>
            <div className='text-center mt-7'>
                <p className='text-violet-400 uppercase text-sm'>{review.job}</p>
            </div>
            <div className='flex items-center justify-center  flex-wrap'>
                <div className='text-center text-violet-400 mx-auto mt-5'><RiDoubleQuotesL /></div>
                <div className='text-center mt-4 text-slate-500'>{review.text}</div>
                
                <div className='text-violet-400 mx-auto mt-5'><RiDoubleQuotesR /></div>
            </div>
           
        </div>)
       
}
export default Card;