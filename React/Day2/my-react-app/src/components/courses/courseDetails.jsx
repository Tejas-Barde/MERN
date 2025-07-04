import React, { useEffect, useState } from 'react'
import Course from './course.component'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const courseDetails = () => {
  const {id} = useParams();
  const [courseDetails,setCourseDetails] = useState()
  useEffect(()=>{
    axios.get(`http://localhost:3444/${id}`)
    .then(res=>{
      console.log(res.data)
      setCourseDetails(res.data)
    })
  },[id])
  return courseDetails?<div>Loading</div> : <Course courseDetails={courseDetails}/>
}

export default courseDetails
