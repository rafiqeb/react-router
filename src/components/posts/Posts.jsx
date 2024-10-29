import { useLoaderData } from "react-router-dom";
import Post from "../post/Post";


const Posts = () => {

    const posts = useLoaderData()
    
    return (
        <div>
            <h3>psots here: {posts.length}</h3>
            <div className="post-container">
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;