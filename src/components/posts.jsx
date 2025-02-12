import "../assets/style/post.css"

function Posts(props){
    return(
        <>
        <div className="card-post">
            <h2 className="title-post">{props.titleItem}</h2>
            <p className="body-post">{props.bodyItem}</p>
        </div>
        </>
    )
}


export default Posts;