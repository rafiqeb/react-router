import { Link } from "react-router-dom";


const User = ({user}) => {
    console.log(user)
    const {id, name, phone, username, email} = user;

    return (
        <div className="card">
            <h2>{name}</h2>
            <h4>{email}</h4>
            <p>{phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;