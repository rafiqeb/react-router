import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData()
    const {id, body, title} = post;

    return (
        <div className="post-details">
            <h2>{id}</h2>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;