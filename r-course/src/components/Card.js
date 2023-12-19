import React from 'react';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = (props) => {
  let course = props.course;
  let likedCouses=props.likedCouses;
  let setLikeCourses=props.setLikeCourses;
    function clickHander(){
        if(likedCouses.includes(course.id)){
            //pahele se like hain
            setLikeCourses((prev) => prev.filter((cid) => cid !== course.id));
            toast.warning("Like Removed");
        }
        else{
            //pahele se like nahi hain
            //insert karna hai ye course like course me
            if (likedCouses.length === 0) {
                setLikeCourses([course.id]);
            }
            else{
                setLikeCourses((prev) => [...prev, course.id]);
            }
            toast.success("Like Successfully")
        }
    }
  return (
    <div className='w-[300px] bg-bgDark rounded-md bg-opacity-80 overflow-hidden'>
      <div className='relative'>
        <img src={course.image.url} alt="" /> 
        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-11px]
        grid place-content-center '>
        <button onClick={clickHander}>
        {
            likedCouses.includes(course.id) ? 
            (<FcLike fontSize="1.75rem" />) :
            (<FcLikePlaceholder fontSize="1.75rem" />)      
        }
        </button>
      </div>
      </div>
      
      <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
        <p className='mt-2 text-white'>
            {
                course.description.length > 100 ?
                (course.description.substring(0,100))+"...":
                (course.description)
            }
        </p>
      </div>
    </div>
  );
};

export default Card;