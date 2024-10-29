import { Link } from "react-router-dom";


const Post = ({post}) => {

    const {id, body, title} = post;

    return (
        <div className="post">
            <h2>{id}</h2>
            <h3>Title: {title}</h3>
            <p>{body}</p>
            <Link to={`/post/${id}`}><button>Post Details</button></Link>
        </div>
    );
};

export default Post;