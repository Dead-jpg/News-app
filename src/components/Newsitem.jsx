import images from "../assets/images.jpeg";
const Newsitem =({title,description,src,url})=>{
    return(
       <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"

       }}>
  <img src={src?src:images} style={{height:"200px", }} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,100):"News is a global phenomenon that has been around for centuries. It has become an indispensable tool for people to keep up with the latest happenings in their lives. News is a global phenomenon that has been around for centuries. It has become an indispensable tool for people to keep up with the latest happenings in their lives."}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
    )
}
export default Newsitem;