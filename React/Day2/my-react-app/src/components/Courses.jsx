const Courses = () => {
  const { id, title, rating, price } = this.props.courses;
  return (
    <div>
      <h1>title : {title}</h1>
      <p>id : {id}</p>
      <p>rating : {rating}</p>
      <p>price : {price}</p>
    </div>
  )
}

export default Courses
