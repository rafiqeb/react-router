import { Link } from "react-router-dom";


const Photo = ({photo}) => {
    
    const {id, title, url} = photo;
    return (
        <div className="photo">
            <h2>{id}</h2>
            <img className="image" src={url} alt="" />
            <h3>Title: {title}</h3>
        </div>
    );
};

export default Photo;