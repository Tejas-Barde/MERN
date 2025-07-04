import React from "react";
import "./App.css"
// import Message from "../Message";
import ListOfCourses from "../courses/listOfCourses";
import FMessage from "../message.functional";
import Counter from "../Counter";
import Posts from "../posts";
import {BrowserRouter, Link, Route,Routes} from "react-router-dom"
import Header from "../header/header";
import CourseDetails from "../courses/courseDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" Component={ListOfCourses}/>
        <Route path="/posts" Component={Posts}/>
        <Route path="/counter" Component={Counter}/>
        <Route path="/courseDetails/:id" Component={CourseDetails}/>
      </Routes>
    </BrowserRouter>
  )
}
