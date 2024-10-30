import { useLoaderData } from "react-router-dom";
import Photo from "../photo/Photo";


const Photos = () => {

    const photos = useLoaderData()
    
    return (
        <div>
            <h3>Photos here: {photos.length}</h3>
            <div className="photo-container">
                {
                    photos.map(photo => <Photo key={photo.id} photo={photo}></Photo>)
                }
            </div>
        </div>
    );
};

export default Photos;