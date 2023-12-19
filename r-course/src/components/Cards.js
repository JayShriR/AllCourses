import React, { useState } from 'react';
import Card from './Card';

const Cards = (props) => {
  let courses  = props.courses;
  let category=props.category;
    const[likedCouses,setLikeCourses]=useState([]);
  const getCourses = () => {
    if(category==="All"){
        let allCourses = [];
    Object.values(courses).forEach((array) => {
      if (Array.isArray(array)) {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      }
    });

    return allCourses;
    }
    else{
        //main sirf specific category ka data array karunga
        return courses[category];
    }
  };

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {
        getCourses().map((course) => (
          <Card key={course.id} 
          course={course} 
          likedCouses={likedCouses} 
          setLikeCourses={setLikeCourses}/>
        ))
      }
    </div>
  );
};

export default Cards;