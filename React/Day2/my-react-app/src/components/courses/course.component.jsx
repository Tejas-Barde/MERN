import { Component, useState } from "react";

class Course extends Component {
  state = {currLikes:this.props.courseDetails.likes}
  handleLikes(){
    console.log("print")
    // this.props.courseDetails.likes++; // props are read only it doesn't change
    // this.state.currLikes++; // state are immutable
    this.setState({currLikes:this.state.currLikes+1})
  }
  render() {
    const { id, title, price,likes, rating, imageUrl, description } = this.props.courseDetails;
    const start = [];
    for (let i = 0; i < rating; i++) {
      start.push(<i key={i} className="fa-solid fa-star"></i>);
    }

    return (
      <div className="card " style={{ width: "18rem", padding: "4px", display: "flex" }}  >
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p>{start}</p>
          <p className="card-text">$ {price}</p>
          <button
            href="#"
            className="btn btn-primary"
            onClick={()=>this.handleLikes()}
            ><i className="fa-solid fa-thumbs-up">{this.state.currLikes} </i></button>
        </div>
      </div>
    )
  }
}

export default Course;