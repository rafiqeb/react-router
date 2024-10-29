import { useLoaderData } from "react-router-dom";


const UserDetails = () => {

    const user = useLoaderData()
    const {name, email, phone} = user;

    return (
        <div>
            <h2>Details about user</h2>
            <h3>Name: {name}</h3>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    );
};

export default UserDetails;